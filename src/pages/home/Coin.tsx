import { CaretRight } from "@phosphor-icons/react";
import { FC } from "react";

interface Props {
  name: string;
  price: number;
  icon: string;
  change: number;
  index: number;
  websiteURL: string;
  marketCap: number;
}

export const Coin: FC<Props> = ({
  name,
  price,
  icon,
  change,
  index,
  websiteURL,
  marketCap,
}) => {
  return (
    <div className={index % 2 ? "coin-container-odd" : "coin-container"}>
      <div className="coin-element">
        <div className="icon-content">
          <img src={icon} alt="" className="coin-icon" />
          <a
            href={websiteURL}
            target="_blank"
            rel="noreferrer"
            className="coin-link"
          >
            <CaretRight size={34} color="#fa7268" />
            <span className={index % 2 ? "coin-info-odd" : "coin-info"}>
              {name}
            </span>
          </a>
        </div>
      </div>
      <div className="coin-element">
        <span className={index % 2 ? "coin-info-odd" : "coin-info"}>
          {price} $
        </span>
      </div>
      <div className="coin-element">
        <span className={index % 2 ? "coin-info-odd" : "coin-info"}>
          {marketCap} $
        </span>
      </div>
      <div className="coin-element">
        <span className={index % 2 ? "coin-info-odd" : "coin-info"}>
          <span className={change < 0 ? "red" : "green"}>{change}%</span>
        </span>
      </div>
    </div>
  );
};
