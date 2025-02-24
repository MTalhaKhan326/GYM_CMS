import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFormData } from "./formReducer";
import { Link, useParams } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = { name, email };

    // Dispatch the action to add the form data to the store
    dispatch(addFormData(formData));

    // Reset the form fields
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Link to={`/table`}> Table page </Link>
    </div>
  );
};

export default Form;
