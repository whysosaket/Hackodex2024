import React, { useEffect } from "react";
import Events from "../components/home/Events";
import Hero from "../components/home/Hero";
import axios from "axios";

const proxyUrl = import.meta.env.VITE_PROXY_URL;

const Home = () => {
  useEffect(() => {
    // Function to request authentication token
    const requestAuthToken = async () => {
      try {
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const code = url.searchParams.get("code");
        console.log("Code:", code);

        // Make a POST request to your backend to get the authentication token
        const response = await axios.post(proxyUrl, { code });
        console.log("Response data:", response.data);
        localStorage.setItem("token", response.data.token);
        // Once you have the token, you can handle it as needed (e.g., store it in localStorage)
      } catch (error) {
        console.error("Error requesting authentication token:", error);
      }
    };

    requestAuthToken();
  }, []);

  return (
    <div>
      <Hero />
      <Events />
    </div>
  );
};

export default Home;
