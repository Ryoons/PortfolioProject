import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AccomplishData } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {AccomplishData.map((card, index) => (
        <Box key = {index}>
          <BoxNum> {card.number}+ </BoxNum>
          <BoxText> {card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
