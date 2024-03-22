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
  padding: "2rem 1.5rem 2rem 1.5rem",
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

export default function OurPortfolio() {
  const theme = useTheme();

  const photos = [
    { src: "/images/portfolio/1.jpg", width: 1200, height: 1600 },
    { src: "/images/portfolio/2.JPG", width: 3940, height: 2580 },
    { src: "/images/portfolio/3.jpg", width: 960, height: 1280 },
    { src: "/images/portfolio/4.jpg", width: 1280, height: 960 },
    { src: "/images/portfolio/5.jpg", width: 1134, height: 1280 },
    { src: "/images/portfolio/6.jpg", width: 757, height: 1164 },
    { src: "/images/portfolio/7.jpg", width: 959, height: 1160 },
    { src: "/images/portfolio/8.jpg", width: 1200, height: 1163 },
    { src: "/images/portfolio/9.jpg", width: 1024, height: 768 },
    { src: "/images/portfolio/10.jpg", width: 1600, height: 1200 },
    { src: "/images/portfolio/11.jpg", width: 1024, height: 768 },
    { src: "/images/portfolio/12.jpg", width: 832, height: 460 },
    { src: "/images/portfolio/13.jpg", width: 2047, height: 1356 },
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
        </ContentContainer>
        <PhotoAlbum
          layout="rows"
          photos={photos}
          rowConstraints={{
            minPhotos: useMediaQuery(theme.breakpoints.down("sm")) ? 2 : 4,
            maxPhotos: 6,
          }}
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
        />
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Thumbnails, Zoom]}
        />
      </RootDiv>
    </React.Fragment>
  );
}
