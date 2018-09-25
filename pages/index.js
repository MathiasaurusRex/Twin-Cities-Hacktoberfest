import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../layout/Layout";
import HeaderSection from "../layout/HeaderSection";

import GhostbustersMelissa from "../personalsections/ghostbustersMelissa/GhostbustersMelissa";

const Index = props => (
  <Layout
    title="Twin Cities Hacktoberfest 2018"
    metaDescription="Twin Cities Hacktoberfest is organized by M.R., but created with love and care from individuals just like you across the Minnesota."
    siteURL="https://www.mathiasrechtzigel.com"
  >
    <HeaderSection />

    <GhostbustersMelissa />
  </Layout>
);

export default Index;
