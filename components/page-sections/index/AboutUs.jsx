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
  padding: "2rem 1.5rem 3rem 1.5rem",
  gap: "1.5rem",
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "0.5rem",
}));

const CustomImg = styled("img")(({ theme }) => ({
  width: "50rem",
  height: "30rem",
  borderRadius: "1rem",
  [theme.breakpoints.down("md")]: { width: "40rem", height: "22rem" },
  [theme.breakpoints.down("sm")]: { width: "20rem", height: "12rem" },
}));

export default function AboutUs() {
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
            About Us
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
            We started out in the year 1996 as an expansion of Hisham A. A.
            Boodai Trading Est. in the HVAC field. We have shown stable growth
            over the years thanks to our esteemed clients.
          </Typography>
        </ContentContainer>

        <CustomImg
          src="/images/banner.jpg"
          alt="about-us"
          referrerPolicy="no-referrer"
        />
      </RootDiv>
    </React.Fragment>
  );
}
