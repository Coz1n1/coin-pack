import { CaretRight } from "@phosphor-icons/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  price: number;
  icon: string;
  change: number;
  index: number;
  websiteURL: string;
}

export const Coin: FC<Props> = ({
  name,
  price,
  icon,
  change,
  index,
  websiteURL,
}) => {
  return (
    <div className={index % 2 ? "coin-container-odd" : "coin-container"}>
      <div className="coin-element-big">
        <div className="icon-content">
          <img src={icon} alt="" />
          <a href={websiteURL} target="_blank" rel="noreferrer">
            <CaretRight size={32} color="white" />
          </a>
          <h1 className={index % 2 ? "coin-info-odd" : "coin-info"}>{name}</h1>
        </div>
      </div>
      <div className="coin-element">
        <h1 className={index % 2 ? "coin-info-odd" : "coin-info"}>{price} $</h1>
      </div>
      <div className="coin-element">
        <h1 className={index % 2 ? "coin-info-odd" : "coin-info"}>
          <span className={change < 0 ? "red" : "green"}>{change}%</span>
        </h1>
      </div>
    </div>
  );
};
