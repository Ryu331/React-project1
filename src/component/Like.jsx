import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

function Like() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center gap-2 text-white hover:text-blue-800 cursor-pointer">
        {isMenuOpen ? <BiSolidLike size={18}/> : <BiLike size={18}/>}
    </button>
    </>
  )
}

export default Like