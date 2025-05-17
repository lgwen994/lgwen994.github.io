// src/components/LocationMap.jsx
import React, { Component } from 'react';

//-41.31803827129974, 174.79456297182443
class LocationMap extends Component {
    static defaultProps = {
        center: {
            lat: -41.31803827129974,
            lng: 174.79456297182443
        },
        zoom: 18
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '450px', width: '100%' }}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5993.129031253087!2d174.7920309768587!3d-41.318336442343224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afe516f5c693%3A0x8d3620342949483f!2sBozinoff%20Mortgages!5e0!3m2!1sen!2snz!4v1747480496543!5m2!1sen!2snz" 
                    width="100%" 
                    height="450" 
                    frameBorder="0" 
                    style={{ border: "0" }} 
                    allowFullScreen="" 
                    aria-hidden="false" 
                    tabIndex="0"
                    title="Wellington Map"
                ></iframe>
            </div>
        );
    }
}

export default LocationMap;