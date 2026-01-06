const Navbar = () => {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        p-2
        px-4 sm:px-10
        border-b
        border-gray-300
        mb-4 sm:mb-6
      "
    >
      <div
        className="
          h-10 w-10
          sm:h-12 sm:w-12
          border border-gray-300
          rounded-2xl
          bg-gradient-to-b
          from-orange-600
          to-cyan-500
          text-white
          shadow-lg
          hover:shadow-xl
          transition
        "
      ></div>

      <h1
        className="
          font-bold
          px-2 sm:px-5
          text-2xl sm:text-4xl
          border-gray-300
          font-mono
        "
      >
        SafIs
      </h1>
    </div>
  );
};

export default Navbar;
