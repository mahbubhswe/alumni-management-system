import React from "react";
import useSWR from "swr";
import Dashboard from "../../components/Dashboard";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";
import { FadeLoader } from "react-spinners";
import AdminProtected from "../../components/AdminProtected";
import moment from "moment";
const currentDate = moment(new Date()).format("YYYY-MM-DD");
const getAlumniInfo = (url) => axios.get(url).then((res) => res.data);
export default function Index() {
  const { data, error } = useSWR(
    `/api/alumni/getAlumniInfo?date=${currentDate}`,
    getAlumniInfo
  );
  if (!data) {
    return (
      <AdminProtected>
        <DashboardLayout pageTitle={"Update poll"}>
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
    <DashboardLayout pageTitle="Welcome to admin dashboard">
      <Dashboard data={data} />
    </DashboardLayout>
  );
}
