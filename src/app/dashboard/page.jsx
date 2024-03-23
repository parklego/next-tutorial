"use client";
import { fetcher } from "@/utils/fetcher";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";

const Dashboard = () => {
  const { data, isLoading, error } = useSWR("", fetcher);
  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") {
    return <p>loading..</p>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return <div>{`Hi ${session.data.user.name}`}</div>;
  }
};

export default Dashboard;
