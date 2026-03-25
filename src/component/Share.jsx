import { useState } from "react";
import { LiaTelegramPlane } from "react-icons/lia";

function Share() {
const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="">
        <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-white hover:text-blue-800 cursor-pointer "
        >
            <LiaTelegramPlane />
        </button>

        {isOpen && (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/50"
            onClick={() => setIsOpen(false)} // klik luar = tutup
        >
            <div
            className="bg-slate-800 w-96 p-8 rounded-2xl shadow-2xl grid grid-rows-3"
              onClick={(e) => e.stopPropagation()} // cegah klik dalam
            >
            <label className="text-xl font-semibold mb-2 text-white">Share</label>
            <input type="text" className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-blue-800 transition">
            </input>

            <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition"
            >
                Kirim
            </button>
            </div>
        </div>
        )}
    </div>
    </>
  );
}

export default Share;
