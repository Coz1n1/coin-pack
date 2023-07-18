import { FC } from "react";

interface Props {
  name: string;
  price: number;
  icon: string;
}

export const Coin: FC<Props> = ({ name, price, icon }) => {
  return (
    <div className="coin-container">
      <h1>{name}</h1>
      <h1>{price}</h1>
      <img src={icon} alt="" />
    </div>
  );
};
