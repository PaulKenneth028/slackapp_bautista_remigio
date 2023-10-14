import React from "react";

export default function Signup() {
  async function test() {
    const request = await fetch("http://206.189.91.54/api/v1/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "emegerd10000000@example.com",
        password: "12345678",
        password_confirmation: "12345678",
      }),
    });
    console.log(await request.json());
  }
  test();
  return <div>Hello Signup</div>;
}
