import React, { useEffect, useState } from "react";

import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';

import marker from '../img/marker.svg';
import '../styles/pages/orphanages-map.css'
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={marker} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>
            Muitas crianças estão esperando a sua visita :)
          </p>
        </header>

        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>
      <Map
        center={[-23.4832327, -46.4912474]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`} />
        {orphanages.map(orphanage => (
          <Marker
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
            key={orphanage.id}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              {orphanage.name}
            <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}