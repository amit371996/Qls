
import React from 'react';
import "../stylee.css";
import "../responsive.css"
import { useState } from 'react';
import { Link, StaticQuery, graphql, navigate } from "gatsby"
import Layout from '../components/layout/layout';

export default function Event() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    return (
        <StaticQuery
            query={graphql`
        query {
          allWpEvents(sort: {date: DESC}) {
            edges {
              node {
                content
                excerpt
                title
                slug
                link
                id
                news {
                    archiveImage {
                      sourceUrl
                    }
                  }
                featuredImage {
                  node {
                    caption
                    id
                    sourceUrl
                    title
                    author {
                      node {
                        name
                      }
                    }
                    date(formatString: "DD MMMM yyyy")
                  }
                }
              }
            }
          }
        }
      `}
            render={(data) => {
                const events = data.allWpEvents.edges.map((edge) => edge.node);
                const totalItems = events.length;
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
                        <div>
                            <section className="new00">
                                <div className="secation01 bhg secn_abouts">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="our_main_heading text-center">
                                                    <div className="bread_cumg">
                                                        <h1 className="text-center"><strong>Our  </strong> Events</h1>
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
                            <section className="sectionnewss">
                                <div className="whats_new_page">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="list_tab_wg">
                                                    <ul>
                                                        <li className="active_cl"><Link to='/app/event.js'>Events</Link></li>
                                                        <li ><Link to='/news'>News</Link></li>
                                                        <li><Link to='/blog'>Blogs</Link></li>
                                                        <li><Link to='/partner'>Partner News</Link></li>
                                                        <li><Link to='/videos'>Videos</Link></li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="list_mnbv">
                                    <div className="container">
                                        <div className="row">
                                            {events.slice(startIndex, endIndex).map((event) => {
                                                return (
                                                    <>
                                                        <div className="col-md-6" key={event.id}>
                                                            <div className="our_lkhb">
                                                                <div className="imh_bc">
                                                                    <div className="inner_ghv">
                                                                        <a href="https://www.qlspace.com.au/events/asias-most-prominent-tech-summit-umagine/">

                                                                            <img src={event.news.archiveImage.sourceUrl} />
                                                                        </a>
                                                                    </div>
                                                                    <div className="date_wrad_news">
                                                                        <div className="date_rn">
                                                                            <div className="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span> {event.featuredImage.node.date}</div>
                                                                        </div>
                                                                        <div className="oir_amin">
                                                                            <div className="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> {event.featuredImage.node.author && event.featuredImage.node.author.node && event.featuredImage.node.author.node.name}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="heading_nmb">
                                                                        <h4>
                                                                            <Link to={"/event/" + event.slug}>
                                                                                {event.title.split('').slice(0,50).join('')}...</Link>
                                                                        </h4>
                                                                        <div className="next_page">
                                                                            <Link to={"/event/" + event.slug} className="read-more"> Read more
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

                        </div>
                    </Layout>
                )
            }


            }

        />
    )
}


