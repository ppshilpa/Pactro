import React from 'react';

function InfoSection () {
    return (
        <div className="container">
            <div className="info-boxes-container">
                <div className="row m-0 divide-line">
                    <div className="info-box info-box-icon-left col-sm-6 col-xl-3">
                        <i className="icon-shipping text-primary"></i>

                        <div className="info-box-content">
                            <h4 className="font1 line-height-1 ls-10">FREE SHIPPING &amp; RETURN</h4>
                            <p className="font-weight-light">Free shipping on orders over $99.</p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left col-sm-6 col-xl-3">
                        <i className="icon-money text-primary"></i>

                        <div className="info-box-content">
                            <h4 className="font1 line-height-1 ls-10">MONEY BACK GUARANTEE</h4>
                            <p className="font-weight-light">100% money back guarantee</p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left col-sm-6 col-xl-3">
                        <i className="icon-support text-primary"></i>

                        <div className="info-box-content">
                            <h4 className="font1 line-height-1 ls-10">ONLINE SUPPORT 24/7</h4>
                            <p className="font-weight-light">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left col-sm-6 col-xl-3">
                        <i className="icon-secure-payment text-primary"></i>

                        <div className="info-box-content">
                            <h4 className="font1 line-height-1 ls-10">SECURE PAYMENT</h4>
                            <p className="font-weight-light">Lorem Ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo( InfoSection );