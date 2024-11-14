import { Swiper, SwiperSlide } from "swiper/react";
import WorkModal from "../components/WorkModal";
import { motion } from "framer-motion";
import ReactLoading from "react-loading";

import "../components/workSlide.css";

import works from "../data/works";
import { Mousewheel } from "swiper/modules";
import { HiPlus } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Works = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location]);

  console.log(loading);
  return (
    <>
      {loading && (
        <span className="w-full flex justify-center mt-20">
          <ReactLoading type="bubbles" width={200} color="#0cbfdf6c" />
        </span>
      )}
      <main
        className={`min-h-screen w-full flex items-center ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1, ease: "easeInOut" }}
          className="w-full h-[78vh] workSlide"
        >
          <Swiper
            slidesPerView={3.5}
            spaceBetween={30}
            mousewheel={true}
            className="mySwiper"
            modules={[Mousewheel]}
          >
            {works.map((work) => (
              <SwiperSlide className="relative" key={work.id}>
                <img src={work.img} alt={work.title} />
                <h2 className="absolute top-0 p-8 text-2xl left-0 text-white z-30 workTitle">
                  {work.title}
                </h2>
                <span className="absolute bottom-3 right-3 inline-block p-2 rounded-full bg-gray-400">
                  <HiPlus color="#fff" />
                </span>
                <WorkModal work={work}></WorkModal>

                <span className="h-full w-full absolute top-0 left-0 bg-gradient-to-b from-[#00000091] via-[#00000008] to-[#00000010]"></span>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </main>
    </>
  );
};

export default Works;
