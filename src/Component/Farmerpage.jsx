import React, { useState } from "react";
import { Button, Modal, Box, TextField, Typography } from "@mui/material";
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
    // Simulate payment processing
    setTimeout(() => {
      // Simulate fetching drought forecast and flooding details
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
    <div
      className="container mx-auto py-8"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <Typography
        variant="h3"
        className="text-center mb-8"
        style={{ fontWeight: "bold", color: "#333" }}
      >
        User Dashboard
      </Typography>
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

      <Button
        variant="contained"
        onClick={handleOpen}
        className="mt-4"
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#388e3c")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
      >
        For more information
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
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
                style={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "8px",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#388e3c")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
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

export default UserPage;
