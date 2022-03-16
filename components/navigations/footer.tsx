import { styled } from '@config/stithces.conf';
import { Text } from '@components/typography/text';
import { OpenNewTab } from '@utils/openWindow';
import { TokopediaSeller, InstagramUri, SaweriaUri } from '@config/url.conf';
import { ShoppingCart, Instagram, Coffee } from 'react-feather';

interface FooterProps {}

export const Footer = (props: FooterProps) => {
  const {} = props;

  const Block = styled('div', {
    p: '$xs',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '$gray12',
  });

  const IconFlex = styled('div', {
    p: '$xs',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const IconMargin = styled('div', {
    mrX: '$xxs',
    cursor: 'pointer',
  });

  return (
    <Block>
      <IconFlex>
        <IconMargin onClick={() => OpenNewTab(TokopediaSeller)}>
          <ShoppingCart />
        </IconMargin>
        <IconMargin onClick={() => OpenNewTab(InstagramUri)}>
          <Instagram />
        </IconMargin>
        <IconMargin onClick={() => OpenNewTab(SaweriaUri)}>
          <Coffee />
        </IconMargin>
      </IconFlex>
      <Text size="fsXxs" fontFamily="monospace">
        <strong>©2021 OEM Magazine</strong>. All Rights Reserved.
      </Text>
    </Block>
  );
};
