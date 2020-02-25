import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    TouchableOpacity,
    Linking,
    ActivityIndicator,
} from 'react-native';
import { Avatar, Text, Portal, Modal, IconButton } from 'react-native-paper';
import { change_modal_state, select_item, getSingleUser } from '../../redux/actions';
import { connect } from 'react-redux';


class ModalComponent extends Component {

    render() {
        const { selectedItem, visible, modalLoading } = this.props;
        return (
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={() => this.props.changeModalState(false)}
                    contentContainerStyle={{ flex: 1 }}
                >
                    <View style={{ flex: 1, backgroundColor: "#fff" }}>
                        {
                            modalLoading ?
                                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                    <ActivityIndicator color="red" size={40} />
                                </View>
                                :
                                <View style={{ flex: 1, alignItems: "center", padding: 10 }}>
                                    <View style={{ alignSelf: "flex-end" }}>
                                        <IconButton icon="close" onPress={() => this.props.changeModalState(false)} />
                                    </View>
                                    <Avatar.Image source={{ uri: selectedItem.avatar_url }} />
                                    <Text style={{ marginVertical: 5 }}>{selectedItem.name}</Text>
                                    {
                                        selectedItem.location ?
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <IconButton icon="map-marker" style={{ padding: 0, margin: 0 }} />
                                                <Text >{selectedItem.location}</Text>
                                            </View>
                                            : null
                                    }

                                    <View style={{ marginTop: 20, width: "100%", flexDirection: "row" }}>
                                        <View style={{ flex: 1, padding: 10, backgroundColor: "#fff", elevation: 5, alignItems: "center", marginEnd: 10 }}>
                                            <Text>{selectedItem.followers}</Text>
                                            <Text>Followers</Text>
                                        </View>
                                        <View style={{ flex: 1, padding: 10, backgroundColor: "#fff", elevation: 5, alignItems: "center" }}>
                                            <Text>{selectedItem.following}</Text>
                                            <Text>Following</Text>
                                        </View>
                                    </View>
                                </View>
                        }


                    </View>

                </Modal>
            </Portal>
        )
    }
}

const mapStateToProps = state => ({
    visible: state.modal,
    selectedItem: state.selectedItem,
    modalLoading: state.modalLoading
})

const mapDispatchToProps = {
    changeModalState: change_modal_state,
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);