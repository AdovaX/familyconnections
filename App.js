import * as React from 'react';
import { Button, View, Text, Image , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
  

function HomeScreen({ navigation }) {
  return (
    <Onboarding
   //onDone = {()=> navigation.replace("LoginScreen")}
   // onSkip = {(navigation.replace("Details"))} 
    containerStyles={{position:'relative', top:-60, }}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('./assets/images/pic1.jpg')} resizeMode="contain" style={{ width: 300, height: 300 }}/>,
        title: 'Family Bond',
        subtitle: 'Never miss anyone from your family...',
        
      },{
        backgroundColor: '#fff',
        image: <Image source={require('./assets/images/pic2.jpg')} resizeMode="contain" style={{ width: 300, height: 300 }}/>,
        title: 'Family Love',
        subtitle: 'Remind the wonderfull memories...',
        
      },{
        backgroundColor: '#fff',
        image: <Image source={require('./assets/images/pic0.jpg')} resizeMode="contain" style={{ width: 300, height: 300 }}/>,
        title: 'Family Connection',
        subtitle: 'Always connect with them...',
        
      },
     ]}
  />
  );
}
 
function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center',  }}>
      <Text>[ Login ]</Text>
      
    </View>
  );
}

const Stack = createStackNavigator();
 
  const App =() => {
    const [isFirstLaunch , setFirstLaunch] = React.useState(null);
    React.useEffect(() =>{
      AsyncStorage.getItem('alreadyLaunched').then(Value =>{
        if(Value == null){
          AsyncStorage.setItem('alreadyLaunched' , 'true');
          setFirstLaunch(true);

        }else{
          setFirstLaunch(false);

        }
      });
    });
    if(isFirstLaunch == null){
      return null;
    }else if (isFirstLaunch == true){
      return ( 
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Family Connections' }}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
         </Stack.Navigator>
        </NavigationContainer>
      );

    }
    else{
      return(
        <LoginScreen />
      );
    }
  }
 
 

export default App;