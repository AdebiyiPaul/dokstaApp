import React, { Component } from 'react';
import {View, TouchableOpacity} from 'react-native';
import {CONTAINER_STYLE} from "../shared/Styles";
import {BoldText, CommonHeader} from "../components/index";

class Home extends Component {

    render() {

        return (
            <View style={CONTAINER_STYLE}>
                <CommonHeader
                    title='Doksta Homepage'
                />

                <View style={{flex: 1, margin: 20, justifyContent: 'center'}}>

                    <TouchableOpacity style={styles.api} onPress={() => this.props.navigation.navigate('ApiRepository')}>
                        <BoldText label='List with API' style={{marginTop: 35}} size={16} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.json} onPress={() => this.props.navigation.navigate('Repository')}>
                        <BoldText label='List with JSON File' style={{marginTop: 35}} size={16} />
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = {
    json: {
        backgroundColor: 'white',
        height: 100,
        borderRadius: 5,
        borderWidth: 1,
        shadowRadius: 10,
        borderColor: '#03A9F4',
        alignItems: 'center',
        marginBottom: 30,
    },
    api: {
        backgroundColor: 'white',
        height: 100,
        borderRadius: 5,
        borderWidth: 1,
        shadowRadius: 10,
        borderColor: '#4CAF50',
        alignItems: 'center',
        marginBottom: 30
    }
};

export default Home;