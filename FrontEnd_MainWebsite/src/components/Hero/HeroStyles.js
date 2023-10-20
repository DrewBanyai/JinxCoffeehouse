import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const TaglineText = () => {
  // Taglines for the main page
  let taglines = {
    tagline1: "Where Quality Knows No Compromise: Discover the Perfect Coffee Experience in Our Warm and Inviting Haven of Comfort and Flavor.",
    tagline2: "Embrace the Coffee Journey: Our Quality Brews and Cozy Atmosphere Combine to Create Your Favorite Coffee Destination.",
    tagline3: "Your Destination for Quality Coffee and Comfort: Join Us in Our Sanctuary of Satisfying Sips and Relaxation.",
    tagline4: "Crafting Coffee, Creating Comfort: Where Every Cup is a Work of Art in an Environment Designed for Your Peaceful Enjoyment.",
  }

  return <div>{taglines.tagline1}</div>;
}