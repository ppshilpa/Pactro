import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from "../../components/common/ALink";
import { countTo } from '../../utils';

export default function AboutUs () {
    useEffect( () => {
        countTo();
    }, [] )

    return (
        <main className="main about-page">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="describe-section col-lg-8 offset-lg-2">
                        <div className="text-center">
                            <h2 className="title">Who we are</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="media-with-lazy">
                    <figure className="mb-0">
                        <LazyLoadImage
                            alt="About image"
                            src="images/home/about/bg-1.jpg"
                            threshold={ 500 }
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                </div>

                <div className="row mt-5">
                    <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                        <div className="row">
                            <div className="col-sm-4 count-container text-center">
                                <div className="count-wrapper">
                                    <span className="count-to" data-from="0" data-to="50" data-speed="2000"
                                        data-refresh-interval="50">50</span>+
                                </div>
                                <h4 className="count-title">Fashion Brands</h4>
                            </div>
                            <div className="col-sm-4 count-container text-center">
                                <div className="count-wrapper">
                                    <span className="count-to" data-from="0" data-to="150" data-speed="2000"
                                        data-refresh-interval="50">150</span>K+
                                </div>
                                <h4 className="count-title">Fashion Products</h4>
                            </div>
                            <div className="col-sm-4 count-container text-center">
                                <div className="count-wrapper">
                                    <span className="count-to" data-from="0" data-to="250" data-speed="2000"
                                        data-refresh-interval="50">250</span>K+
                                </div>
                                <h4 className="count-title">Regular Buyers</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="history-section">
                <div class="container">
                    <h2 class="title text-center mb-3">Our History</h2>

                    <div class="row align-items-md-stretch">
                        <div class="col-md-4">
                            <div className="media-with-lazy">
                                <figure className="mb-0">
                                    <LazyLoadImage
                                        alt="About image"
                                        src="images/home/about/view.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <Tabs className="tab-box row" selectedTabClassName="active" selectedTabPanelClassName="show active">
                                <div className="col-md-9">
                                    <div className="tab-content">
                                        <TabPanel className="tab-pane fade">
                                            <h3>2018</h3>
                                            <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse
                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane fade">
                                            <h3>2019</h3>
                                            <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse
                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane fade">
                                            <h3>2020</h3>
                                            <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse
                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane fade">
                                            <h3>2021</h3>
                                            <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse
                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                        </TabPanel>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <TabList className="nav nav-history">
                                        <Tab className="nav-item">
                                            <ALink href="#" className="nav-link">2018</ALink>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <ALink href="#" className="nav-link">2019</ALink>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <ALink href="#" className="nav-link">2020</ALink>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <ALink href="#" className="nav-link">2021</ALink>
                                        </Tab>
                                    </TabList>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}