"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Mapa() {
  const localizacao = { lat: -23.55052, lng: -46.633308 }; // Exemplo: São Paulo

  return (
    <LoadScript googleMapsApiKey="SUA_API_KEY_AQUI">
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={localizacao}
        zoom={15}
      >
        <Marker position={localizacao} />
      </GoogleMap>
    </LoadScript>
  );
}
