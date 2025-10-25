import React, { useEffect, useRef, useState } from 'react'
import api from '../services/api'

// Location component: loads Google Maps JS API (via Vite env key) and shows college markers
export default function Location() {
  const mapRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
  // Vite exposes variables via import.meta.env.VITE_*
  // Use GOOGLE_MAPS_API_KEY in the frontend .env; do NOT fall back to a hardcoded key.
  const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY || import.meta.env.GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      setError('Google Maps API key not provided. Set GOOGLE_MAPS_API_KEY in .env.local')
      setLoading(false)
      return
    }

    // Dynamically load Google Maps JS
    const existing = document.getElementById('gmap-script')
    if (!existing) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
      script.id = 'gmap-script'
      script.async = true
      script.defer = true
      script.onload = () => initMap()
      script.onerror = () => {
        setError('Failed to load Google Maps script. Check API key and network.')
        setLoading(false)
      }
      document.body.appendChild(script)
    } else if (window.google && window.google.maps) {
      // already loaded
      initMap()
    } else {
      existing.onload = () => initMap()
    }

    async function initMap() {
      try {
        // use centralized API client (provides consistent error handling)
        let colleges = []
        try {
          const data = await api.getCollegesWithCoords()
          colleges = data.colleges || []
        } catch (fetchErr) {
          console.error('Failed to fetch colleges-with-coords', fetchErr)
          setError(`Failed to load college locations from API: ${fetchErr.message || fetchErr}`)
          setLoading(false)
          return
        }

        // default center
        const center = { lat: 17.3850, lng: 78.4867 } // Hyderabad fallback
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 7,
          center,
        })

        const bounds = new window.google.maps.LatLngBounds()

        colleges.forEach(c => {
          if (c.lat && c.lng) {
            const lat = parseFloat(c.lat)
            const lng = parseFloat(c.lng)
            if (Number.isFinite(lat) && Number.isFinite(lng)) {
              const pos = { lat, lng }
              const marker = new window.google.maps.Marker({
                position: pos,
                map,
                title: c.name,
              })

              const infowindow = new window.google.maps.InfoWindow({
                content: `<div><strong>${c.name}</strong><br/>${c.location || ''}</div>`,
              })
              marker.addListener('click', () => infowindow.open(map, marker))
              bounds.extend(pos)
            }
          }
        })

        // Fit bounds if markers exist
        if (!bounds.isEmpty()) {
          map.fitBounds(bounds)
        }

        setLoading(false)
      } catch (err) {
        console.error('Error initializing map', err)
        setError('Failed to initialize map: ' + (err.message || err))
        setLoading(false)
      }
    }

    // cleanup
    return () => {}
  }, [])

  return (
    <div>
      <h2>Location-Based Search</h2>
      {loading && <p>Loading map...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div id="map" ref={mapRef} style={{ width: '100%', height: '650px', marginTop: '1rem' }} />
    </div>
  )
}
