import { useState } from "react";
import "./App.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const validateName = (name) => {
    if (!name.trim()) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };
  const validateEmail = (email) => {
    const regex = /\@/
    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!regex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };
  const handleName = (e) => {
    const name = e.target.value;
    setFormData((prevState) => ({ ...prevState, name }));
    validateName(name);
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    setFormData((prevState) => ({ ...prevState, email }));
    validateEmail(email);
  };
  function handleSubmit(e) {
    e.preventDefault();
    validateName(formData.name);
    validateEmail(formData.email);
    if (!nameError && !emailError) {
      console.log(formData);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          placeholder="name"
          onChange={handleName}
          value={formData.name}
        />
        <input
          type="text"
          placeholder="email"
          onChange={handleEmail}
          value={formData.email}
        />
        <button type="submit">Login</button>
      </form>
      {nameError && <p>{nameError}</p>}
      {emailError && <p>{emailError}</p>}
    </>
  );
}
