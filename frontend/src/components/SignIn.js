import React from "react";
import "../styles/signIn.css";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import usersActions from '../redux/actions/usersActions';
import GoogleSignIn from "./GoogleSignIn";
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const logedUser = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "form-signup"
        };
        const res = await dispatch(usersActions.signInUser(logedUser));
        console.log(res);
        if(res.data.success === true) {
            toast.success(res.data.message);
            navigate("/home")
        } else {
            toast.error(res.data.message)
        }
    };
    
    return (
        <>
      <div className="container-sign">
        <div className="form">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="logos">
                <p className="with">Log in with:</p>
                <div>
                    <GoogleSignIn/>
                </div>
                <p className="or">or:</p>
              </div>
              <div className="container-input">
                <input type="email" id="loginName" className="" />
                <label className="" for="loginName">
                  Email
                </label>
              </div>
              <div className="container-input">
                <input type="password" id="loginName" className="" />
                <label className="" for="loginName">
                  Password
                </label>
              </div>
              <button type="submit" className="submit" value="submit" onSubmit={handleSubmit}>
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
