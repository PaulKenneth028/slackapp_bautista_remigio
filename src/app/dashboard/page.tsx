import React from "react";
import "./dashboard.css";
import Image from "next/image";
import { Router } from "next/router";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <input type="text" placeholder="seach" id="searchBar" />
      <div className="dashboardSidebar flex flex-col justify-between items-center">
        <h1>Home</h1>
        <div className="flex flex-col">
          <Link href={"./dashboard/Channels"}>Channels</Link>
          <Link href={"./dashboard/messages"}>Direct message</Link>
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
        <Link href={"./dashboard/thread"}>Thread</Link>
        <Link href={"./dashboard/pin"}>Pinned Messages</Link>
      </div>
      <div>
        <p id="chatFrame"></p>
        <div className="messageAndSend">
          <input id="sendMessage" type="text" placeholder="Send message..." />
          <button className="sendMessageBtn">Send</button>
        </div>
      </div>
      <h1 id="friendsList">Friends</h1>
    </div>
  );
}
