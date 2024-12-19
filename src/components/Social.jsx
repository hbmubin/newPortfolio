// import { Link } from "react-router-dom";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Social = () => {
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <ul className="fixed bottom-[4%] -translate-x-1/2 left-1/2 z-[1009] socialTab flex items-center gap-2">
      {social.map(({ id, icon, link }) => (
        <li key={id}>
          <motion.a
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 80, opacity: 1 },
            }}
            initial={{ opacity: 0, y: 1000 }}
            animate={hidden ? "hidden" : "visible"}
            transition={
              hidden
                ? { duration: 0.3, ease: "easeInOut" }
                : { duration: 0.5, ease: "easeInOut" }
            }
            className="p-2 inline-block social duration-300 transition-colors "
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </motion.a>
        </li>
      ))}
    </ul>
  );
};

const social = [
  {
    id: 1,
    icon: <FaLinkedinIn color="#606060" />,
    link: "https://www.linkedin.com/in/hbmubin",
  },
  {
    id: 2,
    icon: <FiGithub color="#606060" />,
    link: "https://github.com/hbmubin",
  },
  {
    id: 3,
    icon: <FaFacebookF color="#606060" />,
    link: "https://www.facebook.com/hasanulbannamubin",
  },
];

export default Social;
