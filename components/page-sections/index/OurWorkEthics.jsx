/* Common Imports */

import React from "react";
import { styled } from "@mui/system";

/* Component Imports */

import { Typography, useTheme, useMediaQuery } from "@mui/material";

/* Icon Imports */

import { Star } from "@mui/icons-material";

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "3rem 1.5rem 3rem 1.5rem",
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
  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
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
  width: "30rem",
  height: "30rem",
  borderRadius: "1rem",
  [theme.breakpoints.down("md")]: { width: "40rem", height: "22rem" },
  [theme.breakpoints.down("sm")]: { width: "20rem", height: "12rem" },
}));

export default function OurWorkEthics() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <RootDiv id="our-work-ethics">
        <Typography
          variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h4" : "h3"}
          align="center"
          color="primary"
          fontWeight={600}
        >
          Our Work Ethics
        </Typography>

        <InnerDiv>
          <ContentContainer>
            <Typography
              variant={
                useMediaQuery(theme.breakpoints.down("sm")) ? "body1" : "h6"
              }
              align={
                useMediaQuery(theme.breakpoints.down("sm")) ? "center" : "left"
              }
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              We are committed to providing the best quality service to our
              clients and this is reflected in our work ethics.
            </Typography>

            <ContactContainer>
              <IconText>
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
                    useMediaQuery(theme.breakpoints.down("sm")) ? "body1" : "h6"
                  }
                  fontWeight={600}
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  Working efficiently to meet project deadlines.
                </Typography>
              </IconText>

              <IconText>
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
                    useMediaQuery(theme.breakpoints.down("sm")) ? "body1" : "h6"
                  }
                  fontWeight={600}
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  Providing adequate manpower and resources.
                </Typography>
              </IconText>

              <IconText sx={{ gap: "0.35rem" }}>
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
                    useMediaQuery(theme.breakpoints.down("sm")) ? "body1" : "h6"
                  }
                  fontWeight={600}
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  Constant communication and support with clients
                </Typography>
              </IconText>
            </ContactContainer>
          </ContentContainer>

          <CustomImg
            src="/images/banner.jpg"
            alt="about-us"
            referrerPolicy="no-referrer"
          />
        </InnerDiv>
      </RootDiv>
    </React.Fragment>
  );
}
