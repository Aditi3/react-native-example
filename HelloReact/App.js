import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';  
const CleverTap = require('clevertap-react-native'); 

export default class ButtonBasics extends Component {  
    
    onPressButton() {  
        Alert.alert('You clicked the button!')  
    }  
  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Press Me"  
                    />  
                </View>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Press Me"  
                        color="#009933"  
                    />  
                </View> 
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: {  
        margin: 20  
    },  
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    }  
})  