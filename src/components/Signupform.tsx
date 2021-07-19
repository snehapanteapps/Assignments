import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from "../queries/query";

function Signupform() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [signup] = useMutation(SIGNUP_MUTATION);
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log(
  //     `Name: ${firstName} ${lastName}, Email: ${email}, Password: ${password}, Phone Number: ${phonenumber}`
  //   );
  // };
  return (
    <div>
      <h3>Signup Form</h3>
      {/* <form onSubmit={handleSubmit}>
       */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup({
            variables: {
              firstname: firstName,
              lastname: lastName,
              email: email,
              password: password,
              phonenumber: phonenumber,
            },
          });
        }}
      >
        <div className="signup-form">
          <div>
            <label className="signup-firstname">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label className="signup-firstname">Last Name</label>
            <input
              className="signup-email"
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="abc@xyz.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label className="signup-password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label className="signup-phonenumber">Phone Number</label>
            <input
              type="number"
              placeholder="+44(Number)"
              value={phonenumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>

          <div>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signupform;
