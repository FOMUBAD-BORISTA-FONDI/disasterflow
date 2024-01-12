import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const SafetyTipsScreen = ({ navigation }) => {
  const cardData = [
    { id: 1, image: require('../assets/images/fire.jpeg'), title: 'Wildfire Safety' },
    { id: 2, image: require('../assets/images/caraccident.jpeg'), title: 'Car Accidents' },
    { id: 3, image: require('../assets/images/accident.jpeg'), title: 'Bike Accidents' },
    { id: 4, image: require('../assets/images/flood.jpeg'), title: 'Flood Awareness' },
    { id: 5, image: require('../assets/images/fight.jpeg'), title: 'Fight precautions' },
  ];

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

        <Text style={styles.subtitle}>Safety Tips</Text>

        {/* Single card with an Image, text, and button */}
        <Card containerStyle={styles.singleCardContainer}>
          <View style={styles.cardContent}>
            <Image source={require('../assets/images/safety.jpeg')} style={styles.cardImage} />
            <View style={styles.textContainer}>
              <Text style={styles.cardDescription}>
              Prioritize safety by following essential measures. For example Vigilance and precautionary steps contribute to a secure environment.
              </Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>

        {/* Horizontal scrollview with 5 Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {cardData.map((card) => (
            <Card key={card.id} containerStyle={styles.horizontalCard}>
              <Image source={card.image} style={styles.horizontalCardImage} />
              <Text style={styles.horizontalCardTitle}>{card.title}</Text>
              <TouchableOpacity style={styles.horizontalCardButton}>
                <Text style={styles.horizontalCardButtonText}>Learn More</Text>
              </TouchableOpacity>
            </Card>
          ))}
        </ScrollView>
        <Text style={styles.subtitle1}> </Text>
        <Text style={styles.subtitle1}> </Text>
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
    backgroundColor: 'white',
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
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  // Single card styles
  singleCardContainer: {
    backgroundColor: '#FFC0CB',
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
    marginLeft: -8,
    height: 180,
    width: 335, // Increased height
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardImage: {
    width: '40%',
    height: 140, // Increased height
    borderRadius: 10,
    marginBottom: -20,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  cardDescription: {
    fontSize: 14,
    color: '#333',
  },
  cardButton: {
    backgroundColor: '#4169e1',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  cardButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  // Horizontal scrollview styles
  horizontalScrollView: {
    backgroundColor: '#e7e7e7',
    marginTop: 30,
    padding: 10,
    height: 280,
    borderRadius: 7,
  },
  horizontalCard: {
    width: 260, // Increased width
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    height: 290, // Increased height
  },
  horizontalCardImage: {
    width: '100%',
    height: 210, // Increased height
    borderRadius: 10,
  },
  horizontalCardTitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  horizontalCardButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 5,
    marginTop: 50,
  },
  horizontalCardButtonText: {
    color: 'white',
  },
});

export default SafetyTipsScreen;
