import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../layout/Layout";
import HeaderSection from "../layout/HeaderSection";


import AlexandriaC from "../personalsections/alexandriac/AlexandriaC";

const MadLib = props => (
  <Layout
    title="Twin Cities Hacktoberfest 2018"
    metaDescription="Twin Cities Hacktoberfest is organized by M.R., but created with love and care from individuals just like you across the Minnesota."
    siteURL="https://www.mathiasrechtzigel.com"
  >
   

    
    <AlexandriaC />

    

    {/* Add your section component below here: */}
  </Layout>
);

export default MadLib;
