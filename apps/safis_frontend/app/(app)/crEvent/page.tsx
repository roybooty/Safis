"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const fileInputRev = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [eventName, setEventName] = useState("");
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPreviewUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (eventName.trim()) {
      router.push(`/CrTicket/${encodeURIComponent(eventName)}`);
    }
  };

  return (
    <div className="px-4">
      <form
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
        onSubmit={handleSubmit}
      >
        <h1 className="text-orange-800 font-sans text-2xl sm:text-3xl mb-5 font-bold">
          Create New Ticket
        </h1>

        <div className="space-y-4">
          <div>
            <label className="font-bold text-black">Event Name</label><br />
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Summer Music Festival"
              className="text-gray-500 outline-none rounded-md border border-gray-300 p-2 w-full text-sm"
            />
          </div>

          <div>
            <label className="font-bold text-black">Description</label><br />
            <textarea
              placeholder="Describe Your Event"
              className="text-gray-500 outline-none rounded-md border border-gray-300 p-2 w-full text-sm min-h-[80px]"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="font-bold text-black">Event Date</label><br />
              <input
                type="datetime-local"
                className="text-gray-500 outline-none rounded-md border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <div className="flex-1">
              <label className="font-bold text-black">Location</label><br />
              <input
                type="text"
                placeholder="City, Venue"
                className="text-gray-500 outline-none rounded-md border border-gray-300 p-2 w-full text-sm"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-black">Event Image</label><br />
            <input
              type="file"
              ref={fileInputRev}
              onChange={handleFileChange}
              accept="image/*"
              className="border border-gray-300 text-gray-500 p-2 rounded-md w-full text-sm mb-3"
            />

            {previewUrl ? (
              <div className="w-full">
                <div>
                  <img
                    src={previewUrl}
                    className="w-full h-56 sm:h-70 object-cover rounded-md"
                    alt="preview"
                  />
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 text-white bg-orange-600 p-2 rounded-md cursor-pointer hover:bg-orange-700 transition text-sm"
            >
              Create Event
            </button>

            <button
              type="button"
              className="border border-gray-300 p-2 rounded-md cursor-pointer text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
