// src/components/DrawerContent.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>Header Content</Text>
        {/* Add any additional header content here */}
      </View>
      <DrawerItemList {...props} />
      <Button title="Logout" onPress={() => console.log('Logout')} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
