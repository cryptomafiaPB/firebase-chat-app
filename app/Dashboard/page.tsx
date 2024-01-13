import { UserButton } from "@clerk/nextjs";
import React from "react";
import Createjoin from "../_comp/create-join";

function Dashboard() {
  const createRoom = () => {};
  const joinRoom = () => {};
  return (
    <div className="max-w-3xl mx-auto md:py-10 h-screen">
      <div className="h-full border rounded-md">
        <div className="h-20">
          <div className="p-5 border-b flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold">Majju Chat</h1>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
                <h1 className="text-sm text-gray-400">online</h1>
              </div>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="mx-auto max-w-screen-xl px-4 py-32  lg:flex  lg:items-center">
            <div className="gap-4 flex flex-col mx-auto max-w-xl text-center items-center">
              <Createjoin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
