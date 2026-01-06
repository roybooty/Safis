"use client"
import Link from "next/link"
import React, { useState } from "react"

interface Props {
  onViewTicket: () => void
}

const Nav: React.FC<Props> = ({ onViewTicket }) => {
  const [tickets, setTickets] = useState(false)

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-300 p-2 px-4 md:px-10 gap-2 sm:gap-0">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 sm:h-15 sm:w-15 rounded-2xl bg-gradient-to-b from-orange-800 to-cyan-500 text-white shadow-lg hover:shadow-xl"></div>
          <h1 className="font-bold text-2xl sm:text-4xl monospace p-2 sm:p-5">SafIs</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            className="border border-gray-400 p-2 sm:p-3 rounded-md cursor-pointer font-bold px-4 sm:px-6"
            onClick={onViewTicket}
          >
            My Tickets (<span></span>)
          </button>
          <button className="rounded-md p-2 sm:p-3 font-bold text-white bg-orange-600 cursor-pointer px-4 sm:px-6">
            <Link href="./crEvent">Create Event</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
