import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../layout/Layout";
import HeaderSection from "../layout/HeaderSection";
// import WordPressAPI from '../utils/api';

const Index = props => (
  <Layout
    title="Twin Cities Hacktoberfest 2018"
    metaDescription="Twin Cities Hacktoberfest is organized by M.R., but created with love and care from individuals just like you across the Minnesota."
    siteURL="https://www.mathiasrechtzigel.com"
  >
    <HeaderSection />
  </Layout>
);

export default Index;
