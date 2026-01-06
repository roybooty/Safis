"use client"
import Hero from "./component/Hero"
import Nav from "./component/Nav"
import React, { useState } from "react"
const page :React.FC= ()=>{
    const [showTicket, setShowTicket]= useState(false)
    const handleViewTicket=()=>{
        setShowTicket(true)
    }
    const handleCloseTicket=()=>{
        setShowTicket(false)
    }
    return(
    
        <div>
            <Nav onViewTicket={handleViewTicket}/>
            <Hero showTicket={showTicket} onCloseTicket={handleCloseTicket}></Hero>
        </div>
    )
}
export default page