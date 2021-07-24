/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";
import cfpalace from "assets/img/theme/cf-palace.png";
import busmall from "assets/img/theme/bus-mall.png";
import codefellows from "assets/img/theme/codefellows.png";
import salmon from "assets/img/theme/salmoncookies.png";
import family from "assets/img/theme/family.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        See a problem? Solve it!{" "}
                      </h1>
                      <p className="lead text-white">
                        The thing that excites me the most about technology is the ability to have self reliance. I like that I can see a problem, and develop a solution all on my own. 
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Salmon Cookies
                          </h6>
                          <p className="description mt-3">
                            The world's best place, for the world's worst cookies
                          </p>
                          <div>
                            <img 
                              src={salmon} 
                              alt="Salmon Cookies" 
                              style={{ width: "100%" }}
                            >
                            </img>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            Bus Mall
                          </h6>
                          <p className="description mt-3">
                            For when you're on the bus and want to buy things you don't need.
                          </p>
                          <div>
                          <img 
                              src={busmall} 
                              alt="Bus Mall" 
                              style={{ width: "100%" }}
                            >
                            </img>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            Coming Soon
                          </h6>
                          <p className="description mt-3">
                            Stay tuned for more exciting development projects in the near future
                          </p>
                          <div>
                          <img 
                              src={codefellows} 
                              alt="CodeFellows logo" 
                              style={{ width: "100%" }}
                            >
                            </img>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={cfpalace}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">

                    <h3>Code Fellows Palace</h3>
                    <p>
                      This app is a lot of fun. If you like playing slot machines, this is the game for you! Enjoy trying to match faces from all of the CodeFellows staff. 
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="My family"
                    className="img-fluid floating"
                    src={family}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">

                    <h3>My Background</h3>
                    <p>
                      My name is Phil Murphy. I’m a cloud support engineer for AWS, and an aspiring software developer. Prior to moving into the tech industry, I was a Korean linguist in the United States Air Force. This experience taught me that I had a unique skill for learning things quickly. I believe that’s my greatest offering to a team, the ability to run with new tasks and get them done. In my free time I enjoy watching and playing basketball, and spending time with my wife and 2 daughters.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
