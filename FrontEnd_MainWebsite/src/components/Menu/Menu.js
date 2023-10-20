import React from 'react';

import { MenuItemCard, MenuItemCardRight, CardInfo, GridContainer, HeaderThree, Hr, TitleContent, Img } from './MenuStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { menuItems } from '../../constants/constants';

const Menu = () => (
  <Section nopadding id="menu" style={{width: "100%"}}>
    <SectionDivider />
    <SectionTitle div>Menu</SectionTitle>
    <GridContainer>
      {menuItems.map((p, i) => {
        return (
          <MenuItemCard key={i}>
            <Img src={p.image} />
            <MenuItemCardRight>
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
            </MenuItemCardRight>
          </MenuItemCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Menu;