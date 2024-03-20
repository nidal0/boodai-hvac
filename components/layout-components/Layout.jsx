/* React Imports */

import React from "react";
import { styled } from "@mui/system";
import { Helmet } from "react-helmet";
import { withRouter } from "next/router";

/* Component Imports */

import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Fab,
  useTheme,
} from "@mui/material";
import Header from "./Header";
import Container from "./Container";

/* Icon Imports */

import { KeyboardArrowUp, Phone } from "@mui/icons-material";

/* Styled Components */

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  // backdropFilter: scrollY !== 0 ? "blur(1rem)" : "",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

const LogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  gap: "0.5rem",
}));

const CustomImg = styled("img")(({ theme }) => ({
  width: "3rem",
  height: "3rem",
}));

const LogoText = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
}));

const CustomLink = styled(Link)(({ theme }) => ({
  fontSize: "1rem",
  lineHeight: "1.25rem",
  fontWeight: 600,
  color: theme.palette.text.secondary,
  textDecoration: "none",
  "@media (pointer: fine)": {
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
    },
  },
}));

const FabContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  position: "fixed",
  bottom: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: 5,
  gap: "0.5rem",
}));

const CustomFab = styled(Fab)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: theme.shadows[3],
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

const Layout = ({
  keywords,
  description,
  canonicalUrl,
  noContain,
  children,
  noLayoutHeader,
}) => {
  const theme = useTheme();

  /* Go to top */

  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const isBrowser = typeof window !== `undefined`;
  if (isBrowser) {
    window.addEventListener("scroll", toggleVisible);
  }

  const handleClickTop = () => {
    const isBrowser = typeof window !== `undefined`;
    if (isBrowser) {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // document.body.scrollTop = 0; /* For Safari */
    // document.documentElement.scrollTop = 0; /* For Chrome, Firefox, IE and Opera */
  };

  // const [scrollY, setScrollY] = React.useState(0);
  // const [negativeScroll, setNegativeScroll] = React.useState(true);

  // React.useEffect(() => {
  //   /* First let's define an event listener */

  //   const handleScroll = () => {
  //     if (window.scrollY < scrollY) {
  //       setNegativeScroll(true);
  //     } else {
  //       setNegativeScroll(false);
  //     }
  //     setScrollY(window.scrollY);
  //   };
  //   /* Now we can add the event listener */

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollY]);

  return (
    <React.Fragment>
      {/* Main Component */}

      <div id="rootDiv">
        <Header
          keywords={
            keywords
              ? keywords
              : "hvac, ac, air, conditioning, saudiarabia, ksa, saudi, heating, cooling"
          }
          description={
            description
              ? description
              : "Boodai HVAC is a leading HVAC company in Saudi Arabia. We provide HVAC solutions for commercial and residential buildings. We provide HVAC maintenance, installation, and repair services."
          }
          title={"Boodai HVAC"}
          canonicalUrl={canonicalUrl ? canonicalUrl : "/"}
          //   ogImageParams={
          //     ogImageParams
          //       ? ogImageParams
          //       : {
          //           ogImageUrl:
          //             process.env.CDN_URL + "images/icons/logo/og_512.jpg",
          //           ogImageType: "image/jpeg",
          //           ogImageWidth: 512,
          //           ogImageHeight: 512,
          //         }
          //   }
        />
        <Helmet>
          <html />
        </Helmet>

        {noLayoutHeader ? null : (
          <AppBar
            position="fixed"
            sx={{ background: theme.palette.background.paper }}
            elevation={2}
          >
            <CustomToolbar>
              <LogoContainer onClick={() => window.location.replace("/")}>
                <CustomImg
                  alt="Beegru"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  height={30}
                  width={30}
                  src="/images/boodai-logo.png"
                />

                <LogoText>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    sx={{
                      color: theme.palette.primary.main,
                      cursor: "pointer",
                      lineHeight: "1.25rem",
                    }}
                  >
                    Boodai
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.primary.main,
                      cursor: "pointer",
                    }}
                    onClick={() => window.location.replace("/")}
                  >
                    Air Conditioning
                  </Typography>
                </LogoText>
              </LogoContainer>

              <CustomLink
                href="/index-arabic"
                rel="noopener"
                target="_self"
                referrerPolicy="no-referrer"
              >
                العربية
              </CustomLink>
            </CustomToolbar>
          </AppBar>
        )}

        <FabContainer>
          {/* Go to top */}

          <CustomFab
            size="small"
            sx={{ display: visible ? "inline" : "none" }}
            aria-label="Go to top"
            onClick={handleClickTop}
          >
            <KeyboardArrowUp fontSize="medium" sx={{ marginTop: "0.3rem" }} />
          </CustomFab>

          {/* Contact Us */}

          <CustomFab size="small" aria-label="Go to top" href="#contact-us">
            <Phone fontSize="small" />
          </CustomFab>
        </FabContainer>

        {children && noContain ? (
          React.Children.map(children, (child, key) =>
            noContain?.includes(key) ? (
              <React.Fragment>
                <Container key={key} noContain={noContain?.length > 0}>
                  {child}
                </Container>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Container key={key} noContain={false}>
                  {child}
                </Container>
              </React.Fragment>
            )
          )
        ) : (
          <React.Fragment>
            <Container noContain={false}>{children}</Container>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default withRouter(Layout);
