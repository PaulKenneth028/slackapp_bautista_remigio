"use client";

import { useEffect, useState } from "react";

import { SendMessage } from "./SendMessage";
import Link from "next/link";
import Image from "next/image";
import { getUserChatList } from "./getUserChatList";
import { loginData } from "../page";
import { ListOfUsers } from "./getListOfUser";
const DirectMessage = () => {
  const [chatList, setChatList] = useState<any>([]);
  const [listOfUsers, setListOfUsers] = useState<any>([]);
// 
  const fetchListOfUsers = async () => {
    let value = await ListOfUsers(loginData);
    setListOfUsers(value);
    return value;
  };
  const fetchUserChatList = async () => {
    let value = await getUserChatList(loginData);
    setChatList(value);
    return value;
  };

  useEffect(() => {
    // setInterval(() => {
    fetchListOfUsers();
    fetchUserChatList();

    // }, 5000)
  }, []);
  console.log("chatList", chatList);
  console.log("listOfUsers", listOfUsers);
  let usersId: any[] = [];
  for (let i = 0; i < chatList.length; i++) {
    chatList[i].map((item: any) => {
      if (item.receiver.id !== loginData.data.id) {
        usersId.push(item.sender.uid);
      } else {
        usersId.push(item.receiver.uid);
      }
    });
  }

  const removeDuplicates = (arr: any[]) => {
    return [...new Set(arr)];
  };
  console.log("usersId", usersId);
  let filteredUsersId = removeDuplicates(usersId);
  console.log("filteredUsersId", filteredUsersId);
  return (
    <>
      <div className="dashboard">
        <input type="text" placeholder="search" id="searchBar" />
        <div className="dashboardSidebar flex flex-col justify-between items-center">
          <h1>Home</h1>
          <div className="flex flex-col">
            <Link href="/dashboard/Channels">Channels</Link>
            <Link href="/dashboard/direct-message">Direct message</Link>
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
          <p>UserChatList</p>
          {filteredUsersId.map((item: any) => {
            return (
              <div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div>
          <p>List of Messages</p>

          <form
            onSubmit={async (event) => {
              let data = await SendMessage(event, loginData);
            }}
            className=" rounded-lg w-96 border mt-3"
          >
            <textarea name="message" className=" w-80 rounded-lg"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <h1 id="friendsList">Friends</h1>
      </div>
    </>
  );
};
export default DirectMessage;
