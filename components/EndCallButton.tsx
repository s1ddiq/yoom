"use client"
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from '@radix-ui/react-toast';


const EndCallButton = () => {
    const router = useRouter();
    const call = useCall();
    const { toast } = useToast()
    const {useLocalParticipant} = useCallStateHooks();
    const localParticipant = useLocalParticipant();

    const isMeetingOwner = localParticipant && call?.state.createdBy && localParticipant.userId === call.state.createdBy.id;

    if (!isMeetingOwner) return;
  return (
    <Button
        onClick={async () => {
            await call.endCall();
            router.push('/');
            toast({
                title: "Meeting Ended",
                description: new Date().toLocaleString(),
                action: (
                   <Button variant={'destructive'} onClick={() => {toast({
                    title: "Uh-oh! that didn't work.",
                    description: 'Problem processing request, pls try again :>',
                  })}}>Rate</Button>
                )
              })
        }}
        className='bg-red-500'
    >End Call for Everyone</Button>
  )
}

export default EndCallButton