import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import "./workModal.css";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";

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
  outline: "0px",
  zIndex: "999",
};

export default function TransitionsModal({ work }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Box
            sx={style}
            className="modalBox z-[9999] sm:p-16 sm:pb-20 p-6 pb-16 "
          >
            <div className="flex justify-end closeSpan ">
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
                className="sm:text-4xl text-xl inline-block relative font-semibold mt-10 group  cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  {work.title}
                  <span className="inline-block">
                    <TbExternalLink />
                  </span>
                </span>
                <span className="absolute -top-4 left-0 opacity-0 group-hover:opacity-100 text-blue-500  text-xs  duration-300 transition w-full text-center">
                  {work.link}
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
