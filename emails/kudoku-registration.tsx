import React from 'react';
import { Html } from '@react-email/html';
import { Head } from '@react-email/head';
import { Preview } from '@react-email/preview';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Section } from '@react-email/section';
import { Img } from '@react-email/img';
import { Text } from '@react-email/text';

const stromtrooper =
  'https://drive.google.com/uc?id=12usPcokGvrhNyRoHdcVX60qTbR0Htesd';

export default function Email({ firstName = 'Furqon', kudosNo = 1 }) {
  return (
    <Html>
      <Head />
      <Preview>Kamu sudah jadi Kudos🎉</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Heyy {firstName}, </Text>

          <Text style={paragraph}>Kenalin, gua Furqon, founder Kudoku.</Text>

          <Text style={paragraph}>
            Terima kasih banget udah ikutan Kudoku waiting list!
          </Text>

          <Section style={box}>
            <Text style={paragraphBig}>
              📣 Kamu officially Kudos No. {kudosNo}! 🥳 🎉
            </Text>

            <Img
              src={stromtrooper}
              alt="Stromtrooper Dancing"
              style={{ margin: '0 auto' }}
            />
          </Section>

          <Text style={paragraph}>
            Kalo lo punya temen/siapapun yang kira-kira suka banget sama Kudoku,
            boleh tolong kasih tau dia ya hehe.
          </Text>

          <Text style={paragraph}>
            Tapi gua penasaran apa yang buat lo daftar? Feel free to reply this
            email and talk with me :)
          </Text>

          <Text style={paragraph}>Hope you have a sunny day Kudos 🌞!</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '10px 0 48px',
  marginBottom: '64px',
};

const box = {
  marginTop: '10px',
  marginBottom: '10px',
  textAlign: 'center' as const,
};

const paragraph = {
  fontSize: '16px',
  lineHeight: 'auto',
  textAlign: 'left' as const,
};

const paragraphBig = {
  fontSize: '32px',
  lineHeight: 'auto',
  textAlign: 'center' as const,
};
