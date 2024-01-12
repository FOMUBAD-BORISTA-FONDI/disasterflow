import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, StatusBar } from 'react-native';
import MapView, { Marker, AnimatedRegion, MarkerAnimated  } from 'react-native-maps';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Location from 'expo-location';

const MapScreen = ({ navigation }) => {
  const [userLocation, setUserLocation] = useState({latitude:0,longitude:0});
  const mapViewRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Fetch the user's location when the component mounts
    fetchUserLocation();
  }, []);

  const fetchUserLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Please enable location services to use this feature.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      console.log(location);
      const { latitude, longitude } = location.coords;
      setUserLocation({ latitude, longitude });
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'Failed to get your current location.');
    }
  };

  const handleContactPress = () => {
    Alert.alert('Calling 117');
  };

  // const handleLocateUser = () => {
  //   // Call the function to fetch the user's location
  //   fetchUserLocation();
  // };

  const handleLocateUser = () => {
    fetchUserLocation(); // Fetch the user's location
  
    // Check if userLocation is available
    if (userLocation) {
      // Create a region object with the user's location
      const region = {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
  
      // Animate the map to the user's location
      mapViewRef.current.animateToRegion(region, 1000); 
    }
  };

  useEffect(()=>{
    if (userLocation) {
      // Create a region object with the user's location
      const region = {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
  
      // Animate the map to the user's location
      mapViewRef.current.animateToRegion(region, 1000); 
    }
  },[userLocation])

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../assets/icons/menu.png')} style={styles.clickableImage} />
          </TouchableOpacity>

          <Text style={styles.title}>Disaster Flow</Text>

          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../assets/icons/notification.png')} style={styles.clickableImage} />
          </TouchableOpacity>
        </View>

        {/* <Text style={styles.subtitle}>Map Screen</Text> */}
        
        <MapView ref={mapViewRef} zoomControlEnabled zoomTapEnabled style={styles.map} initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
          {/* Marker for a sample location */}
          {/* <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Your Location" description="This is where you are" /> */}
          
          {/* Geolocation icon */}
          {userLocation && (
            <Marker coordinate={userLocation} title="Present Location" description="Where you are">
              <Icon name="map-marker" size={30} color="red" />
            </Marker>
          )}
          <MarkerAnimated
              ref={markerRef}
              coordinate={userLocation}
              draggable
              pinColor="blue"
              style={{ elevation: 10 }}
              onDragEnd={(event) => {
                console.log(event.nativeEvent.coordinate);
                setLocation(event.nativeEvent.coordinate);
                const { latitude, longitude } = event.nativeEvent.coordinate;
              }}
            />
        </MapView>

        {/* Card with two buttons */}
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('report')}>
              <Text style={styles.buttonText}>Send Report</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactButton} onPress={handleContactPress}>
              <Image source={require('../assets/icons/call.png')} style={styles.contactIcon} />
              <Text style={styles.buttonText}>Contact</Text>
            </TouchableOpacity>
          </View>
        </Card>

        {/* Geolocalize icon */}
        <TouchableOpacity style={styles.geolocateButton} onPress={fetchUserLocation}>
          <Icon name="location-arrow" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    // padding: 20,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    width: '100%',
    pading: 20,
  },
  clickableImage: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginTop: 0,
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    // marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  map: {
    flex: 1,
    margin: 10,
  },
  // Card and button styles
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginRight: 10,
  },
  contactButton: {
    flex: 1,
    backgroundColor: '#D30000',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contactIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  geolocateButton: {
    position: 'absolute',
    bottom: 120,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
  },
});

export default MapScreen;
