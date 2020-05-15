import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Principal from './pages/Principal';
import Sobre from './pages/Sobre';
import Detail from './pages/Detail';
import Qrcode from './pages/Qrcode';

export default function Routes() {
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Principal" component={Principal}/>
                <AppStack.Screen name="Sobre" component={Sobre}/>
                <AppStack.Screen name="Qrcode" component={Qrcode}/>  
                <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>

        </NavigationContainer>



    );
}