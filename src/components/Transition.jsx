"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function Transition({ children }) {
  const pathName = usePathname();

  const [isExitComplete, setIsExitComplete] = useState(false);

  const generatePageName = () => {
    if (pathName === "/") {
      return "Home";
    }
    const pageName1 = pathName.substring(1);
    const pageName2 = pageName1.charAt(0).toUpperCase() + pageName1.slice(1);
    return pageName2;
  };

  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const text = {
    initial: {
      opacity: 1,
    },

    enter: {
      opacity: 0,
      top: -100,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
      transitionEnd: { top: "47.5%" },
    },
  };

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setIsExitComplete(true)}
      >
        <div key={pathName}>
          <motion.div
            className="h-screen w-screen fixed bottom-0 bg-black rounded-t-[100px] z-40"
            animate={{ height: 0 }}
            exit={{ height: "140vh" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            id="PageText"
            className="fixed top-[40%] left-[50%] transform translate-x-[-50%] text-white text-8xl cursor-default z-50 w-fit h-fit"
            {...anim(text)}
          >
            {generatePageName()}
          </motion.div>
          <motion.div
            className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
            initial={{ height: "140vh" }}
            animate={{
              height: 0,
              transition: {
                delay: 0.75,
                duration: 0.75,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          />
          {isExitComplete && children}
        </div>
      </AnimatePresence>
    </>
  );
}
