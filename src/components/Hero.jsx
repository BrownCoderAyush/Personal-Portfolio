import { motion } from "framer-motion"
import { styles } from "../style"
import { useEffect, useState } from "react"
import { skills } from "../constants"



const Hero = () => {

  let skillLen = skills.length;
  const [profileIndex, setProfileIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const animationVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  };

  const animationTransition = {
    duration: 1,
    ease: "easeIn"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProfileIndex((prevProfileIndex) => {
        return (prevProfileIndex + 1) % skillLen;
      });
    }, 4000)
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(animationKey + 1);
    }, animationTransition.duration * 4000); // Convert seconds to milliseconds

    return () => clearInterval(interval);
  }, [animationKey]);

  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-40 h-28 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi , I'am <span className="text-[#915eff]">Ayush</span></h1>

        </div>
      </div>
      <div className="absolute xs:top-[270px] top-[280px] inset-0 w-[80%] mx-auto  h-30 text-white ">
        <div className="text-white px-[10%] xs:text-[4rem] text-[2rem]">
          I am a ....
        </div>
        <motion.div
          className={`${styles.heroHeadText}  relative top-6 sm:pl-[20%] pl-[19.5%] sm:text-[4vw] text-[8vw] `}
        >
          <motion.p
            key={animationKey} 
            className="text-[#915eff]"
            initial="initial"
            animate="animate"
            variants={animationVariants}
            transition={{
              duration: 1,    // Animation duration in seconds
              ease: "easeIn" // Use "easeIn" easing for smooth entry
            }}
          >
            {skills[profileIndex]}

          </motion.p>
        </motion.div>
      </div>
      {/* <ComputersCanvas/> */}
      {/* animated button to navigate about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero