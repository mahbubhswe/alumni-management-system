import React from "react";
import Protected from "../../../components/Protected";
import UpdateProfile from "../../../components/UpdateProfile";
import ProfileLayout from "../../../components/ProfileLayout";
export default function Index() {
  return (
    <Protected>
      <ProfileLayout pageTitle="update profile">
        <UpdateProfile />
      </ProfileLayout>
    </Protected>
  );
}
