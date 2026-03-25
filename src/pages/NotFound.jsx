import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4 text-center">

      {/* 404 */}
      <h1 className="text-7xl font-extrabold mb-4 text-blue-500 animate-bounce drop-shadow-lg">
        404
      </h1>

      {/* Text */}
      <p className="text-xl mb-6 text-gray-300 animate-fadeIn">
        Halaman yang kamu cari tidak ditemukan 😢
      </p>

      {/* Button */}
      <Link 
        to="/"
        className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition 
        shadow-lg shadow-blue-500/50 
        hover:shadow-blue-500/80 
        animate-fadeIn delay-200"
      >
        Kembali ke Home
      </Link>

    </div>
  );
}

export default NotFound;