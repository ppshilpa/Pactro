import React from 'react';
import SlideToggle from 'react-slide-toggle';

// Import Custom Component
import ALink from '../../../common/ALink';
import Accordion from '../../../features/accordion/accordion';

function SingleTabThree ( props ) {
    const { product, adClass = '' } = props;

    function activeHandler ( e ) {
        e.preventDefault();
        document.querySelector( '.add-product-review .active' ) && document.querySelector( '.add-product-review .active' ).classList.remove( 'active' );
        e.currentTarget.classList.add( 'active' );
    }

    return (
        <>
            <div className="skel-pro-tabs"></div>
            {
                product &&
                <Accordion adClass={ `product-single-collapse ${adClass}` }>
                    <SlideToggle collapsed={ false }>
                        {
                            ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className="product-collapse-panel">
                                    <h3 className="product-collapse-title" onClick={ onToggle }>
                                        <ALink href="#" className={ `toggle-button ${toggleState.toLowerCase()}` }>Description</ALink>
                                    </h3>
                                    <div className="product-collapse-body" ref={ setCollapsibleElement }>
                                        <div className="collapse-body-wrapper pl-0">
                                            <div className="product-desc-content">
                                                <p>{ product && product.short_description }</p>
                                                <ul>
                                                    <li>Any Product types that You want - Simple, Configurable</li>
                                                    <li>Downloadable/Digital Products, Virtual Products</li>
                                                    <li>Inventory Management with Backordered items</li>
                                                </ul>
                                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SlideToggle>

                    <SlideToggle collapsed={ true } >
                        {
                            ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className="product-collapse-panel">
                                    <h3 className="product-collapse-title" onClick={ onToggle }>
                                        <ALink className={ `toggle-button ${toggleState.toLowerCase()}` } href="#">Additional Information</ALink>
                                    </h3>
                                    <div className="product-collapse-body" ref={ setCollapsibleElement }>
                                        <div className="collapse-body-wrapper pl-0">
                                            <table className="table table-striped mt-2">
                                                <tbody>
                                                    <tr>
                                                        <th>Game Type</th>
                                                        <td>Offline, Online</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SlideToggle>

                    <SlideToggle collapsed={ true } >
                        {
                            ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className="product-collapse-panel">
                                    <h3 className="product-collapse-title" onClick={ onToggle }>
                                        <ALink className={ `toggle-button ${toggleState.toLowerCase()}` } href="#">Reviews ({ product.reviews })</ALink>
                                    </h3>

                                    <div className="product-collapse-body" ref={ setCollapsibleElement }>
                                        <div className="collapse-body-wrapper pl-0">
                                            <div className="product-reviews-content">
                                                {
                                                    product.reviews !== 0 ?
                                                        <>
                                                            <h3 className="reviews-title">1 review for Men Black Sports Shoes</h3>

                                                            <div className="comment-list">
                                                                <div className="comments">
                                                                    <figure className="img-thumbnail">
                                                                        <img src="images/blog/author.jpg" alt="author" width="80"
                                                                            className="80" />
                                                                    </figure>

                                                                    <div className="comment-block">
                                                                        <div className="comment-header">
                                                                            <div className="comment-arrow"></div>

                                                                            <div className="ratings-container float-sm-right">
                                                                                <div className="product-ratings">
                                                                                    <span className="ratings" style={ { width: `${20 * product.ratings}%` } }></span>
                                                                                    <span className="tooltiptext tooltip-top">{ product.ratings.toFixed( 2 ) }</span>
                                                                                </div>
                                                                            </div>

                                                                            <span className="comment-by">
                                                                                <strong>Joe Doe</strong> – April 12, 2018
                                                        </span>
                                                                        </div>

                                                                        <div className="comment-content">
                                                                            <p>Excellent.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                        :
                                                        <>
                                                            <h3 className="reviews-title">Review</h3>
                                                            <p>There are no reviews yet.</p>
                                                        </>
                                                }

                                                <div className="divider"></div>

                                                <div className="add-product-review">
                                                    <div className="add-product-review">
                                                        <h3 className="review-title">Add a review</h3>

                                                        <form action="#" className="comment-form m-0">
                                                            <div className="rating-form">
                                                                <label htmlFor="rating">Your rating <span className="required">*</span></label>
                                                                <span className="rating-stars">
                                                                    <a className="star-1" href="#" onClick={ activeHandler }>1</a>
                                                                    <a className="star-2" href="#" onClick={ activeHandler }>2</a>
                                                                    <a className="star-3" href="#" onClick={ activeHandler }>3</a>
                                                                    <a className="star-4" href="#" onClick={ activeHandler }>4</a>
                                                                    <a className="star-5" href="#" onClick={ activeHandler }>5</a>
                                                                </span>
                                                            </div>

                                                            <div className="form-group">
                                                                <label>Your review <span className="required">*</span></label>
                                                                <textarea cols="5" rows="6" className="form-control form-control-sm"></textarea>
                                                            </div>


                                                            <div className="row">
                                                                <div className="col-md-6 col-xl-12">
                                                                    <div className="form-group">
                                                                        <label>Name <span className="required">*</span></label>
                                                                        <input type="text" className="form-control form-control-sm" required />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 col-xl-12">
                                                                    <div className="form-group">
                                                                        <label>Email <span className="required">*</span></label>
                                                                        <input type="text" className="form-control form-control-sm" required />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input"
                                                                            id="save-name" />
                                                                        <label className="custom-control-label mb-0" htmlFor="save-name">Save my
                                                                        name, email, and website in this browser for the next time I
														comment.</label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <input type="submit" className="btn btn-primary" value="Submit" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SlideToggle>
                </Accordion>
            }
        </>
    )
}

export default SingleTabThree;


