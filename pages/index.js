/* Component Imports */

import Layout from "/components/layout-components/Layout";
import HeroBanner from "/components/page-sections/index/HeroBanner";
import OurServices from "/components/page-sections/index/OurServices";
import AboutUs from "/components/page-sections/index/AboutUs";
import OurPartners from "/components/page-sections/index/OurPartners";

export default function Home() {
  return (
    <Layout noContain={[0, 1]}>
      <HeroBanner index={0} />
      <OurServices index={1} />
      <AboutUs index={2} />
      <OurPartners index={3} />
    </Layout>
  );
}
