import React from 'react';
import { useState, useEffect } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import "../stylee.css"
import "./solution.css"
import "../responsive.css"
import { Link, StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Layout from '../components/layout/layout';
import NavBar from '../components/Header/nav-bar';
import Footer from '../components/footer/footer';

const Solution = () => {
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

	const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
	const handleLeave = (origin, destination) => {
		setCurrentSectionIndex(destination.index);
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
		<StaticQuery
			query={graphql`
			query {
				allWpSolution(sort: {id: ASC}) {
					edges {
					  node {
						content
						excerpt
						featuredImage {
						  node {
							sourceUrl
						  }
						}
						title
						id
					  }
					}
				  }
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

					{isFullpage ? (
						<>
							<NavBar />
							<ReactFullpage
								// fullpage options
								scrollingSpeed={1000}
								onLeave={handleLeave}
								afterLoad={handleAfterLoad}
								render={({ fullpageApi }) => {
									setFullPageState(fullpageApi);
									return (
										<>
											<ReactFullpage.Wrapper>

												<section className="section sol_sec">
													<div className="secation01 bhg secn_abouts">
														<div className="container">
															<div className="row">
																<div className="col-md-12">
																	<div className="our_main_heading text-center">
																		<div className="bread_cumg">
																			<h1 className="text-center"><strong>Solution</strong></h1>

																			<p>Our vision and values drive us to achieve greater heights</p>                              </div>
																	</div>
																	<div className="img_arrow">
																		<div className="roww_wrap">
																			<a href="#"><img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" /></a>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</section>
												{data && data.allWpSolution && data.allWpSolution.edges && data.allWpSolution.edges.map((edge, i) => {
													const solution = edge.node;
													return (
														<>
															<section className="section sol_sec main_jngbv12" key={solution.id}>
																<div className="solution_secanm" style={{ overflow: 'hidden' }} >
																	<div className="container">
																		<div className="row align-items-center">
																			<div className="col-md-5">
																				<div className="image_sidebx">
																					<div className="image_innerbx">
																						<img src={solution.featuredImage.node.sourceUrl} alt="MINING" />

																					</div>
																					<div className="image_rowund_sebx">
																						<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/round.svg" alt="round" />
																					</div>
																					<div className="imge_iconsbx">
																						<div className="image_gnbddbx">
																							<div className="roghrtfbx">

																								<div className="ghbdbx">
																									<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/star.svg" />
																								</div>
																								<div className="ghbdbx1">
																									<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/bloone.svg" />
																								</div>
																								<div className="ghbdbx2">
																									<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/eardff.svg" />
																								</div>
																								<div className="ghbdbx3">
																									<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/wav.svg" />
																								</div>
																								<div className="ghbdbx4">
																									<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/moon.svg" />
																								</div>
																							</div>
																						</div>


																					</div>
																				</div>
																			</div>
																			<div className="col-md-7">
																				<div className="soltion_newsbx">
																					<div className="kng_hbx">
																						<h2>{solution.title}</h2>
																						<div className='slmntxt' dangerouslySetInnerHTML={{ __html: solution.content }}></div>
																					</div>
																				</div>
																			</div>
																		</div>

																	</div>
																</div>
															</section>
														</>
													)
												})}
												<Footer />
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
						<Layout>


							<section className="section">
								<div className="secation01 bhg secn_abouts">
									<div className="container">
										<div className="row">
											<div className="col-md-12">
												<div className="our_main_heading text-center">
													<div className="bread_cumg">
														<h1 className="text-center"><strong>Solution</strong></h1>
														<p>Our vision and values drive us to achieve greater heights</p>


													</div>
												</div>
												<div className="img_arrow">
													<div className="roww_wrap">
														<a href="#"><img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" /></a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							{data && data.allWpSolution && data.allWpSolution.edges && data.allWpSolution.edges.map((edge, i) => {
								const solution = edge.node;
								return (
									<>
										<section className="section main_jngbv12" key={solution.id}>
											<div className="solution_secanm" style={{ overflow: 'hidden' }} >
												<div className="container">
													<div className="row align-items-center">
														<div className="col-md-5">
															<div className="image_sidebx">
																<div className="image_innerbx">
																	<img src={solution.featuredImage.node.sourceUrl} alt="MINING" />

																</div>
																<div className="image_rowund_sebx">
																	<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/round.svg" alt="round" />
																</div>
																<div className="imge_iconsbx">
																	<div className="image_gnbddbx">
																		<div className="roghrtfbx">

																			<div className="ghbdbx">
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/star.svg" />
																			</div>
																			<div className="ghbdbx1">
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/bloone.svg" />
																			</div>
																			<div className="ghbdbx2">
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/eardff.svg" />
																			</div>
																			<div className="ghbdbx3">
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/wav.svg" />
																			</div>
																			<div className="ghbdbx4">
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/moon.svg" />
																			</div>
																		</div>
																	</div>


																</div>
															</div>
														</div>
														<div className="col-md-7">
															<div className="soltion_newsbx">
																<div className="kng_hbx">
																	<h2>{solution.title}</h2>
																	<div className='slmntxt' dangerouslySetInnerHTML={{ __html: solution.content }}></div>
																</div>
															</div>
														</div>
													</div>

												</div>
											</div>
										</section>

									</>
								)
							})}



						</Layout>

					)}
				</>

			)}
		/>
	)
}


export default Solution;
