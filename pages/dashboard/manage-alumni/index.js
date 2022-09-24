import axios from "axios";
import React from "react";
import { FadeLoader } from "react-spinners";
import useSWR from "swr";
import DashboardLayout from "../../../components/DashboardLayout";
import AdminProtected from "../../../components/AdminProtected";
import ShowAlumni from "../../../components/ShowAlumni";
const getPoleList = (url) => axios.get(url).then((res) => res.data);
export default function Index() {
  const { data } = useSWR("/api/alumni/getAlumni", getPoleList);
  if (!data) {
    return (
      <AdminProtected>
        <DashboardLayout pageTitle="manage alumni">
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
      <DashboardLayout pageTitle="manage alumni">
        <ShowAlumni data={data} />
      </DashboardLayout>
    </AdminProtected>
  );
}
