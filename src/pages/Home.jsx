/** @format */

import { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import distanceCal from "../utils/distanceCal";

export const Home = () => {
  const [distance, setDistance] = useState(0);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
        timeout: 1000,
      },
      watchPosition: true,
      geolocationProvider: navigator.geolocation,
      userDecisionTimeout: 5000,
    });
  console.log("called");
  const originPoint = { L1: coords?.latitude, L2: coords?.longitude };

  useEffect(() => {
    // setDistance(distanceCal());
    // setOriginPoint({ L1: coords?.latitude, L2: coords?.longitude });
  }, [coords?.latitude, coords?.longitude]);

  if (!isGeolocationAvailable) {
    return (
      <div className="p-4 text-red-500">
        Your browser does not support Geolocation.
      </div>
    );
  }

  if (!isGeolocationEnabled) {
    return (
      <div className="p-4 text-amber-600">
        Geolocation is disabled. Please enable location permissions in your
        browser settings.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Location Dashboard</h1>

      {coords ? (
        <div className="space-y-2 text-gray-600">
          <p>
            <span className="font-semibold text-gray-900">Latitude:</span>{" "}
            {coords.latitude}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Longitude:</span>{" "}
            {coords.longitude}
          </p>
          <p className="text-xs text-gray-400">
            Accuracy: ±{Math.round(coords.accuracy)} meters
          </p>

          <p>
            inital point {originPoint.L1} + {originPoint.L2}
          </p>
        </div>
      ) : (
        <p className="text-gray-500 italic">Fetching location data...</p>
      )}
    </div>
  );
};
