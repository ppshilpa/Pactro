import ALink from "../../../common/ALink";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useRouter } from "next/router";

export default function ShopSidebarThree ( props ) {
    const { type, adClass = "" } = props;

    return (
        <div className={ `category-list ${adClass}` } id="category-list">
            <ul className="nav category-list-nav">
                <li className="nav-item green">
                    {
                        type == 1 ?
                            <AnchorLink href="#cat-1" className="nav-link cat-one">
                                <span className="cat-list-icon"><i className="icon-cat-shirt"></i></span>
                                <span className="cat-list-text">Fashion &amp; Clothes</span>
                            </AnchorLink>
                            :
                            <ALink href={ { pathname: '/shop', query: { category: 'fashion-and-clothes' } } } className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-shirt"></i></span>
                                <span className="cat-list-text">Fashion &amp; Clothes</span>
                            </ALink>
                    }
                </li>
                <li className="nav-item orange">
                    {
                        type == 1 ?
                            <AnchorLink href="#cat-2" className="nav-link cat-two">
                                <span className="cat-list-icon"><i className="icon-cat-computer"></i></span>
                                <span className="cat-list-text">Electronics &amp; Computers</span>
                            </AnchorLink>
                            :
                            <ALink href={ { pathname: '/shop', query: { category: 'electronics-and-computers' } } } className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-computer"></i></span>
                                <span className="cat-list-text">Electronics &amp; Computers</span>
                            </ALink>
                    }
                </li>
                <li className="nav-item green">
                    {
                        type == 1 ?
                            <AnchorLink href="#cat-3" className="nav-link cat-three">
                                <span className="cat-list-icon"><i className="icon-cat-toys"></i></span>
                                <span className="cat-list-text">Toys &amp; Hobbies</span>
                            </AnchorLink>
                            :
                            <ALink href={ { pathname: '/shop', query: { category: 'toys-and-games' } } } className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-toys"></i></span>
                                <span className="cat-list-text">Toys &amp; Hobbies</span>
                            </ALink>
                    }
                </li>
                <li className="nav-item yellow">
                    {
                        type == 1 ?
                            <AnchorLink href="#cat-4" className="nav-link  cat-four">
                                <span className="cat-list-icon"><i className="icon-cat-garden"></i></span>
                                <span className="cat-list-text">Home &amp; Garden</span>
                            </AnchorLink>
                            :
                            <ALink href={ { pathname: '/shop', query: { category: 'home-and-garden' } } } className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-garden"></i></span>
                                <span className="cat-list-text">Home &amp; Garden</span>
                            </ALink>
                    }
                </li>
                <li className="nav-item gray">
                    {
                        type == 1 ?
                            <AnchorLink href="#cat-5" className="nav-link cat-five">
                                <span className="cat-list-icon"><i className="icon-cat-sport"></i></span>
                                <span className="cat-list-text">Sports &amp; Fitness</span>
                            </AnchorLink>
                            :
                            <ALink href={ { pathname: '/shop', query: { category: 'sports-and-fitness' } } } className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-sport"></i></span>
                                <span className="cat-list-text">Sports &amp; Fitness</span>
                            </ALink>
                    }
                </li>
                <li className="nav-item lightblue">
                    {
                        type == 1 ?
                            <AnchorLink href="#cat-6" className="nav-link cat-six">
                                <span className="cat-list-icon"><i className="icon-cat-gift"></i></span>
                                <span className="cat-list-text">Gifts</span>
                            </AnchorLink>
                            :
                            <ALink href={ { pathname: '/shop', query: { category: 'gifts-and-gadgets' } } } className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-gift"></i></span>
                                <span className="cat-list-text">Gifts</span>
                            </ALink>
                    }
                </li>
            </ul>
        </div>
    )
}