import React from "react"

//import Layout from "../components/layout"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import "../stylee.css"
import "../responsive.css"
export default ({ data }) => {

  const news = data.allWpNews.edges[0].node



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
                      <h1 className="text-center"><strong>News </strong> details</h1>
                      <p>{news.title}</p>
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
                      <p>{news.date}</p>
                    </div>
                    <div className="heading_news">
                      <h1>{news.title}</h1>
                    </div>
                    <div className="news_details_image">
                      <img src={news.featuredImage.node.sourceUrl} />
                    </div>
                    <div className="cont_news_details">
                      <div className="cont_wrsf">
                        <div className="col-md-12">

                          <div dangerouslySetInnerHTML={{ __html: news.content }} />


                          


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </Layout>

  )
}

export const query = graphql`
  query($slug: String!) {
    allWpNews (filter: { slug: { eq: $slug } }) {
        edges {
          node {
            id
            title            
            excerpt
            slug
            date(formatString: "DD MMMM yyyy")
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
           
          }
        }
      }
  }`