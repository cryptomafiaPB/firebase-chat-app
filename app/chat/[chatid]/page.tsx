"use client";
import ChatInput from "@/app/_comp/ChatInput";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { LoaderIcon } from "lucide-react";
import Image from "next/image";
import { getDatabase } from "firebase/database";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/fireabase-config";

interface Message {
  id: any;
  createdAt: any;
  text: any;
  sender: any;
  profileUrl: any;
}

function Chat() {
  const params = useParams();
  const room = params.chatid;
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);

  const getFormattedRecentMessages = async (roomId: string) => {
    try {
      const q = query(
        collection(db, `rooms/${roomId}/messages`),
        orderBy("createdAt", "desc"),
        limit(15)
      );
      const snapshot = await getDocs(q);
      const formattedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        createdAt: doc.data().createdAt,
        text: doc.data().text,
        sender: doc.data().sender,
        profileUrl: doc.data().profileUrl,
      }));
      console.log(formattedMessages);
      setMessages(formattedMessages);
      setLoading(false);
      return formattedMessages;
    } catch (error) {
      console.error("Error fetching messages: ", error);
      return []; // Return an empty array in case of errors
    }
  };
  useEffect(() => {
    getFormattedRecentMessages(room.toString());
  }, [room]);

  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md flex flex-col relative">
          <div className="h-20">
            <div className="p-5 border-b flex items-start justify-between h-full">
              <div>
                <h1 className="text-xl font-bold">Majju Chat</h1>
                <div className="flex items-center gap-1">
                  <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
                  <h1 className="text-sm text-gray-400">Online</h1>
                </div>
              </div>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>

          {/* <div className="flex-1 bg-slate-500"></div> */}
          {loading ? (
            <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto items-center justify-center">
              <h1>Loading</h1>
              <LoaderIcon />
            </div>
          ) : (
            <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
              <div className="flex-1 pb-5"></div>
              <div className="space-y-7">
                {messages.map((message, index) => {
                  return (
                    <div className="flex gap-2" key={index}>
                      <div className="h-10 w-10 bg-green-500 rounded-full">
                        <Image
                          className="rounded-full"
                          src={message.profileUrl}
                          alt="Profile Image"
                          width={50}
                          height={10}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <h1 className="font-bold">{message.sender}</h1>
                          <h1 className="text-sm text-gray-400">
                            {new Date(
                              message.createdAt.seconds * 1000 +
                                message.createdAt.nanoseconds / 1e6
                            ).toDateString()}
                          </h1>
                        </div>
                        <p className="text-gray-300">{message.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <ChatInput />
        </div>
      </div>
    </>
  );
}

export default Chat;
