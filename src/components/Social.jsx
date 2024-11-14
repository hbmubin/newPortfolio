import { Link } from "react-router-dom";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Social = () => {
  return (
    <ul className="fixed bottom-[4%] left-1/2 z-[1009] -translate-x-1/2 flex items-center gap-2">
      {social.map(({ id, icon, link }) => (
        <li key={id}>
          <Link
            className="p-2 inline-block social duration-300 transition-colors "
            to={link}
            target="_blank"
          >
            {icon}
          </Link>
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
