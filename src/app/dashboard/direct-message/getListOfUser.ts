import { GenericResponse, User } from "@/app/lib/types";

export const ListOfUsers = async (logindata: GenericResponse<User>) => {
   
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
      const response: GenericResponse<{ user: User }> =
        (await query.json()) as GenericResponse<{ user: User }>;
      return response.data
     
      ;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
}