import { useTypewriter } from "react-simple-typewriter";
import profile from "../assets/hasanulBannaMubin-Photoroom (2).jpg";
import IconSlider from "../components/IconSlider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: ["..."],
    loop: false,
    typeSpeed: 300,
    deleteSpeed: 100,
    delaySpeed: 2000,
  });

  const [isFirstText, setIsFirstText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstText((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen flex items-center">
      <div className="container mx-auto xl:max-w-screen-xl flex gap-20 w-full">
        <motion.article
          initial={{ x: -2000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.1, delay: 0.05, ease: "easeInOut" }}
          className="bg-card  card  rounded-2xl p-10 text-center flex flex-col items-center min-w-[40%]  gap-10"
        >
          <div>
            <img className="rounded-full w-56" src={profile} alt="profile" />
          </div>
          <div>
            <div className="relative group duration-1000 transition">
              <span
                className={`font-cairo salam text-gray-500 mb-4 inline-block ${
                  isFirstText ? "opacity-100" : "opacity-0"
                } duration-1000 transition  `}
              >
                ! ٱلسَّلَامُ عَلَيْكُمْ
              </span>
              <span
                className={`${
                  !isFirstText ? "opacity-100" : "opacity-0"
                } peace   transition font-cairo text-gray-1000 duration-500 absolute top-0 left-1/2 -translate-x-1/2 w-[200%]`}
              >
                Peace be upon you!
              </span>
            </div>
            <h3 className="text-2xl leading-normal">
              I{"'"}m Hasanul Banna Mubin
              <br />
              <span className="font-bold font-cairo">
                Frontend Developer,
              </span>{" "}
              <br /> and learning more
              <span className="absolute">{text}</span>
            </h3>
            <button className="mt-3">
              <Link
                className=" font-medium resumeText relative "
                to="https://drive.google.com/file/d/1aN7S-Uefsb5CIwISZ3kBzuDwyrQcFDX9/view?usp=sharing"
                target="_blank"
              >
                Resume
                <span className="w-full resumeLine h-[2px] bg-text absolute -bottom-[2px] left-0"></span>
              </Link>
            </button>
          </div>
        </motion.article>
        <div className="flex-1 flex flex-col justify-between">
          <motion.article
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.1, delay: 0.15, ease: "easeInOut" }}
            className="bg-card p-10 card rounded-2xl"
          >
            <h2 className="text-2xl mb-2">About me</h2>
            <p>
              When I was a kid, I enjoyed being around computers and, as I grew
              up, I kept developing my relationship with them. During my time in
              college, I started working as a graphic designer, but it was only
              later that I found my passion: the web.
            </p>
          </motion.article>
          <motion.article
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.1, delay: 0.3, ease: "easeInOut" }}
            className="bg-card p-10 card rounded-2xl flex items-center justify-center"
          >
            <IconSlider></IconSlider>
          </motion.article>
        </div>
      </div>
    </main>
  );
};

export default Home;
