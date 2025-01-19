"use client"
import Loader from '@/components/Loader';
import MeetingRoom from '@/components/ui/MeetingRoom';
import MeetingSetup from '@/components/ui/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'



export default async function Meeting({ params }: { params: Promise<{ id: string}>}) {

  const {isLoaded} = useUser();


  const [isSetupComplete, setIsSetupComplete] = useState(false)

  const id = (await params).id
  const {call, isCallLoading} = useGetCallById(id);

  if(!isLoaded || isCallLoading) return <Loader/>
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

