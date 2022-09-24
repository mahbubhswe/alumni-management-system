import axios from "axios";
import React from "react";
import { FadeLoader } from "react-spinners";
import useSWR from "swr";
import DashboardLayout from "../../../components/DashboardLayout";
import AdminProtected from "../../../components/AdminProtected";
import ShowPoll from "../../../components/ShowPoll";
const getPollList = (url) => axios.get(url).then((res) => res.data);
export default function Index() {
  const { data } = useSWR("/api/admin/getPollList", getPollList);
  if (!data) {
    return (
      <AdminProtected>
        <DashboardLayout pageTitle={"Manage poll"}>
          <div
            style={{ height: "100vh", display: "grid", placeContent: "center" }}
          >
            <FadeLoader />;
          </div>
        </DashboardLayout>
      </AdminProtected>
    );
  }
  return (
    <AdminProtected>
      <DashboardLayout pageTitle={"Manage pole"}>
        <ShowPoll data={data} />
      </DashboardLayout>
    </AdminProtected>
  );
}
