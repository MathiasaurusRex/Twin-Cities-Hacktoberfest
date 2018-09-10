import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";
// import WordPressAPI from '../utils/api';

const Index = props => (
  <Layout
    title="Twin Cities Hacktoberfest 2018"
    description="Developer, User Experience Designer, Digital Strategist"
    metaDescription="Mathias Rechtzigel is a web product developer located in Minneapolis, Minnesota with a focus on design, user experience, accessible and semantic front end code."
    siteURL="https://www.mathiasrechtzigel.com"
  >
    This is a test
  </Layout>
);

export default Index;
