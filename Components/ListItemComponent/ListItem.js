import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import ModalComponent from '../ModalComponent/ModalComponent';
import { changeModalState, change_modal_state, select_item, getSingleUser } from '../../redux/actions';
import { connect } from 'react-redux';


class ListItem extends Component {

    openUrl = async () => {
        const { data } = this.props
        var canOpen = await Linking.canOpenURL(data.url);
        if (canOpen) {
            Linking.openURL(data.html_url)
        }
    }

    openModal = () => {
        const { data } = this.props
        this.props.GetSingleUser(data.login)
        this.props.changeModalState(true)
    }

    render() {
        const { data } = this.props;
        return (
            <View key={data.node_id} style={{ flex: 1, padding: 15, borderRadius: 5, flexDirection: "row", alignItems: "center", margin: 10, marginVertical: 5, elevation: 2, backgroundColor: "#fff" }}>
                <Avatar.Image source={{ uri: data.avatar_url }} style={{ marginEnd: 10 }} />
                <View>
                    <TouchableOpacity onPress={this.openModal}>
                        <Text style={{ fontSize: 16, marginBottom: 5 }}>{data.login}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.openUrl}>
                        <Text numberOfLines={1} style={{ fontSize: 14, color: "blue", textDecorationLine: "underline" }}>{data.html_url}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = {
    changeModalState: change_modal_state,
    GetSingleUser: getSingleUser

}

export default connect(null, mapDispatchToProps)(ListItem);
