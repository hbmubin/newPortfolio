import { NavLink, useLocation } from "react-router-dom";
import { GrHomeOption } from "react-icons/gr";
import { MdOutlineEmail, MdOutlineEventNote } from "react-icons/md";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[1009]">
      <ul
        className="h-full nav w-full  
 flex rounded-[1.8rem] overflow-hidden"
      >
        {navLinks.map(({ title, id, link }) => (
          <li key={id}>
            <NavLink
              className="px-[1.6rem] link   py-4 inline-flex text-back rounded-[1.8rem] relative overflow-hidden"
              to={link}
            >
              <span
                className={`title absolute  opacity-0   text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ${
                  path === link ? "text-text" : "text-white"
                }`}
              >
                {title}
              </span>
              {id === 1 && (
                <span className="navIcon  ">
                  <GrHomeOption
                    size={20}
                    color={path === link ? "gray" : "white"}
                  />
                </span>
              )}
              {id === 2 && (
                <span className="navIcon  ">
                  <MdOutlineEventNote
                    size={20}
                    color={path === link ? "gray" : "white"}
                  />
                </span>
              )}
              {id === 3 && (
                <span className="navIcon  ">
                  <MdOutlineEmail
                    size={20}
                    color={path === link ? "gray" : "white"}
                  />
                </span>
              )}
            </NavLink>
            <span
              className={`absolute w-1/3  -z-10 rounded-[1.8rem] h-full bg-card top-0  duration-300 transition-all  ${
                path == "/works" && "  translate-x-[100%] left-0"
              }  ${path == "/" && "left-0 translate-x-0"}
              ${path == "/contact" && " left-0 translate-x-[200%]"}`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Works",
    link: "/works",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
];

export default Navbar;
