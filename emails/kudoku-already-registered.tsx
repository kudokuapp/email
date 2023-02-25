import React from 'react';
import { Html } from '@react-email/html';
import { Head } from '@react-email/head';
import { Preview } from '@react-email/preview';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Text } from '@react-email/text';

export default function Email({ firstName = 'Furqon', kudosNo = 1 }) {
  return (
    <Html>
      <Head />
      <Preview>Kamu sudah jadi Kudos🎉</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Heyy {firstName}, </Text>

          <Text style={paragraph}>
            Gua cuman mau ngingetin aja kalo lo udah submit form kita dan lo
            udah terdaftar di waiting list Kudoku! Lo udah jadi{' '}
            <strong>Kudos No. {kudosNo}</strong>!
          </Text>

          <Text style={paragraph}>
            Kudoku lagi kerja setengah mati untuk ngewujudin app kita secepat
            mungkin. You will get in soon! I promise!😎
          </Text>

          <Text style={paragraph}>
            PS: You know you can always reply this email and talk to me right?
            :)
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

const paragraph = {
  fontSize: '16px',
  lineHeight: 'auto',
  textAlign: 'left' as const,
};
