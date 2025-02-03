"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/ui/MeetingRoom";
import MeetingSetup from "@/components/ui/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById"; 
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState, useEffect } from "react";

export default function Meeting({params}: {params: Promise<{ id: string }>}) {
  const [id, setId] = useState<string | null>(null);
  const { isLoaded } = useUser();
  const { call, isCallLoading } = useGetCallById(id!);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  useEffect(() => {
    // Handling the async part of fetching params here
    const fetchParams = async () => {
      const { id } = await params;
      setId(id);
    };
    fetchParams();
  }, [params]);

  if (!isLoaded || isCallLoading || !id) {
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
