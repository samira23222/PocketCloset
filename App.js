import { View, ImageBackground, Image, TouchableOpacity, Button} from 'react-native';
import dbackground from './img/dot.png';
import PinkBack from './img/background2.png';
import * as React from "react";
import { styles } from './Style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function GameContent( {navigation} ) {
  return (
    <View style={styles.container}>
       <ImageBackground source = {PinkBack} resizeMode = "cover">
       <View style = {styles.Pbackground}>

       

      </View>
      </ImageBackground>

   <View style = {styles.Pbackground}>

<ImageBackground source = {dbackground} style = {styles.Pimage}>

<View style = {styles.buttcontain}>
  <Image source = {require('./img/magbox-1.png')} style = {styles.Magbox}/>
<TouchableOpacity accessibilityRole = 'imagebutton'>
<Image source = {require('./img/buttonhead-1.png')} style = {styles.button1}/>
</TouchableOpacity>
   
   
  
    

  </View>
  
</ImageBackground>

      </View>

   
      <View style = {styles.hcontainer}>

      <TouchableOpacity accessibilityRole = 'imagebutton' onPress = 
        {() => navigation.goBack()}>

          <Image source= {require('./img/homelogo.png')} style = {styles.hbutton} />

        </TouchableOpacity>

      </View>

     
     
    
       </View>


  )
}

function Homescreen( {navigation} ) {
  return (
    <View style={styles.container}>
    <ImageBackground source = {dbackground} resizeMode = "cover">

      <View style = {styles.imgcontainer}>
        <Image source = {require('./img/logo.png')} style = {styles.image2}/>
      </View>

      <View style={styles.bcontainer}>

        <TouchableOpacity accessibilityRole = 'imagebutton' onPress = 
        {() => navigation.navigate('Game')}>

          <Image source= {require('./img/buttonstart.png')} style = {styles.sbutton} />

        </TouchableOpacity>
      </View>

      <View style = {styles.mcontainer}>

        <TouchableOpacity accessibilityRole='imagebutton'>

          <Image source = {require('./img/musiclogo.png')} 
          style = {styles.mbutton}  
          />

        </TouchableOpacity>
      </View>
  
    </ImageBackground>
  </View>

  )
}


const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
         name="Pocket Closet"
         component = {Homescreen}
         options = {{
            headerShown: false
          }} />
        <Stack.Screen 
        name="Game"
        component={GameContent} 
        options = {{
          headerShown: false
        }}
       />

      </Stack.Navigator>
  
  </NavigationContainer>
)};


export default App;


