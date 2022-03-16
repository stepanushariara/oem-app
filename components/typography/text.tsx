import { styled } from '@config/stithces.conf';

interface TextProps {
  fontFamily?: string;
  size: string;
  children: React.ReactNode;
}
export const Text = (props: TextProps) => {
  const { fontFamily, size, children } = props;

  const Txt = styled('div', {
    fontSize: '$' + size,
    fontFamily: fontFamily,
  });

  return <Txt>{children}</Txt>;
};
