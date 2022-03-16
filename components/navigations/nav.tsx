import { styled } from '@config/stithces.conf';
import { LogoName } from '@components/typography/logo';
import { Burger } from '@components/navigations/burger';

interface NavProps {}

export const Nav = (props: NavProps) => {
  const Block = styled('div', {
    padding: '$xs',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: '$gray12',
    borderBottomStyle: 'solid',
  });

  return (
    <Block>
      <Burger />
      <LogoName />
    </Block>
  );
};
