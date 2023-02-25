import { Body } from '@react-email/body';
import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

interface EmailProps {
  firstName: string;
  account: string;
  kudosId: number;
  link: string;
}

const url = 'https://drive.google.com/uc?id=1ePzW3lbfFIb2RlpnqMFyyv9QqlQHipYu';

export default function Email({
  firstName = 'Furqon',
  account = 'Gopay',
  kudosId = 1,
  link = 'https://bgst.kudoku.id/account/connect/gopay',
}: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>❗️Ada akun Bank/E-Wallet kamu yang gabisa di BGST</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img src={url} width="78" height="25" alt="BGST" />

          <Text style={title}>
            ❗️<strong>{firstName}</strong>, kamu butuh login kembali akun{' '}
            {account} kamu ke BGST
          </Text>

          <Section style={section}>
            <Text style={text}>
              Hey{' '}
              <strong>
                {firstName}, Kudos No. {kudosId}
              </strong>
              !
            </Text>
            <Text style={text}>
              <strong>Akun {account} kamu perlu login kembali</strong> di BGST.
              Jangan khawatir, abis kamu login kembali, laporan bulanan kamu
              yang paling baru langsung siap buat kamu.
            </Text>

            <Button style={button} href={link}>
              Login kembali akun {account}
            </Button>
          </Section>

          <Text style={footer}>PT. Kudoku Finansial Indonesia</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  width: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
};

const button = {
  fontSize: '14px',
  backgroundColor: '#2C5EA8',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '0.75em 1.5em',
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
};
