import React from "react"
import { useState, useEffect } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import "../stylee.css"
import "../responsive.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import EvlonPopUp from '../components/Allvideospopup/Evlonpopup/evlonpopup';
export default ({ data }) => {

    const videos = data.allWpVideos.edges[0].node

    const [isOpen, setIsOpen] = useState(false);
    const [popUpUrl, setPopUpUrl] = useState('');
    const handleOpenModal = (url) => {
        setIsOpen(true);
        setPopUpUrl(url);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    library.add(faEnvelope, faPlay);
    const popurlvideo = videos.video.videoUrl;
    return (

        <Layout>

            <main>
                <section className="section new00">
                    <div className="secation01 bhg secn_abouts">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="our_main_heading text-center">
                                        <div className="bread_cumg">
                                            <h1 className="text-center"><strong>Videos </strong> details</h1>
                                            <p>{videos.title}</p>
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
                    <div className="section_nb">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="news_details">
                                        <div className="date_wrap">
                                            <p>{videos.date}</p>
                                        </div>
                                        <div className="heading_news">
                                            <h1>{videos.title}</h1>
                                        </div>
                                        <div className="inner_ghv vedio_details">
                                            <img src={videos.featuredImage.node.sourceUrl} />
                                            <div className="video_incon_wrap" id="343">

                                                <div className="icon_fgb" onClick={() => handleOpenModal(videos.video.videoUrl + "?autoplay=1")} >
                                                    <FontAwesomeIcon icon={faPlay} />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="cont_news_details">
                                            <div className="cont_wrsf">
                                                <div className="col-md-12">

                                                    <div dangerouslySetInnerHTML={{ __html: videos.content }} />


                                                    <div className="link_for_more"><p><b><a href="https://spacenews.com/musk-predicts-next-starship-launch-in-a-couple-months/#:~:text=Musk%20estimated%20SpaceX%20will%20attempt,nearly%20100%25%20within%2012%20months." target="_blank" rel="noopener">For  More  Information</a></b></p>
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
                <section>
                    <EvlonPopUp
                        isOpen={isOpen}
                        onClose={handleCloseModal}
                        videoSrc={popUpUrl}
                    />
                </section>

            </main>

        </Layout>

    )
}

export const query = graphql`
  query($slug: String!) {
    allWpVideos (filter: { slug: { eq: $slug } }) {
        edges {
          node {
            id
            title            
            excerpt
            slug
            date(formatString: "DD MMMM yyyy")
            content
            video {
                videoUrl
              }
            featuredImage {
              node {
                sourceUrl
              }
            }
           
          }
        }
      }
  }`