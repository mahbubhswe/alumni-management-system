import axios from "axios";
import React from "react";
import { FadeLoader } from "react-spinners";
import useSWR from "swr";
import ProfileLayout from "../../../components/ProfileLayout";
import Poll from "../../../components/Poll";
const getPollList = (url) => axios.get(url).then((res) => res.data);
export default function Index() {
  const { data } = useSWR("/api/admin/getPollList", getPollList);
  if (!data) {
    return (
      <ProfileLayout>
        <div
          style={{ height: "100vh", display: "grid", placeContent: "center" }}
        >
          <FadeLoader />;
        </div>
      </ProfileLayout>
    );
  }
  return (
    <ProfileLayout pageTitle="poll">
      <Poll data={data} />
    </ProfileLayout>
  );
}
