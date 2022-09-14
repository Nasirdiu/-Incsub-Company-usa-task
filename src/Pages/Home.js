import React from "react";
import "../Pages/style.css";
import img from "../img/link.png";
const Home = () => {
  return (
    <div className="body">
      <div className="nav">
        <h5>Getting Started</h5>
        <p>step 1 of 2 . .</p>
      </div>
      <div className="container">
        <div className="first">
          <div className="stripediv">
            <h3 className="title">Stripe</h3>
          </div>
        </div>
        <div className="second">
          <h3 className="h3">Connect Stripe Account</h3>
          <p>
            Client Billing requires a free stripe account.Connect your existing
            account <br /> or create a new one.
          </p>
        </div>
        <div className="fee-container">
          <div className="fee">
            <h2>Transaction Fee</h2>
            <h3>5%</h3>
          </div>
        </div>
        <div className="btn-container">
          <button className="button">Get Started</button>
        </div>
        <div>
          <div className="link-container">
            <a href="#h">Find out more about client billing</a>
            <div className="img">
              <img
                src={img}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* .......... 2and */}
      <div className="secend-container">
        <div>
        <h3>Upgrade to pay 0% transaction fee</h3>
        <p>Pay 0% transaction fee and get added benefits by upgrading your account.</p>
        </div>
        <div >
            <button  className="button-two">upgrade</button>
        </div>
      </div>
      <div className="nav">
        <h5>Getting Started</h5>
        <p>step 1 of 2 . .</p>
      </div>
      <div className="container">
        <div className="first">
          <div className="stripediv">
            <h3 className="title">Stripe</h3>
          </div>
        </div>
        <div className="second">
          <h3 className="h3">Connect Stripe Account</h3>
          <p>
            Client Billing requires a free stripe account.Connect your existing
            account <br /> or create a new one.
          </p>
        </div>
        <div className="fee-container">
          <div className="fee">
            <h2>Transaction Fee</h2>
            <h3>5%</h3>
          </div>
        </div>
        <div className="btn-container">
          <button className="button">Get Started</button>
        </div>
        <div>
          <div className="link-container">
            <a href="#h">Find out more about client billing</a>
            <div className="img">
              <img
                src={img}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
