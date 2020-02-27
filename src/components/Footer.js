import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="card-group" style={{backgroundColor: 'grey'}}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Address</h5>
            <p className="card-text">
              <ul>
                <li>Golden State Car Care</li>
                <li>5916 Auburn Blvd</li>
                <li>Citrus Heights CA 95621</li>
                <li>Phone: 916-779-5867</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Hours of Operation</h5>
            <p className="card-text">
              <ul>
                <li>M-F 8:00AM - 5:00PM</li>
                <li>Drop Offs Are Available Starting at 7:30AM.</li>
                <li>36 Month / 36,000 Mile </li>
                <li> Warranty on All Repairs</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reviews</h5>
            <p className="card-text">
              <ul>
                <li>Golden State Car Care Customer</li>
                <li>Satisfaction Score of 99.99 % is based on</li>
                <li>207 votes and 207 reviews over 6 months</li>
                <li>Certified AutoVitals Reviews</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
