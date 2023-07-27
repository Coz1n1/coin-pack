import React, { useState, ChangeEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import "./Home.css";
import { Coin } from "./Coin";
import { CommunitySection } from "./CommunitySection";
import { Footer } from "../../components/Footer";
import { Contact } from "./Contact";
import { ChartSection } from "./Chart";

export const Home = () => {
  const [value, setValue] = useState<number>(10);
  const [filter, setFilter] = useState<string>("");

  const {
    data: cryptoData,
    isLoading,
    isError,
  } = useQuery(["crypto"], () => {
    return Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (res) => {
        const result = res.data.coins;
        console.log(res.data.coins);
        return result;
      }
    );
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  const handleChange = (e: { target: { value: any } }) => {
    parseInt(e.target.value);
    setValue(e.target.value);
  };

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filtered = cryptoData.filter((coin: any) => {
    return coin.name.toLowerCase().includes(filter);
  });

  return (
    <div>
      <div className="home-start-screen" id="home">
        <div className="home-start-screen-container">
          <span className="home-start-screen-header">Coinpack</span>
          <p className="home-start-screen-paragraph">
            Place when you can find every crypto currency on the market. Try and
            join our comunity.
          </p>
          <button className="home-start-screen-button">Join Us</button>
        </div>
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
        <div className="blob-element"></div>
        <svg
          className="svg-element"
          id="visual"
          viewBox="0 0 2000 600"
          width="2000"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="0" width="2000" height="600" fill="#001220"></rect>
          <path
            d="M0 407L47.7 405.8C95.3 404.7 190.7 402.3 285.8 407.8C381 413.3 476 426.7 571.2 436C666.3 445.3 761.7 450.7 857 448C952.3 445.3 1047.7 434.7 1143 438.3C1238.3 442 1333.7 460 1428.8 457C1524 454 1619 430 1714.2 426.8C1809.3 423.7 1904.7 441.3 1952.3 450.2L2000 459L2000 601L1952.3 601C1904.7 601 1809.3 601 1714.2 601C1619 601 1524 601 1428.8 601C1333.7 601 1238.3 601 1143 601C1047.7 601 952.3 601 857 601C761.7 601 666.3 601 571.2 601C476 601 381 601 285.8 601C190.7 601 95.3 601 47.7 601L0 601Z"
            fill="#fa7268"
          ></path>
          <path
            d="M0 492L47.7 487C95.3 482 190.7 472 285.8 463.7C381 455.3 476 448.7 571.2 454.5C666.3 460.3 761.7 478.7 857 479.5C952.3 480.3 1047.7 463.7 1143 461C1238.3 458.3 1333.7 469.7 1428.8 474C1524 478.3 1619 475.7 1714.2 469.5C1809.3 463.3 1904.7 453.7 1952.3 448.8L2000 444L2000 601L1952.3 601C1904.7 601 1809.3 601 1714.2 601C1619 601 1524 601 1428.8 601C1333.7 601 1238.3 601 1143 601C1047.7 601 952.3 601 857 601C761.7 601 666.3 601 571.2 601C476 601 381 601 285.8 601C190.7 601 95.3 601 47.7 601L0 601Z"
            fill="#ef5f67"
          ></path>
          <path
            d="M0 511L47.7 513.8C95.3 516.7 190.7 522.3 285.8 518.7C381 515 476 502 571.2 500.5C666.3 499 761.7 509 857 505.8C952.3 502.7 1047.7 486.3 1143 479.7C1238.3 473 1333.7 476 1428.8 482.2C1524 488.3 1619 497.7 1714.2 498.8C1809.3 500 1904.7 493 1952.3 489.5L2000 486L2000 601L1952.3 601C1904.7 601 1809.3 601 1714.2 601C1619 601 1524 601 1428.8 601C1333.7 601 1238.3 601 1143 601C1047.7 601 952.3 601 857 601C761.7 601 666.3 601 571.2 601C476 601 381 601 285.8 601C190.7 601 95.3 601 47.7 601L0 601Z"
            fill="#e34c67"
          ></path>
          <path
            d="M0 549L47.7 548C95.3 547 190.7 545 285.8 540.8C381 536.7 476 530.3 571.2 531C666.3 531.7 761.7 539.3 857 538.5C952.3 537.7 1047.7 528.3 1143 524.3C1238.3 520.3 1333.7 521.7 1428.8 522.5C1524 523.3 1619 523.7 1714.2 527.7C1809.3 531.7 1904.7 539.3 1952.3 543.2L2000 547L2000 601L1952.3 601C1904.7 601 1809.3 601 1714.2 601C1619 601 1524 601 1428.8 601C1333.7 601 1238.3 601 1143 601C1047.7 601 952.3 601 857 601C761.7 601 666.3 601 571.2 601C476 601 381 601 285.8 601C190.7 601 95.3 601 47.7 601L0 601Z"
            fill="#d53867"
          ></path>
          <path
            d="M0 572L47.7 569.7C95.3 567.3 190.7 562.7 285.8 561.2C381 559.7 476 561.3 571.2 562.7C666.3 564 761.7 565 857 565.7C952.3 566.3 1047.7 566.7 1143 568.5C1238.3 570.3 1333.7 573.7 1428.8 570.5C1524 567.3 1619 557.7 1714.2 556C1809.3 554.3 1904.7 560.7 1952.3 563.8L2000 567L2000 601L1952.3 601C1904.7 601 1809.3 601 1714.2 601C1619 601 1524 601 1428.8 601C1333.7 601 1238.3 601 1143 601C1047.7 601 952.3 601 857 601C761.7 601 666.3 601 571.2 601C476 601 381 601 285.8 601C190.7 601 95.3 601 47.7 601L0 601Z"
            fill="#c62368"
          ></path>
        </svg>
      </div>
      <div className="svg-wrapper">
        <svg
          id="visual"
          viewBox="0 0 2000 600"
          width="2000"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="0" width="2000" height="600" fill="#001220"></rect>
          <path
            d="M0 414L33.3 390.7C66.7 367.3 133.3 320.7 200 315.3C266.7 310 333.3 346 400 357.2C466.7 368.3 533.3 354.7 600 350.2C666.7 345.7 733.3 350.3 800 346.8C866.7 343.3 933.3 331.7 1000 342.2C1066.7 352.7 1133.3 385.3 1200 392.7C1266.7 400 1333.3 382 1400 378.8C1466.7 375.7 1533.3 387.3 1600 373C1666.7 358.7 1733.3 318.3 1800 300.5C1866.7 282.7 1933.3 287.3 1966.7 289.7L2000 292L2000 0L1966.7 0C1933.3 0 1866.7 0 1800 0C1733.3 0 1666.7 0 1600 0C1533.3 0 1466.7 0 1400 0C1333.3 0 1266.7 0 1200 0C1133.3 0 1066.7 0 1000 0C933.3 0 866.7 0 800 0C733.3 0 666.7 0 600 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z"
            fill="#fa7268"
          ></path>
          <path
            d="M0 308L33.3 306.2C66.7 304.3 133.3 300.7 200 288.5C266.7 276.3 333.3 255.7 400 254.5C466.7 253.3 533.3 271.7 600 286.7C666.7 301.7 733.3 313.3 800 313.8C866.7 314.3 933.3 303.7 1000 305.3C1066.7 307 1133.3 321 1200 324.7C1266.7 328.3 1333.3 321.7 1400 309.2C1466.7 296.7 1533.3 278.3 1600 270.5C1666.7 262.7 1733.3 265.3 1800 275.7C1866.7 286 1933.3 304 1966.7 313L2000 322L2000 0L1966.7 0C1933.3 0 1866.7 0 1800 0C1733.3 0 1666.7 0 1600 0C1533.3 0 1466.7 0 1400 0C1333.3 0 1266.7 0 1200 0C1133.3 0 1066.7 0 1000 0C933.3 0 866.7 0 800 0C733.3 0 666.7 0 600 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z"
            fill="#ef5f67"
          ></path>
          <path
            d="M0 161L33.3 170.8C66.7 180.7 133.3 200.3 200 214.5C266.7 228.7 333.3 237.3 400 234.2C466.7 231 533.3 216 600 216.2C666.7 216.3 733.3 231.7 800 223.8C866.7 216 933.3 185 1000 188C1066.7 191 1133.3 228 1200 247C1266.7 266 1333.3 267 1400 265.3C1466.7 263.7 1533.3 259.3 1600 260C1666.7 260.7 1733.3 266.3 1800 251.7C1866.7 237 1933.3 202 1966.7 184.5L2000 167L2000 0L1966.7 0C1933.3 0 1866.7 0 1800 0C1733.3 0 1666.7 0 1600 0C1533.3 0 1466.7 0 1400 0C1333.3 0 1266.7 0 1200 0C1133.3 0 1066.7 0 1000 0C933.3 0 866.7 0 800 0C733.3 0 666.7 0 600 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z"
            fill="#e34c67"
          ></path>
          <path
            d="M0 200L33.3 192.3C66.7 184.7 133.3 169.3 200 168.3C266.7 167.3 333.3 180.7 400 180.2C466.7 179.7 533.3 165.3 600 158.7C666.7 152 733.3 153 800 158C866.7 163 933.3 172 1000 171.2C1066.7 170.3 1133.3 159.7 1200 145.8C1266.7 132 1333.3 115 1400 110.3C1466.7 105.7 1533.3 113.3 1600 125.8C1666.7 138.3 1733.3 155.7 1800 167.8C1866.7 180 1933.3 187 1966.7 190.5L2000 194L2000 0L1966.7 0C1933.3 0 1866.7 0 1800 0C1733.3 0 1666.7 0 1600 0C1533.3 0 1466.7 0 1400 0C1333.3 0 1266.7 0 1200 0C1133.3 0 1066.7 0 1000 0C933.3 0 866.7 0 800 0C733.3 0 666.7 0 600 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z"
            fill="#d53867"
          ></path>
          <path
            d="M0 72L33.3 75.5C66.7 79 133.3 86 200 85.2C266.7 84.3 333.3 75.7 400 72.7C466.7 69.7 533.3 72.3 600 77C666.7 81.7 733.3 88.3 800 84.2C866.7 80 933.3 65 1000 64.2C1066.7 63.3 1133.3 76.7 1200 89C1266.7 101.3 1333.3 112.7 1400 108.5C1466.7 104.3 1533.3 84.7 1600 73C1666.7 61.3 1733.3 57.7 1800 59.2C1866.7 60.7 1933.3 67.3 1966.7 70.7L2000 74L2000 0L1966.7 0C1933.3 0 1866.7 0 1800 0C1733.3 0 1666.7 0 1600 0C1533.3 0 1466.7 0 1400 0C1333.3 0 1266.7 0 1200 0C1133.3 0 1066.7 0 1000 0C933.3 0 866.7 0 800 0C733.3 0 666.7 0 600 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z"
            fill="#c62368"
          ></path>
        </svg>
      </div>
      <div className="chart-wrapper">
        <div className="chart-section" id="market">
          <ChartSection data={cryptoData} />
        </div>
      </div>
      <div>
        <div className="coins-display">
          <div className="coins-display-header">
            <div className="coins-display-top-wrapper">
              <div className="coins-display-input-wrapper">
                <input
                  type="text"
                  placeholder="Name..."
                  className="coins-display-header-input"
                  onChange={handleFilter}
                />
              </div>
              <div className="coins-display-select-wrapper">
                <label htmlFor="size-select">Size:</label>
                <select
                  name="size"
                  id="size-select"
                  className="coins-display-select"
                  onChange={handleChange}
                >
                  <option value="10" className="coins-display-select-option">
                    10
                  </option>
                  <option value="20" className="coins-display-select-option">
                    20
                  </option>
                  <option value="40" className="coins-display-select-option">
                    40
                  </option>
                  <option value="60" className="coins-display-select-option">
                    60
                  </option>
                  <option value="100" className="coins-display-select-option">
                    100
                  </option>
                </select>
              </div>
            </div>
            <div className="coins-display-description-wrapper">
              <div className="coins-display-description-header">Coin</div>
              <div className="coins-display-description-header">Price</div>
              <div className="coins-display-description-header">MarketCap</div>
              <div className="coins-display-description-header">24h change</div>
            </div>
          </div>

          {filtered.slice(0, value).map((coin: any, i: number) => (
            <Coin
              name={coin.name}
              price={Math.round(coin.price)}
              icon={coin.icon}
              change={coin.priceChange1d}
              index={i}
              websiteURL={coin.websiteUrl}
              marketCap={Math.round(coin.marketCap)}
              key={i}
            />
          ))}
        </div>
      </div>
      <CommunitySection />
      <svg
        id="visual"
        viewBox="0 0 2000 800"
        width="2000"
        height="800"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        className="contact-svg"
      >
        <rect x="0" y="0" width="2000" height="800" fill="#001220"></rect>
        <g fill="#fa7268">
          <circle r="228" cx="1731" cy="472"></circle>
          <circle r="100" cx="1093" cy="609"></circle>
          <circle r="110" cx="365" cy="653"></circle>
          <circle r="122" cx="19" cy="274"></circle>
          <circle r="153" cx="1376" cy="153"></circle>
          <circle r="111" cx="625" cy="135"></circle>
        </g>
      </svg>
      <Contact />
      <Footer />
    </div>
  );
};
