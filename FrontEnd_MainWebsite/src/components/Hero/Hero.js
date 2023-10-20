import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, TaglineText } from './HeroStyles';

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
    </Section>
  </>
)

export default Hero;