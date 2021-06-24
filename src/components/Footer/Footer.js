import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href= "tel:416-659-3027">416 659 3027</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href= "mailto:ryanz35@hotmail.com">Ryanz35@hotmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Living rent free one head at a time.</Slogan>
        </CompanyContainer>
      <SocialContainer>
        <SocialIcons onClick = {() => window.open('https://github.com/Ryoons').focus()}>
          <AiFillGithub size ="3rem"/>
        </SocialIcons>
        <SocialIcons onClick = {() => window.open('https://www.linkedin.com/in/ryan-nguyen-533960168/').focus()}>
          <AiFillLinkedin size ="3rem"/>
        </SocialIcons>
        <SocialIcons onClick ={() => window.open('https://www.instagram.com/ng_ryann').focus()}>
          <AiFillInstagram size ="3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
