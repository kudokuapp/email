import { Tailwind } from '@react-email/tailwind';
import * as React from 'react';

export default function UseTailwind({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: '#2C5EA8',
              primaryDark: '#ABC7FF',
              onPrimary: '#FFFFFF',
              onPrimaryDark: '#002F65',
              primaryContainer: '#D6E3FF',
              primaryContainerDark: '#03458E',
              onPrimaryContainer: '#001A40',
              onPrimaryContainerDark: '#D7E3FF',
              secondary: '#006974',
              secondaryDark: '#4ED8E9',
              onSecondary: '#FFFFFF',
              onSecondaryDark: '#00363C',
              secondaryContainer: '#8AF2FF',
              secondaryContainerDark: '#004F57',
              onSecondaryContainer: '#001F23',
              onSecondaryContainerDark: '#91F1FF',
              tertiary: '#953459',
              tertiaryDark: '#FFB1C7',
              tertiaryContainer: '#FFD9E3',
              tertiaryContainerDark: '#802348',
              onTertiaryContainer: '#3E001B',
              onTertiaryContainerDark: '#FFD9E2',
              error: '#BA1B1B',
              errorDark: '#FFB4AB',
              onError: '#FFFFFF',
              onErrorDark: '#690005',
              errorContainer: '#FFDAD4',
              errorContainerDark: '#93000A',
              onErrorContainer: '#410001',
              onErrorContainerDark: '#FFDAD6',
              background: '#E1E1E1',
              onBackground: '#1A1B1F',
              surface: '#FDFBFF',
              onSurface: '#1A1B1F',
              surfaceVariant: '#FDFBFF',
              onSurfaceVariant: '#44474F',
              outline: '#74777F',
              neutral: '#44474F',
              neutralOnBackground: '#1A1B1F',
              neutralBackground: '#E1E1E1',
            },
          },
        },
      }}
    >
      {children}
    </Tailwind>
  );
}
