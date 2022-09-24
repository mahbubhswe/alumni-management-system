import React from "react";
import Login from "../components/Login";
import Layout from "./Layout";
import { useLocalStorage } from "@rehooks/local-storage";
import dynamin from "next/dynamic";
function AdminProtected({ children }) {
  const [userInfo] = useLocalStorage("userInfo");
  if (userInfo ? (userInfo.isAdmin ? true : false) : false) {
    return <>{children}</>;
  } else {
    return (
      <Layout pageTitle={"login"}>
        <Login />
      </Layout>
    );
  }
}
export default dynamin(() => Promise.resolve(AdminProtected), {
  ssr: false,
});
