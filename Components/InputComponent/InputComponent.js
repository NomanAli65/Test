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
import { connect } from 'react-redux';
import { TextInput, IconButton } from 'react-native-paper';
import { SearchUser, StartSearchUser } from '../../redux/actions';


class InputComponent extends Component {

    componentDidMount() {
        this.timeout = 0;
    }

    onChangeText = (text) => {
        this.props.StartSearch(text)
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.props.SearchUser(text)
        }, 1000)
    }

    render() {
        return (
            <View style={{
                ...this.props.style
            }}>
                <TextInput
                    style={{ height: 50, backgroundColor: "#fff", elevation: 5, borderRadius: 5, fontSize: 14 }}
                    placeholder="Search"
                    mode="flat"
                    autoCapitalize="none"
                    clearButtonMode="while-editing"
                    underlineColor="transparent"
                    value={this.props.value}
                    onChangeText={this.onChangeText}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    value: state.value,
})

const mapDispatchToProps = {
    SearchUser: SearchUser,
    StartSearch: StartSearchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
