import React, { useState, useEffect } from "react"
import { Link, StaticQuery, navigate } from "gatsby"

import "../../stylee.css"
import logo from '../../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useStaticQuery, graphql } from 'gatsby';
import ScrollToTopButton from "../scroll_top/scroll_top";

export default function NavBar(props) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const sticky = header.offsetTop;

      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  library.add(faBars)
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  }
  const [activeMenuItem, setActiveMenuItem] = useState(null);


  return (
    <StaticQuery
      query={graphql`
            query {
              wpMenu(id: {eq: "dGVybToy"}) {
                id
                menuItems {
                  nodes {
                    id
                    label
                    url
                  }
                }
              }
              }
            `}
      render={data => (

        <div>
          <div /*classNameName={props.headervisiblity}*/>
            <header id="header">
              <nav className="navbar navbar-expand-lg header_innerd">
                <div className="container">
                  <div className="logo_image">
                    <Link to="/" className="navbar-brand">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars} /></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                      {data &&
                        data.wpMenu &&
                        data.wpMenu.menuItems &&
                        data.wpMenu.menuItems.nodes.map((prop, i) => {
                          
                          const itemToRender = prop.label === "Home" ?
                            (
                              <li className={`nav-item ${i === activeMenuItem ? "active" : ""}`}
                                onClick={() => setActiveMenuItem(i)}>
                                <Link
                                  to={"/"}
                                  className="nav-link"
                                  activeClassName="active"
                                >
                                  {prop.label}
                                </Link>
                              </li>
                            ) : prop.label === "What's New" ? (
                              <li className={`nav-item ${i === activeMenuItem ? "active" : ""}`}
                                onClick={() => setActiveMenuItem(i)}>
                                <Link
                                  to={"/news"}
                                  className="nav-link"
                                  activeClassName="active"
                                >
                                  {prop.label}
                                </Link>
                              </li>
                            ) : (
                              <li className={`nav-item ${i === activeMenuItem ? "active" : ""}`}
                                onClick={() => setActiveMenuItem(i)}>
                                <Link
                                  to={
                                    "/" +
                                    prop.label
                                      .replace(/\s+/g, "_")
                                      .replace("'", "")
                                      .toLowerCase()
                                  }
                                  className="nav-link"
                                  activeClassName="active"
                                >
                                  {prop.label}
                                </Link>
                              </li>
                            )

                          return itemToRender;
                        })
                      }
                      <div /*style={navev}*/></div>
                    </ul>
                    <div className="our_cong d-flex">
                      <div className="list_ys">
                        <button onClick={handleClick}>Contact Us</button>
                      </div>
                    </div>

                  </div>

                </div>
              </nav>

            </header>
          </div>
          <div
            className="overlay"
            style={{ display: showModal ? "block" : "none" }}>

          </div>
          <div className="scrollbtn">
            <ScrollToTopButton />
          </div>
          <div className="modal fade model_wrt contactpop show" tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>

            <div className="modal-dialog modal-dialog-centered model_inner">
              <div className="modal-content model_inncnr" style={{ padding: '65px 55px 20px 55px' }}>
                <div className="modal-header model_inncheadr">
                  <h5 className="modal-title title_wrap" id="contact_usLabel">Get in touch</h5>
                  <div className="our_span"><p>Fill up the form our team will get back to you within 24 Hours</p></div>
                  <button type="button" class="btn-close" aria-label="Close" onClick={() => setShowModal(false)}>X</button>
                </div>
                <div className="modal-body bodtr">
                  <div className="fomr_raog">

                    <div className="wpcf7 js" id="wpcf7-f463-o1" lang="en-US" dir="ltr">
                      <div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                      {/* <form action="/#wpcf7-f463-o1" method="post" class="wpcf7-form init" aria-label="Contact form" noValidate="noValidate" data-status="init">
                        <div style={{ display: 'none' }}>
                          <input type="hidden" name="_wpcf7" value="463" />
                          <input type="hidden" name="_wpcf7_version" value="1681278275" />
                          <input type="hidden" name="_wpcf7_locale" value="en_US" />
                          <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f463-o1" />
                          <input type="hidden" name="_wpcf7_container_post" value="0" />
                          <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                        </div>
                        <div className="row g-3 pot_i">
                          <div className="col-md-6">
                            <div className="main_ingh">
                              <div className="wpcf7-form-control-wrap" data-name="your-name"><input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control fomr fomr1" aria-required="true" aria-invalid="false" placeholder="Name" value="" type="text" name="your-name" /></div>

                              <div className="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/user1.png" alt="user1" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main_ingh">
                              <div className="wpcf7-form-control-wrap" data-name="tel-707"><input size="40" maxLength="15" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control fomr fomr2" aria-required="true" aria-invalid="false" placeholder="Phone Number" value="" type="tel" name="tel-707" /></div>
                              <div className="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/call.png" alt="user1" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="main_ingh">
                              <div className="wpcf7-form-control-wrap" data-name="your-email"><input size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control fomr fomr3" aria-required="true" aria-invalid="false" placeholder="Email ID" value="" type="email" name="your-email" /></div>
                              <div className="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/massage.png" alt="user1" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main_ingh">
                              <div className="wpcf7-form-control-wrap" data-name="company"><input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control fomr fomr4" aria-required="true" aria-invalid="false" placeholder="Company Name" value="" type="text" name="company" /></div>
                              <div className="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/compnay.png" alt="user1" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main_ingh">
                              <div className="wpcf7-form-control-wrap" data-name="Position"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control fomr fomr5" aria-required="true" aria-invalid="false" placeholder="Position" value="" type="text" name="Position" /></div>
                              <div className="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/position.png" alt="user1" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="main_ingh">
                              <div className="wpcf7-form-control-wrap" data-name="your-message"><textarea cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control fomr fomr6" aria-required="true" aria-invalid="false" placeholder="Message" name="your-message"></textarea></div>
                              <div className="hbjhgbg iconb1">
                                <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/chat.png" alt="user1" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="btrna"> <input className="wpcf7-form-control has-spinner wpcf7-submit btn btn-primary btn_desughn" type="submit" value="Send Message" /><span className="wpcf7-spinner"></span></div>

                          </div>
                        </div><div className="wpcf7-response-output" aria-hidden="true"></div>
                      </form> */}
                      <iframe
                        id="myIframe"
                        src="https://www.qlspace.com.au/contact-us/"
                        scrolling="no"
                      ></iframe>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    />
  )
}