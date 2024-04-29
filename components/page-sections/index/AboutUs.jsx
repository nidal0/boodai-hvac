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
  padding: "2rem 1.5rem 3.5rem 1.5rem",
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
  width: "100%",
  height: "30rem",
  borderRadius: "1rem",
  [theme.breakpoints.down("md")]: { height: "20rem" },
  [theme.breakpoints.down("sm")]: { height: "10rem" },
  [theme.breakpoints.down("xs")]: { height: "7.5rem" },
}));

export default function AboutUs({ locale }) {
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
            {locale === "en" ? "About Us" : "من نحن"}
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
              ? "We started out in the year 1995 and have shown stable growth over the years thanks to our esteemed clients. With around 30 years of experience in the industry and a team of highly skilled professionals, we are dedicated to providing the best services to our clients. We also have a wide range of products and services to cater to the varied requirements of our clients."
              : "بدأنا في عام 1995 وقد أظهرنا نموًا مستقرًا على مر السنين بفضل عملائنا الكرام. بفضل خبرتنا التي تزيد عن 30 عامًا في الصناعة وفريق من المحترفين ذوي المهارات العالية، نحن ملتزمون بتقديم أفضل الخدمات لعملائنا. لدينا أيضًا مجموعة واسعة من المنتجات والخدمات لتلبية متطلبات عملائنا المتنوعة"}
          </Typography>
        </ContentContainer>

        <CustomImg
          src="/images/about-us.JPG"
          alt="about-us"
          referrerPolicy="no-referrer"
        />
      </RootDiv>
    </React.Fragment>
  );
}
