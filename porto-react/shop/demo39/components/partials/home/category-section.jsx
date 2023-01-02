import React from 'react';
import Reveal from 'react-awesome-reveal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Custom Component
import ALink from '../../common/ALink';
// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes';

function CategorySection () {
    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
            <section className="product-category-tabs">
                <div className="heading mb-0">
                    <h4>FILTER BY:</h4>
                </div>

                <Tabs selectedTabClassName="active" selectedTabPanelClassName="active show">
                    <TabList className="nav nav-tabs row row-joined pb-0 border-0">
                        <Tab className="nav-item col-6 m-0 text-center">
                            <ALink href="#" className="nav-link">VARIETAL</ALink>
                        </Tab>

                        <Tab className="nav-item col-6 m-0 text-center">
                            <ALink href="#" className="nav-link">REGION</ALink>
                        </Tab>
                    </TabList>

                    <div className="tab-content">
                        <TabPanel className="tab-pane fade">
                            <div className="row">
                                <div className="col-md-3 col-6 mb-3 mb-md-0">
                                    <div className="category-info font2">
                                        <h4 className="category-info-title"><ALink href="#">Red Wine</ALink></h4>
                                        <ul className="category-info-content">
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'bordeaux-blends' } } }>Bordeaux Blends</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'cabernet-sauvignon' } } }>Cabernet Sauvignon</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'merlot' } } }>Merlot</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'pinot-noir' } } }>Pinot Noir</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'sangiovese' } } }>Sangiovese</ALink></li>
                                        </ul>
                                        <ALink href="/shop" className="view-more">VIEW ALL</ALink>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-3 mb-md-0">
                                    <div className="category-info font2">
                                        <h4 className="category-info-title"><ALink href="#">White Wine</ALink></h4>
                                        <ul className="category-info-content">
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'chardonnay' } } }>Chardonnay</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'pinot-gris' } } }>Pinot Gris/grigio</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'riesling' } } }>Riesling</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'sauvignon-blanc' } } }>Sauvignon Blanc</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'whitebordeauxblends' } } }>White Bordeaux Blends</ALink></li>
                                        </ul>
                                        <ALink href='/shop' className="view-more">VIEW ALL</ALink>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="category-info font2">
                                        <h4 className="category-info-title"><ALink href="#">Other</ALink></h4>
                                        <ul className="category-info-content">
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'champagne' } } }>Champagne</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'desert-and-fortified' } } }>Desert & Fortified</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'ros-wine' } } }>Rose Wine</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'sake' } } }>Sake</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'sparking' } } }>Sparking</ALink></li>
                                        </ul>
                                        <ALink href='/shop' className="view-more">VIEW ALL</ALink>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="category-info font2">
                                        <h4 className="category-info-title"><ALink href="#">Selection</ALink></h4>
                                        <ul className="category-info-content">
                                            <li><ALink href={ { pathname: '/shop', query: { min_price: '100', max_price: '200' } } }>From $100 to $200</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { min_price: '200', max_price: '500' } } }>From $200 to $500</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { min_price: '40', max_price: '60' } } }>From $40 to $60</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { min_price: '60', max_price: '100' } } }>From $60 to $100</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'top-sellers' } } }>Top Sellers</ALink></li>
                                        </ul>
                                        <ALink href='/shop' className="view-more">VIEW ALL</ALink>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <div className="row">
                                <div className="col-md-3 col-6 mb-3 mb-md-0">
                                    <div className="category-info font2">
                                        <h4 className="category-info-title"><ALink href="#">France</ALink></h4>
                                        <ul className="category-info-content">
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'bordeaux' } } }>Bordeaux</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'burgundy' } } }>Burgundy</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'champagne' } } }>Champagne</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'rhone' } } }>Rhone</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'woddu' } } }>Woddu</ALink></li>
                                        </ul>
                                        <ALink href='/shop' className="view-more">VIEW ALL</ALink>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-3 mb-md-0">
                                    <div className="category-info font2">
                                        <h4 className="category-info-title"><ALink href="#">Italy</ALink></h4>
                                        <ul className="category-info-content">
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'fruili-venezia-giulia' } } }>Fruili-venezia-giulia</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'piedmont' } } }>Piedmont</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'siciliy' } } }>Siciliy</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'tuscany' } } }>Tuscany</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'veneto' } } }>Veneto</ALink></li>
                                        </ul>
                                        <ALink href="/shop" className="view-more">VIEW ALL</ALink>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="category-info font2">
                                        <h4 className="category-info-title"><ALink href={ { pathname: '/shop', query: { category: 'champagne' } } }>Usa</ALink></h4>
                                        <ul className="category-info-content">
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'california' } } }>California</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'central-coast' } } }>Central Coast</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'napa-volley' } } }>Napa Volley</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'sonoma-country' } } }>Sonoma Country</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'washington' } } }>Washington</ALink></li>
                                        </ul>
                                        <ALink href="/shop" className="view-more">VIEW ALL</ALink>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="category-info font2">
                                        <h4 className="category-info-title"><ALink href={ { pathname: '/shop', query: { category: 'champagne' } } }>Country</ALink></h4>
                                        <ul className="category-info-content">
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'australia' } } }>Australia</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'austria' } } }>Austria</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'germany' } } }>Germany</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'portugal' } } }>Portugal</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'spain' } } }>Spain</ALink></li>
                                        </ul>
                                        <ALink href="/shop" className="view-more">VIEW ALL</ALink>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </section>
        </Reveal>
    );
}

export default React.memo( CategorySection );