import { GenericResponse, User } from "../../lib/types";
 
 
import { loginData } from "../page";
export const RetrieveMessages = async (id: any) => {
  try {
    const query = await fetch(
      `http://206.189.91.54/api/v1/messages?receiver_id=${id}&receiver_class=User`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "access-token": loginData.headers.accessToken,
          client: loginData.headers.client,
          expiry: loginData.headers.expiry,
          uid: loginData.headers.uid,
          id: loginData.data.id,
        },
      }
    );

    const response: GenericResponse<User> =
      (await query.json()) as GenericResponse<User>;
    
      return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  
};

//  export const retrieve = async () =>{
// const response: GenericResponse<User> | undefined = await RetrieveMessages(loginData);
// if (response) {
//   console.log("response generic function",response)
//     return response

// }}
