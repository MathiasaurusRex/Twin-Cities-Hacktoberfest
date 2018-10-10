import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../layout/Layout";
import HeaderSection from "../layout/HeaderSection";

import GhostbustersMelissa from "../personalsections/ghostbustersMelissa/GhostbustersMelissa";
import GhostbustersKate from "../personalsections/ghostbustersKate/GhostbustersKate";
import GhostbustersKristen from "../personalsections/ghostbustersKristen/GhostbustersKristen";
import GhostbustersLeslie from "../personalsections/ghostbustersLeslie/GhostbustersLeslie";
import CarissaM from "../personalsections/carissam/CarissaM";
import AlexandriaC from "../personalsections/alexandriac/AlexandriaC";
import Randala from "../personalsections/randala/Randala";
import Agi from "../personalsections/agi/Agi";


const Index = props => (
  <Layout
    title="Twin Cities Hacktoberfest 2018"
    metaDescription="Twin Cities Hacktoberfest is organized by M.R., but created with love and care from individuals just like you across the Minnesota."
    siteURL="https://www.mathiasrechtzigel.com"
  >
    <HeaderSection />

    <GhostbustersMelissa />
    <GhostbustersKate />
    <GhostbustersKristen />
    <GhostbustersLeslie />
    <CarissaM />
    <AlexandriaC />
    <Randala name="Randala"/>
    <Randala name="Mathias"/>
    <Agi/>

    <div>Hey! I'm just testing this.</div>

    {/* Add your section component below here: */}
  </Layout>
);

export default Index;
