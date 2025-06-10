# 🌤️ Weatherly

**Weatherly** is a web application that lets you check the weather forecast for your current location or any city in the world. It displays the current weather and a 5-day forecast with a clean and responsive interface.

---

## 🚀 Features

- 📍 Search by city or geolocation
- 📆 5-day extended forecast
- 🌡️ Minimum and maximum temperature
- 💨 Wind speed
- 💧 Humidity percentage
- 🧭 Real-time data using the OpenWeather API
- 🌐 Weather descriptions in Spanish
- 💻 Responsive design with Tailwind CSS

---

## 🧪 Technologies used

- **React** (with Vite)
- **TypeScript**
- **Tailwind CSS** (responsive design)
- **@tanstack/react-query** (data fetching and caching)
- **React Router DOM** (routing)
- **OpenWeatherMap API** (weather data)
- **date-fns** (date formatting)
- **lucide-react** (icons)
- **Geolocation API** (browser location access)
- **LocalStorage** (recent searches & favorites)

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/frcampero/weatherly.git

# Install dependencies
npm install

# Create a .env file and add your OpenWeather API key
VITE_OPENWEATHER_API_KEY=your_key_here

# Start the development server
npm run dev