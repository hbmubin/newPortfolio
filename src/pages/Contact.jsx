import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../components/contact.css";
import ContactFrom from "../components/ContactFrom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center">
      <Helmet>
        <title>HB MUBIN | Contact</title>
        <meta name="description" content="Hasanul Banna Mubin | HB Mubin" />
      </Helmet>
      <div className="container mx-auto xl:max-w-screen-xl grid lg:grid-cols-2 grid-cols-1 gap-20 w-full px-4 sm:px-0 lg:py-0 py-24">
        <motion.article
          initial={{ x: -2000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-card p-10 rounded-3xl formForm"
        >
          <div className="mb-8">
            <h2 className="text-3xl">Contact me</h2>
          </div>
          <ContactFrom></ContactFrom>
        </motion.article>
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="mapCard relative lg:aspect-auto aspect-square lg:w-full "
          // style={{ aspectRatio: "1/1" }}
        >
          <div className="absolute top-[12%] sm:left-[12%] left-1/2 sm:translate-x-0 -translate-x-2/3 bg-text z-[999] text-back text-[9px]  p-2 rounded-md">
            <h2>Hasanul Banna Mubin</h2>
            <p>Bijoy 71 hall, University of Dhaka</p>
            <p>Dhaka 1000, Bangladesh</p>
            <br />
            <span>hasanulbannamubin01@gmail.com</span>
          </div>
          <MapContainer
            center={[23.737312, 90.391]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[23.737312, 90.391]}>
              <Popup>
                Banna lives here. <br /> come here for a cuppa.
              </Popup>
            </Marker>
          </MapContainer>
        </motion.article>
      </div>
    </section>
  );
};

export default Contact;
