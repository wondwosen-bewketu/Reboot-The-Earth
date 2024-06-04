import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom"; // Import useHistory hook

const borena = {
  lat: 4.90521907547366,
  lng: 38.15453052520753,
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory(); // Initialize useHistory

  const addMarker = (e) => {
    const newMarker = {
      lat: e.latlng.lat,
      lng: e.latlng.lng,
    };

    console.log("newmarker: ", newMarker);

    const distance = calculateDistance(
      borena.lat,
      borena.lng,
      newMarker.lat,
      newMarker.lng
    );
    console.log("distance: ", distance);

    if (distance <= 10) {
      setIsModalOpen(true);
    }

    setMarkers((current) => [...current, newMarker]);
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: addMarker,
    });
    return null;
  };

  const navigateToFarmer = () => {
    history.push("/farmer");
  };
  return (
    <div>
      <MapContainer
        center={[9.145, 40.489673]}
        zoom={6}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {markers.map((marker, idx) => (
          <Marker
            key={idx}
            position={[marker.lat, marker.lng]}
            onClick={navigateToFarmer}
          >
            <Popup>
              A new marker at ({marker.lat}, {marker.lng})
            </Popup>
          </Marker>
        ))}
        <MapClickHandler />
      </MapContainer>

      <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}>
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
          Hello
        </ModalHeader>
        <ModalBody>You placed a marker within 10 km of Borena.</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MapComponent;
