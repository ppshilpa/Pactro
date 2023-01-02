// Import Custom Component
import ALink from "../../components/common/ALink";
import ShopSidebarOne from '../../components/partials/shop/sidebar/shop-sidebar-one';
import ProductSidebarThree from '../../components/partials/product/sidebars/sidebar-three';

export default function ForgotPassword () {
    return (
        <main className="main pb-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2cols col-lg-3 position-relative">
                        <ShopSidebarOne adClass="h-100" />
                    </div>

                    <div className="col-xl-8cols col-lg-6 col-md-8">
                        <div className="container p-0">
                            <div className="page-header">
                                <div className="container d-flex flex-column align-items-center">
                                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                                        <div className="container">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                                <li className="breadcrumb-item"><ALink href="/shop">Shop</ALink></li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    My Account
								                </li>
                                            </ol>
                                        </div>
                                    </nav>

                                    <h1>My Account</h1>
                                </div>
                            </div>

                            <div className="reset-password-container">
                                <div className="row">
                                    <div className="m-auto pr-3 pl-3">
                                        <div className="feature-box border-top-primary">
                                            <div className="feature-box-content">
                                                <form className="mb-0" action="#">
                                                    <p>
                                                        Lost your password? Please enter your
                                                        username or email address. You will receive
                                                        a link to create a new password via email.
									                </p>
                                                    <div className="form-group mb-0">
                                                        <label htmlFor="reset-email" className="font-weight-normal">Username or email</label>
                                                        <input type="email" className="form-control" id="reset-email" name="reset-email"
                                                            required />
                                                    </div>

                                                    <div className="form-footer mb-0">
                                                        <ALink href="/pages/login">Click here to login</ALink>

                                                        <button type="submit"
                                                            className="btn btn-md btn-primary form-footer-right font-weight-normal text-transform-none mr-0">
                                                            Reset Password
										                </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-2cols col-lg-3 col-md-4">
                        <ProductSidebarThree />
                    </div>
                </div>
            </div>
        </main>
    )
}