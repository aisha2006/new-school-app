import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <View>
                <Icon
                    name="bars"
                    type="font-awesome"
                    color="#696969"
                    onPress={() => {
                        this.props.navigation.toggleDrawer();
                    }}
                    />  
                </View>
                <View>
                    <Text>Home Screen</Text>
                </View>
            </View>
        )
    }
}