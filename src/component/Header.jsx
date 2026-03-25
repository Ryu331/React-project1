import { SiMihoyo } from "react-icons/si";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="sticky top-0 flex items-center justify-between bg-slate-700 text-white py-4 px-8 z-50">
        <div>
          <Link to="/">
            <SiMihoyo size={64} />
          </Link>
        </div>

        <Dropdown />
      </div>
    </>
  );
}

export default Header;
