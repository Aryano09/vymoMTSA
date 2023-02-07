import React from "react";
import { useState } from "react";
import { useNavigate} from 'react-router-dom';


const Main = () => {
  const [inputs, setInputs] = useState<any>({});
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };

async function postFormDataAsJson({ url, formData }:any) {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString,
	};

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json();
}

  const handleSubmit = async(event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    const url = "http://localhost:5000/api/users";
    try {
		const formData = new FormData(form);
		const responseData = await postFormDataAsJson({ url, formData });

		console.log({ responseData });

	} catch (error) {
		console.error(error);
	}
    alert("Form Submitted Successfully");
    navigate('/');
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
              <input
                type="text"
                name="restaurant_name"
                value={inputs.restaurant_name || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Contact Name</label>
            </div>
            <div>
              <input
                type="text"
                name="contact_name"
                value={inputs.contact_name || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Pincode</label>
            </div>
            <div>
              <input
                type="number"
                name="pincode"
                value={inputs.pincode || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Location</label>
            </div>
            <div>
              <input
                type="text"
                name="location"
                value={inputs.location || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Website</label>
            </div>
            <div>
              <input
                type="text"
                name="website"
                value={inputs.website || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Phone no.</label>
            </div>
            <div>
              <input
                type="number"
                name="phone_number"
                value={inputs.phone_number || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="inputbox">
            <div>
              <label>Daily average transactions</label>
            </div>
            <div>
              <input
                type="number"
                name="average_daily_transactions"
                value={inputs.average_daily_transactions || ""}
                onChange={handleChange}
              />
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
