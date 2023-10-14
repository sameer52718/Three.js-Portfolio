import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="flex w-full h-screen mx-auto relative">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto max-w-7xl flex
      flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I&apos;m <span className="text-[#915eff]">Sameer</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" /> web
            interface and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex items-center justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex items-start justify-center p-2">
              <motion.div
                animate={{
                  y: [0,24,0]
                }}          
                transition={{
                  duration:1.5,
                  repeat: Infinity,
                  repeatType:"loop"
                }}      

                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>          
         </a>
      </div>
    </section>
  );
};

export default Hero;
