import type { NextPage } from 'next';
import { BaseLayout } from '@containers/base';
import { Grid2 } from '@containers/grid';
import { Box240 } from '@components/design/box';

const Home: NextPage = () => {
  const dt = [
    'stepanus',
    'hariara',
    'Friyanka',
    'tambunan',
    'nani',
    'nunu',
    'neno',
  ];
  return (
    <BaseLayout>
      <Grid2>
        {dt.map((x, y) => {
          return <Box240 key={y}>{x}</Box240>;
        })}
      </Grid2>
    </BaseLayout>
  );
};

export default Home;
