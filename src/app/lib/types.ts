export type User = {
    id: string;
    email: string;
    allow_password_change: boolean;
    created_at: Date;
    image: string;
    name: string;
    nickname: string;
    provider: "email";
    uid: string;
    updated_at: Date;
  };
   
  export type RegisterUser = Pick<User, "email"> & {
    password: string;
    passwordConfirm: string;
  };
  
  export type LoginUser = Pick<User, "email"> & {
    password: string;
  };
  
  export type GenericResponse<T> = {
    json: any;
    status: "success" | "error";
    data: { errors?: Record<string, string[]>,
      map: (message: any, index: number) => JSX.Element;};
     
    id: string;
    headers: { accessToken: string; client: string; expiry: string; uid: string };
  };
  

  