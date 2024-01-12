// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const ResHome = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome Responder!!! </Text>
//       <Text style={styles.subtitle}>What do you want to do today? </Text>

//       <TouchableOpacity style={styles.menuItem}>
//         <Icon name="home" size={30} style={styles.menuIcon1} />
//         <Text style={styles.menuText}>Home</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.menuItem}>
//         <Icon name="bell" size={30} style={styles.menuIcon2} />
//         <Text style={styles.menuText}>Notifications</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.menuItem}>
//         <Icon name="user" size={30} style={styles.menuIcon3} />
//         <Text style={styles.menuText}>Profile</Text>
//       </TouchableOpacity>

//       {/* Additional sections */}
//       <TouchableOpacity style={styles.menuItem}>
//         <Icon name="map" size={30} style={styles.menuIcon4} />
//         <Text style={styles.menuText}>Map Directions</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.menuItem}>
//         <Icon name="comments" size={30} style={styles.menuIcon5} />
//         <Text style={styles.menuText}>Chat</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
    
//   },
//   subtitle: {
//     fontSize: 15,
//     // fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   menuIcon1: {
//     marginRight: 45,
//     marginLeft: -100,
//   },
//   menuIcon2: {
//     marginRight: 40,
//     marginLeft: -50,
//   },
//   menuIcon3: {
//     marginRight: 45,
//     marginLeft: -100,
//   },
//   menuIcon4: {
//     marginRight: 40,
//     marginLeft: -30,
//   },
//   menuIcon5: {
//     marginRight: 40,
//     marginLeft: -110,
//   },
//   menuText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ResHome;


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ResHome = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Responder!!! </Text>
      <Text style={styles.subtitle}>What do you want to do today? </Text>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('res')}>
        <Icon name="home" size={30} style={styles.menuIcon1} />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('notif')}>
        <Icon name="bell" size={30} style={styles.menuIcon2} />
        <Text style={styles.menuText}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('team')}>
        <Icon name="plus" size={30} style={styles.menuIcon6} />
        <Text style={styles.menuText}>Create team</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('prof')}>
        <Icon name="user" size={30} style={styles.menuIcon3} />
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>

      {/* Additional sections */}
      <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('direct')}>
        <Icon name="map" size={30} style={styles.menuIcon4} />
        <Text style={styles.menuText}>Map Directions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('chat')}>
        <Icon name="comments" size={30} style={styles.menuIcon5} />
        <Text style={styles.menuText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIcon1: {
    marginRight: 45,
    marginLeft: -100,
  },
  menuIcon2: {
    marginRight: 40,
    marginLeft: -50,
  },
  menuIcon3: {
    marginRight: 45,
    marginLeft: -100,
  },
  menuIcon4: {
    marginRight: 40,
    marginLeft: -30,
  },
  menuIcon6: {
    marginRight: 45,
    marginLeft: -60,
  },
  menuIcon5: {
    marginRight: 40,
    marginLeft: -110,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResHome;
