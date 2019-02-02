import React, { Component } from 'react';
import { StyleSheet ,View, Text, Button } from 'react-native';


CustomButton = (props) => {
    if(props.title) {
        return (
            <Button title={ props.title } disabled={props.verrou}
              onPress={()=> props.onPress() }></Button>
        ); 
    } else {
        return (
            <Button title="39ouba ++" 
              onPress={()=> props.onPress() }></Button>
        );
    }
}
// alert( "mchit feha 😆😆😆😆😆" )

export default CustomButton;

const styles = StyleSheet.create({
    
});
