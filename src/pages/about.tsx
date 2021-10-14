import * as React from 'react';
import Layout from '@components/layout';
import Section from '@src/components/section';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
  return (
    <Layout>
      <main className="w-11/12 sm:w-10/12 xl:w-7/12 mx-auto">
        <div>
          <h1 className="text-7xl font-semibold text-center">Who Are We?</h1>
          <Section title="About Us">
            <p>
              Astrobotics is a design team based out of the Joseph F. Ware
              Advanced Engineering Laboratory that competes in the NASA Robotic
              Mining Competition. We are a senior design team for mechanical,
              electrical, and computer engineering. The team is currently
              comprised of 19 members: 13 seniors and 6 underclass volunteers.
              If you are a student at Virginia Tech and are interested in
              volunteering with team.
            </p>
          </Section>

          <Section title="How the team works">
            <p>
              The engineers operate on a one-year design cycle, designing and
              fabricating the robot in-house at Virginia Tech’s Ware Lab. The
              engineers are organized into two sub-teams; mechanical design and
              autonomy.
            </p>
          </Section>

          <Section title="Outreach">
            <p>
              The team participates in multiple STEM based outreach activities
              throughout the year with a focus on hands-on activities. If you
              are interested in working with Astrobotics for an event.
            </p>
          </Section>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
