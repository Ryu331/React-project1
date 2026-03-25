import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const images = [
  "src/assets/img/img1.jpeg",
  "src/assets/img/img2.jpeg",
  "src/assets/img/img3.jpeg",
];

function Carousel() {
    const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative max-w-3xl h-64 object-contain bg-gray-800 mx-auto  aspect-video items-center flex justify-center ">
      <img src={images[index]} className="w-full rounded max-h-full max-w-full object-contain" />

      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/4 hover:bg-blue-800 text-white p-2 rounded-4xl">
        <MdNavigateBefore size={24}/>
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/4 hover:bg-blue-800 text-white p-2 rounded-4xl">
        <MdNavigateNext size={24} />
      </button>
    </div>
  );
  
}

export default Carousel