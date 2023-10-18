import { GenericResponse, User } from "../lib/types";



import { loginData } from "./page";


 
export const RetrieveMessages = async ( logindata: GenericResponse<User>) => {
    try {
      const query = await fetch(
        "http://206.189.91.54/api/v1/messages?receiver_id=1&receiver_class=User",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "access-token": logindata.headers.accessToken,
            client: logindata.headers.client,
            expiry: logindata.headers.expiry,
            uid: logindata.headers.uid,
          },
        }
      );
  
      const response: GenericResponse<User> =
        (await query.json()) as GenericResponse<User>;
        console.log("response retrive message",response)
      return response;
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