import Accomplishments from '../components/Accomplishments/Accomplishments';
import CoffeeAnimation from '../components/BackgroundAnimation/CoffeeAnimation';
import Hero from '../components/Hero/Hero';
import Menu from '../components/Menu/Menu';
import Space from '../components/Space/Space';
import AboutUs from '../components/AboutUs/AboutUs';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <CoffeeAnimation />
      </Section>
      <Menu />
      {/*<Space />*/}
      <AboutUs />
      {/*<Accomplishments />*/}
    </Layout>
  );
};

export default Home;
