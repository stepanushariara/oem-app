import { styled } from '@config/stithces.conf';

interface SectionProps {
  children: React.ReactNode;
}

export const Grid2 = (props: SectionProps) => {
  const { children } = props;
  const Grid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 50%)',
    '@medXs': { gridTemplateColumns: 'auto' },
  });

  return <Grid>{children}</Grid>;
};
