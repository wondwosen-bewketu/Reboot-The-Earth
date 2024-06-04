import { Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import GrainIcon from "@mui/icons-material/Grain";
import OpacityIcon from "@mui/icons-material/Opacity";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import WaterDamageIcon from "@mui/icons-material/WaterDamage";

const UserPage = () => {
  // Dummy data for weather, soil condition, climate data, crop performance
  const weatherData = {
    temperature: 25,
    humidity: 70,
    description: "Sunny",
  };

  const soilConditionData = {
    pH: 6.5,
    moisture: "Optimal",
    texture: "Loamy",
  };

  const climateData = [
    { status: "Cold weather with occasional snowfall and moderate rainfall." },
    {
      status: "Mild temperatures with occasional showers and blooming flowers.",
    },
    {
      status: "Warm temperatures with sunny days and occasional thunderstorms.",
    },
    {
      status:
        "Cooler temperatures with colorful foliage and moderate to heavy rainfall.",
    },
  ];

  const cropPerformanceData = {
    yield: "High",
    pestRisk: "Low",
    diseaseRisk: "Low",
  };

  const droughtForecast = {
    forecast1: "Moderate drought expected in the upcoming weeks.",
    forecast2: "Severe drought conditions likely to affect crop yield.",
    forecast3: "Mild drought with some risk to water supply.",
    forecast4: "Drought conditions improving with upcoming rainfall.",
  };

  const floodingDetails = {
    detail1: "Low risk of flooding.",
    detail2: "Moderate risk of flooding in low-lying areas.",
    detail3: "High risk of flooding due to heavy rainfall.",
    detail4: "Flooding risk reduced with improved drainage systems.",
  };

  return (
    <div
      className="container mx-auto py-8"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Weather */}
        <div className="bg-white p-6 rounded-lg shadow-md relative hover:shadow-lg transition-all duration-300">
          <Typography
            variant="h6"
            className="mb-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <WbSunnyIcon style={{ marginRight: 8 }} /> Weather
          </Typography>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Description: {weatherData.description}</p>
        </div>
        {/* Soil Condition */}
        <div className="bg-white p-6 rounded-lg shadow-md relative hover:shadow-lg transition-all duration-300">
          <Typography
            variant="h6"
            className="mb-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <OpacityIcon style={{ marginRight: 8 }} /> Soil Condition
          </Typography>
          <p>pH: {soilConditionData.pH}</p>
          <p>Moisture: {soilConditionData.moisture}</p>
          <p>Texture: {soilConditionData.texture}</p>
        </div>
        {/* Climate Data */}
        <div className="bg-white p-6 rounded-lg shadow-md relative hover:shadow-lg transition-all duration-300">
          <Typography
            variant="h6"
            className="mb-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <CloudQueueIcon style={{ marginRight: 8 }} /> Climate Data
          </Typography>
          {climateData.map((data, index) => (
            <div key={index} className="mb-2">
              <span>{data.status}:</span> {data.description}
            </div>
          ))}
        </div>
        {/* Drought Forecast */}
        <div className="bg-white p-6 rounded-lg shadow-md relative hover:shadow-lg transition-all duration-300">
          <Typography
            variant="h6"
            className="mb-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <ReportProblemIcon style={{ marginRight: 8 }} /> Drought Forecast
          </Typography>
          <p>{droughtForecast.forecast1}</p>
          <p>{droughtForecast.forecast2}</p>
          <p>{droughtForecast.forecast3}</p>
          <p>{droughtForecast.forecast4}</p>
        </div>
        {/* Flooding Details */}
        <div className="bg-white p-6 rounded-lg shadow-md relative hover:shadow-lg transition-all duration-300">
          <Typography
            variant="h6"
            className="mb-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <WaterDamageIcon style={{ marginRight: 8 }} /> Flooding Details
          </Typography>
          <p>{floodingDetails.detail1}</p>
          <p>{floodingDetails.detail2}</p>
          <p>{floodingDetails.detail3}</p>
          <p>{floodingDetails.detail4}</p>
        </div>
        {/* Crop Performance */}
        <div className="bg-white p-6 rounded-lg shadow-md relative hover:shadow-lg transition-all duration-300">
          <Typography
            variant="h6"
            className="mb-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <GrainIcon style={{ marginRight: 8 }} /> Crop Performance
          </Typography>
          <p>Yield: {cropPerformanceData.yield}</p>
          <p>Pest Risk: {cropPerformanceData.pestRisk}</p>
          <p>Disease Risk: {cropPerformanceData.diseaseRisk}</p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default UserPage;
