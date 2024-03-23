/* Common Imports */

import React from "react";
import { styled } from "@mui/system";

/* Component Imports */

import { Paper, Typography, useTheme, useMediaQuery } from "@mui/material";
import Container from "/components/layout-components/Container";

/* Icon Imports */

import { BuildOutlined } from "@mui/icons-material";

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "3rem 1.5rem 3rem 1.5rem",
  gap: "2rem",
  // backgroundColor: theme.palette.background.dim,
  background: "linear-gradient(to right, #141e30, #243b55)",
  // backgroundImage: "url('/images/services_bg.png')",
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
}));

const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  gap: "2rem",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
}));

const Card = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "48%",
  gap: "0.75rem",
  borderRadius: "1rem",
  padding: "1rem 1rem 1rem 1rem",
  [theme.breakpoints.down("sm")]: { width: "100%" },
  "&:hover": {
    // border: `0.5px solid ${theme.palette.primary.main}`,
    transform: "scale(1.05)",
    transition: "0.4s",
  },
}));

export default function OurServices() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <RootDiv id="our-services">
        <Container>
          <Typography
            variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h4" : "h3"}
            color="white"
            fontWeight={600}
          >
            Our Services
          </Typography>

          <CardsContainer>
            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                Thermostat installation
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                AC installation
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                Heating system installation
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                Duct and vent installation
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                Ductless HVAC services
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                AC system maintenance
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                Heating system maintenance
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                HVAC system maintenance
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                Duct work
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                Thermostat repair
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                Heating system repair
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                AC system repair
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                Duct and vent repair
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                HVAC repair
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                Home appliance service
              </Typography>
            </Card>

            <Card elevation={1}>
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                Commercial building contracts
              </Typography>
            </Card>
          </CardsContainer>
        </Container>
      </RootDiv>
    </React.Fragment>
  );
}
