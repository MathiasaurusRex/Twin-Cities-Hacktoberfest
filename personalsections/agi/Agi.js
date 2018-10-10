import Link from "next/link";
import GhostbustersContainerSidebySide from "../carissam/components/GhostbustersContainerSidebySide"
import MediaCardVertical from "../carissam/components/MediaCardVertical";

const Agi = props => (
  <GhostbustersContainerSidebySide>
    <MediaCardVertical
      imageSrc="/static/assets/images/Frank.jpg"
      imageAlt="Bloki"
      title="bloki"
      description=" Introducing the cutest dog in the whole world."
    />
    <MediaCardVertical
      imageSrc="/static/assets/images/Benjamin.jpg"
      imageAlt="Benjamin"
      title="Benjamin"
      description="And the dog imitator, Benjamin."
    />
  </GhostbustersContainerSidebySide>
  
  );

export default Agi;
