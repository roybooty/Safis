"use client";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const eventName = params.eventName as string;
  const decodedEventName = decodeURIComponent(eventName || "");

  if (!eventName) {
    return (
      <div className="px-4 mt-10 text-center">
        <h1 className="font-bold text-lg">No event name provided</h1>
        <p className="text-gray-600 mb-3">
          Go back and enter an event name
        </p>
        <a href="/crEvent" className="text-orange-600 font-bold">
          Create event
        </a>
      </div>
    );
  }

  return (
    <div className="px-4">
      <div
        className="
          w-full
          sm:w-[520px]
          md:w-[640px]
          border
          p-4 sm:p-6
          mx-auto
          border-gray-300
          rounded-xl
        "
      >
        <h1 className="text-orange-800 font-sans text-2xl sm:text-3xl mb-1 font-bold">
          Create Tickets
        </h1>

        <p className="text-gray-600 mb-6 sm:mb-9 font-sans text-sm sm:text-md">
          Configure tickets for{" "}
          <span className="font-bold text-black text-lg sm:text-2xl">
            {decodedEventName}
          </span>
        </p>

        <div>
          <div className="bg-gray-200 p-4 sm:p-5 rounded-md mb-6">
            <h1 className="font-bold text-lg sm:text-xl mb-2">
              General Tickets
            </h1>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex-1">
                <h1 className="font-bold text-sm">Quantity</h1>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-white border border-gray-300 rounded-md p-2 outline-none text-sm"
                />
              </div>

              <div className="flex-1">
                <h1 className="font-bold text-sm">$ Price</h1>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-white border border-gray-300 rounded-md p-2 outline-none text-sm"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-4 sm:p-5 rounded-md border border-orange-600 mb-6">
            <h1 className="font-bold text-lg sm:text-xl mb-2">
              VIP Tickets
            </h1>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex-1">
                <h1 className="font-bold text-sm">Quantity</h1>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-white border border-gray-300 rounded-md p-2 outline-none text-sm"
                />
              </div>

              <div className="flex-1">
                <h1 className="font-bold text-sm">$ Price</h1>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-white border border-gray-300 rounded-md p-2 outline-none text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 rounded-md text-white cursor-pointer font-bold bg-orange-600 p-2 hover:bg-orange-700 transition text-sm">
            Save Tickets
          </button>

          <button className="border border-gray-400 rounded-md p-2 font-bold cursor-pointer text-sm">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
