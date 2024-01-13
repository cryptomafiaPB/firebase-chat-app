"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";

import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "@/fireabase-config";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

function Create() {
  const [roomname, setRoomName] = useState("");
  const { user } = useUser();
  console.log(user?.id);
  const createRoom = async () => {
    console.log("InCraeteRoom");
    try {
      const docRef = await addDoc(collection(db, "rooms"), {
        roomname: roomname,
        createdAt: new Date(),
        createdBy: user?.fullName,

        // Other fields like participants, etc.
      });
      console.log("Room created with ID: ", docRef.id);
      window.location.href = `/chat/${docRef.id}`; // Redirect to created room
    } catch (error) {
      console.error("Error creating room: ", error);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md">
          <div className="h-20">
            <div className="p-5 border-b flex items-start justify-between">
              <div>
                <h1 className="text-xl font-bold">Create ChatRoom</h1>
                <div className="flex items-center gap-1">
                  <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
                  <h1 className="text-sm text-gray-400">online</h1>
                </div>
              </div>
              <UserButton afterSignOutUrl="/" />
            </div>
            <div className="ml-8 mt-2">
              <Link href="/Dashboard">
                <Button variant="outline" size="icon">
                  <ChevronLeft />
                </Button>
              </Link>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 py-32  lg:flex  lg:items-center">
              <div className="gap-4 flex flex-col mx-auto max-w-xl text-center items-center">
                <h1 className="">Enter ChatRoom Name: </h1>
                <input
                  onChange={(e) => setRoomName(e.target.value)}
                  type="text"
                  className="p-3"
                  placeholder="Enter ChatRoom Name.. "
                />
                <Button onClick={createRoom}>Create ChatRoom</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
