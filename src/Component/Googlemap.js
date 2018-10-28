import React from 'react';

class Googlemap extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          mapIsReady: false,
      };
    }

    locations() {
      return [
        {
          title: "Yusuf Sarai Village",
          location: { lat: 28.5586804, lng: 77.2081801 }
        },
        {
          title: "Hauz Khas Forest",
          location: { lat: 28.5479803, lng: 77.2246267 }
        },
        {
          title: "Deer Park Lake",
          location: { lat: 28.5546601, lng: 77.19280068 }
        },
        {
          title: "The Momo Shop",
          location: { lat: 28.54082953, lng: 77.17294074 }
        },
        {
          title: "Pasta La vista",
          location: { lat: 28.54082653, lng: 77.17298074 }
        },
        {
          title: "Kids Magic School",
          location: { lat: 28.54375202, lng: 77.19486756 }
        },
        {
          title: "Himanshu Yoga Classes",
          location: { lat: 28.55043208, lng: 77.18888516 }
        },
        {
          title: "Food Junction",
          location: { lat: 28.56098663, lng: 77.1766972 }
        },
        {
          title: "Pvr Anupam",
          location: { lat: 28.5520968, lng: 77.22207753 }
        },
        {
          title: "The Hotspot Shop",
          location: { lat: 28.54568826, lng: 77.23397366 }
        }
      ];
    }

    componentDidMount() {
      const ApiKey = "AIzaSyAH0gYCIM1Uh-ke6lxWs954dH5ugCrJeNs";
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', () => {
          this.setState({ mapIsReady: true });
      });
      document.body.appendChild(script);
    }

    componentDidUpdate() {
        if (this.state.mapIsReady) {
          // Display the map
          let map = new window.google.maps.Map(
            document.getElementById("map"),
            {
              center: { lat: 28.5586804, lng: 77.2081801 },
              zoom: 12,
              mapTypeId: "roadmap"
            }
          );
          
          this.locations().map(val => {
            return new window.google.maps.Marker({
              position: { lat: val.location.lat, lng: val.location.lng },
              map: map,
              title: val.title
              
            })
          })
        }
    }
    
    render() {
      return (
          <div id="map" /> 
      );
    }
}
export default Googlemap

