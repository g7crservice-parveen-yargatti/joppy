import { Row, Col, Button, Card, Badge } from "antd";
import { motion } from "framer-motion";

function Techies() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Col
        style={{
          flex: 1,
          overflow: "auto",
          padding: "29px",
        }}
      >
        <Row>
          <Col
            xs={24}
            sm={24}
            md={12}
            style={{ padding: "20px", textAlign: "left" }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <div
                style={{
                  color: "rgb(0 122 255)",
                  lineHeight: "0.75rem",
                  textTransform: "uppercase",
                  fontWeight: 200,
                }}
              >
                For tech professionals
              </div>
              <br />
              <div
                style={{
                  fontSize: "3.00rem",
                  lineHeight: "2.9rem",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                We understand your rules, your needs, your code
              </div>
              <br />
              <div
                style={{
                  color: "rgb(107 114 128)",
                  letterSpacing: ".025em",
                  lineHeight: "1.5rem",
                }}
              >
                Keep an eye on job offers that match with you. You decide which
                is your next professional challenge.
              </div>
              <ul
                style={{
                  padding: 0,
                  display: "flex",
                  flexWrap: "wrap",
                  listStyleType: "none",
                }}
              >
                {[
                  "Your profile in 2 minutes",
                  "Offers that match 100%",
                  "You decide who can talk to you",
                  "Get a 100€ Amazon gift card",
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "50%",
                      padding: "10px 0",
                    }}
                  >
                    <img
                      src={"../../check-mark.png"}
                      alt="check mark"
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                      }}
                    />
                    {text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <motion.img
              src={"../../jobs.png"}
              alt="Job offers"
              style={{
                width: "70%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "10px",
                objectFit: "contain",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Col>
          <Button
            onClick={() => (window.location.href = "https://app.joppy.me/")}
            style={{
              backgroundColor: "#04befe",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Find your next job challenge
          </Button>
        </Row>

        <Col
          style={{
            flex: 1,
            overflow: "auto",
            padding: "20px",
          }}
        >
          <Row gutter={16}>
            <Col
              xs={24}
              md={12}
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "left",
                padding: "20px",
              }}
            >
              <motion.img
                src={"../../how-devs-1.png"}
                alt="Job offers"
                style={{
                  width: "70%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "contain",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
            <Col
              xs={24}
              md={12}
              style={{
                marginBottom: "20px",
                alignContent: "center",
              }}
            >
              <Badge.Ribbon
                text={
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "white",
                      letterSpacing: ".025em",
                      lineHeight: "1.5rem",
                    }}
                  >
                    1
                  </span>
                }
                color="#007aff"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    scale: 1.03,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Card
                    title={
                      <span
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "rgb(107 114 128)",
                          letterSpacing: ".025em",
                          lineHeight: "1.5rem",
                        }}
                      >
                        Answer a few questions
                      </span>
                    }
                    bordered={true}
                    style={{
                      color: "rgb(107 114 128)",
                      letterSpacing: ".025em",
                      lineHeight: "1.5rem",
                    }}
                  >
                    About your code skills, where you prefer to work, salary and
                    good practices. No need to type in your whole CV!
                    <ul
                      style={{
                        padding: 0,
                        display: "flex",
                        flexWrap: "wrap",
                        listStyleType: "none",
                      }}
                    >
                      {[
                        "What is your salry expectation?",
                        "where do you want to work?",
                        "Wahat role fit you?",
                        "exclude IT consulting firm and agencies?",
                      ].map((text, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "50%",
                            padding: "10px 0",
                          }}
                        >
                          <img
                            src={"../../check-mark.png"}
                            alt="check mark"
                            style={{
                              width: "25px",
                              height: "25px",
                              marginRight: "10px",
                            }}
                          />
                          {text}
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </Badge.Ribbon>
            </Col>
            <Col
              xs={24}
              md={12}
              style={{
                marginBottom: "20px",
                alignContent: "center",
              }}
            >
              <Badge.Ribbon
                text={
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "white",
                      letterSpacing: ".025em",
                      lineHeight: "1.5rem",
                    }}
                  >
                    2
                  </span>
                }
                color="#ffd52d"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    scale: 1.03,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Card
                    title={
                      <span
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "rgb(107 114 128)",
                          letterSpacing: ".025em",
                          lineHeight: "1.5rem",
                        }}
                      >
                        Check your matches
                      </span>
                    }
                    bordered={true}
                    style={{
                      color: "rgb(107 114 128)",
                      letterSpacing: ".025em",
                      lineHeight: "1.5rem",
                    }}
                  >
                    We only show you offers that match with your preferences.
                    You can accept or reject.
                    <ul
                      style={{
                        padding: 0,
                        display: "flex",
                        flexWrap: "wrap",
                        listStyleType: "none",
                      }}
                    >
                      {[
                        "Senior full stack",
                        "Searching for",
                        "What to do",
                        "job description",
                      ].map((text, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "50%",
                            padding: "10px 0",
                          }}
                        >
                          <img
                            src={"../../check-mark.png"}
                            alt="check mark"
                            style={{
                              width: "25px",
                              height: "25px",
                              marginRight: "10px",
                            }}
                          />
                          {text}
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </Badge.Ribbon>
            </Col>

            <Col
              xs={24}
              md={12}
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "right",
                padding: "20px",
              }}
            >
              <motion.img
                src={"../../how-devs-2.png"}
                alt="Job offers"
                style={{
                  width: "70%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "contain",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
            <Col
              xs={24}
              md={12}
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "left",
                padding: "20px",
              }}
            >
              <motion.img
                src={"../../how-devs-3.png"}
                alt="Job offers"
                style={{
                  width: "70%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "contain",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
            <Col
              xs={24}
              md={12}
              style={{
                marginBottom: "20px",
                alignContent: "center",
              }}
            >
              <Badge.Ribbon
                text={
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "white",
                      letterSpacing: ".025em",
                      lineHeight: "1.5rem",
                    }}
                  >
                    3
                  </span>
                }
                color="rgb(76 217 100)"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    scale: 1.03,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Card
                    title={
                      <span
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "rgb(107 114 128)",
                          letterSpacing: ".025em",
                          lineHeight: "1.5rem",
                        }}
                      >
                        Chat with the companies
                      </span>
                    }
                    bordered={true}
                    style={{
                      color: "rgb(107 114 128)",
                      letterSpacing: ".025em",
                      lineHeight: "1.5rem",
                    }}
                  >
                    Only companies from offers you have accepted can write to
                    you. Zero spam.
                    <ul
                      style={{
                        padding: 0,
                        display: "flex",
                        flexWrap: "wrap",
                        listStyleType: "none",
                      }}
                    >
                      {[
                        "What is your salry expectation?",
                        "where do you want to work?",
                        "Wahat role fit you?",
                        "exclude IT consulting firm and agencies?",
                      ].map((text, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "50%",
                            padding: "10px 0",
                          }}
                        >
                          <img
                            src={"../../check-mark.png"}
                            alt="check mark"
                            style={{
                              width: "25px",
                              height: "25px",
                              marginRight: "10px",
                            }}
                          />
                          {text}
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </Badge.Ribbon>
            </Col>
            <Col
              xs={24}
              md={12}
              style={{
                marginBottom: "20px",
                alignContent: "center",
              }}
            >
              <Badge.Ribbon
                text={
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "white",
                      letterSpacing: ".025em",
                      lineHeight: "1.5rem",
                    }}
                  >
                    4
                  </span>
                }
                color="rgb(252 76 104)"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    scale: 1.03,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Card
                    title={
                      <span
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "rgb(107 114 128)",
                          letterSpacing: ".025em",
                          lineHeight: "1.5rem",
                        }}
                      >
                        Keep your profile updated
                      </span>
                    }
                    bordered={true}
                    style={{
                      color: "rgb(107 114 128)",
                      letterSpacing: ".025em",
                      lineHeight: "1.5rem",
                    }}
                  >
                    Anytime you want, you can update your skills, good practices
                    or preferences. The more you update, better matches you'll
                    receive! Keep it up!
                    <ul
                      style={{
                        padding: 0,
                        display: "flex",
                        flexWrap: "wrap",
                        listStyleType: "none",
                      }}
                    >
                      {[
                        "Senior full stack",
                        "Searching for",
                        "What to do",
                        "job description",
                      ].map((text, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "50%",
                            padding: "10px 0",
                          }}
                        >
                          <img
                            src={"../../check-mark.png"}
                            alt="check mark"
                            style={{
                              width: "25px",
                              height: "25px",
                              marginRight: "10px",
                            }}
                          />
                          {text}
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </Badge.Ribbon>
            </Col>

            <Col
              xs={24}
              md={12}
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "right",
                padding: "20px",
              }}
            >
              <motion.img
                src={"../../how-devs-4.png"}
                alt="Job offers"
                style={{
                  width: "70%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "contain",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  );
}

export default Techies;
