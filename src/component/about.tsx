import { Col, Row } from "antd";
import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {" "}
      <Col
        style={{
          flex: 1,
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
                About Joppy
              </div>
              <br />
              <div
                style={{
                  fontSize: "2.00rem",
                  lineHeight: "1.9rem",
                  fontWeight: 800,
                  margin: 0,
                  color: "#064351",
                }}
              >
                Tech talent code and companies code don't need to be opposites
              </div>
              <br />
              <div
                style={{
                  color: "rgb(107 114 128)",
                  letterSpacing: ".025em",
                  lineHeight: "1.5rem",
                  textAlign: "justify",
                }}
              >
                Hi, Joppyter! I'm Parveen, and I’m part of an incredible tech
                team with over 2 years of experience, having perfected the
                recruitment process. We are dedicated to connecting top talent
                with innovative companies to drive success and growth in the
                tech industry.
              </div>

              <div
                style={{
                  fontSize: "2.00rem",
                  lineHeight: "1.9rem",
                  fontWeight: 800,
                  margin: 0,
                  marginBottom: 15,
                  marginTop: 10,
                  color: "#064351",
                }}
              >
                Our Mission
              </div>
              <div
                style={{
                  color: "rgb(107 114 128)",
                  letterSpacing: ".025em",
                  lineHeight: "1.5rem",
                  textAlign: "justify",
                }}
              >
                We know that the recruitment process in the tech world is
                difficult. Recruiters and talent experts are always looking for
                the best profiles. Too much job offers, very few candidates.
                Spam, proposals that don't fit with the developer… and so on.
                <br /> <br />
                We want to make the process easy for each part. Companies need
                to find good talent easily… and talent needs to offers that
                really seem interesting to them. We write, speak, understand and
                share the same code.
              </div>
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
              src={"../../me.png"}
              alt="Job offers"
              style={{
                width: "100%",
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
    </>
  );
}
export default About;
