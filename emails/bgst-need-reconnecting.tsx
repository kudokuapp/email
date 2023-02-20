import UseTailwind from './tailwind';
import { Button } from '@react-email/button';
import React from 'react';
import { Html } from '@react-email/html';
import { Head } from '@react-email/head';
import { Preview } from '@react-email/preview';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Section } from '@react-email/section';
import { Img } from '@react-email/img';
import { Hr } from '@react-email/hr';
import { Text } from '@react-email/text';

const url = 'https://drive.google.com/uc?id=1ePzW3lbfFIb2RlpnqMFyyv9QqlQHipYu';

export default function Email({ kudosNo = 1, month = 'January 2023' }) {
  return (
    <Html>
      <Head />
      <Preview>❗️Ada akun kamu yang butuh login kembali di BGST!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img src={url} width="78" height="25" alt="BGST" />
            <Hr style={hr} />
            <Text style={paragraph}>Heyy Kudos No. {kudosNo}</Text>
            <Text style={paragraph}>
              Laporan BGST kamu bulan <strong>{month}</strong> udah tersedia
              nih.
            </Text>
            <Text style={paragraph}>
              Akun Bank/E-Wallet yang sudah kamu <em>connect</em> ke BGST dan
              sudah tersedia laporannya itu ada:
              <ol style={paragraph}>
                <li>BCA</li>
                <li>Mandiri</li>
                <li>Gopay</li>
              </ol>
            </Text>
            <Text style={paragraph}>
              Penasaran kan bulan {month} kamu gimana? Yuk buruan cek BGST
              sekarang!
            </Text>
            <Button
              pX={10}
              pY={10}
              style={button}
              href="https://bgst.kudoku.id/t"
            >
              Cek laporan BGST
            </Button>
            <Hr style={hr} />
            <Text style={paragraph}>
              Kalo ada bug, error, atau feature request, jangan sungkan-sungkan
              untuk email balik ke gua yaa. Tinggal reply aja email ini pasti
              gua bales!
            </Text>
            <Text style={paragraph}>- Furqon</Text>
            <Text style={footer}>PT. Kudoku Finansial Indonesia</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const button = {
  backgroundColor: '#2C5EA8',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};
