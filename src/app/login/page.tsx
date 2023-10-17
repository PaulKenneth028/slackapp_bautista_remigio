"use client";
import React, { useState } from "react";
import handleLogin from "./handleLogin";
import Link from "next/link";
import { GenericResponse, User } from "../lib/types";

const page = () => {
  const [response, setResponse] = useState<GenericResponse<User>>();

  return (
    <>
      <form
        onSubmit={async (event) => {
          const data = await handleLogin(event);
          setResponse(data);

          if (!data?.data.errors) {
            window.location.href = "./dashboard";
            console.log("proceed to dashboard page");
          }
        }}
        className="flex flex-col w-96 m-auto text-center text-lg font-semibold gap-1"
      >
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        {response?.data.errors && (
          <div className="text-red-700">
            {Object.values(response.data.errors).map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
        <button type="submit">Login</button>
        <Link href="./signup">Create Account</Link>
      </form>
    </>
  );
};

export default page;
