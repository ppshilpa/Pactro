import React from 'react';

function TopNotice () {
    return (
        <div className="top-notice">
            <div className="container">
                <div className="notify-left flex-wrap d-flex align-items-center">
                    <h5 className="text-white">
                        <strong>10% OFF</strong>
                    </h5>

                    <div className="main-heading">
                        <h5>Use
                            <b className="text-dark pl-2">PORTO10</b> Coupon Code</h5>
                        <h6>
                            <small>* Minimal Purchase Price</small>
                        </h6>
                    </div>
                </div>

                <div className="notify-right d-block">
                    <h4>
                        <b className="text-dark">FREE NEXT DAY DELIVERY*</b>
                    </h4>
                    <h6>
                        <small>* On Business Days - On Orders Over $25</small>
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default React.memo( TopNotice );