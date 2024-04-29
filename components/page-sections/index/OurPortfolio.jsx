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

export default function OurPortfolio({ locale }) {
  const theme = useTheme();

  const photos = [
    { src: "/images/portfolio/1.webp", width: 1200, height: 1600 },
    { src: "/images/portfolio/2.webp", width: 3940, height: 2580 },
    { src: "/images/portfolio/3.webp", width: 960, height: 1280 },
    { src: "/images/portfolio/4.webp", width: 1280, height: 960 },
    { src: "/images/portfolio/5.webp", width: 1134, height: 1280 },
    { src: "/images/portfolio/6.webp", width: 757, height: 1164 },
    { src: "/images/portfolio/7.webp", width: 959, height: 1160 },
    { src: "/images/portfolio/8.webp", width: 1200, height: 1163 },
    { src: "/images/portfolio/9.webp", width: 1024, height: 768 },
    { src: "/images/portfolio/10.webp", width: 1600, height: 1200 },
    { src: "/images/portfolio/11.webp", width: 1024, height: 768 },
    { src: "/images/portfolio/12.webp", width: 832, height: 460 },
    { src: "/images/portfolio/13.webp", width: 2047, height: 1356 },
    { src: "/images/portfolio/14.webp", width: 1077, height: 531 },
    { src: "/images/portfolio/15.webp", width: 940, height: 525 },
    { src: "/images/portfolio/16.webp", width: 810, height: 1080 },
    { src: "/images/portfolio/17.webp", width: 1224, height: 827 },
    { src: "/images/portfolio/18.webp", width: 960, height: 658 },
    { src: "/images/portfolio/19.webp", width: 1128, height: 729 },
    { src: "/images/portfolio/20.webp", width: 959, height: 759 },
    { src: "/images/portfolio/21.webp", width: 1210, height: 680 },
    { src: "/images/portfolio/22.webp", width: 1280, height: 846 },
    { src: "/images/portfolio/23.webp", width: 1145, height: 804 },
    { src: "/images/portfolio/24.webp", width: 878, height: 962 },
    { src: "/images/portfolio/25.webp", width: 648, height: 916 },
    { src: "/images/portfolio/26.webp", width: 1600, height: 1200 },
    { src: "/images/portfolio/27.webp", width: 1600, height: 891 },
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
            {locale === "en" ? "Our Portfolio" : "معرض الأعمال"}
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
              ? "Seeing is believing. Take a look at our portfolio to see the quality of our work"
              : "الرؤية تصنع الإيمان. تصفح معرض أعمالنا لترى جودة عملنا"}
          </Typography>
        </ContentContainer>
        <PhotoAlbum
          layout="rows"
          photos={photos}
          rowConstraints={{
            minPhotos: useMediaQuery(theme.breakpoints.down("sm")) ? 3 : 4,
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
