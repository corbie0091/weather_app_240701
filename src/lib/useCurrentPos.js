import { useEffect, useState } from "react";

export const useCurrentPos = () => {
  const defaultLat = "35.15748237986217";
  const defaultLon = "129.06009747301636";
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, [lat, lon]);

  return {
    lat,
    lon,
  };
};
