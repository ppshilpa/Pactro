import Reveal from 'react-awesome-reveal';

import ALink from '../../common/ALink';

import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function SidebarHome () {
    return (
        <aside className="sidebar-home col-lg-3 col-md-4 order-lg-first">
            <div className="side-menu-wrapper m-b-3 border-0">
                <h2 className="side-menu-title bg-primary text-white">
                    <i className="fas fa-bars"></i>Shop By Category</h2>

                <nav className="side-nav border border-top-0">
                    <ul className="menu-vertical sf-arrows">
                        <li>
                            <ALink href={ { pathname: "/shop", query: { category: "accessories-1" } } } scroll={ false }>Accessories</ALink>
                        </li>
                        <li>
                            <ALink href={ { pathname: "/shop", query: { category: "dress" } } } scroll={ false }>Dress</ALink>
                        </li>
                        <li>
                            <ALink href={ { pathname: "/shop", query: { category: "electronics" } } } scroll={ false }>Electronics</ALink>
                        </li>
                        <li>
                            <ALink href={ { pathname: "/shop", query: { category: "fashion" } } } scroll={ false }>Fashion</ALink>
                        </li>
                        <li>
                            <ALink href={ { pathname: "/shop", query: { category: "headphone-3" } } } scroll={ false }>Headphone</ALink>
                        </li>
                        <li>
                            <ALink href={ { pathname: "/shop", query: { category: "trousers-3" } } } scroll={ false }>Trousers</ALink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="feature-boxes-container">
                <div className="row mb-1">
                    <div className="col-12">
                        <Reveal keyframes={ fadeInUpShorter } triggerOnce>
                            <div className="feature-box m-b-5 mx-sm-5 mx-md-3 feature-box-simple text-center">
                                <i className="icon-earphones-alt"></i>

                                <div className="feature-box-content">
                                    <h3 className="mb-0">Customer Support</h3>
                                    <h5>Need Assistence?</h5>

                                    <p>Lorem ipsum dolor amet, consectetur.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-12">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 500 } triggerOnce>
                            <div className="feature-box m-b-5 mx-sm-5 mx-md-3 feature-box-simple text-center">
                                <i className="icon-credit-card"></i>

                                <div className="feature-box-content">
                                    <h3 className="mb-0">Secured Payment</h3>
                                    <h5>Safe &amp; Fast</h5>

                                    <p>Lorem ipsum dolor amet, consectetur.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-12">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 500 } triggerOnce>
                            <div className="feature-box m-b-5 mx-sm-5 mx-md-3 feature-box-simple text-center">
                                <i className="icon-action-undo "></i>

                                <div className="feature-box-content">
                                    <h3 className="mb-0">RETURNS</h3>
                                    <h5>Easy &amp; Free</h5>

                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </aside>
    )
}