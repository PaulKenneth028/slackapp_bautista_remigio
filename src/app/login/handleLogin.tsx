import React, { FormEvent } from "react";
import { BASE_URL } from "../lib/util";
import { GenericResponse, User, LoginUser } from "../lib/types";
 
const HandleLogin = async (event: FormEvent) => {
 
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  try {
    const loginUser: LoginUser = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const query = await fetch(`${BASE_URL}sign_in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: loginUser.email as string,
        password: loginUser.password as string,
        
      }),
    });
    const headers = query.headers;
    const token = headers.get("access-token");
    const client = headers.get("client");
    const expiry = headers.get("expiry");
    const uid = headers.get("uid");
    const response: GenericResponse<User> = {
      data: await query.json(),
      headers: { accessToken: token, client: client, expiry: expiry, uid: uid },
    } as GenericResponse<User>;
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
   
 
};

export default HandleLogin;
