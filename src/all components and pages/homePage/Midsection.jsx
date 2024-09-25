import React from "react";

const Midsection = () => {
  return (
    <>
      <div className="container mb-3 parking-rate-section">
        <div className="row">
          <h2 className="parking-option-heading">PARKING OPTIONS AND RATES!</h2>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="card-title">Outdoor Parking</h4>
                <h6 className="card-subtitle mb-2 text-muted">Rate Starting At</h6>
                <p className="card-text card-main-rate">$7.99</p>
                <p className="card-text card-sub-rate">Drive Up Rate $13.99</p>
                <button className="btn btn-danger">Reserve Now</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card mb-4">
              <div className="card-body ">
                <h4 className="card-title">Indoor Parking</h4>
                <h6 className="card-subtitle mb-2 text-muted">Rate Starting At</h6>
                <p className="card-text card-main-rate">$9.99</p>
                <p className="card-text card-sub-rate">Drive Up Rate $99.99</p>
                <button className="btn btn-danger">Reserve Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-3 parking-rate-section">
        <div className="row">
          <h2 className="parking-option-heading">Get Discount</h2>
        </div>

        <div className="row mb-4">
          <div className="col-sm-6">
            <div className="card discount-card-image mb-4">
              <img
                src="https://park2jetdenver.com/assets/images/coupons/outdoor_coupn.png"
                loading="lazy"
                className="card-img-top"
                alt="Discount card image"
              />
              <div className="card-body">
                <h5 className="card-title">Indoor Parking</h5>
                <p className="card-text">UP TO 30% OFF COUPON PARKING*</p>
                <a href="#" className="btn btn-danger">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card discount-card-image mb-4">
              <img
                src="https://park2jetdenver.com/assets/images/coupons/outdoor_coupn.png"
                loading="lazy"
                className="card-img-top"
                alt="Discount card image"
              />
              <div className="card-body">
                <h5 className="card-title">Indoor Parking</h5>
                <p className="card-text">UP TO 30% OFF COUPON PARKING*</p>
                <a href="#" className="btn btn-danger">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Midsection;
