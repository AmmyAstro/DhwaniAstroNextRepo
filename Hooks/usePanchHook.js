"use client";

import { useState, useMemo, useCallback } from "react";

export default function usePanchHook(defaultLat = 28.6139, defaultLon = 77.209) {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const [date, setDate] = useState(today);
  const [coords, setCoords] = useState({ lat: defaultLat, lon: defaultLon });

  const [searchText, setSearchText] = useState("New Delhi");
  const [locationName, setLocationName] = useState("New Delhi");

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userTyped, setUserTyped] = useState(false);

  // Param builder
  const getParams = useCallback(
    (customDate = date, customCoords = coords) => {
      const d = new Date(customDate);
      const now = new Date();
      return {
        day: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear(),
        lat: customCoords.lat,
        lon: customCoords.lon,
        tzone: 5.5,
        hour: now.getHours(),
        min: now.getMinutes(),
      };
    },
    [date, coords]
  );

  
  const debounce = (fn, delay = 350) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

 
  const fetchSuggestions = async (query) => {
    if (!query || query.length < 2) return setSuggestions([]);
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}&addressdetails=0&limit=5`;
      const res = await fetch(url);
      const json = await res.json();
      setSuggestions(json || []);
    } catch {
      setSuggestions([]);
    }
  };

  const debouncedSuggestions = useMemo(() => debounce(fetchSuggestions, 400), []);

  // Handlers
  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchText(val);
    setUserTyped(true);
    setShowSuggestions(true);
    debouncedSuggestions(val);
  };

  const handleSuggestionClick = (item) => {
    const lat = parseFloat(item.lat);
    const lon = parseFloat(item.lon);
    setCoords({ lat, lon });
    setSearchText(item.display_name);
    setLocationName(item.display_name);
    setShowSuggestions(false);
  };

  return {
    today,
    date,
    setDate,
    coords,
    setCoords,
    searchText,
    setSearchText,
    locationName,
    setLocationName,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    userTyped,
    setUserTyped,
    handleInputChange,
    handleSuggestionClick,
    getParams,
  };
}
