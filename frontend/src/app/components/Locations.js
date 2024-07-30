import React from 'react'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const Locations = () => {
  // const key = process.env.API_KEY;
  return (<>
    <div className='mt-10 text-center text-5xl'>Locations</div>
    <div className='m-4 flex justify-center'>
    <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY}>
    <Map
      style={{width: '50vw', height: '50vh'}}
      defaultCenter={{lat: 51.5072, lng: 0.1276}}
      defaultZoom={9}
      gestureHandling={'greedy'}
      disableDefaultUI={true}>
        <Marker position={{lat: 51.3351, lng: 0.2637}} />
        <Marker position={{lat: 51.4123, lng: 0.3007}} />

    </Map>
      
      
  </APIProvider>
      </div>
      </>
    
  )
}
export default Locations