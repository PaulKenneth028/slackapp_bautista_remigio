"use client";

import { RetrieveMessages } from "./RetrieveMessages";
// import { GenericResponse, User } from "../lib/types";
// import { retrieve } from "./RetrieveMessages";

export let loginData = JSON.parse(localStorage.getItem("loginData") || "null");
const page = () => {
  let data = RetrieveMessages(loginData);
  console.log("data", data);

  return <div></div>;
};

export default page;

// type data = {
//     id = string;
//     }

//     const theData: data | undefined = async () => {
//     try {
//     const request = await   fetch('meDaddy');
//     return request.json() }
//     catch(meMommy){
//     return undefined
//     }
//     }

//     const theData2: data | undefined = async () => {
//     return await fetch('meDaddy')
//     .then((result) => result)
//     .catch((error) => undefined);
//     }

// const theData3: data | undefined = async (): Promise<data | undefined> => {
// return new Promise((resolve, reject) => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// resolve(() => {
// return await thedata2;
// reject(() => {
// return undefined;
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// })
// }
// }
