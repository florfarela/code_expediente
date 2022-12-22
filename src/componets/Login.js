import React, { Component } from "react";
import Icon from '../img/clinica2.png';
export default class Login extends Component {
    render() {
        return (
        <div className="box">
        <center>
        <form>
        <div className="img1">
        <center>
        <img src={Icon} className="icon" alt="Icon" />
        </center>
        </div>
        <h1>Welcome to National Hospital</h1>
        <div className="form-control-space">
        <div className=" mb-3">
          <label className="form-control-text">DUI</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter DUI without dash"
          />
        </div>
        <div className="form-control-text">
          <label className="form-control-text">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        </div>
        <div className="d-grid">
          <center>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
          </center>
        </div>
      </form>
      </center>
      </div>
        );
    }
}