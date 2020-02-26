import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";

import { connect } from "react-redux";
import { getUser, loginUser, logoutUser } from "../../../actions"
import mainStyles from "../../../styles";
import _ from "lodash";
import firebase from "../../../firebase"
import styles from "../../../styles";

class Login extends Component {

    state = {
        formData: {
            username: "",
            password: ""
        },
        errors: "",
        feedBack: ""
    }

    componentDidMount() {
        //get user
        this.props.dispatch(getUser());

        //check if user is alread logged in

    }

    renderFeedBack = () => {

        let feedBack = this.state.feedBack;

        if (feedBack) {
            return <View>
                <Text style={styles.error}> {feedBack} </Text>
            </View>
        }
    }
    handleLogin = () => {

        let formData = this.state.formData;
        let errors = {}

        for (let field in formData) {
            if (formData[field] === "") {
                errors[field] = `${field} is empty`
            }
        }

        if (!_.isEmpty(errors)) {
            this.setState({
                errors
            })

        } else {

            //process login
            //clear all errors

            this.setState({
                errors: null
            })

            console.warn(this.state.formData)

        }

    }

    handleChange = element => {

        let formData = this.state.formData;

        formData[element.field] = element.value;

        this.setState({

            formData
        })
    }

    renderError = field => {

        let errors = this.state.errors;

        if (!_.isEmpty(errors)) {

            if (errors[field]) {

                return <View>
                    <Text style={{
                        marginTop: 10,
                        color: "red",
                        fontSize: 18
                    }}> {errors[field]} </Text>
                </View>
            }
        }
    }

    render() {

        return <ScrollView style={mainStyles.container}>

            <KeyboardAvoidingView style={mainStyles.container}> 


                <View style={mainStyles.container}>
                    <Text style={styles.title}> Login</Text>


                    <View style={styles.inputUnit}>

                        <Text style={styles.text}>Usuario</Text>

                        <TextInput placeholder="Usuario" style={styles.input} onChangeText={username => this.handleChange({
                            field: "username",
                            value: username
                        })} />
                        {this.renderError("username")}
                    </View>

                    <View style={styles.inputUnit}>
                        <Text style={styles.text}>Contra</Text>
                        <TextInput placeholder="Contra" style={styles.input} secureTextEntry
                            onChangeText={password => this.handleChange({
                                field: "password",
                                value: password
                            })}
                        />
                        {this.renderError("password")}
                    </View>

                    {this.renderFeedBack()}

                    <TouchableOpacity style={mainStyles.btn} onPress={() => this.handleLogin()}>
                        <Text style={mainStyles.btnText}> Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        marginVertical: 20,
                        paddingVertical: 20,
                    }} onPress={() => this.props.navigation.navigate("Home")} >
                        <Text style={{
                            fontSize: 18,
                            textAlign: "center",
                            color:'white'
                        }}>Hacé click para crear una Cuenta</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        </ScrollView>
    }
}


const mapStateToProps = state => {

    return {
        userData: state.user
    }
}
export default connect(mapStateToProps)(Login);