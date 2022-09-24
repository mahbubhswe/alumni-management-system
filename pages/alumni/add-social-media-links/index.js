import useLocalStorage from "@rehooks/local-storage";
import React from "react";
import AddSocialLink from "../../../components/AddSocialLink";
import ProfileLayout from "../../../components/ProfileLayout"
export default function Index() {
    const [userInfo] = useLocalStorage("userInfo");
  return (
    <ProfileLayout pageTitle="Add social link">
      <AddSocialLink id={userInfo?userInfo._id:null}/>
    </ProfileLayout>
  );
}
