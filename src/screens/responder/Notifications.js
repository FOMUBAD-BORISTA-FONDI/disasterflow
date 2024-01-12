import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notifications = () => {
  const navigation = useNavigation();

  const notifications = [
    { id: '1', text: 'Notification 1', timestamp: '1 hour ago' },
    { id: '2', text: 'Notification 2', timestamp: '2 hours ago' },
    { id: '3', text: 'Notification 3', timestamp: '3 hours ago' },
    
  ];

  const handleReply = (notificationId) => {
    // Navigate to the response screen with the selected notification ID
    navigation.navigate('Response', { notificationId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications Screen</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>{item.text}</Text>
            <Text style={styles.timestampText}>{item.timestamp}</Text>
            <TouchableOpacity
              style={styles.replyButton}
              onPress={() => handleReply(item.id)}
            >
              <Text style={styles.replyButtonText}>Reply</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  notificationContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timestampText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  replyButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-end', // Align to the right
    width: 80,
  },
  replyButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Notifications;
