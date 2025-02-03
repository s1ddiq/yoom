'use client'
// @ts-nocheck
import React, { Suspense, useEffect, useState } from 'react'
import MeetingTypeList from '@/components/MeetingTypeList';
import { useGetCalls } from '@/hooks/useGetCalls';
import { Loader } from 'lucide-react';
const Home = () => {

  const { upcomingCalls, isLoading } = useGetCalls()
  const [upcomingMeetingTime, setUpcomingMeetingTime] = useState<string>('');
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
  const date = (new Intl.DateTimeFormat('en-US', {dateStyle: 'full'})).format(now);

  useEffect(() => {
    if (upcomingCalls && upcomingCalls.length > 0) {
      const upcomingDate = new Date(upcomingCalls[0].state?.startsAt || 'Upcoming meeting soon');
      const timeString = upcomingDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'America/New_York', 
      });
      setUpcomingMeetingTime(`${timeString}`);
    }
  
  }, [upcomingCalls])

  
  

  if (isLoading) return <Loader className='text-white' size={48}/>
  return (
    <section className='flex size-full flex-col gap-5 text-white'>
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover lg:p-0 p-4">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-mad:py-8 lg:p-11">
          <Suspense fallback={<Loader/>}>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Next Meeting At: {upcomingMeetingTime}</h2>
          </Suspense>

          <div className="flex flex-col gap-2">
            <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
          </div>
        </div>
      </div>


      <MeetingTypeList />
    </section>
  )
}

export default Home
