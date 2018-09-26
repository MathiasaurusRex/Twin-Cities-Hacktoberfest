import Link from "next/link";
import GhostbustersContainerSidebySide from "./components/GhostbustersContainerSidebySide";
import MediaCardVertical from "./components/MediaCardVertical";

const CarissaM = props => (
  <GhostbustersContainerSidebySide>
    <MediaCardVertical
      imageSrc="/static/assets/images/Frank.jpg"
      imageAlt="Franklin Delano"
      title="Franklin"
      description=" Introducing the cutest dog in the whole world."
    />
    <MediaCardVertical
      imageSrc="/static/assets/images/Emma.jpg"
      imageAlt="Emma Sue"
      title="Emma"
      description="And not to be forgotten, his darling cousin."
    />
  </GhostbustersContainerSidebySide>
  
  );

export default CarissaM;
