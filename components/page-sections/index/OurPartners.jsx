/* Common Imports */

import React from "react";
import { styled } from "@mui/system";

/* Component Imports */

import { Typography, useTheme, useMediaQuery } from "@mui/material";

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 1.5rem 2rem 1.5rem",
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
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  gap: "1.5rem",
  overflowX: "scroll",
  overflowY: "hidden",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": { display: "none" },
  whiteSpace: "nowrap",
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
        <ContentContainer>
          <Typography
            variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h4" : "h3"}
            align="center"
            color="primary"
            fontWeight={600}
          >
            Our Partners
          </Typography>
          <Typography
            variant={
              useMediaQuery(theme.breakpoints.down("sm")) ? "body1" : "h6"
            }
            align="center"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            We source products from top brands.
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
      </RootDiv>
    </React.Fragment>
  );
}
