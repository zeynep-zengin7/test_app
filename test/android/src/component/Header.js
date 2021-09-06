import React from 'react';
import {Text, View} from 'react-native'

const Header = () => {
const { textStyling, viewStyle } = styles;

    return 
    (
    <View style={viewStyle}>
       <Text style={textStyling}>Test</Text>
    </View>
    );
};

const styles = {
    textStyling: {
        fontSize: 22 
    },

    viewStyle: {
        backgroundColor: 'grey'
    }
};