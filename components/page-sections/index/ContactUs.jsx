/* Common Imports */

import React from "react";
import { styled } from "@mui/system";

/* Component Imports */

import { Typography, Link, useTheme, useMediaQuery } from "@mui/material";

/* Icon Imports */

import { Place, Phone, Email } from "@mui/icons-material";

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "3rem 1.5rem 2rem 1.5rem",
  gap: "1.5rem",
  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  gap: "0.5rem",
}));

const ContactContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  gap: "1rem",
  margin: "3rem 0rem 0rem 0rem",
  [theme.breakpoints.down("sm")]: { margin: "1rem 0rem 0rem 0rem" },
}));

const IconText = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "0.5rem",
}));

const CustomLink = styled(Link)(({ theme }) => ({
  fontSize: "1rem",
  lineHeight: "1.25rem",
  color: theme.palette.text.secondary,
  textDecoration: "none",
  "@media (pointer: fine)": {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const CustomIframe = styled("iframe")(({ theme }) => ({
  width: "80rem",
  height: "20rem",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  [theme.breakpoints.down("md")]: { width: "40rem", height: "22rem" },
  [theme.breakpoints.down("sm")]: { width: "100%", height: "12rem" },
}));

export default function ContactUs() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <RootDiv id="contact-us">
        <ContentContainer>
          <Typography
            variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h4" : "h3"}
            align="center"
            color="primary"
            fontWeight={600}
          >
            Contact Us
          </Typography>
          <Typography
            variant={
              useMediaQuery(theme.breakpoints.down("sm")) ? "body1" : "body1"
            }
            // align="center"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            Do you have any queries? Get in touch with us right away!
          </Typography>

          <ContactContainer>
            {/* Phone */}

            <IconText>
              <Phone color="primary" sx={{ fontSize: "1.25rem" }} />
              <CustomLink
                href="tel:+966501900828"
                rel="noopener"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                +966 501900828
              </CustomLink>
            </IconText>

            {/* Email */}

            <IconText>
              <Email color="primary" sx={{ fontSize: "1.25rem" }} />
              <CustomLink
                href="mailto:boodaiaircon@gmail.com"
                rel="noopener"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                boodaiaircon@gmail.com
              </CustomLink>
            </IconText>

            {/* Address */}

            <IconText sx={{ gap: "0.35rem" }}>
              <Place color="primary" sx={{ fontSize: "1.5rem" }} />
              <CustomLink
                href="https://maps.app.goo.gl/dLK21aVY2cdiG3mn7"
                rel="noopener"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Al-Khaldiya, Al Ahsa 31982, Kingdom of Saudi Arabia
              </CustomLink>
            </IconText>
          </ContactContainer>
        </ContentContainer>

        <CustomIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0725214245217!2d49.565128175386384!3d25.335347377622327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e3791c010a67adb%3A0x93a24576820d6060!2sBoodai%20Air%20Conditioning%20Contractors!5e0!3m2!1sen!2sin!4v1710674598420!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </RootDiv>
    </React.Fragment>
  );
}
