import React, { Component } from "react";
import {

    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { connect } from "react-redux";
import mainStyles from "../../../styles";

import { getUser, logoutUser } from "../../../actions";
import { Icon } from "native-base";


class Home extends Component {

    state = {
        userData: ""
    }

    componentDidMount() {

        this.props.dispatch(getUser());
    }

    handleLogout = () => {

        this.props.dispatch(logoutUser());
        this.props.navigation.navigate("Login")

    }



    render() {

        return <View style={mainStyles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.props.userData.userData}</Text>
            </View>
            <View style={{ flexDirection: "row" }} >
                <View style={{ width: Dimensions.get('window').width / 2, height: Dimensions.get('window').height }}>
                    <View>
                        <TouchableOpacity>
                            <Icon name="address-card" type="FontAwesome5" style={{ fontSize: 100, color: 'red' }} />
                            <Text style={{ fontSize: 25, fontFamily: 'Gotham-Book', fontWeight: 'bold', color: 'white' }}>Informacion Personal</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: '20%' }}>
                        <TouchableOpacity>
                            <Icon name="address-card" type="FontAwesome5" style={{ fontSize: 100, color: 'red' }} />
                            <Text style={{ fontSize: 25, fontFamily: 'Gotham-Book', fontWeight: 'bold', color: 'white' }}>Informacion Personal</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: '20%' }}>
                        <TouchableOpacity>
                            <Icon name="address-card" type="FontAwesome5" style={{ fontSize: 100, color: 'red' }} />
                            <Text style={{ fontSize: 25, fontFamily: 'Gotham-Book', fontWeight: 'bold', color: 'white' }}>Informacion Personal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: Dimensions.get('window').width / 2, height: Dimensions.get('window').height }}>

                    <View>
                        <TouchableOpacity>
                            <Icon name="address-card" type="FontAwesome5" style={{ fontSize: 100, color: 'red' }} />
                            <Text style={{ fontSize: 25, fontFamily: 'Gotham-Book', fontWeight: 'bold', color: 'white' }}>Informacion Personal</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: '20%' }}>
                        <TouchableOpacity>
                            <Icon name="address-card" type="FontAwesome5" style={{ fontSize: 100, color: 'red' }} />
                            <Text style={{ fontSize: 25, fontFamily: 'Gotham-Book', fontWeight: 'bold', color: 'white' }}>Informacion Personal</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: '20%' }}>
                        <TouchableOpacity >
                            <Icon name="sign-out-alt" type="FontAwesome5" style={{ fontSize: 100, color: 'red' }} />
                            <Text style={{ fontSize: 25, fontFamily: 'Gotham-Book', fontWeight: 'bold', color: 'white' }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    }
}
const mapStateToProps = state => {

    return {
        userData: state.user
    }
}
export default connect(mapStateToProps)(Home);