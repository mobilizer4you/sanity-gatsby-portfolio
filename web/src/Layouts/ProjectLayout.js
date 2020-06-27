import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { Carousel, Row, Col } from "react-bootstrap"
import Image from "gatsby-image"
import { useInView } from "react-intersection-observer"
import CustomFooter from "../components/CustomFooter"

const Container = styled.div`
  color: #333;
  font-family: "Montserrat", sans-serif;
  .showcase {
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    margin: 0em;
    z-index: 1;
    background-size: cover;
    background-position: center;
    color: #fff;
  }
  .footercase {
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0em;
    z-index: 1;
    background-size: cover;
    background-position: center;
    color: #fff;
    transition: all 0.4s;
    opacity: 0.2 !important;
    height: 30vw;
    &:hover {
      opacity: 1 !important;
    }
  }
  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 64px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
  }
  h6 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 5em;
    font-weight: 600;
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
  }
  .next-project-link {
    text-align: center;
    margin: 15em 0em 0em 0em;
    p {
      font-size: 14px;
      font-weight: 600;
    }
    h1 {
      color: #fff;
      transition: all 0.4s;
      line-height: 1;
      -webkit-text-stroke: 2px #333;
      padding-top: 10%;
      &:hover {
        color: #333;
      }
    }
  }
  .desc-overlay {
    position: absolute !important;
    width: 100%;
    height: 120%;
    top: 0;
    background: #fff;
    transition: height 1.5s;
    transform: rotate(1deg);
  }
  .description {
    z-index: 2;
    margin: 12em auto;
    max-width: 700px;
    div {
      position: relative;
    }
    h2 {
      padding-left: 1.5em;
    }
    p {
      margin-top: 2.5em;
      text-align: justify;
      line-height: 2;
      padding: 0em 1em;
    }
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  .carousel-item {
    box-sizing: border-box;
  }
  .carousel {
    margin: auto;
    max-width: 1600px;
    padding: 0em 1em;
    box-sizing: border-box;
  }
  .carousel-indicators {
    bottom: -3em;
  }
  .carousel-indicators li {
    width: 10px;
    height: 10px;
    border-radius: 100px;
    border: none;
    background: #333;
  }
  .carousel-2,
  .carousel-3 {
    display: none;
  }
  .carousel-flex {
    display: flex;
  }
  .carousel-img {
    padding: 10%;
  }
  .portfolioContainer {
    z-index: 2;
  }
  .space {
    height: 300px;
  }
  @media only screen and (max-width: 1000px) {
    .carousel-1 {
      display: none;
    }
    .carousel-2 {
      display: block;
    }
    .carousel-img {
      width: calc(50% - 1em);
      height: 65vw;
      padding: 10%;
    }
  }
  @media only screen and (max-width: 580px) {
    h1 {
      font-size: 48px;
    }
    .carousel-2 {
      display: none;
    }
    .carousel-3 {
      display: block;
    }
    .carousel-img {
      width: calc(100% - 1em);
      height: 110vw;
      padding: 10%;
    }
  }
  .hidden-item {
    position: absolute;
    top: 50px;
  }
`

export default function ProjectLayout({ data }) {
  const [param, setParam] = useState(1)
  const [ref1, inView1] = useInView({
    threshold: 0,
  })
  const [ref2, inView2] = useInView({
    threshold: 0,
  })
  useEffect(() => {
    setTimeout(() => {
      setParam(0)
    }, 15)

    setTimeout(() => {
      if (param) {
        console.log("param", param)
        document.querySelector("#cont").scrollBy({
          top: 150,
          behavior: "smooth",
        })
      }
    }, 10)

    if (inView1) {
      document.querySelector(".desc-overlay-1").style.transform =
        "translateY(100%)"
      document.querySelector(".desc-overlay-1").style.transition = `all 1.5s`
    }
    if (inView2) {
      document.querySelector(".desc-overlay-2").style.transform =
        "translateY(100%)"
      document.querySelector(".desc-overlay-2").style.transition = `all 2.5s`
    }

    // document
    //   .querySelector(".portfolioContainer")
    //   .addEventListener("scroll", e => {
    //     console.log(document.querySelector(".portfolioContainer").scrollTop)
    //     console.log(document.querySelector(".description").scrollTop)
    //   })
  })

  return (
    <div>
      <Container className="portfolioContainer" id="cont">
        <div style={{backgroundColor:"white"}}>
        <h6 className="hidden-item" />
        <div
          className="showcase"
          style={{
            backgroundImage: `url(${require(`../assets/img/${data.sanityProject.bgPath}`)})`,
          }}
        >
          <h1
            data-sal="slide-up"
            data-sal-duration="1300"
            data-sal-delay="100"
            data-sal-easing="ease"
            className="title"
          >
            {data.sanityProject.title}
          </h1>
          <p
            data-sal="slide-up"
            data-sal-duration="1300"
            data-sal-delay="300"
            data-sal-easing="ease"
            className="title"
          >
            Explore more
          </p>
        </div>
        <div className="description">
          <div>
            <div className="desc-overlay desc-overlay-1" ref={ref1} />
            <h2>{data.sanityProject.descriptionTitle}</h2>
          </div>
          <div>
            <div className="desc-overlay desc-overlay-2" ref={ref2} />
            <p>{data.sanityProject.description}</p>
          </div>
        </div>
        <div>
          <Row className="justify-content-md-center">
            <Col xs lg="5">
              <div className="carousel-img">
                <Image
                  fluid={data.sanityProject.image1.asset.fluid}
                  alt="title"
                />
              </div>
              <div className="carousel-img">
                <Image
                  fluid={data.sanityProject.image3.asset.fluid}
                  alt="title"
                />
              </div>
              <div className="carousel-img">
                <Image
                  fluid={data.sanityProject.image5.asset.fluid}
                  alt="title"
                />
              </div>
            </Col>
            <Col md="auto"></Col>
            <Col xs lg="5" style={{ marginTop: "20%", right: "0" }}>
              <div className="carousel-img">
                <Image
                  fluid={data.sanityProject.image2.asset.fluid}
                  alt="title"
                />
              </div>
              <div className="carousel-img">
                <Image
                  fluid={data.sanityProject.image4.asset.fluid}
                  alt="title"
                />
              </div>
              <div className="carousel-img">
                <Image
                  fluid={data.sanityProject.image6.asset.fluid}
                  alt="title"
                />
              </div>

            </Col>
          </Row>
        </div>
        {data.allSanityProject.edges[0].next.title !==
          data.sanityProject.title ? (
            <div className="next-project-link">
              <Fade bottom>
                <Link to={data.allSanityProject.edges[0].next.slug.current}>
                  <div
                    className="footercase"
                    style={{
                      opacity: '0.93',
                      display: 'block',
                      backgroundImage: `url(${require(`../assets/img/${data.allSanityProject.edges[0].next.bgPath}`)})`,
                    }}
                  >
                    <p>Next Project</p>
                    <h1>{data.allSanityProject.edges[0].next.title}</h1>
                  </div>
                </Link>
              </Fade>
            </div>
          ) : (
            <div className="next-project-link">
              <Fade bottom>


                <Link to={data.allSanityProject.edges[1].previous.slug.current}>
                  <div
                    className="footercase"
                    style={{
                      opacity: '0.93',
                      display: 'block',
                      backgroundImage: `url(${require(`../assets/img/${data.allSanityProject.edges[1].previous.bgPath}`)})`,
                    }}
                  >
                    <p>Next Project</p>
                    <h1>{data.allSanityProject.edges[1].previous.title}</h1>
                  </div>
                </Link>

              </Fade>

            </div>
            
          )}
          </div>
      <div className="space" ></div>
      </Container>
      <div style={{zIndex: '-1', bottom: '0px', position: 'fixed'}}>
        <CustomFooter />
      </div>
    </div>                
  )
}
