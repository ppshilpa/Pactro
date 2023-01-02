import SlideToggle from 'react-slide-toggle';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from "../../components/common/ALink";

export default function VendorList () {
    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        <li className="breadcrumb-item active" aria-current="page">Store List</li>
                    </ol>
                </div>
            </nav>

            <div className="container">
                {
                    <SlideToggle collapsed={ true }>
                        { ( { onToggle, setCollapsibleElement } ) => (
                            <>
                                <div className="toolbox toolbox-store sticky-header mobile-sticky">
                                    <div className="toolbox-left">
                                        <div className="toolbox-item d-none d-md-block">
                                            <label>Total store showing: 3</label>
                                        </div>

                                        <div className="toolbox-item toolbox-filter mr-0">
                                            <a href="#filter-form" className="btn collapsed" data-toggle="collapse" onClick={ e => { onToggle(); e.preventDefault(); } }>
                                                <svg data-name="Layer 3"
                                                    id="Layer_3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="15" x2="26" y1="9" y2="9" className="cls-1"></line>
                                                    <line x1="6" x2="9" y1="9" y2="9" className="cls-1"></line>
                                                    <line x1="23" x2="26" y1="16" y2="16" className="cls-1"></line>
                                                    <line x1="6" x2="17" y1="16" y2="16" className="cls-1"></line>
                                                    <line x1="17" x2="26" y1="23" y2="23" className="cls-1"></line>
                                                    <line x1="6" x2="11" y1="23" y2="23" className="cls-1"></line>
                                                    <path d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                                                        className="cls-2"></path>
                                                    <path d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z" className="cls-2"></path>
                                                    <path d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z" className="cls-3"></path>
                                                    <path
                                                        d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                                                        className="cls-2"></path>
                                                </svg>Filter</a>
                                        </div>
                                    </div>

                                    <div className="toolbox-item toolbox-sort">
                                        <label>Sort By:</label>

                                        <div className="select-custom">
                                            <select name="orderby" className="form-control">
                                                <option value="menu_order" selected="selected">Most Recent</option>
                                                <option value="popularity">Most Popular</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="toolbox-item layout-modes">
                                        <ALink href="/vendor/vendors" className="layout-btn btn-grid" title="Grid">
                                            <i className="icon-mode-grid"></i>
                                        </ALink>
                                        <ALink href="/vendor/vendor-list" className="layout-btn btn-list active" title="List">
                                            <i className="icon-mode-list"></i>
                                        </ALink>
                                    </div>
                                </div>

                                <div id="filter-form" className="filter-form-container" ref={ setCollapsibleElement }>
                                    <div></div>
                                    <form action="#" className="mb-2">
                                        <div className="row">
                                            <div className="input-group col-lg-7 col-xl-5">
                                                <input type="text" className="form-control" placeholder="Searcch Vendors" required />
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-primary btn-submit">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </>
                        ) }
                    </SlideToggle>
                }

                <div className="mt-2 position-relative" style={ { zIndex: '3', backgroundColor: '#fff' } } >
                    <div className="store-default store-list">
                        <div className="store-header">
                            <ALink href="#">
                                <figure>
                                    <LazyLoadImage
                                        alt="vendor"
                                        src="images/home/vendors/banner-1.jpg"
                                        width="100%"
                                        height={ 140 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>
                            </ALink>
                        </div>

                        <div className="store-content">
                            <ALink href="#">
                                <h3 className="store-title">Porto Vendor</h3>
                            </ALink>

                            <div className="ratings-container">
                                <div className="product-ratings">
                                    <span className="ratings" style={ { width: '100%' } }></span>
                                    <span className="tooltiptext tooltip-top">5</span>
                                </div>
                                <p>4.00 out of 5</p>
                            </div>

                            <p className="store-address">
                                California, United States (US)
                            </p>
                        </div>

                        <div className="store-footer">
                            <div className="seller-avatar">
                                <img src="images/home/vendors/avatar-1.jpg" alt="avatar" width="100"
                                    height="100" />
                            </div>
                            <ALink href="/vendor/vendor-store" className="btn btn-primary btn-round"></ALink>
                        </div>
                    </div>
                    <div className="store-default store-list">
                        <div className="store-header">
                            <ALink href="#">
                                <figure>
                                    <LazyLoadImage
                                        alt="vendor"
                                        src="images/home/vendors/banner-2.jpg"
                                        width="100%"
                                        height={ 140 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>
                            </ALink>
                        </div>

                        <div className="store-content">
                            <ALink href="#">
                                <h3 className="store-title">Vendor 2</h3>
                            </ALink>
                            <p className="store-address">
                                California, United States (US)
                            </p>
                        </div>

                        <div className="store-footer">
                            <div className="seller-avatar">
                                <img src="images/home/vendors/avatar-2.png" alt="avatar" width="100"
                                    height="100" />
                            </div>
                            <ALink href="/vendor/vendor-store" className="btn btn-primary btn-round"></ALink>
                        </div>
                    </div>
                    <div className="store-default store-list no-banner">
                        <div className="store-header">
                            <ALink href="#">
                                <figure>
                                    <LazyLoadImage
                                        alt="vendor"
                                        src="images/home/vendors/banner-default.png"
                                        width="100%"
                                        height={ 140 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>
                            </ALink>
                        </div>

                        <div className="store-content">
                            <ALink href="#">
                                <h3 className="store-title">Vendor 3</h3>
                            </ALink>

                            <p className="store-address">
                                United Kingdom (UK)
                            </p>
                        </div>

                        <div className="store-footer">
                            <div className="seller-avatar">
                                <img src="images/home/vendors/avatar-3.png" alt="avatar" width="100"
                                    height="100" />
                            </div>
                            <ALink href="/vendor/vendor-store" className="btn btn-primary btn-round"></ALink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-6"></div>
        </main>
    )
}