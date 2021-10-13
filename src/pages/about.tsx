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

          <Section
            title="NASA RMC"
            subtitle="What is the RMC (Robotic Mining Competition)?"
          >
            <div className="flex items-center flex-col md:flex-row">
              <p>
                The NASA RMC is a design challenge for college teams based off
                of the current NASA mission of traveling to, and potentially
                inhabiting, Mars. Water is one of the most important factors for
                sustaining life, and it is theorized that water can be found in
                the form of icy gravel beneath the surface of Mars. The purpose
                of the RMC is for teams of college students to design and
                manufacture an autonomous Mars mining robot that is able to
                extract the aforementioned icy gravel.
              </p>
              <StaticImage src="../assets/NASA_Logo.png" alt="NASA Logo" width={3000}/>
            </div>
          </Section>

          <Section
            title="Mechanical Sub-Team"
            subtitle="
              This sub-team works on the design and manufacture of the robot and
              focuses on four main systems. If you're interested in volunteering
              for the team:"
            contentClassName="grid lg:grid-cols-2"
          >
            <Section title="Locomotion">
              <p>
                The locomotion system is what allows the robot to traverse the
                competition arena. Our team currently uses a tank treads design;
                however, there are other options that can be used as well. For
                many competition teams, wheels and treads are the most popular
                locomotion systems.
              </p>
            </Section>
            <Section title="Mining">
              <p>
                The primary goal of the NASA Robotic Mining Competition is to
                mine as much gravel as possible, so the mining system is one of
                the most important and complex systems on the robot. There are
                many different mining systems that are used by teams in the
                competition. This year, our team is using a bucket elevator
                system for mining.
              </p>
            </Section>
            <Section title="Dumping">
              <p>
                In addition to mining the material, the team is required to dump
                all collected material in a bin placed in the mining arena. In
                order to do this successfully, often times a separate dumping
                mechanism is required. Two of the most commonly used dumping
                systems are the pivoted dump body and the conveyor belt dumping
                system. This year, the team is using a pivoted dump body for the
                dumping system.
              </p>
            </Section>
            <Section title="Controls">
              <p>
                Controls is how the whole robot functions. It includes the
                analysis and use of sensors, motors, motor controllers, and
                batteries. By connecting these different parts together through
                the use of a microcontroller, the robot can be remotely
                controlled by a teleoperations system.
              </p>
            </Section>
          </Section>

          <Section
            title="Autonomy Sub-Team"
            subtitle="
              The autonomy sub-team is responsible for having the robot navigate
              autonomously through the competition arena. If you're interested
              in volunteering for the team"
          >
            <Section title="How does it work?">
              <p>
                The team creates a path planning intelligence using two systems:
                a Pozyx, which provides orientation data based off of the
                starting location, and a lidar, which provides accurate obstacle
                data points with respect to the robot. When this data is given
                to the D* algorithm in Simulink, the result is a continuously
                updated path for the robot to travel so that it can avoid
                boulders and craters while crossing the obstacle field.{' '}
              </p>
            </Section>
          </Section>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
