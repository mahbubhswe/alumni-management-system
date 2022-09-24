import React from "react";
import CreatePollForm from "../../../components/CreatePollForm";
import DashboardLayout from "../../../components/DashboardLayout";
import AdminProtected from "../../../components/AdminProtected";

export default function CreatePole() {
  return (
    <AdminProtected>
      <DashboardLayout pageTitle={"Create a new pole"}>
        <CreatePollForm />
      </DashboardLayout>
    </AdminProtected>
  );
}
