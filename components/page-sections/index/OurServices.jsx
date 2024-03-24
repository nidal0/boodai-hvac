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
  padding: "3rem 0rem 3rem 0rem",
  width: "100%",
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

export default function OurServices({ locale }) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <RootDiv id="our-services">
        <Container>
          <Typography
            variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h4" : "h3"}
            color="white"
            fontWeight={600}
            align="center"
          >
            {locale === "en" ? "Our Services" : "خدماتنا"}
          </Typography>

          <CardsContainer>
            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "Thermostat installation"
                  : "تركيب الثرموستات"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en" ? "AC installation" : "تركيب مكيف الهواء"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "Heating system installation"
                  : "تركيب نظام التدفئة"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "Duct and vent installation"
                  : "تركيب القناة والمنفذ"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "Ductless HVAC services"
                  : "خدمات HVAC بدون قناة"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "AC system maintenance"
                  : "صيانة نظام تكييف الهواء"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "Heating system maintenance"
                  : "صيانة نظام التدفئة"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "HVAC system maintenance"
                  : "صيانة نظام HVAC"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en" ? "Duct work" : "عمل القناة"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en" ? "Thermostat repair" : "إصلاح الثرموستات"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "Heating system repair"
                  : "إصلاح نظام التدفئة"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "AC system repair"
                  : "إصلاح نظام تكييف الهواء"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "Duct and vent repair"
                  : "إصلاح القناة والمنفذ"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en" ? "HVAC repair" : "إصلاح HVAC"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "Home appliance service"
                  : "خدمة الأجهزة المنزلية"}
              </Typography>
            </Card>

            <Card
              elevation={1}
              sx={{
                flexDirection: locale === "en" ? "row" : "row-reverse",
              }}
            >
              <BuildOutlined color="primary" sx={{ fontSize: "1.5rem" }} />
              <Typography variant="body1" fontWeight={600}>
                {locale === "en"
                  ? "Commercial building contracts"
                  : "عقود البناء التجاري"}
              </Typography>
            </Card>
          </CardsContainer>
        </Container>
      </RootDiv>
    </React.Fragment>
  );
}
