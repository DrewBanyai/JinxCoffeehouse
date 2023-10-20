import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { CgServer } from 'react-icons/cg';
import { FiMonitor } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SpaceStyle';

const Space = () =>  (
  <Section id="space">
    <SectionDivider divider />
    <SectionTitle>The Space</SectionTitle>
    <SectionText>
      We believe in supporting the concept of a "Third Place", one that encourages relaxation and socialization with others, where there is no stress of the outside world. We pride ourselves on creating a space where you can feel comfortable and unrushed while enjoying a lovely drink and a tasty treat.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <CgWebsite size="3rem" color="white" />
        </picture>
        <ListContainer>
          <ListTitle>Web Front-End</ListTitle>
          <ListParagraph>
            Experience with Javascript ES6<br /> as well as Next.js, and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <CgServer size="3rem" color="white" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with backend servers<br />including REST APIs through both<br />NodeJS and .Net 7, and databases<br />through MongoDB and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FiMonitor size="3rem" color="white" />
        </picture>
        <ListContainer>
          <ListTitle>Applications & Gaming</ListTitle>
          <ListParagraph>
            Experience building applications<br />in C, C++, C#, and Objective C<br />for mobile, console, and PC
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Space;
