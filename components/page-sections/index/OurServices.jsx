/* Common Imports */

import React from "react";
import { styled } from "@mui/system";

/* Component Imports */

import { Paper, Typography, useTheme, useMediaQuery } from "@mui/material";
import Container from "/components/layout-components/Container";

/* Icon Imports */

import { AcUnit, DesignServices } from "@mui/icons-material";

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 1.5rem 5rem 1.5rem",
  gap: "2rem",
  backgroundColor: theme.palette.background.dim,
  backgroundImage: "url('/images/services_bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  gap: "1rem",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
}));

const Card = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "28%",
  height: "22.5rem",
  gap: "2rem",
  borderRadius: "1rem",
  padding: "2rem 1rem 2rem 1rem",
  [theme.breakpoints.down("md")]: { width: "48%", height: "21rem" },
  [theme.breakpoints.down("sm")]: { width: "100%", height: "23rem" },
  "&:hover": {
    border: `0.5px solid ${theme.palette.primary.main}`,
    transform: "scale(1.05)",
    transition: "0.4s",
  },
}));

const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "0.25rem",
}));

export default function OurServices() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <RootDiv>
        <Container>
          <Typography
            variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h4" : "h3"}
            align="center"
            color="primary"
            fontWeight={600}
          >
            Our Services
          </Typography>

          <CardsContainer>
            {/* AC PIPING AND INSULATION */}

            <Card elevation={1}>
              <AcUnit color="primary" sx={{ fontSize: "5rem" }} />

              <TextContainer>
                <Typography variant="h6" align="center">
                  AC PIPING AND INSULATION
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  In AC systems, insulation is needed to protect against
                  condensation. Therefore, we provide services to make sure that
                  the piping is properly done and insulated.
                </Typography>
              </TextContainer>
            </Card>

            {/* DUCT WORK */}

            <Card elevation={1}>
              <AcUnit color="primary" sx={{ fontSize: "5rem" }} />

              <TextContainer>
                <Typography variant="h6" align="center">
                  DUCT WORK
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  A ductwork distributes airflow from your HVAC equipment to
                  your entire home or commercial building. We provide services
                  to set up an effecient duct work system for you.
                </Typography>
              </TextContainer>
            </Card>

            {/* DESIGNING AND COMMISSIONING */}

            <Card elevation={1}>
              <DesignServices color="primary" sx={{ fontSize: "5rem" }} />

              <TextContainer>
                <Typography variant="h6" align="center">
                  DESIGNING AND COMMISSIONING
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  We also provide large scale designing and commissioning
                  services with proper strategies and infrastructure to build an
                  effecient HVAC system.
                </Typography>
              </TextContainer>
            </Card>
          </CardsContainer>
        </Container>
      </RootDiv>
    </React.Fragment>
  );
}
