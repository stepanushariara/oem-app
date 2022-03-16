import { styled } from '@config/stithces.conf';

interface BoxProps {
  children: React.ReactNode;
}

export const Box240 = (props: BoxProps) => {
  const { children } = props;

  const Box = styled('div', {
    p: '$sm',
    m: '$xs',
    height: '240px',
    border: '$bwNormal',
    borderRadius: '$radXs',
    boxShadow: '$swNormal',
    borderStyle: '$bsLine',
  });

  return <Box>{children}</Box>;
};
