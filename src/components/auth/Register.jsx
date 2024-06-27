import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, getUserByEmail } from "../../services/userService";
import "./Register.css"

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    city: "",
    state: "",
    isOwner: false,
    photo: ""
  });

  const navigate = useNavigate();

  const registerNewUser = () => {
    createUser(user).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "furEverHome_user",
          JSON.stringify({
            id: createdUser.id,
            fullName: createdUser.fullName,
            email: createdUser.email,
            phoneNumber: createdUser.phoneNumber,
            city: createdUser.city,
            state: createdUser.state,
            isOwner: createdUser.isOwner,
            photo: createdUser.photo
          })
        );

        navigate("/");
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        window.alert("Account with that email address already exists");
      } else {
        registerNewUser();
      }
    });
  };

  const updateUser = (evt) => {
    const updatedUser = { ...user };
    updatedUser[evt.target.id] = evt.target.value;
    setUser(updatedUser);
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form-register" onSubmit={handleRegister}>
      <img src="./images/Logo1.png" alt="welcome" />
        <h2>Please Register</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Enter your full name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="phoneNumber"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="city"
              className="form-control"
              placeholder="City"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="state"
              className="form-control"
              placeholder="State"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="photo"
              className="form-control"
              placeholder="Photo URL"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="register-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
