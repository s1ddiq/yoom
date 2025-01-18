import { toast } from '@/hooks/use-toast'
import React from 'react'
import Loader from './Loader'

const MeetingEnded = () => {

    toast({title: "Meeting ended :)"})
  return (
    <Loader/>
  )
}

export default MeetingEnded