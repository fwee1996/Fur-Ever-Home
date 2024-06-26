import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { getUserByEmail } from "../../services/userService";

export const Login = () => {
  const [email, setEmail] = useState("fiona@gmail.com");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "furEverHome_user",
          JSON.stringify({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            city: user.city,
            state: user.state,
            isOwner: user.isOwner,
            photo: user.photo
          })
        );

        navigate("/availablePets");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <main className="container-login">
      <section>
        <form className="form-login" onSubmit={handleLogin}>
          <h1>Fur-Ever-Home</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="login-btn btn-info" type="submit">
                Sign in
              </button>
            </div>
          </fieldset>
           {/* <Link to="/register" >Not a member yet?</Link> */}
          <section>
        <Link to="/register">Not a member yet?</Link>
      </section>
        </form>
      </section>
      {/* <section>
        <Link to="/register">Not a member yet?</Link>
      </section> */}
    </main>
  );
};
