import { GenericResponse, RegisterUser, User } from "../lib/types";
import { BASE_URL } from "../lib/util";
import { FormEvent } from "react";
import { redirect } from "next/navigation";
const createUser = async (event: FormEvent) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);

  const newUser: RegisterUser = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    passwordConfirm: formData.get("passwordConfirm") as string,
  };
  try {
    const query = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: newUser.email,
        password: newUser.password,
        password_confirmation: newUser.passwordConfirm,
      }),
    });
    const response: GenericResponse<User> =
      (await query.json()) as GenericResponse<User>;

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default createUser;
