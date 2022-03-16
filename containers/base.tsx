import { styled } from '@config/stithces.conf';
import { Nav } from '@components/navigations/nav';
import { Footer } from '@components/navigations/footer';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const { children } = props;

  const Flex = styled('div', {
    p: '$sm',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  });

  const Main = styled('div', {
    width: '100%',
    maxWidth: '960px',
  });

  return (
    <>
      <Nav />
      <Flex>
        <Main>{children}</Main>
      </Flex>
      <Footer />
    </>
  );
};
