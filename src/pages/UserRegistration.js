import React from 'react'
import { useState } from 'react'
import axios from 'axios'


export default function UserRegistration() {

    const [formData, SetFormData] = useState({});

    const changeHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        SetFormData((val)=>({...val, [name]:value})) // spread operator, scope regulation, call back function. have to be clear
    }
    console.log(formData);
   // formData.password == formData.confirmpassword

    const submitHandler = (e) =>{
        e.preventDefault();

        if(formData.password != formData.confirmpassword){
            alert("Password doesn't match");
        } else {
            axios.post("http://localhost:8080/registration", formData).then(
                (res)=>{  // call back
                    console.log(res.data)
                }
            )
        }

    }


  return (
    <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>Harmic - Login | Register</title>
  <meta name="robots" content="noindex, follow" />
  <meta name="description" content />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Favicon */}
  <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico" />
  {/* CSS
    ============================================ */}
  {/* Vendor CSS (Contain Bootstrap, Icon Fonts) */}
  <link rel="stylesheet" href="assets/css/vendor/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/vendor/Pe-icon-7-stroke.css" />
  {/* Plugin CSS (Global Plugins Files) */}
  <link rel="stylesheet" href="assets/css/plugins/animate.min.css" />
  <link rel="stylesheet" href="assets/css/plugins/jquery-ui.min.css" />
  <link rel="stylesheet" href="assets/css/plugins/swiper-bundle.min.css" />
  <link rel="stylesheet" href="assets/css/plugins/nice-select.css" />
  <link rel="stylesheet" href="assets/css/plugins/magnific-popup.min.css" />
  {/* Style CSS */}
  <link rel="stylesheet" href="assets/css/style.css" />
  <div className="main-wrapper">
    {/* Begin Main Header Area */}
    <header className="main-header_area position-relative">
      <div className="header-top border-bottom d-none d-md-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="header-top-left">
                <ul className="dropdown-wrap text-matterhorn">
                  <li className="dropdown">
                    <button className="btn btn-link dropdown-toggle ht-btn" type="button" id="languageButton" data-bs-toggle="dropdown" aria-expanded="false">
                      English
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="languageButton">
                      <li><a className="dropdown-item" href="#">French</a></li>
                      <li><a className="dropdown-item" href="#">Italian</a></li>
                      <li><a className="dropdown-item" href="#">Spanish</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <button className="btn btn-link dropdown-toggle ht-btn" type="button" id="currencyButton" data-bs-toggle="dropdown" aria-expanded="false">
                      USD
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="currencyButton">
                      <li><a className="dropdown-item" href="#">GBP</a></li>
                      <li><a className="dropdown-item" href="#">ISO</a></li>
                    </ul>
                  </li>
                  <li>
                    Call Us
                    <a href="tel://3965410">3965410</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="header-top-right text-matterhorn">
                <p className="shipping mb-0">Free delivery on order over <span>$200</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="header-middle-wrap">
                <a href="index.html" className="header-logo">
                  <img src="assets/images/logo/dark.png" alt="Header Logo" />
                </a>
                <div className="header-search-area d-none d-lg-block">
                  <form action="#" className="header-searchbox">
                    <select className="nice-select select-search-category wide">
                      <option value="all">All Category</option>
                      <option value="product-item">Product Item</option>
                      <option value="product-item-2">Product Item 02</option>
                      <option value="product-item-3">Product Item 03</option>
                      <option value="product-item-4">Product Item 04</option>
                      <option value="product-item-5">Product Item 05</option>
                    </select>
                    <input className="input-field" type="text" placeholder="Search Products" />
                    <button className="btn btn-outline-whisper btn-primary-hover" type="submit"><i className="pe-7s-search" /></button>
                  </form>
                </div>
                <div className="header-right">
                  <ul>
                    <li className="dropdown d-none d-md-block">
                      <button className="btn btn-link dropdown-toggle ht-btn p-0" type="button" id="settingButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="pe-7s-users" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="settingButton">
                        <li><a className="dropdown-item" href="my-account.html">My account</a></li>
                        <li><a className="dropdown-item" href="login-register.html">Login | Register</a></li>
                      </ul>
                    </li>
                    <li className="d-none d-md-block">
                      <a href="wishlist.html">
                        <i className="pe-7s-like" />
                      </a>
                    </li>
                    <li className="d-block d-lg-none">
                      <a href="#searchBar" className="search-btn toolbar-btn">
                        <i className="pe-7s-search" />
                      </a>
                    </li>
                    <li className="minicart-wrap me-3 me-lg-0">
                      <a href="#miniCart" className="minicart-btn toolbar-btn">
                        <i className="pe-7s-shopbag" />
                        <span className="quantity">3</span>
                      </a>
                    </li>
                    <li className="mobile-menu_wrap d-block d-lg-none">
                      <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn pl-0">
                        <i className="pe-7s-menu" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header header-sticky" data-bg-color="#bac34e">
        <div className="container">
          <div className="main-header_nav position-relative">
            <div className="row align-items-center">
              <div className="col-lg-12 d-none d-lg-block">
                <div className="main-menu">
                  <nav className="main-nav">
                    <ul>
                      <li className="drop-holder">
                        <a href="javascript:void(0)">Home
                          <i className="fa fa-chevron-down" />
                        </a>
                        <ul className="drop-menu">
                          <li>
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Two</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li className="megamenu-holder">
                        <a href="javascript:void(0)">Shop
                          <i className="fa fa-chevron-down" />
                        </a>
                        <ul className="drop-menu megamenu">
                          <li>
                            <span className="title">Shop Layout</span>
                            <ul>
                              <li>
                                <a href="shop.html">Shop Default</a>
                              </li>
                              <li>
                                <a href="shop-left-sidebar.html">Shop Left Sidebar</a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
                              </li>
                              <li>
                                <a href="shop-list-fullwidth.html">Shop List Fullwidth</a>
                              </li>
                              <li>
                                <a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a>
                              </li>
                              <li>
                                <a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className="title">Product Style</span>
                            <ul>
                              <li>
                                <a href="single-product.html">Single Product Default</a>
                              </li>
                              <li>
                                <a href="single-product-group.html">Single Product Group</a>
                              </li>
                              <li>
                                <a href="single-product-variable.html">Single Product Variable</a>
                              </li>
                              <li>
                                <a href="single-product-sale.html">Single Product Sale</a>
                              </li>
                              <li>
                                <a href="single-product-sticky.html">Single Product Sticky</a>
                              </li>
                              <li>
                                <a href="single-product-affiliate.html">Single Product Affiliate</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className="title">Product Related</span>
                            <ul>
                              <li>
                                <a href="my-account.html">My Account</a>
                              </li>
                              <li>
                                <a href="login-register.html">Login | Register</a>
                              </li>
                              <li>
                                <a href="cart.html">Shopping Cart</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                              <li>
                                <a href="compare.html">Compare</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-slider-wrap">
                            <div className="swiper-container menu-slider">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide img-zoom-effect with-overlay">
                                  <a href="#" className="single-item">
                                    <img className="img-full" src="assets/images/megamenu/slider/1.jpg" alt="Megamenu Slider" />
                                  </a>
                                </div>
                                <div className="swiper-slide img-zoom-effect with-overlay">
                                  <a href="#" className="single-item">
                                    <img className="img-full" src="assets/images/megamenu/slider/2.jpg" alt="Megamenu Slider" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-holder">
                        <a href="javascript:void(0)">Pages
                          <i className="fa fa-chevron-down" />
                        </a>
                        <ul className="drop-menu">
                          <li>
                            <a href="faq.html">Frequently Questions</a>
                          </li>
                          <li>
                            <a href="404.html">Error 404</a>
                          </li>
                          <li className="drop-holder">
                            <a href="#">Multi Dropdown</a>
                            <ul className="drop-menu">
                              <li className="drop-holder">
                                <a href="#">Level 02</a>
                                <ul className="drop-menu">
                                  <li>
                                    <a href="#">Level 03</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-holder">
                        <a href="javascript:void(0)">Blog
                          <i className="fa fa-chevron-down" />
                        </a>
                        <ul className="drop-menu">
                          <li className="sub-dropdown-holder">
                            <a href="javascript:void(0)">Blog Holder</a>
                            <ul className="drop-menu sub-dropdown">
                              <li>
                                <a href="blog.html">Blog Default</a>
                              </li>
                              <li>
                                <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-dropdown-holder">
                            <a href="javascript:void(0)">Blog Detail Holder</a>
                            <ul className="drop-menu sub-dropdown">
                              <li>
                                <a href="blog-detail.html">Blog Detail Default</a>
                              </li>
                              <li>
                                <a href="blog-detail-left-sidebar.html">Blog Detail Left Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-detail-right-sidebar.html">Blog Detail Right Sidebar</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu_wrapper" id="mobileMenu">
        <div className="harmic-offcanvas-body">
          <div className="inner-body">
            <div className="harmic-offcanvas-top">
              <a href="#" className="button-close"><i className="pe-7s-close" /></a>
            </div>
            <div className="offcanvas-user-info text-center px-6 pb-5">
              <div className=" text-silver">
                <p className="shipping mb-0">Free delivery on order over <span className="text-primary">$200</span></p>
              </div>
              <ul className="dropdown-wrap justify-content-center text-silver">
                <li className="dropdown dropup">
                  <button className="btn btn-link dropdown-toggle ht-btn" type="button" id="languageButtonTwo" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="languageButtonTwo">
                    <li><a className="dropdown-item" href="#">French</a></li>
                    <li><a className="dropdown-item" href="#">Italian</a></li>
                    <li><a className="dropdown-item" href="#">Spanish</a></li>
                  </ul>
                </li>
                <li className="dropdown dropup">
                  <button className="btn btn-link dropdown-toggle ht-btn usd-dropdown" type="button" id="currencyButtonTwo" data-bs-toggle="dropdown" aria-expanded="false">
                    USD
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="currencyButtonTwo">
                    <li><a className="dropdown-item" href="#">GBP</a></li>
                    <li><a className="dropdown-item" href="#">ISO</a></li>
                  </ul>
                </li>
                <li className="dropdown dropup">
                  <button className="btn btn-link dropdown-toggle ht-btn p-0" type="button" id="settingButtonTwo" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="pe-7s-users" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="settingButtonTwo">
                    <li><a className="dropdown-item" href="my-account.html">My account</a></li>
                    <li><a className="dropdown-item" href="login-register.html">Login | Register</a></li>
                  </ul>
                </li>
                <li>
                  <a href="wishlist.html">
                    <i className="pe-7s-like" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="offcanvas-menu_area">
              <nav className="offcanvas-navigation">
                <ul className="mobile-menu">
                  <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">Home 
                        <i className="pe-7s-angle-down" />
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">
                          <span className="mm-text">Home One</span>
                        </a>
                      </li>
                      <li>
                        <a href="index-2.html">
                          <span className="mm-text">Home Two</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">
                      <span className="mm-text">About Us</span>
                    </a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">Shop 
                        <i className="pe-7s-angle-down" />
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">Shop Layout 
                            <i className="pe-7s-angle-down" />
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="shop.html">
                              <span className="mm-text">Shop Default</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-leftsidebar.html">
                              <span className="mm-text">Shop Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-rightsidebar.html">
                              <span className="mm-text">Shop Right Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-fullwidth.html">
                              <span className="mm-text">Shop List Fullwidth</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-left-sidebar.html">
                              <span className="mm-text">Shop List Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-right-sidebar.html">
                              <span className="mm-text">Shop List Right Sidebar</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">Product Style
                            <i className="pe-7s-angle-down" />
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="single-product.html">
                              <span className="mm-text">Single Product Default</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-group.html">
                              <span className="mm-text">Single Product Group</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-variable.html">
                              <span className="mm-text">Single Product Variable</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-sale.html">
                              <span className="mm-text">Single Product Sale</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-sticky.html">
                              <span className="mm-text">Single Product Sticky</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-affiliate.html">
                              <span className="mm-text">Single Product Affiliate</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">Product Related
                            <i className="pe-7s-angle-down" />
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="my-account.html">
                              <span className="mm-text">My Account</span>
                            </a>
                          </li>
                          <li>
                            <a href="login-register.html">
                              <span className="mm-text">Login | Register</span>
                            </a>
                          </li>
                          <li>
                            <a href="cart.html">
                              <span className="mm-text">Shopping Cart</span>
                            </a>
                          </li>
                          <li>
                            <a href="wishlist.html">
                              <span className="mm-text">Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a href="compare.html">
                              <span className="mm-text">Compare</span>
                            </a>
                          </li>
                          <li>
                            <a href="checkout.html">
                              <span className="mm-text">Checkout</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">Pages 
                        <i className="pe-7s-angle-down" />
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="faq.html">
                          <span className="mm-text">Frequently Questions</span>
                        </a>
                      </li>
                      <li>
                        <a href="404.html">
                          <span className="mm-text">Error 404</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">Blog 
                        <i className="pe-7s-angle-down" />
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">Blog Holder
                            <i className="pe-7s-angle-down" />
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">
                              <span className="mm-text">Blog Default</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-left-sidebar.html">
                              <span className="mm-text">Blog Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-right-sidebar.html">
                              <span className="mm-text">Blog Right Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-list-left-sidebar.html">
                              <span className="mm-text">Blog List Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-list-right-sidebar.html">
                              <span className="mm-text">Blog List Right Sidebar</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">Blog Detail Holder
                            <i className="pe-7s-angle-down" />
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog-detail.html">
                              <span className="mm-text">Blog Detail Default</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-detail-left-sidebar.html">
                              <span className="mm-text">Blog Detail Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-detail-right-sidebar.html">
                              <span className="mm-text">Blog Detail Right Sidebar</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">
                      <span className="mm-text">Contact</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-search_wrapper" id="searchBar">
        <div className="harmic-offcanvas-body">
          <div className="container h-100">
            <div className="offcanvas-search">
              <div className="harmic-offcanvas-top">
                <a href="#" className="button-close"><i className="pe-7s-close" /></a>
              </div>
              <span className="searchbox-info">Start typing and press Enter to search</span>
              <form action="#" className="hm-searchbox">
                <input type="text" placeholder="Search" />
                <button className="search-btn" type="submit"><i className="pe-7s-search" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-minicart_wrapper" id="miniCart">
        <div className="harmic-offcanvas-body">
          <div className="minicart-content">
            <div className="minicart-heading">
              <h4 className="mb-0">Shopping Cart</h4>
              <a href="#" className="button-close"><i className="pe-7s-close" /></a>
            </div>
            <ul className="minicart-list">
              <li className="minicart-product">
                <a className="product-item_remove" href="#"><i className="pe-7s-close" /></a>
                <a href="shop.html" className="product-item_img">
                  <img className="img-full" src="assets/images/product/small-size/1-1-112x124.jpg" alt="Product Image" />
                </a>
                <div className="product-item_content">
                  <a className="product-item_title" href="shop.html">Black Pepper Grains</a>
                  <span className="product-item_quantity">1 x $80.00</span>
                </div>
              </li>
              <li className="minicart-product">
                <a className="product-item_remove" href="#"><i className="pe-7s-close" /></a>
                <a href="shop.html" className="product-item_img">
                  <img className="img-full" src="assets/images/product/small-size/1-2-112x124.jpg" alt="Product Image" />
                </a>
                <div className="product-item_content">
                  <a className="product-item_title" href="shop.html">Peanut Big Bean</a>
                  <span className="product-item_quantity">1 x $80.00</span>
                </div>
              </li>
              <li className="minicart-product">
                <a className="product-item_remove" href="#">
                  <i className="pe-7s-close" />
                </a>
                <a href="shop.html" className="product-item_img">
                  <img className="img-full" src="assets/images/product/small-size/1-3-112x124.jpg" alt="Product Image" />
                </a>
                <div className="product-item_content">
                  <a className="product-item_title" href="shop.html">Dried Lemon Green</a>
                  <span className="product-item_quantity">1 x $80.00</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="minicart-item_total">
            <span>Subtotal</span>
            <span className="ammount">$240.00</span>
          </div>
          <div className="group-btn_wrap d-grid gap-2">
            <a href="cart.html" className="btn btn-secondary btn-primary-hover">View Cart</a>
            <a href="checkout.html" className="btn btn-secondary btn-primary-hover">Checkout</a>
          </div>
        </div>
      </div>
      <div className="global-overlay" />
    </header>
    {/* Main Header Area End Here */}
    {/* Begin Main Content Area */}
    <main className="main-content">
      <div className="breadcrumb-area breadcrumb-height" data-bg-image="assets/images/breadcrumb/bg/1-1-1920x373.jpg">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="breadcrumb-heading">Product Related</h2>
                <ul>
                  <li>
                    <a href="index.html">Home <i className="pe-7s-angle-right" /></a>
                  </li>
                  <li>Login | Register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-register-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <form action="#">
                <div className="login-form">
                  <h4 className="login-title">Login</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <label>Email Address*</label>
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-lg-12">
                      <label>Password</label>
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="col-md-8">
                      <div className="check-box">
                        <input type="checkbox" id="remember_me" />
                        <label htmlFor="remember_me">Remember me</label>
                      </div>
                    </div>
                    <div className="col-md-4 pt-1 mt-md-0">
                      <div className="forgotton-password_info">
                        <a href="#"> Forgotten pasward?</a>
                      </div>
                    </div>
                    <div className="col-lg-12 pt-5">
                      <button className="btn btn-custom-size lg-size btn-secondary btn-primary-hover rounded-0">Login</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 pt-10 pt-lg-0">
              <form action="#">
                <div className="login-form">
                  <h4 className="login-title">Register</h4>
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <label>First Name</label>
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Last Name</label>
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-md-12">
                      <label>Email Address*</label>
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-md-6">
                      <label>Password</label>
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="col-md-6">
                      <label>Confirm Password</label>
                      <input type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-custom-size lg-size btn-secondary btn-primary-hover rounded-0">Register</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    {/* Main Content Area End Here */}
    {/* Begin Footer Area */}
    <div className="footer-area">
      <div className="footer-top section-space-y-axis-100 text-black" data-bg-color="#e5ddcc">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget-item">
                <div className="footer-logo pb-4">
                  <a href="index.html">
                    <img src="assets/images/logo/dark.png" alt="Logo" />
                  </a>
                </div>
                <p className="short-desc mb-2">Lorem ipsum dolor sit amet, consectet adipi elit, sed do eius tempor incididun ut labore gthydolore. </p>
                <div className="widget-contact-info pb-6">
                  <ul>
                    <li>
                      <i className="pe-7s-map-marker" />
                      184 Main Rd E, St Albans VIC 3021,
                    </li>
                    <li>
                      <i className="pe-7s-mail" />
                      <a href="mailto://info@example.com">info@example.com</a>
                    </li>
                  </ul>
                </div>
                <div className="payment-method">
                  <a href="javascript:void(0)">
                    <img src="assets/images/payment/1.png" alt="Payment Method" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 pt-10 pt-lg-0">
              <div className="widget-item">
                <h3 className="widget-title mb-5">Information</h3>
                <ul className="widget-list-item">
                  <li>
                    <a href="javascript:void(0)">FAQ</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Shipping</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Returns</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Order Status</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Gift Card Balance</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Accessibility</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 pt-10 pt-lg-0">
              <div className="widget-item">
                <h3 className="widget-title mb-5">My Account</h3>
                <ul className="widget-list-item">
                  <li>
                    <a href="javascript:void(0)">My Account</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Checkout</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Validation</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Wishlist</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Terms of Use</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-10 pt-lg-0">
              <div className="widget-item">
                <h3 className="widget-title mb-5">Newsletters</h3>
                <p className="short-desc">Lorem ipsum dolor sit amet, consectet adipi elit, sed do eius tempor.</p>
              </div>
              <div className="widget-form-area">
                <form className="widget-form" action="#">
                  <input className="input-field" type="email" autoComplete="off" placeholder="Your Email" />
                  <div className="button-wrap pt-5">
                    <button className="btn btn-custom-size btn-primary btn-secondary-hover rounded-0" id="mc-submit">Send Mail</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-3" data-bg-color="#bac34e">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright">
                <span className="copyright-text text-white">© 2022 Harmic Made with <i className="fa fa-heart text-danger" /> by  <a href="https://hasthemes.com/" target="_blank">HasThemes</a> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Area End Here */}
    {/* Begin Scroll To Top */}
    <a className="scroll-to-top" href>
      <i className="fa fa-chevron-up" />
    </a>
    {/* Scroll To Top End Here */}
  </div>
  {/* Global Vendor, plugins JS */}
  {/* JS Files
    ============================================ */}
  {/* Global Vendor, plugins JS */}
  {/* Vendor JS */}
  {/*Plugins JS*/}
  {/*Main JS (Common Activation Codes)*/}
</div>
  )
}




