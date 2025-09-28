"use client";
import Image from "next/image";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  height: 100vh;
`;

// const Title = styled.h1`
//   font-size: 2.5rem;
//   color: #003580; /* Finnish blue */
//   margin-bottom: 1rem;
// `;

const Intro = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
  padding: 20px;
`;

const LogoImage = styled(Image)`
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export default function Home() {
  return (
    <Page>
      <LogoImage
        src="/OPISUOMEA.png"
        alt="OPI SUOMEA LOGO"
        width={300}
        height={300}
      />
      {/* <Title>Opi Suomea</Title> */}
      <Intro>
        Welcome to <strong>Opi Suomea</strong> – a simplified Finnish language
        reference website. Perfect for beginners and learners who want clear,
        easy-to-follow references.Learn vocabulary, grammar,everyday expressions
        and examples to help you understand and use the language efficiently.
        Whether you are just starting out or want to improve your skills, we
        make learning Finnish easy.
      </Intro>
    </Page>
  );
}
