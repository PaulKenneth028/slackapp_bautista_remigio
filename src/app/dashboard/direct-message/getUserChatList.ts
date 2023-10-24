import { GenericResponse, User } from "../../lib/types";

export const getUserChatList = async (logindata: GenericResponse<User>) => {
  let idlist: any[] = [];
  let messagelist: any[] = [];

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
    const ids = response?.data.map((item: { id: any }) => item.id);
     
    idlist.push(ids);
    
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  for (let i = 1; i < 50; i++) {
    try {
      const query = await fetch(
        `http://206.189.91.54/api/v1/messages?receiver_id=${i}&receiver_class=User`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "access-token": logindata.headers.accessToken,
            client: logindata.headers.client,
            expiry: logindata.headers.expiry,
            uid: logindata.headers.uid,
            id: logindata.data.id,
          },
        }
      );

      const response2: GenericResponse<User> =
        (await query.json()) as GenericResponse<User>;
       
      if (Object.keys(response2.data).length !== 0) {
        messagelist.push(response2.data);
      } else {
        null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return messagelist;
};
