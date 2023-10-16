"use client";
import Link from "next/link";
import createUser from "./handleRegister";
import React, { useState } from "react";
import { redirect } from "next/navigation";

const Register = () => {
  const [response, setResponse] = useState<any>();

  return (
    <>
      <form
        onSubmit={async (event) => {
          const data = await createUser(event);
          setResponse(data);
          console.log(data);
          if (data?.status === "success") {
            window.location.href = "./login";
          }
        }}
        className="flex flex-col w-96 m-auto text-center text-lg font-semibold gap-1"
      >
        <h1>Register</h1>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <div className=" text-red-700">
          {response?.errors?.email && "email " + response.errors.email}
        </div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <div className=" text-red-700">
          {response?.errors?.password && "password " + response.errors.password}
        </div>
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input type="password" name="passwordConfirm" id="passwordConfirm" />
        <div className=" text-red-700">
          {response?.errors?.password_confirmation &&
            "password " + response.errors.password_confirmation}
        </div>
        <button type="submit">Register</button>
        <Link href="./login">already have an account? Login</Link>
      </form>
    </>
  );
};

export default Register;
