"use client";

import {
  FooterContainer,
  Container,
  FlexContainer,
  AppName,
  Separator,
  PromoLink,
} from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FlexContainer>
          <AppName>Opi Suomea 2025</AppName>
          <Separator>•</Separator>
          <PromoLink
            href="https://www.kabayankonek.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kabayan Konek
          </PromoLink>
        </FlexContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
