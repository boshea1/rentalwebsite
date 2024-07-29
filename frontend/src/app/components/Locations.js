import React from 'react'
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const Locations = () => {
  return (<>
    <div className='mt-10 text-center text-5xl'>Locations</div>
    <div className='m-4 flex justify-center'>
    <APIProvider apiKey={'AIzaSyDZK7RjrTuTCnmt67LXvWnrca7a62H9POo'}>
    <Map
      style={{width: '50vw', height: '50vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={4}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
      />
  </APIProvider>
      </div>
);
      </>
    // mapsapikey=AIzaSyDZK7RjrTuTCnmt67LXvWnrca7a62H9POo
  )
}
export default Locations