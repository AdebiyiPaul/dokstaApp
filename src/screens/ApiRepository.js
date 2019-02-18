import React, { Component } from 'react';
import {FlatList, View} from 'react-native';
import {CONTAINER_STYLE} from "../shared/Styles";
import {BoldText, CommonHeader, RegularText} from "../components/index";
import {List, Divider} from 'react-native-paper';
import {connect} from "react-redux";
import {fetchRepositoryList, selectRepository} from "../store/actions";
import {LOGGER} from "../shared/Methods";
import {CustomLoader} from "../components";

class ApiRepository extends Component {

    componentDidMount() {
        this.props.fetchRepositoryList();
    }

    onItemCLick(data)
    {
        this.props.selectRepository(data);
        this.props.navigation.navigate('ApiRepositoryDetail');
    }

    _renderItem(item, index) {
        return <List.Item
            title={<BoldText label={item.name} />}
            description={<RegularText label={item.owner.login} size={14} />}
            right={props => <List.Icon {...props} icon='navigate-next' />}
            onPress={() => this.onItemCLick(item)}
        />
    }

    render() {
        const { repositoryApiList, loading } = this.props;

        return (
            <View style={CONTAINER_STYLE}>
                <CommonHeader
                    title='Repositories With API'
                    backAction
                    backActionPress={() => this.props.navigation.goBack()}
                />

                <FlatList
                    data={repositoryApiList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => this._renderItem(item, index)}
                    ItemSeparatorComponent={Divider}
                />

                <CustomLoader visible={loading} />

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return state.repositoryData;
};

export default connect(mapStateToProps, {
    fetchRepositoryList,
    selectRepository
})(ApiRepository);