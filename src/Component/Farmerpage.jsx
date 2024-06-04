import { useState } from "react";
import { Button, Modal, Box, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WiDaySunny } from "react-icons/wi";
import { GiCorn } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { WiCloud } from "react-icons/wi";
import { MdReportProblem } from "react-icons/md";
import { MdOutlineFlood } from "react-icons/md";

const FarmerPage = () => {
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

  const [paymentInfo, setPaymentInfo] = useState("");
  const [open, setOpen] = useState(false);
  const [paymentProcessed, setPaymentProcessed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setPaymentProcessed(false);
  };

  const handleClose = () => {
    setOpen(false);
    setPaymentInfo("");
  };

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setPaymentProcessed(true);
      setPaymentInfo("Payment processed successfully.");
      toast.success("Payment submitted successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }, 2000);
  };

  const getFavorableCrop = () => {
    return (
      "Based on current weather and soil conditions, corn is highly recommended. " +
      "Corn thrives in temperatures around 25°C with optimal moisture levels. " +
      "Loamy soil is ideal for corn, providing the necessary nutrients. " +
      "The yield potential is high with minimal pest and disease risks. " +
      "Ensure regular watering and monitor for drought conditions. " +
      "This season, corn can be a profitable crop choice for farmers."
    );
  };

  return (
    <div className="container mx-auto py-8">
      <Typography
        variant="h3"
        className="text-center mb-8 font-bold text-gray-800"
      >
        Usefull Climatic Informations For You
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Weather */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex justify-center mb-4">
            <WiDaySunny className="text-6xl text-yellow-500" />
          </div>
          <Typography variant="h6" className="mb-2 font-semibold text-center">
            Weather
          </Typography>
          <p className="text-center">Temperature: {weatherData.temperature}°C</p>
          <p className="text-center">Humidity: {weatherData.humidity}%</p>
          <p className="text-center">Description: {weatherData.description}</p>
        </div>
        {/* Soil Condition */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex justify-center mb-4">
            <FaWater className="text-6xl text-blue-500" />
          </div>
          <Typography variant="h6" className="mb-2 font-semibold text-center">
            Soil Condition
          </Typography>
          <p className="text-center">pH: {soilConditionData.pH}</p>
          <p className="text-center">Moisture: {soilConditionData.moisture}</p>
          <p className="text-center">Texture: {soilConditionData.texture}</p>
        </div>
        {/* Climate Data */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex justify-center mb-4">
            <WiCloud className="text-6xl text-gray-500" />
          </div>
          <Typography variant="h6" className="mb-2 font-semibold text-center">
            Climate Data
          </Typography>
          {climateData.map((data, index) => (
            <div key={index} className="text-center">
              <p>{data.status}</p>
            </div>
          ))}
        </div>
        {/* Drought Forecast */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex justify-center mb-4">
            <MdReportProblem className="text-6xl text-red-500" />
          </div>
          <Typography variant="h6" className="mb-2 font-semibold text-center">
            Drought Forecast
          </Typography>
          <p className="text-center">{droughtForecast.forecast1}</p>
          <p className="text-center">{droughtForecast.forecast2}</p>
          <p className="text-center">{droughtForecast.forecast3}</p>
          <p className="text-center">{droughtForecast.forecast4}</p>
        </div>
        {/* Flooding Details */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex justify-center mb-4">
            <MdOutlineFlood  className="text-6xl text-blue-700" />
          </div>
          <Typography variant="h6" className="mb-2 font-semibold text-center">
            Flooding Details
          </Typography>
          <p className="text-center">{floodingDetails.detail1}</p>
          <p className="text-center">{floodingDetails.detail2}</p>
          <p className="text-center">{floodingDetails.detail3}</p>
          <p className="text-center">{floodingDetails.detail4}</p>
        </div>
        {/* Crop Performance */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex justify-center mb-4">
            <GiCorn className="text-6xl text-green-500" />
          </div>
          <Typography variant="h6" className="mb-2 font-semibold text-center">
            Crop Performance
          </Typography>
          <p className="text-center">Yield: {cropPerformanceData.yield}</p>
          <p className="text-center">Pest Risk: {cropPerformanceData.pestRisk}</p>
          <p className="text-center">Disease Risk: {cropPerformanceData.diseaseRisk}</p>
        </div>
      </div>

      <Button
        variant="contained"
        onClick={handleOpen}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-lg"
      >
        For more information
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white p-6 rounded-lg shadow-lg"
        >
          {!paymentProcessed ? (
            <>
              <Typography variant="h6" className="mb-2">
                For more information
              </Typography>
              <Typography variant="body1" className="mb-4">
                To get the favorable crop item, please pay $10.
              </Typography>
              <TextField
                fullWidth
                label="Enter your card number"
                value={paymentInfo}
                onChange={(e) => setPaymentInfo(e.target.value)}
                className="mb-4"
              />
              <Button
                variant="contained"
                onClick={handlePayment}
                className={`bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-lg ${loading ? "opacity-50" : ""
                  }`}
                disabled={loading}
              >
                {loading ? "Loading..." : "Pay and Get Details"}
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h6" className="mt-4 mb-2">
                Favorable Crop
              </Typography>
              <Typography variant="body1">{getFavorableCrop()}</Typography>
            </>
          )}
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default FarmerPage;
