import React, { Component } from 'react';
import {FlatList, View} from 'react-native';
import {CONTAINER_STYLE} from "../shared/Styles";
import {BoldText, CommonHeader, RegularText} from "../components/index";
import {List, Divider} from 'react-native-paper';
import {connect} from "react-redux";
import {fetchRepositories, selectRepository} from "../store/actions";
import {LOGGER} from "../shared/Methods";

class Repository extends Component {

    componentDidMount() {
        this.props.fetchRepositories();
    }

    onItemCLick(data)
    {
        this.props.selectRepository(data);
        this.props.navigation.navigate('RepositoryDetail');
    }

    _renderItem(item, index) {
        return <List.Item
            title={<BoldText label={item.display_name} />}
            description={<RegularText label={item.created_by} size={14} />}
            right={props => <List.Icon {...props} icon='navigate-next' />}
            onPress={() => this.onItemCLick(item)}
        />
    }

    render() {
        const { repositoryList } = this.props;

        return (
            <View style={CONTAINER_STYLE}>
                <CommonHeader
                    title='Repositories'
                />

                <FlatList
                    data={repositoryList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => this._renderItem(item, index)}
                    ItemSeparatorComponent={Divider}
                />

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
})(Repository);