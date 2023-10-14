"use client";
import React, { useState } from "react";
import handleLogin from "./handleLogin";
 
const page = () => {
  const [response, setResponse] = useState<any>();
  return (
    <form
      onSubmit={async (event) => {
        const data = await handleLogin(event);
        setResponse(data);
        console.log(data);
        if(data?.errors=== null){
            console.log("proceed to dashboard page")

        }
      }}
      className="flex flex-col w-96 m-auto text-center text-lg font-semibold gap-1"
    >
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <div className=" text-red-700">{response?.errors && response.errors}</div>
      <button type="submit">Login</button>
    </form>
  );
};

export default page;
