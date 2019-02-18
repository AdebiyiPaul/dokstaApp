import React, { Component } from 'react';
import {ScrollView, View} from 'react-native';
import {CONTAINER_STYLE} from "../shared/Styles";
import {BoldText, CommonHeader, RegularText} from "../components/index";
import {Divider} from 'react-native-paper';
import {connect} from "react-redux";
import {selectRepository} from "../store/actions";
import {ACCENT_COLOR, PRIMARY_COLOR, TERTIARY_COLOR} from "../shared/Colors";

class ApiRepositoryDetail extends Component {

    render() {
        const { selectedRepository } = this.props;
        return (
            <View style={CONTAINER_STYLE}>
                <CommonHeader
                    title='Api Repository detail'
                    backAction
                    backActionPress={() => this.props.navigation.goBack()}
                />

                <ScrollView style={{flex: 1}}>
                    <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
                        <View style={{justifyContent: 'center', alignItems: 'center', marginStart: 15}}>
                            <BoldText label={selectedRepository.name} color={TERTIARY_COLOR}
                                      size={25} />
                            <BoldText label={selectedRepository.owner.login} color={PRIMARY_COLOR} size={15}
                                         style={{paddingTop: 5, fontStyle: 'italic'}} />
                        </View>

                        <View style={{marginTop: 10}}>
                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Description' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={selectedRepository.description} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Language' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={selectedRepository.language} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Owner type' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={selectedRepository.owner.type} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Is Private?' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={`${selectedRepository.private}`} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Created date' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={selectedRepository.created_at} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Updated date' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={selectedRepository.updated_at} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Watches' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={`${selectedRepository.watchers_count}`} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Forks' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={`${selectedRepository.forks_count}`} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25,}}>
                                <BoldText label='Score' color={TERTIARY_COLOR} style={{alignItems: 'flex-start', width: '30%'}}/>
                                <RegularText label={`${selectedRepository.score}`} size={15} style={{width: '60%'}}/>
                            </View>

                            <Divider/>


                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25, marginTop: 20}}>
                                <RegularText label='License' color={ACCENT_COLOR}/>
                                <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                                    <RegularText label={selectedRepository.license.name} color={ACCENT_COLOR} size={14}  style={{fontStyle: 'italic'}}/>
                                    <RegularText label={selectedRepository.license.key} color={ACCENT_COLOR} size={14}  style={{fontStyle: 'italic'}}/>
                                    <RegularText label={selectedRepository.license.spdx_id} color={ACCENT_COLOR} size={14}  style={{fontStyle: 'italic'}}/>
                                </View>
                            </View>

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
    selectRepository
})(ApiRepositoryDetail);