import React from 'react';
// npm install react-native-linear-gradient react-native-image-picker
// npm install react-native-image-picker@latest
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
//npm install react-native-vector-icons

import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';

import Clipboard from '@react-native-clipboard/clipboard';

// Register the icon fonts
Icon.loadFont();
const Plan3 = () => {
  // Function to handle text copy
  const handleTextCopy = async text => {
    try {
      await Clipboard.setString(text);
      alert('Text copied to clipboard!');
    } catch (error) {
      console.log('Error copying to clipboard: ', error);
    }
  };

  const gradientColors = ['#4e54c8', '#8f94fb']; // Customize your gradient colors

  return (
    <ScrollView>
      <View style={styles.container}>
        <LinearGradient colors={gradientColors} style={styles.gradient}>
          <Text style={styles.title}>
            {' '}
            🧠 Impress random girls with an 👑 attractive copy messages 🧐{' '}
          </Text>
          <ImageBackground
            source={require('../assets/rain1.jpg')} // Replace with your image path
            style={styles.imageBackground}></ImageBackground>

          {/* Wrap each text component inside TouchableOpacity */}
          <TouchableOpacity
            style={styles.copyContainer}
            onPress={() =>
              handleTextCopy(
                'Welcome to this beautiful single page with React Native! You can add your own content here.',
              )
            }>
            <View style={styles.rowContainer}>
              <Text style={styles.description}>
                Welcome to this beautiful single page with React Native! You can
                add your own content here.
              </Text>
              <Icon
                name="content-copy"
                size={30}
                color="red"
                style={styles.copyIcon}
              />
              <Text style={styles.copyText}>Copy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.copyContainer}
            onPress={() =>
              handleTextCopy(
                'Welcome to this beautiful single page with React Native! You can add your own content here.',
              )
            }>
            <View style={styles.rowContainer}>
              <Text style={styles.description}>
                Welcome to this beautiful single page with React Native! You can
                add your own content here.
              </Text>
              <Icon
                name="content-copy"
                size={30}
                color="red"
                style={styles.copyIcon}
              />
              <Text style={styles.copyText}>Copy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.copyContainer}
            onPress={() =>
              handleTextCopy(
                'Welcome to this beautiful single page with React Native! You can add your own content here.',
              )
            }>
            <View style={styles.rowContainer}>
              <Text style={styles.description}>
                Welcome to this beautiful single page with React Native! You can
                add your own content here.
              </Text>
              <Icon
                name="content-copy"
                size={30}
                color="red"
                style={styles.copyIcon}
              />
              <Text style={styles.copyText}>Copy</Text>
            </View>
          </TouchableOpacity>

          <ImageBackground
            source={require('../assets/street2.jpg')} // Replace with your image path
            style={styles.imageBackground}></ImageBackground>

          <TouchableOpacity
            style={styles.copyContainer}
            onPress={() =>
              handleTextCopy(
                'Welcome to this beautiful single page with React Native! You can add your own content here.',
              )
            }>
            <View style={styles.rowContainer}>
              <Text style={styles.description}>
                Welcome to this beautiful single page with React Native! You can
                add your own content here.
              </Text>
              <Icon
                name="content-copy"
                size={30}
                color="red"
                style={styles.copyIcon}
              />
              <Text style={styles.copyText}>Copy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.copyContainer}
            onPress={() =>
              handleTextCopy(
                'Welcome to this beautiful single page with React Native! You can add your own content here.',
              )
            }>
            <View style={styles.rowContainer}>
              <Text style={styles.description}>
                Welcome to this beautiful single page with React Native! You can
                add your own content here.
              </Text>
              <Icon
                name="content-copy"
                size={30}
                color="red"
                style={styles.copyIcon}
              />
              <Text style={styles.copyText}>Copy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.copyContainer}
            onPress={() =>
              handleTextCopy(
                'Welcome to this beautiful single page with React Native! You can add your own content here.',
              )
            }>
            <View style={styles.rowContainer}>
              <Text style={styles.description}>
                Welcome to this beautiful single page with React Native! You can
                add your own content here.
              </Text>
              <Icon
                name="content-copy"
                size={30}
                color="red"
                style={styles.copyIcon}
              />
              <Text style={styles.copyText}>Copy</Text>
            </View>
          </TouchableOpacity>

          <ImageBackground
            source={require('../assets/street2.jpg')} // Replace with your image path
            style={styles.imageBackground}></ImageBackground>

          <TouchableOpacity
            style={styles.copyContainer}
            onPress={() =>
              handleTextCopy(
                'Welcome to this beautiful single page with React Native! You can add your own content here.',
              )
            }>
            <View style={styles.rowContainer}>
              <Text style={styles.description}>
                Welcome to this beautiful single page with React Native! You can
                add your own content here.
              </Text>
              <Icon
                name="content-copy"
                size={30}
                color="red"
                style={styles.copyIcon}
              />
              <Text style={styles.copyText}>Copy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.copyContainer}
            onPress={() =>
              handleTextCopy(
                'Welcome to this beautiful single page with React Native! You can add your own content here.',
              )
            }>
            <View style={styles.rowContainer}>
              <Text style={styles.description}>
                Welcome to this beautiful single page with React Native! You can
                add your own content here.
              </Text>
              <Icon
                name="content-copy"
                size={30}
                color="red"
                style={styles.copyIcon}
              />
              <Text style={styles.copyText}>Copy</Text>
            </View>
          </TouchableOpacity>

          {/* Wrap other text components similarly */}
          {/* ... */}
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '8%',
    marginTop: '8%',
  },
  imageBackground: {
    width: 300,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // logo: {
  //   width: 100,
  //   height: 100,
  //   resizeMode: 'contain',
  // },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 20,
  },

  rowContainer: {
    marginTop: '8%',
    marginBottom: '8%',
  },

  copyText: {
    marginHorizontal: '40%',
    fontSize: 22,
    fontWeight: '900',
    color: '#EEEEEE',
    backgroundColor: 'black',
    paddingLeft: '3%',
  },

  copyIcon: {
    fontSize: 40,
    color: 'black',
    marginHorizontal: '46%',
  },
});

export default Plan3;
