"use client";
import React, { FormEvent } from "react";
import { LoginUser } from "../../lib/types";
import "./message.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("<your_api_endpoint>");
      const jsonData = await response.json();
      setMessages(jsonData);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <div className="dashboard">
      <input type="text" placeholder="seach" id="searchBar" />
      <div className="dashboardSidebar flex flex-col justify-between items-center">
        <Link href={"./"} className="mt-10">
          Home
        </Link>
        <div className="flex flex-col">
          <Link href={"./Channels"}>Channels</Link>
          <Link href={"./messages"}>Direct message</Link>
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
        <Link href={"./thread"}>Thread</Link>
        <Link href={"./pin"}>Pinned Messages</Link>
      </div>
      <div>
        <p id="chatFrame">DIRECT MESSAGES</p>
        <div className="messageAndSend">
          <input id="sendMessage" type="text" placeholder="Send message..." />
          <button className="sendMessageBtn" type="submit">
            Send
          </button>
        </div>
      </div>
      <h1 id="friendsList">Friends</h1>
    </div>
  );
}
