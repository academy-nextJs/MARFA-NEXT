// // components/Map.tsx
'use client';
import "@/app/(main)/globals.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import { useEffect } from 'react';


delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: '/leaflet/marker-icon.png',
  iconRetinaUrl: './leaflet/marker-icon-2x.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

export default function MapComponent2() {
  return (
    <MapContainer center={[35.6892, 51.3890]} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.6892, 51.3890]}>
        <Popup>
          تهران، مرکز ایران 🌍
        </Popup>
      </Marker>
    </MapContainer>
  );
}
