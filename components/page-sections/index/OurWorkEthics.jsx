/* Common Imports */

import React from "react";
import { styled } from "@mui/system";

/* Component Imports */

import { Typography, useTheme, useMediaQuery } from "@mui/material";
import Container from "/components/layout-components/Container";

/* Icon Imports */

import { Star } from "@mui/icons-material";

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "3rem 1.5rem 3rem 1.5rem",
  backgroundColor: theme.palette.background.dim,
  backgroundImage: "url('/images/services_bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  gap: "3rem",
  width: "100%",
  [theme.breakpoints.down("sm")]: { gap: "1rem" },
}));

const InnerDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  gap: "0.5rem",
}));

const ContactContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  height: "100%",
  gap: "2rem",
  margin: "2rem 0rem 0rem 0rem",
  [theme.breakpoints.down("sm")]: { margin: "1rem 0rem 0rem 0rem" },
}));

const IconText = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "0.5rem",
}));

const CustomImg = styled("img")(({ theme }) => ({
  width: "28rem",
  height: "23rem",
  borderRadius: "1rem",
  [theme.breakpoints.down("md")]: { width: "20rem", height: "33rem" },
  [theme.breakpoints.down("sm")]: { width: "20rem", height: "25rem" },
  [theme.breakpoints.down("xs")]: { width: "15rem", height: "20rem" },
}));

export default function OurWorkEthics({ locale }) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <RootDiv id="our-work-ethics">
        <Container>
          <Typography
            variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h4" : "h3"}
            align="center"
            color="primary"
            fontWeight={600}
          >
            {locale === "en" ? "Our Work Ethics" : "أخلاقيات عملنا"}
          </Typography>

          <InnerDiv
            sx={{
              flexDirection: locale === "en" ? "row" : "row-reverse",
            }}
          >
            <ContentContainer
              sx={{
                alignItems: locale === "en" ? "flex-start" : "flex-end",
              }}
            >
              <Typography
                variant={
                  useMediaQuery(theme.breakpoints.down("sm")) ? "body1" : "h6"
                }
                align={
                  useMediaQuery(theme.breakpoints.down("sm"))
                    ? "center"
                    : locale === "en"
                      ? "left"
                      : "right"
                }
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                {locale === "en"
                  ? "We are committed to providing the best quality services to our clients and this is reflected in our work ethics."
                  : "نحن ملتزمون بتقديم أفضل خدمات الجودة لعملائنا ويتجلى ذلك في أخلاقيات عملنا"}
              </Typography>

              <ContactContainer
                sx={{
                  alignItems: locale === "en" ? "flex-start" : "flex-end",
                }}
              >
                <IconText
                  sx={{
                    flexDirection: locale === "en" ? "row" : "row-reverse",
                  }}
                >
                  <Star
                    color="primary"
                    sx={{
                      fontSize: "2rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1.5rem",
                      },
                    }}
                  />
                  <Typography
                    variant={
                      useMediaQuery(theme.breakpoints.down("sm"))
                        ? "body1"
                        : "h6"
                    }
                    fontWeight={600}
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                    align={locale === "en" ? "left" : "right"}
                  >
                    {locale === "en"
                      ? "Working efficiently to meet project deadlines."
                      : "العمل بكفاءة لتلبية المواعيد النهائية للمشروع"}
                  </Typography>
                </IconText>

                <IconText
                  sx={{
                    flexDirection: locale === "en" ? "row" : "row-reverse",
                  }}
                >
                  <Star
                    color="primary"
                    sx={{
                      fontSize: "2rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1.5rem",
                      },
                    }}
                  />
                  <Typography
                    variant={
                      useMediaQuery(theme.breakpoints.down("sm"))
                        ? "body1"
                        : "h6"
                    }
                    fontWeight={600}
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                    align={locale === "en" ? "left" : "right"}
                  >
                    {locale === "en"
                      ? "Providing sufficient manpower and resources."
                      : "توفير القوى العاملة والموارد الكافية"}
                  </Typography>
                </IconText>

                <IconText
                  sx={{
                    flexDirection: locale === "en" ? "row" : "row-reverse",
                  }}
                >
                  <Star
                    color="primary"
                    sx={{
                      fontSize: "2rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1.5rem",
                      },
                    }}
                  />
                  <Typography
                    variant={
                      useMediaQuery(theme.breakpoints.down("sm"))
                        ? "body1"
                        : "h6"
                    }
                    fontWeight={600}
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                    align={locale === "en" ? "left" : "right"}
                  >
                    {locale === "en"
                      ? "Being responsible and accountable for our work."
                      : "تحمل المسؤولية والمساءلة عن عملنا"}
                  </Typography>
                </IconText>

                <IconText
                  sx={{
                    flexDirection: locale === "en" ? "row" : "row-reverse",
                  }}
                >
                  <Star
                    color="primary"
                    sx={{
                      fontSize: "2rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1.5rem",
                      },
                    }}
                  />
                  <Typography
                    variant={
                      useMediaQuery(theme.breakpoints.down("sm"))
                        ? "body1"
                        : "h6"
                    }
                    fontWeight={600}
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                    align={locale === "en" ? "left" : "right"}
                  >
                    {locale === "en"
                      ? "Customer support both before and after the project."
                      : "دعم العملاء قبل وبعد المشروع"}
                  </Typography>
                </IconText>
              </ContactContainer>
            </ContentContainer>

            <CustomImg
              src="/images/work-ethics.jpg"
              alt="work-ethics"
              referrerPolicy="no-referrer"
            />
          </InnerDiv>
        </Container>
      </RootDiv>
    </React.Fragment>
  );
}
