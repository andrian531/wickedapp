import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withTranslate } from "react-redux-multilingual";

import { withFirebase } from "../../../Firebase";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navClose: { right: "0px" },
      loading: false,
    };
  }

  componentDidMount() {
    if (!this.props.pages.length) {
      this.setState({ loading: true });
    }

    this.props.firebase
      .pages()
      .where("parentId", "==", 0)
      .get()
      .then((snapshot) => {
        let promises = [];
        snapshot.forEach((page) => {
          promises.push(
            this.props.firebase
              .pages()
              .where("parentId", "==", page.id)
              .get()
              .then((childSnap) => {
                let childsArray = [];
                childSnap.forEach((child) => {
                  childsArray.push({
                    id: child.id,
                    ...child.data(),
                  });
                });
                return {
                  id: page.id,
                  ...page.data(),
                  childs: childsArray,
                };
              })
          );
        });

        return Promise.all(promises);
      })
      .then((result) => {
        this.props.onSetPages(result);
        this.setState({ loading: false });
      });
  }

  componentWillMount() {
    if (window.innerWidth < 750) {
      this.setState({ navClose: { right: "-410px" } });
    }
    if (window.innerWidth < 1199) {
      this.setState({ navClose: { right: "-300px" } });
    }
  }

  openNav() {
    console.log("open");
    this.setState({ navClose: { right: "0px" } });
  }
  closeNav() {
    this.setState({ navClose: { right: "0px" } });
  }

  onMouseEnterHandler() {
    if (window.innerWidth > 1199) {
      document.querySelector("#main-menu").classList.add("hover-unset");
    }
  }

  handleSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensubmenu"))
      event.target.nextElementSibling.classList.remove("opensubmenu");
    else {
      document.querySelectorAll(".nav-submenu").forEach(function(value) {
        value.classList.remove("opensubmenu");
      });
      document
        .querySelector(".mega-menu-container")
        .classList.remove("opensubmenu");
      event.target.nextElementSibling.classList.add("opensubmenu");
    }
  };

  handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (
      event.target.parentNode.nextElementSibling.classList.contains(
        "opensubmegamenu"
      )
    )
      event.target.parentNode.nextElementSibling.classList.remove(
        "opensubmegamenu"
      );
    else {
      document.querySelectorAll(".menu-content").forEach(function(value) {
        value.classList.remove("opensubmegamenu");
      });
      event.target.parentNode.nextElementSibling.classList.add(
        "opensubmegamenu"
      );
    }
  };

  render() {
    const { translate, pages } = this.props;
    return (
      <div>
        <div className="main-navbar">
          <div id="mainnav">
            <ul className="nav-menu" style={this.state.navClose}>
              <li className="back-btn" onClick={this.closeNav.bind(this)}>
                <div className="mobile-back text-right">
                  <span>Back</span>
                  <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                </div>
              </li>
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  {translate("home")}
                </Link>
              </li>
              {this.state.loading ? (
                <li>Loading..</li>
              ) : (
                pages.map((item) => {
                  return (
                    <li>
                      <a
                        className="nav-link"
                        href={`${process.env.PUBLIC_URL}/pages/${item.slug}`}
                      >
                        {item.alias}{" "}
                        {item.childs.length > 0 && (
                          <span className="sub-arrow"></span>
                        )}
                      </a>
                      {item.childs.length > 0 && (
                        <ul className="nav-submenu">
                          {item.childs.map((child) => {
                            return (
                              <li>
                                <a
                                  href={`${process.env.PUBLIC_URL}/pages/${child.slug}`}
                                >
                                  {child.alias}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })
              )}

              {/* <li>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  {"vehicles"}
                  <span className="sub-arrow"></span>
                </Link>

                <ul className="nav-submenu">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      {translate("left_sidebar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      {translate("right_sidebar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      {translate("no_sidebar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      {translate("three_col_thumbnail_left")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      {translate("three_col_thumbnail_right")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      {translate("thumbnail_below")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      {translate("thumbnail_left")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      {translate("thumbnail_right")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mega-menu">
                <Link
                  to="#"
                  className="dropdown"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  {"specials"}
                  <span className="sub-arrow"></span>
                </Link>

                <div className="mega-menu-container">
                  <div className="container">
                    <div className="row">
                      <div className="col mega-box">
                        <div className="link-section">
                          <div className="menu-title">
                            <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                              {translate("portfolio")}
                              <span className="sub-arrow"></span>
                            </h5>
                          </div>
                          <div className="menu-content">
                            <ul>
                              <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                  {translate("portfolio_grid_2")}
                                </Link>
                              </li>
                              <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                  {translate("portfolio_grid_3")}
                                </Link>
                              </li>
                              <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                  {translate("portfolio_grid_4")}
                                </Link>
                              </li>
                              <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                  {translate("portfolio_masonary_2")}
                                </Link>
                              </li>
                              <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                  {translate("portfolio_masonary_3")}
                                </Link>
                              </li>
                              <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                  {translate("portfolio_masonary_4")}
                                </Link>
                              </li>
                              <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                  {translate("portfolio_masonary_full")}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col mega-box">
                        <div className="link-section">
                          <div className="menu-title">
                            <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                              {translate("theme_elements")}
                              <span className="sub-arrow"></span>
                            </h5>
                          </div>
                          <div className="menu-content">
                            <ul>
                              <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                  {translate("element_title")}
                                </Link>
                              </li>
                              <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                  {translate("collection_banner")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/features/element-slider`}
                                >
                                  {translate("home_slider")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/features/element-category`}
                                >
                                  {translate("category")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/features/element-service`}
                                >
                                  {translate("service")}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col mega-box">
                        <div className="link-section">
                          <div className="menu-title">
                            <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                              {translate("product_elements")}
                              <span className="sub-arrow"></span>
                            </h5>
                          </div>
                          <div className="menu-content">
                            <ul>
                              <li className="up-text">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/features/element-product-box`}
                                >
                                  {translate("product_box")}
                                  <span>10+</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/features/element-product-slider`}
                                >
                                  {translate("product_slider")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/features/element-product-no-slider`}
                                >
                                  {translate("no_slider")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/features/element-product-multiple-slider`}
                                >
                                  {translate("multi_slider")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/features/element-product-tab`}
                                >
                                  {translate("tab")}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col mega-box">
                        <div className="link-section">
                          <div className="menu-title">
                            <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                              {translate("email_template")}
                              <span className="sub-arrow"></span>
                            </h5>
                          </div>
                          <div className="menu-content">
                            <ul>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/email-template.html`}
                                  target="_blank"
                                >
                                  {translate("order_success")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/email-template-two.html`}
                                  target="_blank"
                                >
                                  {translate("order_success")}2
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/email-order-success.html`}
                                  target="_blank"
                                >
                                  {translate("email_template")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/email-order-success-two.html`}
                                  target="_blank"
                                >
                                  {translate("email_template")}2
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col mega-box">
                        <div className="link-section">
                          <div className="menu-title">
                            <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                              {translate("accessories")}
                              <span className="sub-arrow"></span>
                            </h5>
                          </div>
                          <div className="menu-content">
                            <ul>
                              <li>
                                <a href="#">{translate("fashion_jewellery")}</a>
                              </li>
                              <li>
                                <a href="#">{translate("caps_and_hats")}</a>
                              </li>
                              <li>
                                <a href="#">
                                  {translate("precious_jewellery")}
                                </a>
                              </li>
                              <li>
                                <a href="#">{translate("necklaces")}</a>
                              </li>
                              <li>
                                <a href="#">{translate("earrings")}</a>
                              </li>
                              <li>
                                <a href="#">{translate("rings_wrist_wear")}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  {"locations"}
                  <span className="sub-arrow"></span>
                </Link>

                <ul className="nav-submenu">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/pages/about-us`}>
                      New South Wales
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/pages/404`}>
                      Queensland
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/pages/lookbook`}>
                      Victoria
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/pages/login`}>
                      Northern Territory
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/pages/register`}>
                      {translate("register")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/pages/search`}>
                      {translate("search")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/pages/collection`}>
                      {translate("collection")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/pages/forget-password`}
                    >
                      {translate("forget_password")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/pages/contact`}>
                      {translate("contact")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/pages/dashboard`}>
                      {translate("dashboard")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/pages/faq`}>
                      {translate("FAQ")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  {translate("contact")}
                  <span className="sub-arrow"></span>
                </Link>
                <ul className="nav-submenu">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/blog/blog-page`}>
                      {translate("blog_left_sidebar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/blog/right-sidebar`}>
                      {translate("blog_right_sidebar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/blog/details`}>
                      {translate("blog_detail")}
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pages: state.pageState.pages,
});

const mapDispatchToProps = (dispatch) => ({
  onSetPages: (pages) => {
    return dispatch({ type: "PAGES_SET", pages });
  },
});

export default compose(
  withTranslate,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(NavBar);
