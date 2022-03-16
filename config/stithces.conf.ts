import { createStitches } from '@stitches/react';
import { cyan, cyanDark, goldA, goldDark, grayDark } from '@radix-ui/colors';

export const { styled, css, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        ...cyan,
        ...cyanDark,
        ...goldA,
        ...goldDark,
        ...grayDark,
      },
      fonts: {
        sans: `'IBM Flex Mono', Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
        mono: `Mononoki, monospace`,
      },
      fontWeights: {
        fwLight: `300`,
        fwNormal: `400`,
        fwBold: `700`,
        fwBlack: `900`,
      },
      fontSizes: {
        fsXxs: `0.8rem`,
        fsXs: `14px`,
        fsSm: `15px`,
        fsDisplay: `16px`,
        fsMd: `23px`,
        fsLg: `31px`,
        fsXl: `47px`,
      },
      radii: {
        radXs: `8px`,
        radSm: `16px`,
        radLg: `21px`,
      },
      space: {
        xxs: `0.4rem`,
        xs: `0.8rem`,
        sm: `1.2rem`,
        md: `1.8rem`,
        lg: `3.2rem`,
        xl: `4.6rem`,
      },
      sizes: {
        screenSm: '60%',
        screenMd: '80%',
        screenLg: '100%',
      },
      shadows: {
        swNormal: '5px 10px',
      },
      borderStyles: {
        bsLine: 'solid',
      },
      borderWidths: {
        bwNormal: '2px',
      },
    },
    media: {
      medXs: `screen and (min-width: 9px)  and (max-width: 576px) `,
      medSm: `screen and (min-width: 576px) and (max-width: 768px)`,
      medMd: `screen and (min-width: 768px) and (max-width: 992px)`,
      medLg: `screen and (min-width: 992px) and (max-width: 1200px)`,
      medXl: `screen and (min-width: 1200px) and (max-width: 1440px)`,
    },
    utils: {
      m: (value: string) => ({
        margin: value,
      }),
      mt: (value: string) => ({
        marginTop: value,
      }),
      mr: (value: string) => ({
        marginRight: value,
      }),
      mb: (value: string) => ({
        marginBottom: value,
      }),
      ml: (value: string) => ({
        marginLeft: value,
      }),
      mrX: (value: string) => ({
        marginLeft: value,
        marginRight: value,
      }),
      mrY: (value: string) => ({
        marginTop: value,
        marginBottom: value,
      }),
      p: (value: string) => ({
        padding: value,
      }),
      pt: (value: string) => ({
        paddingTop: value,
      }),
      pr: (value: string) => ({
        paddingRight: value,
      }),
      pb: (value: string) => ({
        paddingBottom: value,
      }),
      pl: (value: string) => ({
        paddingLeft: value,
      }),
      pdX: (value: string) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      pdY: (value: string) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  });
