import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch, TextInput } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [receiveNotifications, setReceiveNotifications] = useState(true);
  const [locationTracking, setLocationTracking] = useState(false);
  const [emergencyContacts, setEmergencyContacts] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [profileEmail, setProfileEmail] = useState('');
  const [profilePhone, setProfilePhone] = useState('');

  const handleEmergencyContactsChange = (text) => {
    setEmergencyContacts(text);
  };

  const handleProfileNameChange = (text) => {
    setProfileName(text);
  };

  const handleProfileEmailChange = (text) => {
    setProfileEmail(text);
  };

  const handleProfilePhoneChange = (text) => {
    setProfilePhone(text);
  };

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

        <Text style={styles.subtitle}>Settings</Text>

        {/* Notification Settings */}
        <View style={styles.settingsOption}>
          <Text style={styles.optionText}>Receive Notifications</Text>
          <Switch value={receiveNotifications} onValueChange={() => setReceiveNotifications(!receiveNotifications)} />
        </View>

        {/* Location Settings */}
        <View style={styles.settingsOption}>
          <Text style={styles.optionText}>Location Tracking</Text>
          <Switch value={locationTracking} onValueChange={() => setLocationTracking(!locationTracking)} />
        </View>

        {/* Emergency Contacts */}
        <View style={styles.settingsOption}>
          <Text style={styles.optionText}>Emergency Contacts</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Add emergency contacts (comma-separated)"
            value={emergencyContacts}
            onChangeText={handleEmergencyContactsChange}
          />
        </View>

        {/* Dark Mode */}
        <View style={styles.settingsOption}>
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
        </View>

        {/* Profile Name */}
        <View style={styles.settingsOption}>
          <Text style={styles.optionText}>Profile Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your name"
            value={profileName}
            onChangeText={handleProfileNameChange}
          />
        </View>

        {/* Profile Email */}
        <View style={styles.settingsOption}>
          <Text style={styles.optionText}>Profile Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your email"
            value={profileEmail}
            onChangeText={handleProfileEmailChange}
          />
        </View>

        {/* Profile Phone */}
        <View style={styles.settingsOption}>
          <Text style={styles.optionText}>Profile Phone</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your phone number"
            value={profilePhone}
            onChangeText={handleProfilePhoneChange}
          />
        </View>

        {/* Map Style */}
        <View style={styles.settingsOption}>
          <Text style={styles.optionText}>Map Style</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MapStyles')}>
            <Text style={styles.optionLink}>Choose Style</Text>
          </TouchableOpacity>
        </View>

        {/* Add more settings options as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  clickableImage: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginTop: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  settingsOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '400',
  },
  optionLink: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '400',
  },
  inputField: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingsOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
  },
  optionLink: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '400',
  },
  inputField: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SettingsScreen;



// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';

// const SettingsScreen = ({ navigation }) => {
//   return (
//     <View style={styles.safeArea}>
//       <View style={styles.container}>
//         <View style={styles.headerSection}>
//           <TouchableOpacity onPress={() => {}}>
//             <Image source={require('../assets/icons/menu.png')} style={styles.clickableImage} />
//           </TouchableOpacity>

//           <Text style={styles.title}>Disaster Flow</Text>

//           <TouchableOpacity onPress={() => {}}>
//             <Image source={require('../assets/icons/notification.png')} style={styles.clickableImage} />
//           </TouchableOpacity>
//         </View>

//         <Text style={styles.subtitle}>Settings</Text>

//         {/* Sample Settings Options */}
//         <View style={styles.settingsOption}>
//           <Text style={styles.optionText}>Receive Notifications</Text>
//           <Switch value={true} onValueChange={() => {}} />
//         </View>

//         <View style={styles.settingsOption}>
//           <Text style={styles.optionText}>Location Tracking</Text>
//           <Switch value={false} onValueChange={() => {}} />
//         </View>

//         <View style={styles.settingsOption}>
//           <Text style={styles.optionText}>Emergency Contacts</Text>
//           <TouchableOpacity onPress={() => navigation.navigate('EmergencyContacts')}>
//             <Text style={styles.optionLink}>Manage</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Add more settings options as needed */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#e7e7e7',
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   headerSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   clickableImage: {
//     width: 28,
//     height: 28,
//     resizeMode: 'contain',
//     marginTop: 20,
//   },
//   title: {
//     fontSize: 17,
//     fontWeight: '600',
//     marginTop: 20,
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   settingsOption: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 15,
//   },
//   optionText: {
//     fontSize: 16,
//     fontWeight: '400',
//   },
//   optionLink: {
//     color: 'blue',
//     fontSize: 16,
//     fontWeight: '400',
//   },
// });

// export default SettingsScreen;

