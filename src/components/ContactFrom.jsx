import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";

const ContactFrom = () => {
  const form = useRef();

  const [checkSubmit, setCheckSubmit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setCheckSubmit(true);

    emailjs
      .sendForm("service_tjf7soy", "template_vmrvacq", form.current, {
        publicKey: "na751eZoc6R7VepZB",
      })
      .then(
        () => {
          setCheckSubmit(false);

          e.target.reset();
          toast.success(" Email sent!", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
            transition: Slide,
          });
        },
        (error) => {
          setCheckSubmit(false);
          toast.error("Something went wrong!", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
            transition: Slide,
          });
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <ToastContainer />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mb-5">
        <div className="">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            className="bg-back contactInput rounded-2xl w-full py-4 px-5"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            className="bg-back contactInput rounded-2xl w-full py-4 px-5"
            required
          />
        </div>
      </div>
      <div className="mb-5">
        <input
          type="text"
          name="from-subject"
          placeholder="Subject"
          className="bg-back contactInput rounded-2xl w-full py-4 px-5"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Message"
          id=""
          rows="3"
          className="bg-back contactInput rounded-2xl w-full py-4 px-5"
        ></textarea>
      </div>
      <div className="flex justify-end mt-3">
        <button
          type="submit"
          className="text-md uppercase sendBtn tracking-widest active:scale-[.98] duration-100"
        >
          {checkSubmit ? (
            <span>
              <CircularProgress size={18} color="secondary" />
            </span>
          ) : (
            "send"
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactFrom;
