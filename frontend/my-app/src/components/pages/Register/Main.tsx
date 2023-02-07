import React from "react";
import { useState } from 'react';

const Main = () => {
    const [inputs, setInputs] = useState<any>({});

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values: any) => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event : any) => {
        event.preventDefault();
        console.log(inputs);
      };

  return (
    <div className="main bgimg">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="inputbox">
            <div>
              <label>Restaurant Name</label>
            </div>
            <div>
              <input type="text" name="restaurant_name" value={inputs.restaurant_name || ""} onChange={handleChange}/>
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Contact Name</label>
            </div>
            <div>
              <input type="text" name="contact_name" value={inputs.contact_name || ""} onChange={handleChange}/>
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Pincode</label>
            </div>
            <div>
              <input type="number" name="pincode" value={inputs.pincode || ""} onChange={handleChange}/>
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Location</label>
            </div>
            <div>
              <input type="text" name="location" value={inputs.location || ""} onChange={handleChange}/>
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Website</label>
            </div>
            <div>
              <input type="text" name="website" value={inputs.website || ""} onChange={handleChange}/>
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Phone no.</label>
            </div>
            <div>
              <input type="number" name="phone" value={inputs.phone || ""} onChange={handleChange}/>
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Daily average transactions</label>
            </div>
            <div>
              <input type="number" name="dat" value={inputs.dat || ""} onChange={handleChange}/>
            </div>
          </div>
          <div className="inputbox">
            <div>
              <input className="form-btn" type="submit" name="value" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
