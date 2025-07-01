import React, { useEffect, useState } from "react";
import axios from "axios";


const WeatherAndTime = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Locating...");
   

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Get user location
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      try {
        const apiKey = "4fd28f9aec22620af354cd778a2527c2"; // replace with real key
        const weatherRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
        );

        setWeather({
          temp: weatherRes.data.main.temp.toFixed(2),
          condition: weatherRes.data.weather[0].description,
        });

        setLocation(weatherRes.data.name);
      } catch (error) {
        console.error("Weather fetch error:", error);
      }
    });
  }, []);

  const formatTime = time.toLocaleTimeString();
  const formatDate = time.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
    <div className="d-flex flex-column  align-items-center">
      
      <div className="flex items-center gap-2 text-sm mb-1" style={{fontFamily:'"Poppins", sans-serif'}}>
        🕒 {formatTime} | 📅 {formatDate}
      </div>
      {weather && (
        <>
          <div className="flex items-center gap-2 text-sm mb-1" style={{fontFamily:'"Poppins", sans-serif'}}>
            🌡️ Temp: {weather.temp}°C
          </div>
          <div className="flex items-center gap-2 text-sm mb-1" style={{fontFamily:'"Poppins", sans-serif'}}>
            ☀️ {weather.condition}
          </div>
        </>
      )}
      <div className="flex items-center gap-2 text-sm" style={{fontFamily:'"Poppins", sans-serif'}}>
        🌍 {location}
      </div>
    </div>
    </>
  );
};

export default WeatherAndTime;
