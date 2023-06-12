
import React, { useState, useEffect, useRef } from 'react';
import ReactFullpage, { FullpageApi } from "@fullpage/react-fullpage";
import "../stylee.css"
import "../responsive.css"
import Layout from "../components/layout/layout"
import { Link, StaticQuery, graphql } from 'gatsby';
import Footer from '../components/footer/footer';


const getSection = (data, start, end) => {
  const imageUrls = data && data.wpPage && data.wpPage.homePartnerSection && data.wpPage.homePartnerSection.partner;

  console.log(imageUrls);
  return imageUrls.slice(start, end) || [];

}

const Tab = () => {
  // remove fullpagejs after 991 width
  const [isFullpage, setIsFullpage] = useState(true);
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
  //video autoplay and infinite play
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Show loading animation.

    // Play the video and handle the result using promises.
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          video.play();
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  }, []);
  const handleVideoEnded = () => {
    const video = videoRef.current;
    video.play();
  };
  // header sticky after scroll
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

  const [scroll, setScroll] = useState(0);
  const [scrollClass, setScrollClass] = useState('');
  const fullpageApiRef = useRef<FullpageApi>(null); 
  useEffect(() => {
    const handleScroll = () => {
      const scrollDiv = document.querySelector('.list_manage');
      const scrollTop = scrollDiv.scrollTop;

      setScroll(scrollTop);

      if (scrollTop < 1) {
        // setScrollClass('scroll_1');
        document.querySelector('.progress').scrollTop = 1;
        console.log("1");
        const back_ghbdd = document.getElementById('back_ghbdd');
        if (back_ghbdd) {
          back_ghbdd.style.backgroundImage = 'url("https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group.png")';
        }
      } else if (scrollTop > 548 && scrollTop < 600) {
        // setScrollClass('scroll_2');
        document.querySelector('.progress').scrollTop = 542;
        console.log("2");
        const back_ghbdd = document.getElementById('back_ghbdd');
        if (back_ghbdd) {
          back_ghbdd.style.backgroundImage = 'url("https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group-1.png")';
        }
      } else if (scrollTop > 1180 && scrollTop < 1300) {
        // setScrollClass('scroll_3');
        document.querySelector('.progress').scrollTop = 1101;
        console.log("3");
        const back_ghbdd = document.getElementById('back_ghbdd');
        if (back_ghbdd) {
          back_ghbdd.style.backgroundImage = 'url("https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group-2.png")';
        }
      } else if (scrollTop > 1748 && scrollTop < 1800) {
        // setScrollClass('scroll_4');
        document.querySelector('.progress').scrollTop = 1660;
        console.log("4");
        const back_ghbdd = document.getElementById('back_ghbdd');
        if (back_ghbdd) {
          back_ghbdd.style.backgroundImage = 'url("https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group-3.png")';
        }
      } else if (scrollTop > 2120 && scrollTop < 2200) {
        // setScrollClass('scroll_5');
        document.querySelector('.progress').scrollTop = 2231;
        console.log("5");
        const back_ghbdd = document.getElementById('back_ghbdd');
        if (back_ghbdd) {
          back_ghbdd.style.backgroundImage = 'url("https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group-4.png")';
        }
      } else if (scrollTop > 2520 && scrollTop < 2560) {
        // setScrollClass('scroll_6');
        document.querySelector('.progress').scrollTop = 2772;
        console.log("6");
        const back_ghbdd = document.getElementById('back_ghbdd');
        if (back_ghbdd) {
          back_ghbdd.style.backgroundImage = 'url("https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group-5.png")';
        }
      } else if (scrollTop > 2575) {
        
        if (fullpageApiRef.current) {
          fullpageApiRef.current.moveSectionDown(); // Use the Fullpage.js API instance to move down a section
        }
      }

      const docHeight = scrollDiv.scrollHeight;
      const winHeight = scrollDiv.clientHeight;
      const lineHeight = (scrollTop / (docHeight - winHeight)) * 5;

      const progressLine = document.querySelector('.progress .line');
      progressLine.style.height = `${scrollTop}px`;
    };

    const scrollDiv = document.querySelector('.list_manage');
    scrollDiv.addEventListener('scroll', handleScroll);
    return () => {
      scrollDiv.removeEventListener('scroll', handleScroll);
    };

  }, []);
  const fullpageOptions = {

    scrollOverflow: true,
    scrollOverflowOptions: { scrollbars: true },
  };

  return (

    <StaticQuery
      query={graphql`
			query {
				allWpSolution(sort: {id: ASC}) {
					edges {
					  node {
						slug
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
				  },

				  wpPage(id: {eq: "cG9zdDo3"}) {
					homeSlider {
					  about
					  sliderHeading
					}
					homePartnerSection {
					  partnerDetail
					  partner {
						partnerImage {
						  sourceUrl
						}
                        siteUrl
					  }
					}
				  }
          allWpEvents(limit: 1, sort: {date: DESC}) {
            edges {
              node {
                id
                title
                slug
                news {
                  homePageImage {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
          }
          allWpPost(limit: 1, sort: {date: DESC}) {
            edges {
              node {
                id
                title
                slug
                news {
                  homePageImage {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
          }
          allWpPartners(limit: 1, sort: {date: DESC}) {
            edges {
              node {
                id
                title
                slug
                news {
                  homePageImage {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
          }
          allWpVideos(limit: 1, sort: {date: DESC}) {
            edges {
              node {
                id
                title
                slug
                news {
                  homePageImage {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
          }
          allWpNews(limit: 1, sort: {date: DESC}) {
            edges {
              node {
                id
                title
                slug
                news {
                  homePageImage {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
          }
                
			}
		`}
      render={data => (
        <>
          {isFullpage ? (
            <>
              <Layout>
                <ReactFullpage
                  scrollingSpeed={1000} /* Options here */
                  onLeave={handleLeave}
                  afterLoad={(origin, destination, direction) => {
                    // Handle section load event
                    console.log('--- afterLoad ---');
                    console.log(origin, destination, direction);
                  }}
                  {...fullpageOptions}
                  render={({ fullpage_Api }) => (
                    <>
                      <ReactFullpage.Wrapper>
                        <section className="section">
                          <div className="secation01 homebnr bhg">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="our_main_heading">
                                    <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.sliderHeading }}></h1>
                                    <div className="imge_for_mobile">
                                      <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/Mask-group-6-1-1.png" />
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
                                    <div className="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.about }}>
                                    </div>
                                    {/* <div className="btn_g">
                                      <Link to="/about">View More</Link>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className="section id_hide" id="stopr_de" >
                          <div className={`secation03 back_ghbd bhg sliderimg ${scrollClass}`} id='back_ghbdd' >
                            <div className="container">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="our_about_wrap">
                                    <h2 className="text-start">Solutions</h2>
                                    <h4 className="text-start">State-of-the-art technology combined with relentless effort towards excellence</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-1">
                                  <div className="progress">
                                    <ul>
                                      <span className="line"></span>
                                      <li><a href="#sec1">I</a></li>
                                      <li><a href="#sec2">II</a></li>
                                      <li><a href="#sec3">III</a></li>
                                      <li><a href="#sec4">IV</a></li>
                                      <li><a href="#sec5">V</a></li>
                                      <li><a href="#sec5">VI</a></li>
                                      <li><a href="#sec5">7</a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-11">
                                  <div class="list_manage">
                                    <div class="row">
                                      <div class="col-md-6">
                                        <div class="new_idf">
                                          <div class="start_y" id="sec1">
                                            <h2 class="text-start">MINING</h2>
                                            <p>Revolutionise the future of critical earth mineral discovery and extraction</p>
                                            <ul>
                                              <li>Reduce CAPEX for exploratory critical earth mining and improve ESG using artificial intelligence, high-resolution satellite images, data, and sensors</li>
                                              <li>Interpretation of aeromagnetic and satellite imagery data to produce structural and geological maps that help target deposits</li>
                                              <li>Improve demand and supply chain mapping in mining commodities by monitoring different aspects of the supply chain, ranging from mining activity, port inventory and industrial plant production</li>
                                              <li>Near real-time emission monitoring in mining</li>
                                            </ul>
                                          </div>
                                          <div class="start_y" id="sec2">
                                            <h2 class="text-start">AGRICULTURE</h2>
                                            <p>Develop next-generation agri-tech solutions, including precision farming, agri-insurance and agriculture monitoring</p>
                                            <ul>
                                              <li>Use real-time data relating crop condition, as well as information on soil, carbon levels, air and temperature to provide analytic insights on crop rotation, planting and harvesting times</li>
                                              <li>Remotely detect pests and differentiate crop species and weeds to improve crop yield targets and crop health</li>
                                              <li>Detect changes in land use and cover from high-resolution satellite data, the more accurate assess management of agriculture, forestry and coastal resources</li>
                                              <li>Improve agri-banking and crop insurance by reducing losses with smarter risk estimates and real-time monitoring</li>
                                            </ul>
                                          </div>
                                          <div class="start_y" id="sec3">
                                            <h2 class="text-start">INFRASTRUCTURE</h2>
                                            <p>Improve management of infrastructure risk through proactive monitoring</p>
                                            <ul>
                                              <li>Transmission line planning and route optimization using machine learning and satellite data</li>
                                              <li>Airport information management using geospatial data and machine learning</li>
                                              <li>Monitor sophisticated infrastructures for development, site feasibility analysis and risk management</li>
                                              <li>Rail-road conditions at regional and national levels</li>
                                              <li>Remote location monitoring of assets and infrastructure</li>
                                            </ul>
                                          </div>
                                          <div class="start_y" id="sec4">
                                            <h2 class="text-start">ENVIRONMENT </h2>
                                            <p>Protecting the environment through accurate earth observation datasets</p>
                                            <ul>
                                              <li>Monitor methane emissions, as well as carbon levels</li>
                                              <li>Provide more accurate environmental impact assessments through to use of spatially explicit and frequently updated data</li>
                                              <li>Monitor inland waterway health</li>
                                            </ul>
                                          </div>
                                          <div class="start_y" id="sec5">
                                            <h2 class="text-start">DISASTER AND RECOVERY</h2>
                                            <p>Offer solutions to better predict, monitor, assess and respond to natural disasters</p>
                                            <ul>
                                              <li>Improve disaster response and management through analysis of natural disasters like earthquake, cyclones, floods, and bushfire damages</li>
                                              <li>Aid recovery by detecting near real time changes to allow immediate relief measures to be taken during natural calamities</li>
                                            </ul>
                                          </div>
                                          <div class="start_y" id="sec6">
                                            <h2 class="text-start">DEFENCE AND SECURITY</h2>
                                            <p>Use high-resolution satellite data, AI and machine learning to derive intelligent information for defence surveillance and security monitoring</p>
                                            <ul>
                                              <li>Identify military resources and troop movement to aid with relief and security efforts</li>
                                              <li>Detect chemical seepages across land classes</li>
                                            </ul>
                                          </div>
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
                          <div className="section04 bhg extra_padinng">
                            <div className="container">
                              <div className="row align-items-center">
                                <div className="col-md-6">
                                  <div className="ourr_tsgdf">
                                    <ul>
                                      <li>
                                        <ul>

                                          {
                                            getSection(data, 0, 5).map(url => (
                                              <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
                                            ))
                                          }
                                        </ul>
                                      </li>
                                      <li>
                                        <ul>

                                          {
                                            getSection(data, 5, 10).map(url => (
                                              <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
                                            ))
                                          }
                                        </ul>
                                      </li>
                                      <li>
                                        <ul>

                                          {
                                            getSection(data, 10, 15).map(url => (
                                              <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
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
                                    {/* <div className="btn_g">
                                  <Link to="/partner">Meet Us</Link>
                                </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className="section">
                          <div className="secation05 bhg">
                            <div className="container">
                              <div className="row">

                                <div className="col-md-12">
                                  <div className="our_about_wrap">
                                    <h2 className="text-start">What's New</h2>
                                    <h4 className="text-start">Get the latest updates and helpful information</h4>


                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="htbdgh">
                              <div className="htbdgh">


                                <div className="gidr_news">
                                  <div className="grif_wrap grif_wrap1">
                                    <div className="itemg_hbg ngpv1">
                                      <div className="itemsnq itemsnq1">
                                        {data && data.allWpPost && data.allWpPost.edges && data.allWpPost.edges.map((edge, i) => {
                                          const allddt = edge.node;
                                          return (
                                            <div className="our_tsadr">

                                              <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                              <div className="our_tfdsd">
                                                <div className="gtfrd">
                                                  <h3>
                                                    <Link to={"/blog/" + allddt.slug}>
                                                      {allddt.title.slice(0, 50)}...
                                                    </Link></h3>

                                                  <p>  {allddt.excerpt.slice(0, 50)}... </p>
                                                  <div className="our_tascrt">
                                                    <Link to="/blog">View All Posts</Link>

                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        })}

                                      </div>
                                      <div className="itemsnq itemsnq2">
                                        {data && data.allWpNews && data.allWpNews.edges && data.allWpNews.edges.map((edge, i) => {
                                          const allddt = edge.node;
                                          return (
                                            <div className="our_tsadr">
                                              <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                              <div className="our_tfdsd">
                                                <div className="gtfrd">
                                                  <h3>
                                                    <Link to={"/news/" + allddt.slug}>
                                                      {allddt.title.slice(0, 50)}...
                                                    </Link></h3>
                                                  <p>  {allddt.excerpt.slice(0, 50)}... </p>
                                                  <div className="our_tascrt">
                                                    <Link to="/whats_new">View All News</Link>

                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        })}

                                      </div>
                                    </div>
                                    <div className="itemg_hbg ngpv2">
                                      {data && data.allWpEvents && data.allWpEvents.edges && data.allWpEvents.edges.map((edge, i) => {
                                        const allddt = edge.node;
                                        return (
                                          <div className="itemsnq itemsnq3">
                                            <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                            <div className="our_tfdsd">
                                              <div className="gtfrd">
                                                <h3>
                                                  <Link to={"/event/" + allddt.slug}>
                                                    {allddt.title.slice(0, 50)}...
                                                  </Link></h3>
                                                <p>{allddt.excerpt.slice(0, 50)}...</p>
                                                <div className="our_tascrt">
                                                  <Link to="/event">View All Events</Link>

                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      })}

                                    </div>
                                  </div>
                                  <div className="grif_wrap grif_wrap2">
                                    {data && data.allWpPartners && data.allWpPartners.edges && data.allWpPartners.edges.map((edge, i) => {
                                      const allddt = edge.node;
                                      return (
                                        <div className="itemsnq itemsnq4">
                                          <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                          <div className="our_tfdsd">
                                            <div className="gtfrd">
                                              <h3>
                                                <Link to={"/partner/" + allddt.slug}>
                                                  {allddt.title.slice(0, 50)}...
                                                </Link>
                                              </h3>
                                              <p>
                                                {allddt.excerpt.slice(0, 50)}...</p>
                                              <div className="our_tascrt">
                                                <Link to="/partner">View All Partners</Link>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      )
                                    })}

                                    {data && data.allWpVideos && data.allWpVideos.edges && data.allWpVideos.edges.map((edge, i) => {
                                      const allddt = edge.node;
                                      return (
                                        <div className="itemsnq itemsnq5">
                                          <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                          <div className="our_tfdsd">
                                            <div className="gtfrd">
                                              <h3>
                                                <Link to={"/video/" + allddt.slug}>
                                                  {allddt.title.slice(0, 50)}...
                                                </Link>
                                              </h3>
                                              <p>
                                                {allddt.excerpt.slice(0, 50)}...</p>
                                              <div className="our_tascrt">
                                                <Link to="/videos">View All Videos</Link>

                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      )
                                    })}

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <Footer />
                      </ReactFullpage.Wrapper>
                    </>
                  )}
                />
              </Layout>
            </>
          ) : (
            <Layout>
              <div>
                <section className="section">
                  <div className="secation01 homebnr bhg">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="our_main_heading" >
                            <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.sliderHeading }}></h1>
                            <div className="imge_for_mobile">
                              <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/Mask-group-6-1-1.png" />
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
                            <div className="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.about }}>
                            </div>
                            {/* <div className="btn_g">
                              <Link to="/about">View More</Link>
                            </div> */}
                          </div>
                          <div class="col-md-5 fok_ng_hggth" style={{ position: 'relative' }}>
                            <div class="kj_bgvcdfs">
                              <div class="image_gnbdd">
                                <div class="roghrtf">
                                </div>
                                <div class="image_hfgfss">
                                  <video
                                    id="myVideo"
                                    preload=""
                                    src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4"
                                    ref={videoRef}
                                    autoPlay
                                    muted
                                    onEnded={handleVideoEnded}

                                    className="video">

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
                <section className="section id_hide" id="stopr_de">
                  <div className={`secation03 back_ghbd bhg sliderimg ${scrollClass}`}>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="our_about_wrap">
                            <h2 className="text-start">Solutions</h2>
                            <h4 className="text-start">State-of-the-art technology combined with relentless effort towards excellence</h4>
                          </div>
                        </div>
                      </div>
                      <div className="row mobrow">
                        <div className="col-md-12">
                          <div class="list_inner_Wrsd">
                            <div class="our_data_for_mob">
                              <h2 class="text-start">MINING</h2>
                              <p>Revolutionise the future of critical earth mineral discovery and extraction</p>
                              <ul>
                                <li>Reduce CAPEX for exploratory critical earth mining and improve ESG using artificial intelligence, high-resolution satellite images, data, and sensors</li>
                                <li>Interpretation of aeromagnetic and satellite imagery data to produce structural and geological maps that help target deposits</li>
                                <li>Improve demand and supply chain mapping in mining commodities by monitoring different aspects of the supply chain, ranging from mining activity, port inventory and industrial plant production</li>
                                <li>Near real-time emission monitoring in mining</li>
                              </ul>
                              <div class="imged">
                                <img src="https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group.png" />
                              </div>
                            </div>
                            <div class="our_data_for_mob">
                              <h2 class="text-start">AGRICULTURE</h2>
                              <p>Develop next-generation agri-tech solutions, including precision farming, agri-insurance and agriculture monitoring</p>
                              <ul>
                                <li>Use real-time data relating crop condition, as well as information on soil, carbon levels, air and temperature to provide analytic insights on crop rotation, planting and harvesting times</li>
                                <li>Remotely detect pests and differentiate crop species and weeds to improve crop yield targets and crop health</li>
                                <li>Detect changes in land use and cover from high-resolution satellite data, the more accurate assess management of agriculture, forestry and coastal resources</li>
                                <li>Improve agri-banking and crop insurance by reducing losses with smarter risk estimates and real-time monitoring</li>
                              </ul>
                              <div class="imged">
                                <img src="https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group-1.png" />
                              </div>
                            </div>
                            <div class="our_data_for_mob">
                              <h2 class="text-start">INFRASTRUCTURE</h2>
                              <p>Improve management of infrastructure risk through proactive monitoring</p>
                              <ul>
                                <li>Transmission line planning and route optimization using machine learning and satellite data</li>
                                <li>Airport information management using geospatial data and machine learning</li>
                                <li>Monitor sophisticated infrastructures for development, site feasibility analysis and risk management</li>
                                <li>Rail-road conditions at regional and national levels</li>
                                <li>Remote location monitoring of assets and infrastructure</li>
                              </ul>
                              <div class="imged">
                                <img src="https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group-2.png" />
                              </div>
                            </div>
                            <div class="our_data_for_mob">
                              <h2 class="text-start">ENVIRONMENT </h2>
                              <p>Protecting the environment through accurate earth observation datasets</p>
                              <ul>
                                <li>Monitor methane emissions, as well as carbon levels</li>
                                <li>Provide more accurate environmental impact assessments through to use of spatially explicit and frequently updated data</li>
                                <li>Monitor inland waterway health</li>
                              </ul>
                              <div class="imged">
                                <img src="https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group-3.png" />
                              </div>
                            </div>
                            <div class="our_data_for_mob">
                              <h2 class="text-start">DISASTER AND RECOVERY</h2>
                              <p>Offer solutions to better predict, monitor, assess and respond to natural disasters</p>
                              <ul>
                                <li>Improve disaster response and management through analysis of natural disasters like earthquake, cyclones, floods, and bushfire damages</li>
                                <li>Aid recovery by detecting near real time changes to allow immediate relief measures to be taken during natural calamities</li>
                              </ul>
                              <div class="imged">
                                <img src="https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group-4.png" />
                              </div>
                            </div>
                            <div class="our_data_for_mob">
                              <h2 class="text-start">DEFENCE AND SECURITY</h2>
                              <p>Use high-resolution satellite data, AI and machine learning to derive intelligent information for defence surveillance and security monitoring</p>
                              <ul>
                                <li>Identify military resources and troop movement to aid with relief and security efforts</li>
                                <li>Detect chemical seepages across land classes</li>
                              </ul>
                              <div class="imged">
                                <img src="https://www.qlspace.com.au/wp-content/uploads/2023/04/Mask-group-5.png" />
                              </div>
                            </div>
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
                                      <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
                                    ))
                                  }
                                </ul>
                              </li>
                              <li>
                                <ul>
                                  {
                                    getSection(data, 5, 10).map(url => (
                                      <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
                                    ))
                                  }
                                </ul>
                              </li>
                              <li>
                                <ul>
                                  {
                                    getSection(data, 10, 15).map(url => (
                                      <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
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
                            {/* <div className="btn_g">
                                  <Link to="/partner">Meet Us</Link>
                                </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section">
                  <div className="secation05 bhg">
                    <div className="container">
                      <div className="row">

                        <div className="col-md-12">
                          <div className="our_about_wrap">
                            <h2 className="text-start">What's New</h2>
                            <h4 className="text-start">Get the latest updates and helpful information</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="htbdgh">
                      <div className="htbdgh">
                        <div className="gidr_news">
                          <div className="grif_wrap grif_wrap1">
                            <div className="itemg_hbg ngpv1">
                              <div className="itemsnq itemsnq1">
                                {data && data.allWpPost && data.allWpPost.edges && data.allWpPost.edges.map((edge, i) => {
                                  const allddt = edge.node;
                                  return (
                                    <div className="our_tsadr">
                                      <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                      <div className="our_tfdsd">
                                        <div className="gtfrd">
                                          <h3>
                                            <Link to={"/blog/" + allddt.slug}>
                                              {allddt.title.slice(0, 50)}...
                                            </Link></h3>
                                          <p>  {allddt.excerpt.slice(0, 50)}... </p>
                                          <div className="our_tascrt">
                                            <Link to="/blog">View All Posts</Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                              <div className="itemsnq itemsnq2">
                                {data && data.allWpNews && data.allWpNews.edges && data.allWpNews.edges.map((edge, i) => {
                                  const allddt = edge.node;
                                  return (
                                    <div className="our_tsadr">
                                      <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                      <div className="our_tfdsd">
                                        <div className="gtfrd">
                                          <h3>
                                            <Link to={"/news/" + allddt.slug}>
                                              {allddt.title.slice(0, 30)}...
                                            </Link></h3>
                                          <p>  {allddt.excerpt.slice(0, 30)}... </p>
                                          <div className="our_tascrt">
                                            <Link to="/whats_new">View All News</Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}

                              </div>
                            </div>
                            <div className="itemg_hbg ngpv2">
                              {data && data.allWpEvents && data.allWpEvents.edges && data.allWpEvents.edges.map((edge, i) => {
                                const allddt = edge.node;
                                return (
                                  <div className="itemsnq itemsnq3">
                                    <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                    <div className="our_tfdsd">
                                      <div className="gtfrd">
                                        <h3>
                                          <Link to={"/event/" + allddt.slug}>
                                            {allddt.title.slice(0, 30)}...
                                          </Link></h3>
                                        <p>{allddt.excerpt.slice(0, 30)}...</p>
                                        <div className="our_tascrt">
                                          <Link to="/event">View All Events</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}

                            </div>
                          </div>
                          <div className="grif_wrap grif_wrap2">
                            {data && data.allWpPartners && data.allWpPartners.edges && data.allWpPartners.edges.map((edge, i) => {
                              const allddt = edge.node;
                              return (
                                <div className="itemsnq itemsnq4">
                                  <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                  <div className="our_tfdsd">
                                    <div className="gtfrd">
                                      <h3>
                                        <Link to={"/partner/" + allddt.slug}>
                                          {allddt.title.slice(0, 30)}...
                                        </Link>
                                      </h3>
                                      <p>
                                        {allddt.excerpt.slice(0, 30)}...</p>
                                      <div className="our_tascrt">
                                        <Link to="/partner">View All Partners</Link>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              )
                            })}
                            {data && data.allWpVideos && data.allWpVideos.edges && data.allWpVideos.edges.map((edge, i) => {
                              const allddt = edge.node;
                              return (
                                <div className="itemsnq itemsnq5">
                                  <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                  <div className="our_tfdsd">
                                    <div className="gtfrd">
                                      <h3>
                                        <Link to={"/video/" + allddt.slug}>
                                          {allddt.title.slice(0, 30)}...
                                        </Link>
                                      </h3>
                                      <p>
                                        {allddt.excerpt.slice(0, 30)}...</p>
                                      <div className="our_tascrt">
                                        <Link to="/videos">View All Videos</Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Layout>
          )}
        </>
      )}
    />
  )
}
export default Tab;