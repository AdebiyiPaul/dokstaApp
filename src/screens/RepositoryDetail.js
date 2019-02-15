import React, { Component } from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {CONTAINER_STYLE} from "../shared/Styles";
import {BoldText, CommonHeader, RegularText} from "../components/index";
import {List, Divider} from 'react-native-paper';
import {connect} from "react-redux";
import {fetchRepositories, selectRepository} from "../store/actions";
import {PRIMARY_COLOR, TERTIARY_COLOR} from "../shared/Colors";

class RepositoryDetail extends Component {

    render() {
        const { selectedRepository } = this.props;
        return (
            <View style={CONTAINER_STYLE}>
                <CommonHeader
                    title='Repository detail'
                    backAction
                    backActionPress={() => this.props.navigation.goBack()}
                />

                <ScrollView style={{flex: 1}}>
                    <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
                        <View style={{justifyContent: 'center', alignItems: 'center', marginStart: 15}}>
                            <BoldText label={selectedRepository.display_name} color={TERTIARY_COLOR}
                                      size={25} />
                            <BoldText label={selectedRepository.created_by} color={PRIMARY_COLOR} size={15}
                                         style={{paddingTop: 5, fontStyle: 'italic'}} />
                        </View>

                        <View style={{marginTop: 10}}>
                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Short description' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={selectedRepository.short_description} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Full description' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={selectedRepository.description} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Released date' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={selectedRepository.released} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Is featured?' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={`${selectedRepository.featured}`} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Is curated?' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={`${selectedRepository.curated}`} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Score' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={selectedRepository.score} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                        </View>

                    </View>
                </ScrollView>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return state.repositoryData;
};

export default connect(mapStateToProps, {
    fetchRepositories,
    selectRepository
})(RepositoryDetail);