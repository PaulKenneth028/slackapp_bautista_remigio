import { GenericResponse, User } from "./types";

export const BASE_URL = "http://206.189.91.54/api/v1/auth/";


export const ListofUser = async (logindata: GenericResponse<User>) => {
  try {
    const query = await fetch("http://206.189.91.54/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-token": logindata.headers.accessToken,
        client: logindata.headers.client,
        expiry: logindata.headers.expiry,
        uid: logindata.headers.uid,
      },
    });
    const response: GenericResponse<User> =
      (await query.json()) as GenericResponse<User>;
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
