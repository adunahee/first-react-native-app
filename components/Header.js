import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';

export default class Header extends Component {
    render() {
        const worldImg = require('../images/earth.jpeg');
        return (
            <View style={styles.header}>
                <Image source={worldImg}
                    style={{
                        flex: 1,
                        alignSelf: 'stretch',
                    }}
                    resizeMode="center">
                </Image>
                <Text>First React App</Text>
            </View>
        )
    }
}

const styles = {
    header: {
        marginTop: 30,
        flexDirection: 'row',
    }
}