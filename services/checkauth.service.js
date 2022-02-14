import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const CheckAuth = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      router.push("/login");
      return false;
    }
  }, []);
  return true;
};

export default CheckAuth;
