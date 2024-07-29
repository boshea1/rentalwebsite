import React from 'react'
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const Locations = () => {
  return (<>
    <div className='mt-10 text-center text-5xl'>Locations</div>
    <div className='m-4 flex justify-center'>
    <APIProvider apiKey={''}>
    <Map
      style={{width: '50vw', height: '50vh'}}
      defaultCenter={{lat: 51.5072, lng: 0.1276}}
      defaultZoom={9}
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