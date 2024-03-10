/* React Imports */

import React from "react";
import { Helmet } from "react-helmet";
import { withRouter } from "next/router";

/* Component Imports */

import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "./Header";
import Container from "./Container";

const Layout = ({
  keywords,
  description,
  canonicalUrl,
  noContain,
  children,
  noLayoutHeader,
}) => {
  const theme = useTheme();
    
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
          keywords={keywords ? keywords :  "hvac, ac, air, conditioning, saudiarabia, ksa, saudi, heating, cooling"}
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
          <AppBar position="fixed" sx={{ background: theme.palette.background.paper }} elevation={2}>
            <Toolbar
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                // backdropFilter: scrollY !== 0 ? "blur(1rem)" : "",
                [theme.breakpoints.down("sm")]: {
                  justifyContent: "center",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{color: theme.palette.primary.main, cursor: "pointer" }}
                onClick={() => window.location.replace("/")}
              >
                Boodai HVAC
              </Typography>
            </Toolbar>
          </AppBar>
        )}

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