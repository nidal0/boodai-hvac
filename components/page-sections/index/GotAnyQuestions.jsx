/* Common Imports */

import React from "react";
import { styled } from "@mui/system";

/* Component Imports */

import { Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import Container from "/components/layout-components/Container";

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0rem 1.5rem 3rem 1.5rem",
  gap: "1rem",
  background: "linear-gradient(to right, #141e30, #243b55)",
}));

export default function GotAnyQuestions() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <RootDiv>
        <Container>
          <Typography
            variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h5" : "h4"}
            align="center"
            color="white"
            fontWeight={600}
          >
            Got any questions?
          </Typography>

          <Typography
            variant={
              useMediaQuery(theme.breakpoints.down("sm")) ? "body1" : "h6"
            }
            align="center"
            color="white"
            fontWeight={600}
          >
            We are here to help
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#contact-us"
            sx={{
              color: theme.palette.primary.main,
              backgroundColor: "white",
              borderRadius: "0rem",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: theme.palette.background.dim,
              },
            }}
          >
            GET IN TOUCH
          </Button>
        </Container>
      </RootDiv>
    </React.Fragment>
  );
}
