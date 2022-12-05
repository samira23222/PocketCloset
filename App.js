import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
// import styles from './style';
import dbackground from './img/dot.png'



const App = () => (
  <View style={styles.container}>
    <ImageBackground source={dbackground} resizeMode="cover" style={styles.image}>

      <View style={styles.imgcontainer}>
        <Image source={require('./img/logo.png')} style = {styles.image2}/>
      </View>

      <View style={styles.bcontainer}>
        <TouchableOpacity>
          <Image source={require('./img/buttonstart.png')} />
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
  image: {
    flex: 1 
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
  }
});

export default App;


