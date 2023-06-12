
import React, { useState, useEffect } from 'react';
import "../stylee.css";
import "../responsive.css"
import { Link, StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import EvlonPopUp from '../components/Allvideospopup/Evlonpopup/evlonpopup';
import Layout from '../components/layout/layout';

export default function Videos() {

    library.add(faEnvelope, faPlay)
    const [isOpen, setIsOpen] = useState(false);
    const [popUpUrl, setPopUpUrl] = useState('');
    const handleOpenModal = (url) => {
        setIsOpen(true);
        setPopUpUrl(url);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    return (
        <StaticQuery
            query={graphql`
        query {
            allWpVideos(sort: {date: DESC}) {
                edges {
                  node {
                    excerpt
                    content
                    title
                    slug
                    news {
                        archiveImage {
                          sourceUrl
                        }
                      }
                    video {
                      videoUrl
                    }
                    featuredImage {
                      node {
                        date(formatString: "DD MMMM yyyy")
                        sourceUrl
                        author {
                          node {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
        }
      `}
            render={(data) => {
                const videos = data.allWpVideos.edges.map((edge) => edge.node);
                const totalItems = videos.length;
                const totalPages = Math.ceil(totalItems / itemsPerPage);
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;

                const handlePageClick = (pageNumber) => {
                    setCurrentPage(pageNumber);
                };

                const renderPageNumbers = () => {
                    const pageNumbers = [];

                    if (currentPage > 1) {
                        pageNumbers.push(
                            <li key="prev">
                                <a href="#" onClick={() => handlePageClick(currentPage - 1)}>
                                    &laquo;
                                </a>
                            </li>
                        );
                    }

                    if (currentPage > 2) {
                        pageNumbers.push(
                            <li key="first">
                                <a href="#" onClick={() => handlePageClick(1)}>1</a>
                            </li>
                        );

                        if (currentPage > 3) {
                            pageNumbers.push(
                                <li key="dots-1">
                                    <span className="dots">...</span>
                                </li>
                            );
                        }
                    }

                    for (let i = 1; i <= totalPages; i++) {
                        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                            pageNumbers.push(
                                <li key={i} >
                                    <a href="#" className={currentPage === i ? 'active' : null} onClick={() => handlePageClick(i)}>{i}</a>
                                </li>
                            );
                        } else if (i === currentPage - 2 || i === currentPage + 2) {
                            pageNumbers.push(
                                <li key={`dots-${i}`}>
                                    <span className="dots">...</span>
                                </li>
                            );
                        }
                    }

                    if (currentPage < totalPages) {
                        pageNumbers.push(
                            <li key="next">
                                <a href="#" onClick={() => handlePageClick(currentPage + 1)}>
                                    &raquo;
                                </a>
                            </li>
                        );
                    }
                    return pageNumbers

                };
                return (
                    <Layout>
                        <section className="new00">
                            <div className="secation01 bhg secn_abouts">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="our_main_heading text-center">
                                                <div className="bread_cumg">
                                                    <h1 className="text-center"><strong>Our  </strong>Videos</h1>
                                                    <p>Get the latest updates and helpful information</p>
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
                        <section className="section">
                            <div className="whats_new_page">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="list_tab_wg">
                                                <ul>
                                                    <li ><Link to='/event'>Events</Link></li>
                                                    <li><Link to='/news'>News</Link></li>
                                                    <li><Link to='/blog'>Blogs</Link></li>
                                                    <li><Link to='/partner'>Partner News</Link></li>
                                                    <li className="active_cl"><Link to='/videos'>Videos</Link></li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list_mnbv">
                                <div className="container">
                                    <div className="row">
                                        {videos.slice(startIndex, endIndex).map((vido) => {
                                            const videourl = vido.video.videoUrl;
                                            return (
                                                <>
                                                    <div className="col-md-6" key={vido.id}>

                                                        <div className="our_lkhb">
                                                            <div className="imh_bc">
                                                                <div className="inner_ghv">
                                                                    <img src={vido.news.archiveImage.sourceUrl} />

                                                                    <div className="video_incon_wrap" id="343">

                                                                        <div className="icon_fgb" onClick={() => handleOpenModal(vido.video.videoUrl + "?autoplay=1")} >
                                                                            <FontAwesomeIcon icon={faPlay} />
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="date_wrad_news">
                                                                    <div className="date_rn">
                                                                        <div className="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span>{vido.featuredImage.node.date}</div>
                                                                    </div>
                                                                    <div className="oir_amin">
                                                                        <div className="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span>{vido.featuredImage.node.author && vido.featuredImage.node.author.node && vido.featuredImage.node.author.node.name}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="heading_nmb">
                                                                    <h4>
                                                                        <Link to={"/video/" + vido.slug}>
                                                                            {vido.title.split('').slice(0,50).join('')}...</Link>
                                                                    </h4>
                                                                    <div className="next_page">
                                                                        <Link to={"/video/" + vido.slug} className="read-more"> Read more
                                                                            <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}

                                        <ul className="pagination">{renderPageNumbers()}</ul>

                                    </div>
                                </div>
                            </div>

                        </section>
                        <section>
                            <EvlonPopUp
                                isOpen={isOpen}
                                onClose={handleCloseModal}
                                videoSrc={popUpUrl}
                            />
                        </section>


                    </Layout>
                )
            }}
        />

    )
}


