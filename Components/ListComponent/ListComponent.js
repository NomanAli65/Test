import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import ListItem from '../ListItemComponent/ListItem';
import { connect } from 'react-redux';


class ListComponent extends Component {

    _renderItem = ({ item }) => {
        return (
            <ListItem data={item} />
        )
    }

    render() {
        return (
            <View style={{
                flex: 1,
                ...this.props.style
            }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.props.users}
                    renderItem={this._renderItem}
                    ListFooterComponent={
                        this.props.loading ?
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 10 }}>
                                <ActivityIndicator color="red" size={50} />
                            </View>
                            : null
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users,
    loading: state.loading,
})

export default connect(mapStateToProps, null)(ListComponent);
