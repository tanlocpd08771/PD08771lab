import * as React from 'react'
const { View, Button, Text } = require("react-native");
import{NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/native"
function HomeScreen({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button 
            onPress={()=> navigation.navigate('Notifications')}
            />
        </View>
    )
}

function NotificationsScreen({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button onPress={() => navigation.goBack()} title='Go back Home Screen'/>
        </View>
    )
}

const Drawer = createDrawerNavigator();
const Lab6 =() => {
    return (<NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name= 'Notification' component ={NotificationsScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>);
    
};

export default Lab6;