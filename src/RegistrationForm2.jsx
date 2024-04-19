import { useState } from "react";
import "./registration.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const validateName = (name) => {
    if (!name.trim()) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };
  const validateEmail = (email) => {
    const regex = /\@/;
    if (email === "" || !email.trim()) {
      setEmailError("Email is required");
    } else if (!regex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };
  function handleName(e) {
    const name = e.target.value;
    validateName(name);
    setFormData((prevState) => ({ ...prevState, name }));
  }
  function handleEmail(e) {
    const email = e.target.value;
    validateEmail(email);
    setFormData((prevState) => ({ ...prevState, email }));
  }
  function handleNewsletter() {
    setNewsletter(!newsletter);
  }
  function handleSubmit(e) {
    e.preventDefault();
    validateName(formData.name);
    validateEmail(formData.email);
    if (!nameError && !emailError) {
      console.log(formData);
      setFormData({ name: "", email: "" });
    }
  }
  return (
    <>
      <h1>Form</h1>
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
        <div className="checkbox-group">
          <label htmlFor="newsletter">Subscribe to newsletter</label>
          <input
            type="checkbox"
            name="newsletter"
            id="newsletter"
            onClick={handleNewsletter}
            value={newsletter}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {nameError && <p>{nameError}</p>}
      {emailError && <p>{emailError}</p>}
    </>
  );
}
