import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import "./workModal.css";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";

const style = {
  position: "fixed",
  top: "5%",
  left: "50%",
  transform: "translate(-50%, 0%)",
  width: "85%",
  height: "100%",
  overflow: "scroll",
  display: "block",
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "24px",
  p: 8,
  outline: "0px",
  zIndex: "999",
};

export default function TransitionsModal({ work }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // if (latest > previous && latest > 150) {
    //   setHidden(true);
    // } else {
    //   setHidden(false);
    // }
    console.log(scrollY);
  });

  return (
    <div className="h-full w-full workModal z-[9999]">
      <span
        className="absolute to-0 left-0 w-full h-full z-50"
        onClick={handleOpen}
      ></span>
      <Modal
        className="z-[9999]"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="modalBox z-[9999]">
            <div className="flex justify-end closeSpan">
              <span
                onClick={handleClose}
                className="inline-block bg-gray-600 rounded-full p-1 cursor-pointer "
              >
                <IconContext.Provider value={{ className: "closeIcon" }}>
                  <IoClose size={24}></IoClose>
                </IconContext.Provider>
              </span>
            </div>
            <Typography id="transition-modal-title">
              <Link
                to={work.link}
                target="_blank"
                className="text-4xl inline-flex relative font-semibold mt-10 group items-center gap-3 cursor-pointer"
              >
                <span>{work.title}</span>
                <span className="absolute -top-4 left-1/2 opacity-0 group-hover:opacity-100 text-blue-500 -translate-x-1/2 text-xs  duration-300 transition">
                  {work.link}
                </span>
                <span>
                  <TbExternalLink />
                </span>
              </Link>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <p className="mb-12">{work.des}</p>
              <div className="rounded-2xl overflow-hidden">
                <img src={work.img} alt={work.title} />
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
