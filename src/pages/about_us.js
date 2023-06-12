import React from "react";
import "../stylee.css";
import "../responsive.css"
import { useState, useEffect, useRef } from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import ReactFullpage from "@fullpage/react-fullpage";
import NavBar from "../components/Header/nav-bar";
import Footer from "../components/footer/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const About = () => {
	library.add(faAngleUp);
	const [isFullpage, setIsFullpage] = useState(true);
	const [fullPageState, setFullPageState] = useState();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 992) {
				setIsFullpage(false);
			} else {
				setIsFullpage(true);
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const getSection = (data, start, end) => {
		const imageUrls = data && data.wpPage && data.wpPage.homePartnerSection && data.wpPage.homePartnerSection.partner;

		return imageUrls.slice(start, end) || [];

	}

	const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
	const videoRef = useRef(null);
	const handleLeave = (origin, destination) => {
		setCurrentSectionIndex(destination.index);
		const video = videoRef.current;
		const playPromise = video.play();
		if (playPromise !== undefined && origin.index === 2) {
			playPromise
				.then(() => {
					video.play();
				})
				.catch(error => {

				});
		}
	};
	useEffect(() => {
		const header = document.querySelector('header');
		if (header) {
			if (currentSectionIndex > 0) {
				header.classList.add('fixed');
			} else {
				header.classList.remove('fixed');
			}
		}

		return () => {
			if (header) {
				header.classList.remove('fixed');
			}
		};
	}, [currentSectionIndex]);
	

	// useEffect(() => {
	// 	const video = videoRef.current;
	// 	const playPromise = video.play();
	// 	if (playPromise !== undefined) {
	// 		playPromise
	// 			.then(() => {
	// 				video.play();
	// 			})
	// 			.catch(error => {

	// 			});
	// 	}
	// }, []);
	const handleVideoEnded = () => {
		const video = videoRef.current;
		video.play();
	};

	const handleAfterLoad = (origin, destination, direction) => {
		const scrollToTopButton = document.getElementById('scroll-to-top');
		if (destination.index > 0) {
			scrollToTopButton.style.display = 'block';
		} else {
			scrollToTopButton.style.display = 'none';
		}
	};

	const handleScrollToTop = () => {
		fullPageState.moveTo(1);
	};




	return (
		<>


			<StaticQuery

				query={graphql`
            query {
				wpPage(id: { eq: "cG9zdDoxMDM=" }) {
					title
					slug
				homePartnerSection {
					  partnerDetail
					  partner {
						partnerImage {
						  sourceUrl
						}
                        siteUrl
					  }
					}
				  
					about {
					  advisorsheading
					  description
					  heading
					  ouradvisors {
						designation
						image {
						  sourceUrl
						}
						linkedinurl
						name
						colorimage {
							sourceUrl
						  }
					  }
					  teamheading
					  ourteam {
						designation
						linkedinurl
						name
						image {
						  sourceUrl
						}
						colourImage {
						  sourceUrl
						}
					  }
					}
				}
              }
            `}
				render={data => (
					<>

						{isFullpage ? (
							<>
								<NavBar />

								<ReactFullpage
									scrollingSpeed={1000}
									normalScrollElements="#footer"
									onLeave={handleLeave}
									afterLoad={handleAfterLoad}
									render={({ fullpageApi }) => {
										setFullPageState(fullpageApi);
										return (
											<>
												<ReactFullpage.Wrapper>
													<main>

														<section className="section">
															<div className="secation01 bhg secn_abouts">
																<div className="container">
																	<div className="row">
																		<div className="col-md-12">
																			<div className="our_main_heading text-center">
																				<div className="bread_cumg" dangerouslySetInnerHTML={{ __html: data.wpPage.about.heading }}>

																				</div>
																			</div>
																			<div className="img_arrow">
																				<div className="roww_wrap">
																					<a href="#">
																						<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" />
																					</a>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</section>
														<section className="section">
															<div className="secation02 bhg">
																<div className="jhg_tfrd">
																	<div className="container">
																		<div className="row">
																			<div className="col-md-5 colmd5" style={{ position: 'relative' }}>
																				<div className="kj_bgvcdfs">

																					<div className="image_gnbdd">

																						<div className="image_hfgfss">
																							<video
																								id="myVideo"
																								preload=""
																								src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4"
																								ref={videoRef}
																								autoPlay
																								muted
																								onEnded={handleVideoEnded}

																								className="video"

																							>

																							</video>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div className="col-md-7">
																				<div className="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.about.description }}>



																				</div>

																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</section>
														<section className="section" >
															<div className="secatioonteam bhg">
																<div className="jhg_tfrd paddint_top padding_Btnh">
																	<div className="container">
																		<div className="row">
																			<div className="col-md-12">
																				<div className="main_heading">
																					<div className="our_about_wrap text-start" dangerouslySetInnerHTML={{ __html: data.wpPage.about.teamheading }}>

																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="our_vba">
																			<div className="row mar_yes">
																				{data &&
																					data.wpPage &&
																					data.wpPage.about &&
																					data.wpPage.about.ourteam.map((prop, i) => {
																						return (
																							<>
																								<div className="col-xsm-12 col-sm-6 col-md-6 col-lg-3 teambx">
																									<div className="image_tema">
																										<div className="f1_container">
																											<div className="f1_card shadow">
																												<div className="front face">

																													<img src={prop.image.sourceUrl} />
																												</div>
																												<div className="back face center">

																													<img src={prop.colourImage.sourceUrl} />
																												</div>
																											</div>
																										</div>
																										<div className="details">
																											<div className="left_part_name">
																												<h4>{prop.name}</h4>
																												<span>
																													{prop.designation}
																												</span>
																											</div>
																											<div className="right_part_name">
																												<a href=
																													{prop.linkedinurl}
																													target="_blank"
																												>
																													<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/linkdin.png" />
																												</a>
																											</div>
																										</div>
																									</div>
																								</div>
																							</>
																						)
																					})}
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</section>
														<section className="section">
															<div className="section04 bhg">
																<div className="container">
																	<div className="row align-items-center">
																		<div className="col-md-6">
																			<div className="ourr_tsgdf">
																				<ul>
																					<li>
																						<ul>
																							{
																								getSection(data, 0, 5).map(url => (
																									<li><a href={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </a> </li>
																								))
																							}
																						</ul>
																					</li>
																					<li>
																						<ul>
																							{
																								getSection(data, 5, 10).map(url => (
																									<li><a href={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </a> </li>
																								))
																							}
																						</ul>
																					</li>
																					<li>
																						<ul>

																							{
																								getSection(data, 10, 15).map(url => (
																									<li><a href={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </a> </li>
																								))
																							}
																						</ul>
																					</li>
																					<div className="clr"></div>
																				</ul>
																			</div>
																		</div>
																		<div className="col-md-6">
																			<div className="our_about_wrap" >
																				<div className='' dangerouslySetInnerHTML={{ __html: data.wpPage.homePartnerSection.partnerDetail }}>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>

														</section>
														<Footer />
													</main>

												</ReactFullpage.Wrapper>

											</>


										)
									}}
								/>
								<div className="btn">
									<button
										id="scroll-to-top"
										className="top_arrow_wrap"
										onClick={() => handleScrollToTop()}
									>
										<FontAwesomeIcon icon={faAngleUp} />
									</button>
								</div>
							</>
						) : (
							<main>
								<NavBar />
								<section className="section">
									<div className="secation01 bhg secn_abouts">
										<div className="container">
											<div className="row">
												<div className="col-md-12">
													<div className="our_main_heading text-center">
														<div className="bread_cumg" dangerouslySetInnerHTML={{ __html: data.wpPage.about.heading }}>

														</div>
													</div>
													<div className="img_arrow">
														<div className="roww_wrap">
															<a href="#">
																<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" />
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
								<section className="section">
									<div className="secation02 bhg">
										<div className="jhg_tfrd">
											<div className="container">
												<div className="row">
													<div className="col-md-5 colmd5 fok_ng" style={{ position: 'relative' }}>
														<div className="kj_bgvcdfs">

															<div className="image_gnbdd">

																<div className="image_hfgfss">
																	<video

																		id="myVideo"
																		preload=""
																		src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4"
																		ref={videoRef}
																		autoPlay
																		muted
																		onEnded={handleVideoEnded}

																		className="video"
																	>

																	</video>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-7">
														<div className="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.about.description }}>



														</div>
													</div>
													<div class="col-md-5 fok_ng_hggth" style={{ position: 'relative' }}>
														<div class="kj_bgvcdfs">
															<div class="image_gnbdd">
																<div class="roghrtf">

																</div>
																<div className="image_hfgfss">
																	<video
																		id="myVideo"
																		preload=""
																		src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4"
																		ref={videoRef}
																		autoPlay
																		muted
																		onEnded={handleVideoEnded}

																		className="video"
																	>
																	</video>
																</div>
															</div>

														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
								<section className="section">
									<div className="secatioonteam bhg">
										<div className="jhg_tfrd paddint_top padding_Btnh">
											<div className="container">
												<div className="row">
													<div className="col-md-12">
														<div className="main_heading">
															<div className="our_about_wrap text-start" dangerouslySetInnerHTML={{ __html: data.wpPage.about.teamheading }}>

															</div>
														</div>
													</div>
												</div>
												<div className="our_vba">
													<div className="row mar_yes">
														{data &&
															data.wpPage &&
															data.wpPage.about &&
															data.wpPage.about.ourteam.map((prop, i) => {
																return (
																	<>
																		<div className="col-xsm-12 col-sm-6 col-md-6 col-lg-3 teambx">
																			<div className="image_tema">
																				<div className="f1_container">
																					<div className="f1_card shadow">
																						<div className="front face">

																							<img src={prop.image.sourceUrl} className="img-fluid" />
																						</div>
																						<div className="back face center">

																							<img src={prop.colourImage.sourceUrl} />
																						</div>
																					</div>
																				</div>
																				<div className="details">
																					<div className="left_part_name">
																						<h4>{prop.name}</h4>
																						<span>
																							{prop.designation}
																						</span>
																					</div>
																					<div className="right_part_name">
																						<a href=
																							{prop.linkedinurl}
																							target="_blank"
																						>
																							<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/linkdin.png" />
																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</>
																)
															})}
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
								<section className="section">
									<div className="section04 bhg">
										<div className="container">
											<div className="row align-items-center">
												<div className="col-md-6">
													<div className="ourr_tsgdf">
														<ul>
															<li>
																<ul>

																	{
																		getSection(data, 0, 5).map(url => (
																			<li><a href={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </a> </li>
																		))
																	}
																</ul>
															</li>
															<li>
																<ul>

																	{
																		getSection(data, 5, 10).map(url => (
																			<li><a href={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </a> </li>
																		))
																	}
																</ul>
															</li>
															<li>
																<ul>

																	{
																		getSection(data, 10, 15).map(url => (
																			<li><a href={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </a> </li>
																		))
																	}
																</ul>
															</li>
															<div className="clr"></div>
														</ul>
													</div>
												</div>
												<div className="col-md-6">
													<div className="our_about_wrap" >
														<div className='' dangerouslySetInnerHTML={{ __html: data.wpPage.homePartnerSection.partnerDetail }}>

														</div>

													</div>



												</div>
											</div>
										</div>
									</div>
								</section>
								<Footer />
							</main>
						)}
					</>
				)}
			/>
		</>
	);
};

export default About;