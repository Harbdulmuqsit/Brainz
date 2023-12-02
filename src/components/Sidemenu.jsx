import "./Sidemenu.css";
import { IoIosFilm } from "react-icons/io";
import { IoIosAlbums } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import gifted from "../../src/img/Gifted-Brainz.png";
import { Link } from "react-router-dom";
import Dashboard from './Dashboard'

const Sidemenu = () => {
  return (
    <div id="sidebar">
      <Link to="#" className="brand">
        <img className="canada" src={gifted} alt="" />
      </Link>

      <div className="admin">
        <p>Admin</p>
        <p>Name</p>
      </div>
      <ul class="side-menu top">
        <li class="active">
          <Link to="/dashboard">
            <MdOutlineDashboard className="bx" />
            <span class="text1">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <RiLockPasswordFill className="bx" />
            <span class="text1">Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/quiz">
            <IoIosFilm className="bx" />
            <span class="text1">Quiz competition</span>
          </Link>
        </li>
        <li>
          <Link to="/leader-board">
            <IoIosAlbums className="bx" />
            <span class="text1">Quiz leaders board</span>
          </Link>
        </li>

        <li>
          <Link to="/wheel">
            <IoIosAlbums className="bx" />
            <span class="text1">Spin the wheel</span>
          </Link>
        </li>

        <li>
          <Link to="/skill">
            <IoIosAlbums className="bx" />
            <span class="text1">Skill acquisition</span>
          </Link>
        </li>
      </ul>
      <ul class="side-menu">
        <li>
          <Link to="/payment">
            <IoMdSettings className="bx" />
            <span class="text1">Payment</span>
          </Link>
        </li>
        <li>
          <Link to="/referral" class="logout">
            <BiLogOutCircle className="bx" />
            <span class="text1">Refferal</span>
          </Link>
        </li>

        <li>
          <Link to="#" class="logout">
            <BiLogOutCircle className="bx" />
            <span class="text1">Earning history</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidemenu;
