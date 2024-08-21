import { Scheduler } from "@aldabil/react-scheduler";

import React from 'react'

const booking = () => {
  return (
    <>

{/* More for meetings */}
{/* <iframe src="https://koalendar.com/e/RentalWebsite?embed=true" width="100%" height="800px" frameborder="0"></iframe> */}


<Scheduler editable='false'
  view="month"
  events={[
      {
          event_id: 1,
          title: "Event 1",
          start: new Date("2021/5/2 09:30"),
      end: new Date("2021/5/2 10:30"),
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date("2021/5/4 10:00"),
      end: new Date("2021/5/4 11:00"),
    },
]}
/>
  </>
)
}

export default booking