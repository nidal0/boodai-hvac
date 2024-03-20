/* Common Imports */

import React from "react";
import { styled } from "@mui/system";

/* Component Imports */

import { Typography, useTheme, useMediaQuery } from "@mui/material";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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

export default function OurPortfolio() {
  const theme = useTheme();

  const photos = [
    { src: "/images/portfolio/1.jpg", width: 200, height: 300 },
    { src: "/images/portfolio/2.JPG", width: 100, height: 200 },
    { src: "/images/portfolio/3.jpg", width: 1600, height: 900 },
    { src: "/images/portfolio/4.jpg", width: 1600, height: 900 },
    { src: "/images/portfolio/5.jpg", width: 1600, height: 900 },
    { src: "/images/portfolio/6.jpg", width: 1600, height: 900 },
  ];

  const [index, setIndex] = React.useState(-1);

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
            Our Portfolio
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
            Seeing is believing. Take a look at our portfolio to see the quality
            of our work.
          </Typography>

          <PhotoAlbum
            layout="rows"
            photos={photos}
            // targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
            renderContainer={({ containerRef, containerProps, children }) => (
              <div
                ref={containerRef}
                {...containerProps}
                style={{ width: "100%" }}
              >
                {children}
              </div>
            )}
            // renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
            //   <CustomImg
            //     src="/images/banner.jpg"
            //     alt="about-us"
            //     referrerPolicy="no-referrer"
            //   />
            // )}
          />
          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen,  Thumbnails, Zoom]}
          />
        </ContentContainer>
      </RootDiv>
    </React.Fragment>
  );
}
