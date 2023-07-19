import { FC } from "react";

interface Props {
  name: string;
  price: number;
  icon: string;
  change: number;
  index: number;
}

export const Coin: FC<Props> = ({ name, price, icon, change, index }) => {
  return (
    <div className={index % 2 ? "coin-container-odd" : "coin-container"}>
      <div className="coin-element">
        <img src={icon} alt="" />
      </div>
      <div className="coin-element">
        <h1 className={index % 2 ? "coin-info-odd" : "coin-info"}>{name}</h1>
      </div>
      <div className="coin-element">
        <h1 className={index % 2 ? "coin-info-odd" : "coin-info"}>{price}</h1>
      </div>
      <div className="coin-element">
        <h1 className={index % 2 ? "coin-info-odd" : "coin-info"}>
          24h change:
          <span className={change < 0 ? "red" : "green"}>{change}</span>
        </h1>
      </div>
    </div>
  );
};
