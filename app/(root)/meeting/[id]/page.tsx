// @eslint-disable 

"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/ui/MeetingRoom";
import MeetingSetup from "@/components/ui/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById"; 
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";


export default async function Meeting({params}: {params: Promise<{ id: string }>}) {
  const id = await params;
  const { isLoaded } = useUser();
  const { call, isCallLoading } = useGetCallById(id); 
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!isLoaded || isCallLoading) {
    return <Loader />;
  }

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
}
