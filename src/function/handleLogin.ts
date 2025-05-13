'use server'

import { setCookie } from "@/core/cookie/serverCookies";
import { cookies } from "next/headers";



export const handleAdd = async (formData: FormData) => {
  const res = await fetch(
    "https://delta-project.liara.run/api/auth/login",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }
  );
  const ans = await res.json();
  console.log(ans)

  const cookieStore = await cookies();

  if(ans.accessToken){
    cookieStore.set("token" , ans.accessToken)
    // setCookie('token' ,ans.accessToken )
  }
  

}


