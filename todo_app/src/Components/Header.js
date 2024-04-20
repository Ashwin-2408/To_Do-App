import "./Header.css";
import { IoHomeSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="Header-Container">
      <IoHomeSharp className="home-button" />
      <h1 className="text">WORK ORGANISER</h1>
    </div>
  );
};

export default Header;
