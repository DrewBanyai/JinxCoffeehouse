import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, TaglineText } from './HeroStyles';
import CoffeeAnimation from '../BackgroundAnimation/CoffeeAnimation';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Jinx Coffeehouse
        </SectionTitle>
        <SectionText>
          <TaglineText />
        </SectionText>
      </LeftSection>
      {/*<CoffeeAnimation />*/}
    </Section>
  </>
)

export default Hero;