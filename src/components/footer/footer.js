import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link, StaticQuery } from 'gatsby'
import frame1 from '../../image/Frame1.png';
import frame2 from '../../image/Frame2.png';
import frame3 from '../../image/Frame3.png';
import frame4 from '../../image/Frame4.png';
import frame5 from '../../image/Frame5.png';
import footerlogo from '../../image/footerlogo.png';
import userff from '../../image/userff.png';
import icon from '../../image/Icon.png';
import icon2 from '../../image/map.png';
import icon3 from '../../image/map.png';
import icon4 from '../../image/phone.png';
import icon5 from '../../image/phone.png';
import { graphql } from 'gatsby';
import ScrollToTopButton from '../scroll_top/scroll_top'

export default function Footer() {
	library.add(faEnvelope)

	return (
		<StaticQuery
			query={graphql`
		query {
		  wpMenu(id: {eq: "dGVybToz"}) {
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
				<>
					<section className="section">
						<div className="main_fot bhg">
							<footer className="footer_wrap">
								<div className="container">
									<div className="row">
										<div className="col-md-12">
											<h2>Subscribe to our newsletter</h2>
											<p>Join our community and never miss a beat</p>
										</div>
										<div className="col-md-12">
											<div className="our_news_leeter">
												<iframe
													id="myIframe"
													src="https://www.qlspace.com.au/newsletter/"
													 scrolling="no" style={{ width:'100%', height:'auto',minHeight:'178px'  }}
												></iframe>
												{/* <form className="row g-3">
													<div className="col-md-6">
														<div className="hfnfa">
															<input type="text" className="form-control" id="name" placeholder="Enter Name" />
															<div className="imgddds">
																<img src={userff} alt="" />

															</div>
														</div>
													</div>
													<div className="col-md-6">
														<div className="hfnfa">
															<input type="text" className="form-control" id="email" placeholder="Enter Email" />
															<div className="imgddds">
																<img src={icon} alt="" />

															</div>
														</div>
													</div>
													<div className="col-12 mt-5">
														<button type="submit" className="btn btn-primary">Submit</button>
													</div>
												</form> */}
											</div>
										</div>
									</div>
								</div>
								<div className="our_main_footer">
									<div className="container">
										<div className="row">
											<div className="col-lg-3 col-md-6 col-sm-12">
												<div className="images_logo">
													<div className="logo_footer">
														<a href="#">
															<img src={footerlogo} alt="" />
														</a>
													</div>
													<div className="cont_footer">
														<p>Our goal is to develop cutting-edge space technology that accomplishes the incredible.</p>
													</div>
													<div className="list_s">
														<ul>
															<li><a href="https://www.facebook.com/qlspaces">
																<img src={frame1} alt="" /></a></li>
															<li><a href='https://www.linkedin.com/company/qlspace/' ><img src={frame2} alt="" /></a></li>
															<li><a href="https://twitter.com/qlspace_"><img src={frame3} alt="" /></a></li>
															<li><a href="https://www.youtube.com/channel/UC6xhk9nI6VxQ0UJpLjDmKvA/videos"><img src={frame4} alt="" /></a></li>
															<li><a href=""><img src={frame5} alt="" /></a></li>
														</ul>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-6 col-sm-12">

												<div id="myDIV" className="ythfr">
													<ul>
														{data &&
															data.wpMenu &&
															data.wpMenu.menuItems &&
															data.wpMenu.menuItems.nodes.map((prop, i) => {
																return (
																	<>
																		{
																			<>
																				{prop.label == "Home" ? (
																					<li className="nav-item">
																						<Link
																							to={"/"}
																							className="nav-link"
																							activeclassName="active"
																						>
																							{prop.label}
																						</Link>
																					</li>
																				): prop.label === "What's New" ? (
																					<li className="nav-item"
																					 >
																					  <Link
																						to={"/news"}
																						className="nav-link"
																						activeClassName="active"
																					  >
																						{prop.label}
																						{console.log(prop.label)}
																					  </Link>
																					</li>
																				  ) : (
																					<li className="nav-item">
																						<Link
																							to={
																								"/" +
																								prop.label
																									.replace(/\s+/g, "_")
																									.replace("'", "")
																									.toLowerCase()
																							}
																							className="nav-link"
																							activeclassName="active"
																						>
																							{prop.label}
																						</Link>
																					</li>

																				)}
																			</>
																		}
																	</>
																);
															})}

													</ul>

												</div>

											</div>
											<div className="col-lg-3 col-md-6 col-sm-12">
												<div className="kn_list">
													<div className="kn_left_list">
														<div className="lefti_text">
															<div className="inner_l">
																<img src={icon} />
															</div>
														</div>
														<div className="righti_text">
															<div className="rig_th">
																<span>Mail</span>
																<p><a href="mailto:info@qlspace.com.au">info@qlspace.com.au</a></p>
															</div>
														</div>
													</div>
													<div className="kn_left_list">
														<div className="lefti_text">
															<div className="inner_l">
																<img src={icon2} />
															</div>
														</div>
														<div className="righti_text">
															<div className="rig_th">
																<span>Address</span>
																<p>45 St Georges Terrace, Ground Floor,Perth, WA, 6000</p>
															</div>
														</div>
													</div>
													<div className="kn_left_list">
														<div className="lefti_text">
															<div className="inner_l">
																<img src={icon3} />
															</div>
														</div>
														<div className="righti_text">
															<div className="rig_th">
																<span>Addess</span>
																<p>Ground Floor, Space Lab Building, Lot Fourteen, Frome Road, ADELAIDE | SA |5000</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-6 col-sm-12">
												<div className="kn_list">
													<div className="kn_left_list">
														<div className="lefti_text">
															<div className="inner_l">
																<img src={icon4} />
															</div>
														</div>
														<div className="righti_text">
															<div className="rig_th">
																<span>Tel</span>
																<p>
																	<a href="tel:+61 8 6262 3559">+61 8 6262 3559</a>
																</p>

															</div>
														</div>
													</div>
													<div className="kn_left_list">
														<div className="lefti_text">
															<div className="inner_l">
																<img src={icon5} />
															</div>
														</div>
														<div className="righti_text">
															<div className="rig_th">
																<span>Tel</span>
																<p>
																	<a href="tel:+61 410 881 616">+61 410 881 616</a></p>
															</div>
														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="copy_right">
									<div className="container">
										<div className="row">
											<div className="col-md-6">
												<div className="outg_o">

													<p>Copyright ©2023 SPACE. Powered By <a href="https://www.qltech.com.au/" target="_blank"> QL Tech </a></p>
												</div>
											</div>
											<div className="col-md-6">
												<div className="right_text_copy">
													All Rights Reserved <span><ul>

														<li><Link to="/privacy_policy"> Privacy Policy </Link></li>
													</ul>
													</span>

												</div>
											</div>



										</div>
									</div>
								</div>
							</footer>
						</div>

					</section>
					<ScrollToTopButton />
				</>
			)

			}

		/>
	)
}

