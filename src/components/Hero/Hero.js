import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Ryan Nguyen <br/>
        Full Stack <br/>
        Developer
      </SectionTitle>
      <SectionText>
        My goal is to create innovative webpages and applications that live rent free in your head.
      </SectionText>
      
      <Button onClick= {() => window.open('https://google.ca').focus()}>Contact Me</Button>
    </LeftSection>
  </Section>
);
// Learn more button needs a relink to my email and a rename to the email 
export default Hero;