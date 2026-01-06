import Link from "next/link"

const page = () => {
  return (
    <form className="
      min-h-[420px]
      w-[90%]
      sm:w-[380px]
      md:w-[420px]
      border border-gray-200
      shadow shadow-gray-200
      rounded-md
      mx-auto
      mt-10 sm:mt-20
      p-5 sm:p-6
      py-8 sm:py-10
      bg-white
    ">
      <h1 className="font-bold text-center text-lg sm:text-xl">
        Welcome Back
      </h1>

      <p className="text-center mb-8 sm:mb-9 text-sm sm:text-md text-gray-400 font-sans">
        Sign in to manage your events and tickets
      </p>

      <div className="space-y-4">
        <div>
          <label className="font-bold text-sm">Email</label><br />
          <input
            type="email"
            placeholder="you@example.com"
            className="
              border
              p-2
              px-3
              w-full
              rounded-md
              border-gray-400
              outline-orange-600
              text-gray-800
              text-sm
            "
          />
        </div>

        <div>
          <label className="font-bold text-sm">Password</label><br />
          <input
            type="password"
            placeholder="........"
            className="
              border
              mb-4
              p-2
              px-3
              w-full
              rounded-md
              border-gray-400
              outline-orange-600
              text-gray-800
              text-sm
            "
          />
        </div>

        <button
          className="
            w-full
            cursor-pointer
            rounded-md
            bg-orange-600
            text-white
            font-bold
            py-2
            text-sm
            hover:bg-orange-700
            transition
          "
        >
          Sign in
        </button>

        <p className="text-center text-xs sm:text-sm text-gray-600">
          Don't have an account?{" "}
          <span className="text-orange-600 font-semibold">
            <Link href="./Signup">Sign up</Link>
          </span>
        </p>
      </div>
    </form>
  );
};

export default page;
