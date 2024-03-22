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
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0rem 2rem 0rem 2rem",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  backdropFilter: "blur(0.25rem)",
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

const CustomImg = styled("img")(({ theme }) => ({
  width: "5rem",
  height: "4rem",
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
          <br />

          <ButtonContainer>
            <Typography
              variant={
                useMediaQuery(theme.breakpoints.down("sm")) ? "h5" : "h3"
              }
              align="center"
              sx={{ margin: "0rem 0rem 2rem 0rem" }}
            >
              Boodai Air Conditioning Contractors
            </Typography>
            <Typography
              variant={
                useMediaQuery(theme.breakpoints.down("sm")) ? "body1" : "h6"
              }
              align="center"
            >
              All your HVAC needs under one roof
            </Typography>

            <Button
              disableElevation
              disableFocusRipple
              disableRipple
              variant="contained"
              color="primary"
              onClick={() => {
                const isBrowser = typeof window !== `undefined`;
                if (isBrowser) {
                  scrollTo({
                    top: 650,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Know more
            </Button>
          </ButtonContainer>
          <CustomImg
            src="/images/scroll-down.gif"
            alt="scroll down"
            referrerPolicy="no-referrer"
            onClick={() => {
              const isBrowser = typeof window !== `undefined`;
              if (isBrowser) {
                scrollTo({
                  top: 650,
                  behavior: "smooth",
                });
              }
            }}
          />
        </Overlay>
      </RootDiv>
    </React.Fragment>
  );
}
