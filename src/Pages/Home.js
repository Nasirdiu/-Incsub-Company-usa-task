import React from "react";
import "../Pages/style.css";
import img from "../img/link.png";
const Home = () => {
  return (
    <div>
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
        {/* .......... 3and */}
        <div className="nav">
        <h5>Getting Started</h5>
        <p>step 2 of 2 . .</p>
      </div>
      <div className="container">
        <p>Back</p>
        <div className="first">
          <div >
            <h3 >Choose Billing Currency</h3>
          </div>
        </div>
        <div className="second">
          
          <p>
          Select the currency you want to use to bill your clients.
          </p>
        </div>
        <div className="fee-container">
          <div className="fee-container-three">
            <p>Note: Billing currency cannot be changed in the future. Please make sure you select the correct currency.</p>
            
          </div>
        </div>
        <div className="fee-container">
          <div className="fee">
            <h5>USD - United States Dollars</h5>
            
          </div> 
          
        </div>
        <div className="cheekbox">
            <p><input type="checkbox" name="cheekbox" id="" /></p>
            <p>I am aware that I cannot change currency later</p>
          </div>
        <div className="btn-container-three">
          <button className="button-three">Finish Setup</button>
        </div>
        
      </div>
      

    </div>
    <div className="side-stripe">
    <p>Stripe account connected <br /> successfully! <br />
<span >A SECOND AGO</span></p>
    </div>
    {/* step 4 */}
    <div className="body">
    <div className="nav">
        <h5>Getting Started</h5>
        <p>step 2 of 2 . .</p>
      </div>
      <div className="container">
        <p>Back</p>
        <div className="first">
          <div >
            <h3 >Choose Billing Currency</h3>
          </div>
        </div>
        <div className="second">
          
          <p>
          Select the currency you want to use to bill your clients.
          </p>
        </div>
        <div className="fee-container">
          <div className="fee-container-three">
            <p>Note: Billing currency cannot be changed in the future. Please make sure you select the correct currency.</p>
            
          </div>
        </div>
        <div className="fee-container">
          <div className="fee">
            <h5>USD - United States Dollars</h5>
            
          </div> 
          
        </div>
        <div className="cheekbox">
            <p><input type="checkbox" name="cheekbox" id="" /></p>
            <p>I am aware that I cannot change currency later</p>
          </div>
        <div className="btn-container-three">
          <button className="button-four">Finish Setup</button>
        </div>
        
      </div>
    </div>
    {/* step 5 */}
    <div className="body">
  
      <div class="nav-container">
            
            <ul class="menu">
                <li><a href="">Overview</a></li>
                <li><a href="">Clients</a></li>
                <li><a href="">Products & Services</a></li>
                <li><a href="">Invoices</a></li>
                <li><i class="fas fa-search"></i></li>
                <li><i class="fas fa-shopping-cart"></i></li>

            </ul>
            <div class="nav-text">
                <h5>Configure </h5>
            </div>
        </div>
      <div className="container">
      <div className="loading"><span class="loader"></span></div>
        <div className="first">
          <div >
            <h1 >Importing Stripe Configurations</h1>
          </div>
        </div>
        
        <div className="second">
          
          <p>
          Please wait while we are importing your Stripe configurations. It will only <br /> take a few seconds…
          </p>
        </div>
        
    
        
      </div>
    </div>
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
         
        </div>
        <div className="fee-container">
          <div className="fee">
            <p>name Stripe Account <br /> email</p>
            <p>Connected </p>
          </div>
        </div>
        <div className="btn-container-three">
          <button className="button-four">Continue</button>
        </div>
        <div>
          
        </div>
      </div>
</div>
    </div>
  );
};

export default Home;
