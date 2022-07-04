import React from "react";
import "../styles/signup.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import usersActions from '../redux/actions/usersActions';
import toast from 'react-hot-toast';
import WithGoogle from '../components/WithGoogle';
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {
            firstName: event.target[1].value,
            lastName: event.target[2].value,
            photo: event.target[3].value,
            email: event.target[4].value,
            country: event.target[5].value,
            password: event.target[6].value,
            from: "form-signup"
        };

        const res = await dispatch(usersActions.signUpUser(userData));
        console.log(res.data.message.length)
        if(res.data.from === "validator" ) {
          res.data.message.map(message => toast.error(message.message))
        } else {
          if(res.data.success) {
            toast.success(res.data.message);
            navigate("/signIn")
          } else {
            toast.error(res.data.message)
          }
        }
    console.log(userData);
  };

  const [paices, setpaices] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setpaices(response.data);
    });
  }, []);

  const paicesOrdenados = paices?.map((pais) => pais.name.common).sort();

  return (
    <>
      <div className="container-sign">
        <div className="form">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="logos">
                <p className="with">Sign up with:</p>
                {/* <LinkRoute to="/googleSignUp" className="boton"><MDBIcon icon="google" className="redes-form" /></LinkRoute> */}
                <WithGoogle/>
                <div >
                  {/* <GoogleSignUp/> */}
                  {/* <MDBIcon icon="google" className="redes-form" />
                  <MDBIcon icon="facebook" className="redes-form" /> */}
                </div>
                <p className="or">or:</p>
              </div>
              <div className="container-input">
                <input type="text" id="loginName" className="" />
                <label className="" htmlFor="loginName">
                  First Name
                </label>
              </div>
              <div className="container-input">
                <input type="text" id="loginlastName" className="" />
                <label className="" htmlFor="loginName">
                  Last Name
                </label>
              </div>
              <div className="container-input">
                <input type="text" id="loginphoto" className="" />
                <label className="" htmlFor="loginName">
                  User Photo
                </label>
              </div>
              <div className="container-input">
                <input type="email" id="loginemail" className="" />
                <label className="" htmlFor="loginName">
                  Email
                </label>
              </div>
              <div className="container-input">
                <select className="paices-form">
                  <option className="option"></option>
                  {paicesOrdenados?.map((pais, id) => (
                    <option className="option" key={id} value={pais}>
                      {pais}
                    </option>
                  ))}
                </select>
                <label className="" htmlFor="loginName">
                  Country
                </label>
              </div>
              <div className="container-input">
                <input type="password" id="loginpassword" className="" />
                <label className="" htmlFor="loginName">
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
