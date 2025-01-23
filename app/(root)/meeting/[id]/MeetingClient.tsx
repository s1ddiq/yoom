'use client';

import { useState } from 'react';
import Loader from '@/components/Loader';
import MeetingRoom from '@/components/ui/MeetingRoom';
import MeetingSetup from '@/components/ui/MeetingSetup';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';

interface MeetingClientProps {
  call: any; // Replace 'any' with the appropriate type for 'call'
}

export default function MeetingClient({ call }: MeetingClientProps) {
  const { isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!isLoaded) return <Loader />;

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
