// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import 'react-native-gesture-handler';
// import StackRoot from './src/Navigation';


// const App = () => {
//   return (
//       <NavigationContainer>
//         <StackRoot />
//       </NavigationContainer>
//   );
// };

// export default App;


import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;

// import 'react-native-gesture-handler';

// import * as React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// // import FirstPage from './pages/FirstPage';
// // import SecondPage from './pages/SecondPage';
// // import ThirdPage from './pages/ThirdPage';
// import FirstPage from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';
// import ThirdPage from './pages/ThirdPage';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const FirstScreenStack = () => {
//   return (
//       <Stack.Navigator
//         initialRouteName="FirstPage"
//         screenOptions={{headerShown: false}}
//       >
//         <Stack.Screen
//           name="FirstPage"
//           component={FirstPage}
//         />
//       </Stack.Navigator>
//   );
// }

// const SecondScreenStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{headerShown: false}}
//     >
//       <Stack.Screen
//         name="SecondPage"
//         component={SecondPage}/>
    
//     </Stack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           drawerStyle: {
//             backgroundColor: '#c6cbef', //Set Drawer background
//             width: 250, //Set Drawer width
//           },
//           headerStyle: {
//             backgroundColor: '#f4511e', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           }
//         }}>
//         <Drawer.Screen
//           name="FirstPage"
//           options={{
//             drawerLabel: 'First page Option',
//             title: 'First Stack'
//           }}
//           component={FirstScreenStack} />
        
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;