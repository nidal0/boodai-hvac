/* Common Imports */

import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

/* Component Imports */

import { Button, Typography, useTheme, useMediaQuery } from "@mui/material";

/* Icon Imports */

import { ArrowDownward } from "@mui/icons-material";

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  position: "relative",
  backgroundImage: "url('/images/banner.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

const Overlay = styled("div")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0rem 2rem 0rem 2rem",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  //   backdropFilter: "blur(1rem)",
  zIndex: 1,
  gap: "2rem",
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "1rem",
}));

/* Copyright */

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="#">
//         Mahala Almas
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function HeroBanner() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <RootDiv>
        <Overlay>
          <Typography
            variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h4" : "h3"}
            align="center"
          >
            Hisham A. A. Boodai Trading Est.
          </Typography>

          <ButtonContainer>
            <Typography
              variant={
                useMediaQuery(theme.breakpoints.down("sm")) ? "body1" : "h6"
              }
              align="center"
            >
              Boodai for Air Conditioning Projects Division
            </Typography>

            <Button
              disableElevation
              disableFocusRipple
              disableRipple
              variant="contained"
              color="primary"
              href="#services"
            >
              Know more
            </Button>

            <ArrowDownward color="primary" />
          </ButtonContainer>
        </Overlay>
      </RootDiv>
    </React.Fragment>
  );
}
