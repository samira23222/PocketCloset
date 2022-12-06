import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
// import styles from './style';
import dbackground from './img/dot.png'
import * as React from "react";

const sound = React.useRef(new Audio.Sound());
const [Status, SetStatus] = React.useState(false);

React.useEffect(() => {
  LoadAudio();
  return () => sound.current.unloadAsync();
}, []);

const LoadAudio = async () => {
  const checkLoading = await sound.current.getStatusAsync();
  try {
    const result = await sound.current.loadAsync({ uri:  }, {}, true);
    // Here Song is the uri of the Audio file
    if (result.isLoaded === false) {
      console.log('Error in Loading Audio');
    } else {
      PlayAudio();
    }
  } catch (error) {
    console.log('Error in Loading Audio');
  }
};

 
  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
          SetStatus(true);
        }
      } else {
        LoadAudio();
      }
    } catch (error) {
      SetStatus(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
          SetStatus(false);
        }
      }
    } catch (error) {
      SetStatus(false);
    }
  };



const App = () => (
  <View style={styles.container}>
    <ImageBackground source = {dbackground} resizeMode = "cover" style = {styles.image}>

      <View style = {styles.imgcontainer}>
        <Image source = {require('./img/logo.png')} style = {styles.image2}/>
      </View>

      <View style={styles.bcontainer}>
        <TouchableOpacity accessibilityRole='imagebutton'>
          <Image source= {require('./img/buttonstart.png')} style = {styles.sbutton} />
        </TouchableOpacity>
      </View>

      <View style = {styles.mcontainer}>
        <TouchableOpacity accessibilityRole='imagebutton'>
          <Image soruce = {require('./img/musiclogo.png')} style = {styles.mbutton} />
        </TouchableOpacity>
      </View>

  
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  imgcontainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  bcontainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mcontainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },

  image2: {
    height: '100%',
    aspectRatio: 1 / 1
  },

  sbutton: {
    height: '90%',
    aspectRatio: 1 / 1,
    marginTop: '-30%'
  },
  mbutton: {
    aspectRatio: 1 / 1

  }

});

export default App;


