import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { getUsers, hide_Snackbar } from '../redux/actions';
import { Snackbar, List, Appbar } from 'react-native-paper';
import ListComponent from './ListComponent/ListComponent';
import ModalComponent from './ModalComponent/ModalComponent';
import InputComponent from './InputComponent/InputComponent';


class Main extends Component {

    componentDidMount() {
        this.props.GetUsers();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Appbar>
                    <Appbar.Content title="Test Application" />
                </Appbar>
                <InputComponent style={{ margin: 10 }} />
                <ListComponent />
                <ModalComponent />
                <Snackbar
                    duration={3000}
                    visible={this.props.snackbar}
                    onDismiss={() => {
                        this.props.hideSnackbar(false)
                    }}
                >
                    {this.props.error}
                </Snackbar>
            </View>
        )
    }
}
const mapStateToProps = state => ({
    error: state.errorMessage,
    snackbar: state.snackbar,
})

const mapDispatchToProps = {
    GetUsers: getUsers,
    hideSnackbar: hide_Snackbar
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);