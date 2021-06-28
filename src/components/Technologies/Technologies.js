import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've been learning and working with a range of technologies in the development world. 
      From front end to back end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size ="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Three.js <br/>
            React.js <br/>
            CSS <br/>
            HTML <br/>
            JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>                  
        <DiFirebase size ="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Python <br/>
            Java <br/>
            SQL <br/>
            C++ <br/>
            Kotlin
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider/>
  </Section>
  
);

export default Technologies;
