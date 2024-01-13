"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/fireabase-config";
import { useUser } from "@clerk/nextjs";
import { getDatabase } from "firebase/database";
import { addDoc, collection } from "firebase/firestore";

import { SendIcon } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";

function ChatInput() {
  const { user } = useUser();
  const params = useParams();
  const [text, setText] = useState("");
  const realtimeDb = getDatabase();
  //   const roomMessagesRef = ref(realtimeDb, `rooms/${params.chatid}/messages`);

  const sendMessage = async (textMessage: string) => {
    try {
      await addDoc(collection(db, `rooms/${params.chatid}/messages`), {
        text: textMessage,
        createdAt: new Date(),
        sender: user?.fullName, // Replace with current user ID
        profileUrl: user?.imageUrl,
      });
      console.log("Sent", textMessage);
    } catch (error) {
      console.error("Error sending message: ", error);
      // Handle errors gracefully
    }
  };
  const handleMassage = (text: string) => {
    setText(text);
    sendMessage(text);
  };
  return (
    <div className="p-5 flex flex-row">
      <Input
        placeholder="Send message..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleMassage(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
      <Button variant="outline" size="icon">
        <SendIcon />
      </Button>
    </div>
  );
}

export default ChatInput;
