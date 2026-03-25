import { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-800 text-white px-4 py-2 rounded-lg"
      >
        Menu
      </button>

      {isOpen && (
        <>

          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="absolute mt-2 bg-white shadow-lg rounded-lg z-10 flex justify-end right-0 translate-x-2">
            <ul className="py-2 text-gray-700">
              <Link to="/profile"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li></Link>
              <Link to="/settings"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li></Link>
              <Link to="/logout"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li></Link>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Dropdown;