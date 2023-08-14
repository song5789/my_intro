import Nav from "./components/Nav";
import "./css/global.css";
import GradienBG from "./components/GradienBG";
import Main from "./components/Main";
import Skils from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import LoadingBar from "./components/LoadingBar";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, SetLoading] = useState(false);
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 1,
      transition: {
        delayChidren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 2000);
  }, []);
  if (loading)
    return (
      <GradienBG>
        <LoadingBar />
      </GradienBG>
    );
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <GradienBG>
        <motion.div variants={item}>
          <Nav />
        </motion.div>
        <motion.div variants={item}>
          <Main />
        </motion.div>
        <motion.div variants={item}>
          <Skils />
        </motion.div>
        <motion.div variants={item}>
          <Portfolio />
        </motion.div>
        <motion.div variants={item}>
          <Contact />
        </motion.div>
      </GradienBG>
    </motion.div>
  );
}
