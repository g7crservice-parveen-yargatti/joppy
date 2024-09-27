import { useState } from "react";
import { Card, Carousel, Col, Row, Steps } from "antd";
import { motion } from "framer-motion";

const { Step } = Steps;

function Employers() {
  const [currentStep, setCurrentStep] = useState(0);
  const [sideImage, setSideImage] = useState("../../schedule.png");

  const handleStepHover = (step: any, image: any) => {
    setCurrentStep(step);
    setSideImage(image);
  };

  return (
    <Col
      style={{
        flex: 1,
        padding: "20px",
      }}
    >
      <Carousel autoplay dots pauseOnDotsHover dotPosition="bottom">
        <div>
          <Card
            bordered={true}
            style={{ width: "100%", backgroundColor: "#a8a6a6" }}
          >
            <Row gutter={16} align="middle">
              <Col
                xs={24}
                md="auto"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexBasis: "auto",
                }}
              >
                <img
                  src="../../techSelection.png"
                  alt="Tech selection process"
                  style={{
                    width: "150px",
                    height: "auto",
                    borderRadius: "5px",
                  }}
                />
              </Col>
              <Col xs={24} style={{ flex: 1 }}>
                <h1>Tech Selection Process & Collaborative Decision-Making</h1>
                <p>
                  In today's fast-paced technological landscape, the process of
                  selecting the right tools and frameworks has become a crucial
                  part of any business strategy.
                </p>
              </Col>
            </Row>
          </Card>
        </div>

        <div>
          <Card
            bordered={true}
            style={{ width: "100%", backgroundColor: "#a8a6a6" }}
          >
            <Row gutter={16} align="middle">
              <Col
                xs={24}
                md="auto"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexBasis: "auto",
                }}
              >
                <img
                  src="../../offer.png"
                  alt="Tech salaries and ecosystem report"
                  style={{
                    width: "150px",
                    height: "auto",
                    borderRadius: "5px",
                  }}
                />
              </Col>
              <Col xs={24} style={{ flex: 1 }}>
                <h1>Tech salaries and ecosystem report (Barcelona & Madrid)</h1>
                <p>
                  Spain has emerged as one of Europe’s most vibrant tech
                  ecosystems, with Barcelona and Madrid leading the charge as
                  hubs of innovation, entrepreneurship, and technological
                  growth.
                </p>
              </Col>
            </Row>
          </Card>
        </div>

        <div>
          <Card
            bordered={true}
            style={{ width: "100%", backgroundColor: "#a8a6a6" }}
          >
            <Row gutter={16} align="middle">
              <Col
                xs={24}
                md="auto"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexBasis: "auto",
                }}
              >
                <img
                  src="../../women-inTech.png"
                  alt="Women in Tech Diversity"
                  style={{
                    width: "150px",
                    height: "auto",
                    borderRadius: "5px",
                  }}
                />
              </Col>
              <Col xs={24} style={{ flex: 1 }}>
                <h1>Women In Tech Diversity and Equal Opportunity</h1>
                <p>
                  More than 15 pages of data, graphics, and opinions collected
                  from different women in the tech industry, using over 20
                  different data sources.
                </p>
              </Col>
            </Row>
          </Card>
        </div>

        <div>
          <Card
            bordered={true}
            style={{ width: "100%", backgroundColor: "#a8a6a6" }}
          >
            <Row gutter={16} align="middle">
              <Col
                xs={24}
                md="auto"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexBasis: "auto",
                }}
              >
                <img
                  src="../../report.png"
                  alt="Tech trends report 2023"
                  style={{
                    width: "150px",
                    height: "auto",
                    borderRadius: "5px",
                  }}
                />
              </Col>
              <Col xs={24} style={{ flex: 1 }}>
                <h1>Tech Trend Report: Predictions for 2023</h1>
                <p>
                  30 pages of trends, statistics, and data from tech sector
                  experts: web development professionals, IT department
                  managers, and recruiters.
                </p>
              </Col>
            </Row>
          </Card>
        </div>
      </Carousel>

      <Row gutter={[16, 16]} justify="space-between">
        <Col xs={24} sm={12} style={{ cursor: "pointer", marginTop: 23 }}>
          <Steps direction="vertical" size="small" current={currentStep}>
            <Step
              title={
                <motion.div
                  style={{
                    color: "black",
                    fontWeight: 700,
                    fontSize: "1.0rem",
                    lineHeight: "2.25rem",
                  }}
                  onMouseEnter={() => handleStepHover(0, "../../offer.png")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Post your offers in 5 minutes
                </motion.div>
              }
              description={
                <div
                  style={{
                    textAlign: "justify",
                    color: "rgb(107 114 128)",
                    letterSpacing: ".025em",
                    lineHeight: "1.5rem",
                  }}
                >
                  When you post a job offer, our team will optimize it to
                  maximize the reach and quality of the techies who will see it.
                  You can post as many offers as you want, and if you prefer, we
                  can do it for you.
                </div>
              }
              icon={
                <span>
                  <img
                    src="../../job.png"
                    alt="Step 1"
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </span>
              }
            />
            <Step
              title={
                <motion.div
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleStepHover(1, "../../source.png")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sourcing (50K techies)
                </motion.div>
              }
              description={
                <div
                  style={{
                    textAlign: "justify",
                    color: "rgb(107 114 128)",
                    letterSpacing: ".025em",
                    lineHeight: "1.5rem",
                  }}
                >
                  Our matching system will show your offers only to techies who
                  are not only active but also fit what you're looking for.
                </div>
              }
              icon={
                <span>
                  <img
                    src="../../dryness.png"
                    alt="Step 2"
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </span>
              }
            />
            <Step
              title={
                <motion.div
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleStepHover(2, "../../review.png")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Vetting (100% match with techies)
                </motion.div>
              }
              description={
                <div
                  style={{
                    textAlign: "justify",
                    color: "rgb(107 114 128)",
                    letterSpacing: ".025em",
                    lineHeight: "1.5rem",
                  }}
                >
                  We review all the techies who accept your offer to indicate
                  which people are the best fit for the position (salary
                  expectations, skills, location preferences, etc.), and we'll
                  also add our assessment.
                </div>
              }
              icon={
                <span>
                  <img
                    src="../../vetted.png"
                    alt="Step 3"
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </span>
              }
            />
            <Step
              title={
                <motion.div
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleStepHover(3, "../../schedule.png")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule interviews within 24 hours
                </motion.div>
              }
              description={
                <div
                  style={{
                    textAlign: "justify",
                    color: "rgb(107 114 128)",
                    letterSpacing: ".025em",
                    lineHeight: "1.5rem",
                  }}
                >
                  You can chat with all the candidates who accept your offers to
                  schedule interviews more quickly. Minimal ghosting—techies
                  want to interview with you.
                </div>
              }
              icon={
                <span>
                  <img
                    src="../../calendar.png"
                    alt="Step 4"
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </span>
              }
            />
          </Steps>
        </Col>

        <Col xs={24} sm={12}>
          <img
            src={sideImage}
            alt="Side"
            style={{
              width: "100%",
              height: "80%",
              borderRadius: "10px",
              alignContent: "center",
            }}
          />
        </Col>
      </Row>
    </Col>
  );
}

export default Employers;
