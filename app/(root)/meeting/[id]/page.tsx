// @ts-nocheck

"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/ui/MeetingRoom";
import MeetingSetup from "@/components/ui/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState, FC } from "react";

interface MeetingPageProps {
  params: {
    id: string;
  };
}

const Meeting: FC<MeetingPageProps> = ({ params }) => {
  const { isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { call, isCallLoading } = useGetCallById(params.id);

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
};

export default Meeting;
