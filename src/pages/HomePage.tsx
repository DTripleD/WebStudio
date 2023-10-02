import Benefits from "../components/Benefits/Benefits";
import Clients from "../components/Clients/Clients";
import Hero from "../components/Hero/Hero";
import Team from "../components/Team/Team";
import Works from "../components/Works/Works";

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
        <Works />
        <Team />
        <Clients />
      </main>
    </>
  );
};

export default HomePage;
