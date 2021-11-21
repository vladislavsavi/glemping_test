import { FC } from "react";
import { Greeting, Services } from "./components";

const Home: FC = () => {
  return (
    <>
      <Greeting />
      <Services />
    </>
  );
};

export default Home;
