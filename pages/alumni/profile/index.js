import React from "react";
import Profile from "../../../components/Profile";
import Protected from "../../../components/Protected";
import ProfileLayout from "../../../components/ProfileLayout";
import { useLocalStorage } from "@rehooks/local-storage";
export default function Index() {
  const [userInfo] = useLocalStorage("userInfo");
  return (
    <Protected>
      <ProfileLayout pageTitle="profile" id={userInfo ? userInfo._id : null}>
        <Profile userEmail={userInfo ? userInfo.email : null} />
      </ProfileLayout>
    </Protected>
  );
}
