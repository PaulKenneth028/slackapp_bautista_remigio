"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "../lib/util";
import "./dashboard.css";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://206.189.91.54/api/v1/messages");
      if (response.ok) {
        const jsonData = await response.json();
        setMessages(jsonData);
      } else {
        console.log("Error fetching messages:", response.status);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await fetch("http://206.189.91.54/api/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newMessage }),
      });

      if (response.ok) {
        fetchData();
        setNewMessage("");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="dashboard">
      <input type="text" placeholder="search" id="searchBar" />

      <div className="dashboardSidebar flex flex-col justify-between items-center">
        <h1>Home</h1>
        <div className="flex flex-col">
          <Link href="/dashboard/Channels">Channels</Link>
          <Link href="/dashboard/RetrieveMessages">Direct message</Link>
        </div>
        <button className="w-100">
          <Image
            src=""
            alt="Profile"
            id="profileImg"
            className="flex items-center justify-center"
          />
        </button>
      </div>
      <div className="pinnedandthread">
        <Link href="/dashboard/thread">Thread</Link>
        <Link href="/dashboard/pin">Pinned Messages</Link>
      </div>
      <div>
        <p id="chatFrame"></p>
        <div className="messageAndSend">
          <input
            id="sendMessage"
            type="text"
            placeholder="Send message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="sendMessageBtn" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
      <h1 id="friendsList">Friends</h1>
    </div>
  );
}
