"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

interface Props {
  showTicket: boolean;
  onCloseTicket: () => void;
}

const Hero: React.FC<Props> = ({ showTicket, onCloseTicket }) => {
  const [title, setTitle] = useState('')
  const [tickets, setTickets] = useState(false)
  const [payment, setPayments] = useState(false)
  const [viewTicket, setViewTicket] = useState(false)
  const [count, setCount] = useState(0)
  const [countT, setCountT] = useState(0)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      router.push(`/buyTicket/${encodeURIComponent(title)}`)
    }
  }

  return (
    <div className={`p-4 md:p-6 hero ${showTicket ? 'dark' : ''}`}>
      <div className="bg-white original-content">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-2 md:gap-0">
          <h1 className="text-2xl md:text-3xl font-bold">Your Events</h1>
          <p className="text-gray-600 text-sm md:text-base">2 Event created</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="p-4 md:p-6 border rounded-md border-gray-300 w-full md:w-[70%]">
            <div className="mb-6">
              <img
                src="/ev.png"
                height={400}
                width={400}
                alt=""
                className="mb-3 w-full h-auto rounded-md"
              />
              <h1
                onChange={(e) => setTitle('')}
                className="font-bold mb-1 text-xl md:text-2xl"
              >
                Dance Competition
              </h1>
              <p className="text-gray-500 mb-4 text-sm md:text-base">
                a dance that will take .......
              </p>
              <input
                type="text"
                value={'12/8/2025'}
                className="text-sm md:text-base text-gray-500 w-full"
                readOnly
              />
              <p className="text-gray-500 text-xs md:text-sm">
                Permanent site near unguwan rimi
              </p>
              <hr className="text-gray-500 mb-2" />
              <h3 className="font-bold text-sm md:text-base">3 Tickets</h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-sm md:text-base font-semibold">
                <div className="px-4 py-1 md:px-6 md:py-1 rounded-xl bg-gray-300 w-full sm:w-auto">
                  <p>20 General Ticket $30</p>
                </div>
                <div className="px-4 py-1 md:px-6 md:py-1 rounded-xl bg-blue-300 w-full sm:w-auto">
                  <p>10 VIP $60</p>
                </div>
              </div>
            </div>

            <button
              className="p-2 md:p-2.5 cursor-pointer px-4 md:px-6 w-full text-white font-bold bg-orange-600 rounded-md"
              onClick={() => setTickets(prev => !prev)}
            >
              Buy Tickets
            </button>
          </div>
        </div>
      </div>

      {/* Tickets Modal */}
      {tickets && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 p-4 z-50">
          <div className="bg-white rounded-md w-full max-w-lg p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-3 md:mb-6 gap-2 md:gap-0">
              <h1 className="font-bold text-xl md:text-2xl text-center md:text-left">
                Purchase Tickets
              </h1>
              <span
                onClick={() => setTickets(false)}
                className="cursor-pointer text-sm md:text-base text-gray-600"
              >
                cancel
              </span>
            </div>
            <p className="text-gray-400 mb-3 text-sm md:text-base">
              Select tickets for ddjdjdjdjdjdjdj
            </p>

            {/* Ticket Counts */}
            <div className="mb-4 md:mb-10">
              <nav className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-6 mb-4">
                <div>
                  <h1 className="font-bold">General Admission</h1>
                  <p className="font-bold text-gray-400">$30 each</p>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    onClick={() => setCount(count - 1)}
                    className="px-4 rounded font-bold border-gray-300 shadow-gray-300 cursor-pointer text-xl py-1 border"
                  >
                    -
                  </div>
                  <h1>{count}</h1>
                  <div
                    onClick={() => setCount(count + 1)}
                    className="px-4 rounded font-bold border-gray-300 shadow-gray-300 cursor-pointer text-xl py-1 border"
                  >
                    +
                  </div>
                </div>
              </nav>

              <nav className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-6">
                <div>
                  <h1 className="font-bold">VIP</h1>
                  <p className="font-bold text-gray-400">$30 each</p>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    onClick={() => setCountT(countT - 1)}
                    className="px-4 rounded font-bold border-gray-300 shadow-gray-300 cursor-pointer text-xl py-1 border"
                  >
                    -
                  </div>
                  <h1>{countT}</h1>
                  <div
                    onClick={() => setCountT(countT + 1)}
                    className="px-4 rounded font-bold border-gray-300 shadow-gray-300 cursor-pointer text-xl py-1 border"
                  >
                    +
                  </div>
                </div>
              </nav>
            </div>

            <hr className="text-gray-300 mb-3" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between font-bold mb-6 gap-2 md:gap-0">
              <h2>Total</h2>
              <h2>$450.00</h2>
            </div>

            <button
              onClick={() => setPayments(prev => !prev)}
              className="cursor-pointer font-bold text-white rounded-md bg-orange-600 py-2 px-4 w-full md:w-full"
            >
              Proceed To Payment
            </button>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {payment && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-lg border border-gray-400 shadow-md rounded-md p-4 md:p-6">
            <span
              className="cursor-pointer block text-right mb-2"
              onClick={() => setPayments(false)}
            >
              Cancel
            </span>
            <h1 className="font-bold text-2xl text-center mb-2">Payment Details</h1>
            <p className="text-center text-gray-400 mb-4">Enter your payment information</p>

            <div className="font-sans space-y-3">
              <div>
                <label>Full Name</label><br />
                <input
                  type="text"
                  placeholder=""
                  className="border border-gray-400 rounded-md px-4 w-full py-1 outline-orange-600"
                />
              </div>
              <div>
                <label>Email</label><br />
                <input
                  type="email"
                  className="border border-gray-400 rounded-md px-4 w-full py-1 outline-orange-600"
                />
              </div>
              <div>
                <label>Card Number</label><br />
                <input
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  className="border border-gray-400 rounded-md px-4 w-full py-1 outline-orange-600"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1">
                  <label>Expiry</label><br />
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="border border-gray-400 rounded-md px-4 w-full py-1 outline-orange-600"
                  />
                </div>
                <div className="flex-1">
                  <label>CVV</label><br />
                  <input
                    type="text"
                    placeholder="123"
                    className="border border-gray-400 rounded-md px-4 w-full py-1 outline-orange-600"
                  />
                </div>
              </div>

              <hr className="text-gray-400" />
              <nav className="flex justify-between items-center font-bold mb-2">
                <h2>Amount to pay</h2>
                <h2>$1400.00</h2>
              </nav>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <button
                  className="border rounded-md border-gray-400 py-1 px-3 cursor-pointer"
                  onClick={() => setPayments(false)}
                >
                  Back
                </button>
                <button className="flex-1 rounded-md bg-orange-600 py-2 px-2 text-white font-bold cursor-pointer">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show Ticket Modal */}
      {showTicket && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 p-4 z-50 overflow-auto">
          <div className="bg-white rounded-md w-full max-w-lg p-4 md:p-6">
            <span
              className="block text-right mb-2 cursor-pointer"
              onClick={onCloseTicket}
            >
              cancel
            </span>
            <h1 className="text-xl md:text-2xl font-bold mb-2">My Tickets</h1>
            <p className="mb-3">4 tickets purchased</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-300 rounded-md shadow-md p-2 md:p-4">
                <div className="h-20 flex justify-between w-full rounded-t-md bg-gradient-to-r from-orange-600 to-cyan-500 p-4">
                  <h1>{title}</h1>
                  <div className="p-1 px-3 font-bold rounded-xl bg-white">General</div>
                </div>
                <div className="p-2 md:p-4">
                  <p>12/9/2025</p>
                  <p>{title}</p>
                  <p>sjsjsjsj/user</p>
                  <p>5282828282828-9</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
