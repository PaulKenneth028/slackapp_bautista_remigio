import { GenericResponse, User } from "@/app/lib/types";
import { FormEvent } from "react";
// interface SendMessageProps {
//     loginData: GenericResponse<User>;
//   }

export const SendMessage = async (
  event: FormEvent,
  loginData: GenericResponse<User>
) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const sendMessage: { message: string } = {
    message: formData.get("message") as string,
  };
  try {
    const query = await fetch(
      "http://206.189.91.54/api/v1/messages?receiver_id=1&receiver_class=User",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access-token": loginData.headers.accessToken,
          client: loginData.headers.client,
          expiry: loginData.headers.expiry,
          uid: loginData.headers.uid,
        },
        body: JSON.stringify({
          receiver_id: 1,
          receiver_class: "User",
          body: sendMessage.message as string,
        }),
      }
    );

    const response: GenericResponse<User> =
      (await query.json()) as GenericResponse<User>;
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
