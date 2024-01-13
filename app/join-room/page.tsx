"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/fireabase-config";
import { UserButton } from "@clerk/nextjs";
import { doc, getDoc } from "firebase/firestore";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Join() {
  const router = useRouter();
  const [roomname, setRoomName] = useState("");
  const joinRoom = async () => {
    console.log("Join");
    try {
      const docSnap = await getDoc(doc(db, "rooms", roomname));
      if (docSnap.exists()) {
        console.log(docSnap.data());
        router.push(`/chat/${roomname}`);
        // Redirect to created room
        return docSnap.data();
      } else {
        console.error("Room not found");
        // Inform user that the room doesn't exist
        return console.log("Null");
      }
    } catch (error) {
      console.error("Error getting room: ", error);
      // Handle any errors during data retrieval
    }
  };
  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md">
          <div className="h-20">
            <div className="p-5 border-b flex items-start justify-between">
              <div>
                <h1 className="text-xl font-bold">Join ChatRoom</h1>
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
                <Button onClick={joinRoom}>Join ChatRoom</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
