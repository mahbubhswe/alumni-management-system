import { useLocalStorage } from "@rehooks/local-storage";
import React from "react";
import AddSkill from "../../../components/AddSkill";
import ProfileLayout from "../../../components/ProfileLayout";
export default function Index() {
  const [userInfo] = useLocalStorage("userInfo");
  return (
    <ProfileLayout pageTitle="Add skill">
      <AddSkill id={userInfo?userInfo._id:null} />
    </ProfileLayout>
  );
}
