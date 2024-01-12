import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [showAdditionalButton, setShowAdditionalButton] = useState(false);

  useEffect(() => {
    const welcomeMessage = {
      id: 1,
      text: 'Welcome to the chat!',
      timestamp: new Date().toLocaleTimeString(),
      sender: 'Bot',
    };
    setMessages([welcomeMessage]);
  }, []);

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      timestamp: new Date().toLocaleTimeString(),
      sender: 'You',
    };

    const updatedMessages = [...messages, userMessage];

    const botMessage = {
      id: userMessage.id + 1,
      text: 'Thanks for the message',
      timestamp: new Date().toLocaleTimeString(),
      sender: 'Bot',
    };
    updatedMessages.push(botMessage);

    setMessages(updatedMessages);
    setInputText('');
  };

  
  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  const toggleAdditionalButton = () => {
    setShowAdditionalButton(!showAdditionalButton); // Toggle the state
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'Bot' ? styles.botMessageContainer : null,
              item.isImage ? styles.imageMessageContainer : null,
            ]}
          >
            <View style={styles.senderContainer}>
              <Text style={styles.senderText}>{item.sender}</Text>
              <Text style={styles.timestampText}>{item.timestamp}</Text>
            </View>
            {item.isImage ? (
              <Image source={{ uri: item.text }} style={styles.imageMessage} />
            ) : (
              <Text style={styles.messageText}>{item.text}</Text>
            )}
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        {showAdditionalButton && (
            <View style={styles.additionalButtons}>
            <TouchableOpacity onPress={pickImage} style={styles.cameraButton}>
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
              <Icon name="camera" size={24} color="white" />
            </TouchableOpacity>
            {/* Add your "Add" button here */}
            <TouchableOpacity onPress={() => console.log('Additional button pressed')}  style={styles.addButton}>
              <Icon name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleAdditionalButton} style={styles.attachButton}>
            <Icon name="paperclip" size={24} color="white" />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={toggleAdditionalButton} style={styles.additionalButton}>
            <Icon name="ellipsis-h" size={24} color="white" />
          </TouchableOpacity> */}
        </View>
        <TextInput
          style={styles.inputField}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
    // marginTop: 40,
  },
  messageContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  botMessageContainer: {
    backgroundColor: 'lightblue',
  },
  imageMessageContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  senderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  senderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestampText: {
    fontSize: 12,
    color: 'gray',
  },
  imageMessage: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons horizontally
    marginRight: 10, // Add margin to separate the buttons
  },
  additionalButton: {
    padding: 10,
    backgroundColor: 'green', // Change the color as needed
    borderRadius: 8,
  },
  attachButton: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  inputField: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  sendButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginLeft: 10,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cameraButton: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  addButton: {
    padding: 10,
    backgroundColor: 'green', // Change the background color to your preference
    borderRadius: 8,
    marginLeft: 10,
  },
});

export default ChatScreen;  

