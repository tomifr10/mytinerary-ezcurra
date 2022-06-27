/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from 'react';
import '../styles/signIn.css';
import { Tab } from 'mdb-ui-kit';
import { LockClosedIcon } from '@heroicons/react/solid'

export default function SignIn() {
  return (
    <>
    <img className='foto-sing' src='https://eligecanada.com/wp-content/uploads/2020/06/vivir-en-canada-2021-oportunidades.jpg' />
    <div className='container-sign'>
            {/* <!-- Pills navs --> */}
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
            <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
            aria-controls="pills-login" aria-selected="true">Login</a>
        </li>
        <li className="nav-item" role="presentation">
            <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
            aria-controls="pills-register" aria-selected="false">Register</a>
        </li>
        </ul>
        {/* <!-- Pills navs --> */}

        {/* <!-- Pills content --> */}
        <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form>
            <div className="text-center mb-3">
                <p>Sign in with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
                </button>
            </div>

            <p className="text-center">or:</p>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" for="loginName">Email or username</label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
                <input type="password" id="loginPassword" className="form-control" />
                <label className="form-label" for="loginPassword">Password</label>
            </div>

            {/* <!-- 2 column grid layout --> */}
            <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-3 mb-md-0">
                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                    <label className="form-check-label" for="loginCheck"> Remember me </label>
                </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                {/* <!-- Simple link --> */}
                <a href="#!">Forgot password?</a>
                </div>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" class="btn btn-danger btn-block mb-4">Sign in</button>

            {/* <!-- Register buttons --> */}
            <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
            </div>
            </form>
        </div>
        <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form>
            <div className="text-center mb-3">
                <p>Sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
                </button>
            </div>

            <p className="text-center">or:</p>

            {/* <!-- Name input --> */}
            <div className="form-outline mb-4">
                <input type="text" id="registerName" className="form-control" />
                <label className="form-label" for="registerName">Name</label>
            </div>

            {/* <!-- Username input --> */}
            <div class="form-outline mb-4">
                <input type="text" id="registerUsername" class="form-control" />
                <label className="form-label" for="registerUsername">Username</label>
            </div>
            <div class="form-outline mb-4 m-auto">
                            <select class="form-select" aria-label="Default select example">
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
                <label className="form-label" for="registerUsername">Country</label>
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
                <input type="email" id="registerEmail" className="form-control" />
                <label className="form-label" for="registerEmail">Email</label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
                <input type="password" id="registerPassword" className="form-control" />
                <label className="form-label" for="registerPassword">Password</label>
            </div>

            {/* <!-- Repeat Password input --> */}
            <div className="form-outline mb-4">
                <input type="password" id="registerRepeatPassword" className="form-control" />
                <label className="form-label" for="registerRepeatPassword">Repeat password</label>
            </div>

            {/* <!-- Checkbox --> */}
            <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                aria-describedby="registerCheckHelpText" />
                <label className="form-check-label" for="registerCheck">
                I have read and agree to the terms
                </label>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-danger btn-block mb-3">Sign in</button>
            </form>
        </div>
        </div>
        {/* <!-- Pills content --> */}
    </div>
    </>
  )
}
