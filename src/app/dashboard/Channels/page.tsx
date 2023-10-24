"use client";
import React from "react";
import "./channels.css";
import Image from "next/image";
import { Router } from "next/router";
import Link from "next/link";

export default function Channels() {
  return (
    <div className="dashboard">
      <input type="text" placeholder="seach" id="searchBar" />
      <div className="dashboardSidebar flex flex-col justify-between items-center">
        <Link href={"./"} className="mt-10">
          Home
        </Link>
        <div className="flex flex-col">
          <Link href={"./Channels"}>Channels</Link>
          <Link href={"./direct-message"}>Direct message</Link>
        </div>
        <button className="w-100">
          <Image
            src=""
            alt="Pro"
            id="profileImg"
            className="flex items-center justify-center"
          />
        </button>
      </div>
      <div className="pinnedandthread">
        <p>Channel List</p>
      </div>
      <div>
        <p id="chatFrame">Channels</p>
        <div className="messageAndSend">
          <input id="sendMessage" type="text" placeholder="Send message..." />
        </div>
      </div>
      <h1 id="friendsList">Friends</h1>
    </div>
  );
}
