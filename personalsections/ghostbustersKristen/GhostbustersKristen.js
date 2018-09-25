import Link from "next/link";
import GhostbustersContainer from "../ghostbustersKate/components/GhostbustersContainer";
import MediaCard from "../ghostbustersKate/components/MediaCard";

const GhostbustersKristen = props => (
  <GhostbustersContainer>
    <MediaCard
      imageSrc="/static/assets/images/ghostbusters-kristen.jpg"
      imageAlt="Kristen Wiig as Erin Gilbert"
      title="Kristen Wiig"
      description="Kristen Wiig plays Erin Gilbert in the 2016 Ghostbusters -- who is brought into the crazy adventure by Melissa's character after she publishes the paranormal book that they wrote while in graduate school, which threatens her tenure."
    />
    <h3>This component can be used as an example for importing components</h3>
  </GhostbustersContainer>
);

export default GhostbustersKristen;
