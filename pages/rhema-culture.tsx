import { Container, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import styled from "styled-components";

const RhemaCulture = () => {
  const pageTitle = "Rhema Culture";
  const pageImage = "/img/culture.jpg";

  return (
    <>
      <Meta title={`${pageTitle} - Rhema - Changing & Affecting Lives!`} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} height="28.125rem" />
      <CultureContainer>
        <div className="content-wrapper">
          <h3>Culture Document: Embracing Our Beliefs, Values, Mission & Purpose</h3>
          <p>
            At Rhema Canada, our culture is not simply a set of guidelines on paper; it is the foundation of everything
            we do. It represents who we are as a community of believers, deeply rooted in the teachings and followership
            of Jesus Christ – someone who embodied love, compassion, and servanthood. Driven by our faith and love for
            God and one another, we strive to exemplify these values in every aspect of our work. Our primary pillars of
            Spirituality, Philanthropy, and Education guide us as we seek to make a positive impact in the world by
            transforming lives. We are dedicated to our vision and united in our passion to see people live fulfilling
            lives. This document serves as a blueprint for how we embody our core values, fulfill our mission, and
            cultivate a culture centered on faith, service, and excellence.
          </p>
          <h3>Our Mission:</h3>
          <p>We change and affect lives by offering products & services that meet people at their point of need.</p>
          <h3>Our Core Values:</h3>
          <ol>
            <li>
              Integrity: At Rhema Canada, we promote and uphold honesty, transparency, and ethical conduct in all our
              dealings and interactions, ensuring accountability and trustworthiness in every endeavor.
            </li>
            <li>
              Compassion: At Rhema Canada, we demonstrate empathy, kindness, and mercy to all individuals, meeting them
              where they are and offering practical assistance and emotional support.
            </li>
            <li>
              Innovation: At Rhema Canada, we commit and strive to make a better future possible, with a focus on
              continuously evolving, not just as individuals, but also by the products and services we offer.
            </li>
            <li>
              Teamwork: At Rhema Canada, we embrace partnership and collaboration, recognizing and valuing the diverse
              and rich talents, perspectives, and contributions of every member of our community.
            </li>
            <li>
              Excellence: At Rhema Canada, we aim for excellence in everything we do, pursuing innovation,
              effectiveness, and continuous improvement to maximize our impact and stewardship.
            </li>
          </ol>
          <h3>Culture: As a reflection of our values, we seek to cultivate a culture that is committed to:</h3>
          <ol>
            <li>Open dialogue, idea sharing & teamwork:</li>
            <p>
              Open Dialogue: At Rhema Canada, we firmly believe in the transformative potential of open dialogue.
              Through honest and transparent communication, we strive to promote understanding, trust, and a shared
              sense of belonging among our teams. We actively encourage meaningful conversations, constructive feedback,
              and respectful discourse at every level of our organization. By practicing active listening with empathy,
              speaking candidly in love, and engaging in dialogue, we are committed to creating an inclusive environment
              where diverse perspectives are not only accepted but also celebrated.
            </p>
            <p>
              Idea Sharing: At Rhema Canada, we strongly believe in the power of collaboration to drive innovation. We
              understand that when ideas are freely shared and explored, they have the potential to become game-changing
              solutions. As such, we encourage a culture of creativity, curiosity, and experimentation among all team
              members. We actively invite everyone to contribute their unique ideas, insights, and expertise to our
              collective pool of knowledge. Whether through formal brainstorming sessions, cross-functional
              collaborations, or simple conversations over email, we foster an environment where all voices are heard
              and valued. This commitment to sharing ideas inspires us to think outside the box and constantly push for
              improvement in everything we do. By embracing this culture of idea sharing, we continually spark new
              innovations and drive success for our organization.
            </p>
            <p>
              Teamwork: At Rhema Canada, we firmly believe that the foundation of our success lies in our ability to
              work together as a team, amplifying our achievements beyond what we could individually accomplish. We
              promote an atmosphere of collaboration, camaraderie, and shared responsibility, valuing the integral role
              each team member plays in our collective triumphs. Through harnessing our unique strengths, supporting one
              another's abilities, and partnering harmoniously towards unified objectives, we generate a powerful
              synergy that propels us towards progress and equips us with determination and resilience to conquer any
              obstacles.
            </p>
            <li>Accountability in all relationships/interactions </li>
            <p>
              Accountability: At the core of Rhema Canada lies a fundamental belief: accountability is not merely a
              term, but a way of thinking that influences how we behave, guides our decisions, and determines our
              achievements. We uphold ourselves and our colleagues to the utmost standards of integrity, ethics, and
              professionalism, taking full ownership of our actions and their outcomes. Our commitments are sacred to
              us; we diligently fulfill our responsibilities and embrace the consequences of our choices with humility
              and poise. By nurturing a culture of accountability, we cultivate trust, instill confidence, and foster a
              collective sense of duty towards the success of our organization and the realization of our mission.
            </p>
            <li>Celebrations (each other, milestones, rewards) </li>
            <p>
              Celebrations: At Rhema Canada, we strongly believe in the power of celebrating successes, both big and
              small. We recognize that doing so not only builds stronger connections between team members, but also
              boosts morale and reinforces our shared values. Whether it's reaching project milestones or achieving
              individual goals, we make sure to take the time to acknowledge and honor the hard work and accomplishments
              of our team. Through team outings, recognition programs, and spontaneous expressions of gratitude, we
              provide opportunities for celebrating the contributions and milestones that drive us towards our goals. By
              fostering a culture of celebration within our workplace, we cultivate a sense of camaraderie,
              appreciation, and joy. This positive energy serves as motivation for our team to continue working together
              towards achieving even greater heights.
            </p>
            <li>Continuous development (Learning, Technology, Training, Innovation, etc.)</li>
            <p>
              Continuous Development: At Rhema Canada, we are persuaded that learning is an ongoing process that enables
              individuals to realize their true potential and adapt to a constantly changing world. It is our dedicated
              commitment to invest in the continual development of our team members by providing various opportunities
              for learning, growth, and skills enhancement. Through mentorship, carefully designed training programs,
              and professional development initiatives, we actively promote a growth mindset that embraces challenges,
              values constructive feedback, and looks for chances to further personal and professional growth. By
              fostering a culture of continuous learning and advancement, we empower our team members to thrive, drive
              innovation, and achieve success in their roles while also contributing to the overall resilience and
              prosperity of our organization.
            </p>
            <li>Excellence</li>
            <p>
              Excellence: At Rhema Canada, we firmly believe that excellence is not a final endpoint, but an ongoing
              journey of constant improvement, innovation, and progress. We are dedicated to achieving excellence in all
              aspects of our work by setting ambitious goals, striving for mastery in our respective fields, and pushing
              beyond limits to achieve the extraordinary. Challenges are embraced as opportunities for growth and
              learning, as we utilize our collective talents, creativity, and expertise to exceed expectations. With
              unwavering passion, determination, and a commitment to excellence, we not only inspire others but also
              elevate our own performance and ultimately attain long-lasting success in pursuit of our vision and
              objectives.
            </p>
          </ol>
          <h3>Cultural Practices:</h3>
          <ol>
            <li>
              Faith-Anchored: As an organization, we are deeply rooted in the teachings of Jesus Christ and strive to
              embody biblical principles in all facets of our work and interactions.
            </li>
            <li>
              Servant Leadership: Demonstrating leadership through our actions, we strive to serve others with grace,
              humility, and sacrificial love. Our focus is on esteeming others above ourselves, following the example of
              Jesus Christ who embodied a servant's heart and purpose. He came not to be served, but to serve, inspiring
              us to do the same.
            </li>
            <li>
              Stewardship: At our organization, we honor our responsibility as stewards to effectively manage the
              resources given to us, such as finances, human talent, and environmental assets. We are committed to
              utilizing them prudently and ethically for the betterment of all.
            </li>
            <li>
              Spiritual Growth: As an organization, we place utmost importance on the practices of prayer, studying
              God's word, and spiritual formation. We believe these disciplines are crucial for deepening our connection
              with God, and aligning our behaviors with His divine will.
            </li>
            <li>
              Gratitude: We express sincere gratitude to God for the blessing of LIFE. We acknowledge and honor God's
              unwavering presence in our lives and the lives of those around us. Our hearts are filled with appreciation
              for the honor and responsibility bestowed upon us to serve others.
            </li>
          </ol>
          <h3>Code of Conduct: </h3>

          <ol>
            <li>
              Show respect, dignity, and compassion towards others, regardless of any differences in background or
              ideologies.
            </li>
            <li>
              Carry out all tasks with utmost honesty, integrity, and fairness, adhering to the highest ethical
              principles.
            </li>
            <li>
              Promote open, honest, and transparent communication to establish trust and facilitate collaboration among
              internal teams and external stakeholders.
            </li>
            <li>
              Uphold obligations and carry out duties with unwavering dedication, exceptional quality, and a mindset of
              selfless service.
            </li>
            <li>
              Welcome feedback and constructive criticism as valuable chances to learn and develop, while maintaining a
              humble and open mindset. Remain teachable as we strive for growth and progress.
            </li>
            <li>
              Ensure the protection and security of all individuals, with a focus on maintaining their physical,
              emotional, and spiritual well-being.
            </li>
          </ol>
          <p>
            At Rhema Canada, our culture encompasses much more than mere words on a page. It is a vibrant embodiment of
            our beliefs, principles, and purpose. As we embark on our collective journey to serve others, may we be
            driven by an unwavering love, fueled by boundless hope, and anchored in steadfast faith—recognizing that
            every step we take is guided by the presence of God.
          </p>
        </div>
      </CultureContainer>
    </>
  );
};

const CultureContainer = styled(Container)`
  .content-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
    word-wrap: break-word;
  }
`;

export default RhemaCulture;
