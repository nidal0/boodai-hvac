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
  backgroundColor: theme.palette.background.dim,
  backgroundImage: "url('/images/services_bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
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
  width: "12rem",
  height: "6rem",
}));

export default function OurPartners({ locale }) {
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
            {locale === "en" ? "Our Sourcing Partners" : "شركاؤنا في التوريد"}
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
            {locale === "en"
              ? "We source our products from top HVAC brands."
              : "نحن نحصل على منتجاتنا من أفضل العلامات التجارية للتكييف والتبريد"}
          </Typography>
        </ContentContainer>

        <LogosContainer
          sx={{
            flexDirection: locale === "en" ? "row" : "row-reverse",
          }}
        >
          <CustomImg
            src="/images/partners/gree.png"
            alt="Gree"
            referrerPolicy="no-referrer"
            sx={{ width: "13rem", height: "6rem" }}
          />
          <CustomImg
            src="/images/partners/carrier.png"
            alt="Carrier"
            referrerPolicy="no-referrer"
            sx={{ width: "13rem", height: "6.5rem" }}
          />
          <CustomImg
            src="/images/partners/fuji.png"
            alt="Fuji"
            referrerPolicy="no-referrer"
            sx={{ width: "9rem", height: "5.5rem" }}
          />
          <CustomImg
            src="/images/partners/rheem.png"
            alt="Rheem"
            referrerPolicy="no-referrer"
            sx={{ width: "6rem", height: "6rem" }}
          />

          <CustomImg
            src="/images/partners/lg.png"
            alt="LG"
            referrerPolicy="no-referrer"
          />
          <CustomImg
            src="/images/partners/trane.png"
            alt="Trane"
            referrerPolicy="no-referrer"
            sx={{ width: "13rem", height: "5rem" }}
          />
        </LogosContainer>
      </RootDiv>
    </React.Fragment>
  );
}
