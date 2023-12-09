import React from "react";
import * as ReactDOM from "react-dom";
import myData from "./data.json";

//data is an object type
const data = myData.restaurants;
const Header = () => {
  return (
    <div className="header">
      <div className="image">
        <img
          src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"
          alt=""
        />
      </div>

      <div className="items">
        <ul>
          <li>Home </li>
          <li>About </li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};
const Search = () => {
  return (
    <div
      className="search-div"
      style={{ width: "150px", height: "50px", display: "flex" }}
    >
      <input type="text" />
      <button>Search</button>
    </div>
  );
};

const Card = (props) => {
  const { resData } = props;
  console.log(resData.info.name);
  return (
    <div className="card">
      <div className="restro-image">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
          alt=""
        />
      </div>
      <div className="info">
        <h1>{resData.info.name}</h1>
        <div className="rating  ">
          <h3>Rating: {resData.info.avgRating}</h3>
          <h3>Time :{resData.info.sla.deliveryTime} Mins</h3>
        </div>
        <div className="cusines">
          <p>{resData.info.cuisines.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

const Restro = () => {
  return (
    <div className="restro">
      {/* //use map funtion herre  */}

      {data.map((restro) => (
        <Card resData={restro} />
      ))}
    </div>
  );
};
const Body = () => {
  return (
    <>
      <Search />
      <Restro />
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
