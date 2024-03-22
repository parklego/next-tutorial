"use client";
import { fetcher } from "@/utils/fetcher";
import React from "react";
import useSWR from "swr";

const Dashboard = () => {
  const { data, isLoading, error } = useSWR("", fetcher);

  return <div>Dashboard</div>;
};

export default Dashboard;
