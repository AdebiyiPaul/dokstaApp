import React from 'react';
import { BoldText } from './BoldText';
import { Platform } from 'react-native';
import { Appbar } from 'react-native-paper';
import {LIGHT_COLOR, PRIMARY_COLOR} from "../shared/Colors";

export const CommonHeader = (props) => {
    const leftSide = () => {

        if(props.backAction)
        {
            return <Appbar.BackAction onPress={props.backActionPress} color={LIGHT_COLOR} />
        }
    };

    return (
        <Appbar.Header style={{height: Platform.OS === 'ios' ? 40 : 55, backgroundColor: PRIMARY_COLOR}}>
            {leftSide()}

            <Appbar.Content
                title={<BoldText label={props.title} size={18} color={LIGHT_COLOR}/>}
            />

        </Appbar.Header>
    );
};
