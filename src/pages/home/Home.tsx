import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import "./Home.css";
import { Coin } from "./Coin";

export const Home = () => {
  const {
    data: cryptoData,
    isLoading,
    isError,
  } = useQuery(["crypto"], () => {
    return Axios.get(
      "https://api.coinstats.app/public/v1/coins?skip=0&limit=100"
    ).then((res) => {
      const result = res.data.coins;
      console.log(res.data.coins);
      return result;
    });
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <div className="home-start-screen">
        <span className="home-start-screen-header">Coinpack</span>
        <span className="home-start-screen-coin-fast">
          <img
            src={require("../../assets/coin.png")}
            alt=""
            className="home-start-screen-coin-details"
          />
        </span>
        <span className="home-start-screen-coin-slow">
          <img
            src={require("../../assets/coin.png")}
            alt=""
            className="home-start-screen-coin-details-small"
          />
        </span>
        <span className="home-start-screen-coin-fast-second">
          <img
            src={require("../../assets/coin.png")}
            alt=""
            className="home-start-screen-coin-details"
          />
        </span>
        <span className="home-start-screen-coin-slow-second">
          <img
            src={require("../../assets/coin.png")}
            alt=""
            className="home-start-screen-coin-details-small"
          />
        </span>
      </div>
      <div className="coins-display">
        {cryptoData.map((coin: any, i: number) => (
          <Coin name={coin.name} price={coin.price} icon={coin.icon} key={i} />
        ))}
      </div>
    </div>
  );
};
