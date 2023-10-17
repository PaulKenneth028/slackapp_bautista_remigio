"use client";
import React, { FormEvent } from "react";
import { LoginUser } from "../../lib/types";
import "./message.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  response: LoginUser[];
};

const Messages = ({ response }: Props) => {
  const onClick = (event: FormEvent) => {
    event.preventDefault();
    console.log(response);
  };

  return (
    <div className="dashboard">
      <input type="text" placeholder="seach" id="searchBar" />
      <div className="dashboardSidebar flex flex-col justify-between items-center">
        <Link href={"./dashboard"} className="mt-10">
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
          <button className="sendMessageBtn" type="submit" onClick={onClick}>
            Send
          </button>
        </div>
      </div>
      <h1 id="friendsList">Friends</h1>
    </div>
  );
};

export default Messages;
