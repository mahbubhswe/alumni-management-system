import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { FadeLoader } from "react-spinners";
import useSWR from "swr";
import DashboardLayout from "../../../components/DashboardLayout";
import AdminProtected from "../../../components/AdminProtected";
import UpdatePollForm from "../../../components/UpdatePollForm";
const getSinglePole = (url) => axios.get(url).then((res) => res.data);
export default function Index() {
  const router = useRouter();
  const id = router.query.id;
  const { data } = useSWR(`/api/admin/getSinglePoll?id=${id}`, getSinglePole);

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
    <AdminProtected>
      <DashboardLayout pageTitle={"Update poll"}>
        <UpdatePollForm data={data} />
      </DashboardLayout>
    </AdminProtected>
  );
}
