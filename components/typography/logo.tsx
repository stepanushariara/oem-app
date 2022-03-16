import { styled } from '@config/stithces.conf';

export const LogoName = () => {
  const Logo = styled('div', {
    fontFamily: 'monospace',
    fontSize: '$fsDisplay',
    fontStyle: '$fwBlack',
    pdX: '$sm',
    color: '$gray1',
  });

  return <Logo>OEM</Logo>;
};
