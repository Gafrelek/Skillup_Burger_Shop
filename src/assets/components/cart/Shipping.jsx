import React, { useState } from "react";
import { Country, State } from "country-state-city";
import Popup from "reactjs-popup";

export default function Shipping() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>Street Name</label>
            <input type="text" placeholder="Enter Street Name" />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            {/* COUNTRY DROPDOWN*/}
            <label>Country</label>
            <select value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select value={selectedState} onChange={handleStateChange}>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry(selectedCountry).map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone No." />
          </div>
          {/* // Enter the code for contact */}
          <Popup
            trigger={
              <button className=" button-style link" type="button">
                Confirm Order
              </button>
            }
            position="right center">
            <div
              style={{
                color: "red",
                position: "absolute",
                top: "50%",
                right: "100%",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}>
              Order Placed
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
}
