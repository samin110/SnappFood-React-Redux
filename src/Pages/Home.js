import axios from "axios";
import React, { useState, useEffect } from "react";
import IranMap from "../Components/IranMap/IranMap";
import Products from "../Components/Products/Products";
import Slider from "../Components/Slider/Slider";
import SnappApplication from "../Components/SnappApplication/SnappApplication";
import SnappSeller from "../Components/SnappSeller/SnappSeller";

function Home() {
  return (
    <div>
      <Slider />
      <Products />
      <SnappApplication />
      <SnappSeller />
      <IranMap />
    </div>
  );
}

export default Home;
