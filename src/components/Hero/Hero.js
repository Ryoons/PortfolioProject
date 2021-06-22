import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Ryan Nguyen <br/>
        Front End <br/>
        Web Developer
      </SectionTitle>
      <SectionText>
        My goal is to create innovative webpages that live rent free in your head.
      </SectionText>
      <Button onClick= {() => window.open('https://google.ca').focus()}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;