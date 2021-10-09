import * as React from 'react';
import Layout from '@components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <StaticImage
          src="../assets/Astrobotics_Banner_Large.png"
          alt="Astrobotics"
          height={60}
        />
      </main>
    </Layout>
  );
};

export default IndexPage;
