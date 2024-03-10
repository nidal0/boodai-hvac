/* Common Imports */

import React from "react";
import { styled } from "@mui/system";

/* Component Imports */

import { Typography, useTheme, useMediaQuery } from "@mui/material";
import Container from "/components/layout-components/Container";

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 1.5rem 2rem 1.5rem",
  gap: "1.5rem",
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "0.25rem",
  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
}));

const LogosContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  flexWrap: "wrap",
  gap: "1.5rem",
}));

const CustomImg = styled("img")(({ theme }) => ({
  width: "10rem",
  height: "10rem",
  borderRadius: "1rem",
  [theme.breakpoints.down("md")]: { width: "10rem", height: "10rem" },
  [theme.breakpoints.down("sm")]: { width: "7rem", height: "7rem" },
}));

export default function OurPartners() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <RootDiv>
        <Container>
          <ContentContainer>
            <Typography
              variant={
                useMediaQuery(theme.breakpoints.down("sm")) ? "h4" : "h3"
              }
              align="center"
              color="primary"
              fontWeight={600}
            >
              Our Partners
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              We give you only the best products
            </Typography>
          </ContentContainer>

          <LogosContainer>
            <CustomImg
              src="/images/banner.jpg"
              alt="about-us"
              referrerPolicy="no-referrer"
            />
            <CustomImg
              src="/images/banner.jpg"
              alt="about-us"
              referrerPolicy="no-referrer"
            />
            <CustomImg
              src="/images/banner.jpg"
              alt="about-us"
              referrerPolicy="no-referrer"
            />
            <CustomImg
              src="/images/banner.jpg"
              alt="about-us"
              referrerPolicy="no-referrer"
            />
            <CustomImg
              src="/images/banner.jpg"
              alt="about-us"
              referrerPolicy="no-referrer"
            />
          </LogosContainer>
        </Container>
      </RootDiv>
    </React.Fragment>
  );
}
