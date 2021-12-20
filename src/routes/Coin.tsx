import React from "react";
import { useParams } from "react-router";

interface RouteParams {
  coinId?: string;
}

const Coin: React.FC = () => {
  const { coinId } = useParams() as RouteParams;

  return <h1>Coin: {coinId}</h1>;
};

export default Coin;
