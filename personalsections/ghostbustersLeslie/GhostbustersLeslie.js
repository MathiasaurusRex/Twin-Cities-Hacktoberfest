import Link from "next/link";
import GhostbustersContainer from "../ghostbustersKate/components/GhostbustersContainer";
import MediaCard from "../ghostbustersKate/components/MediaCard";

const GhostbustersKristen = props => (
  <GhostbustersContainer>
    <MediaCard
      imageSrc="/static/assets/images/ghostbusters-leslie.jpg"
      imageAlt="Leslie Jones as Patty Tolan"
      title="Leslie Jones"
      description="Leslie Jones plays Patty Tolan in the 2016 Ghostbusters -- she is the street smart pillar of the four ghostbusters, who approaches the group after seeing a ghost while in the New York subway."
    />
    <h3>This component can be used as an example for importing components</h3>
  </GhostbustersContainer>
);

export default GhostbustersKristen;
