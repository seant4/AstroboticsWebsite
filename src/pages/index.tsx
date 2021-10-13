import * as React from 'react';
import Layout from '@components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Section from '@src/components/section';

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <div className="flex justify-center">
          <StaticImage
            src="../assets/Astrobotics_Banner_Large.png"
            alt="Astrobotics"
          />
        </div>
        <div>
          <Section title="This is a title">
            <p>Hello There</p>
          </Section>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
