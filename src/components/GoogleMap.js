import React from 'react'; 
import {Map, GoogleApiWrapper} from 'google-maps-react'

const GoogleMap  = ({lat, long, google}) => {
 
    return(
        <Map
            google = {google}
            style = {{width:"80%", height: "90%"}}
            zoom = {7}
            initialCenter = {
                {
                    lat: lat, 
                    lng: long                    }
            }
        /> 
    ); 
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCnB4sl31bJxS8dyv4reFDPlvLN6OMno2c"
})(GoogleMap)

