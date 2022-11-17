import React from "react";
import PrimaryButton from "../../../components/primaryButton/PrimaryButton";
import chair from "./../../../assets/images/chair.png"

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
        <img
          src={chair}
          className="w-1/2 rounded-lg shadow-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
