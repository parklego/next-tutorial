"use client";
import { fetcher } from "@/utils/fetcher";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";
import Image from "next/image";

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();

  const { data, isLoading, error } = useSWR(
    `/api/post?username=${session?.data?.user?.name}`,
    fetcher
  );
  console.log("dashboard data", data);
  if (session.status === "loading") {
    return <p>loading..</p>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div>
        <p
          style={{ fontSize: "30px", marginBottom: "30px" }}
        >{`Hi ${session.data.user.name}`}</p>
        {data?.length === 0 && <p>현재 등록된 게시물이 없습니다.</p>}
        {data?.map((item) => (
          <div key={item._id}>
            <div>
              <div>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
              <div>
                <Image width={250} height={250} src={item.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Dashboard;
