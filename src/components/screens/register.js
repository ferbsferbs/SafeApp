import React, { Component } from "react";
import {

    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import _ from 'lodash';


import firebase from "../../../firebase"
import styles from "../../../styles"


class Register extends Component {

    state = {

        formData: {
            name: "",
            username: "",
            password: ""
        },
        errors: ''
    }


    handleChange = element => {

        let formData = this.state.formData;

        formData[element.field] = element.value;
        this.setState({
            formData
        })



    }

    handleSubmit = () => {


        let data = this.state.formData;

        let errors = {}

        for (let item in data) {
            if (data[item] === "") {
                errors[item] = `${item} is required`
            }
        }

        if (!_.isEmpty(errors)) {

            this.setState({

                errors
            })
        } else {

                console.warn(this.state.formData)
                this.props.navigation.navigate("Login")
            
        }


    }

    renderError = field => {

        let errors = this.state.errors;

        if (errors[field]) {

            return <View>

                <Text> {errors[field]}</Text>
            </View>
        }


    }

    render() {

        return <ScrollView style={styles.container} >
            <KeyboardAvoidingView>

                <View style={styles.container}>

                    <Text style={styles.title}> Registrar usuario </Text>

                    <View>
                        <Text style={styles.text}>Nombre y apellido</Text>
                        <TextInput placeholder="Nombre completo" style={styles.input} onChangeText={name => this.handleChange({ field: "name", value: name })} />
                        {this.renderError("name")}
                    </View>

                    <View>
                        <Text style={styles.text}>Nombre de usuario</Text>
                        <TextInput placeholder="usuario" style={styles.input} onChangeText={username => this.handleChange({ field: "username", value: username })} />
                    </View>

                    <View>
                        <Text style={styles.text}>contra</Text>
                        <TextInput placeholder="contra" secureTextEntry style={styles.input} onChangeText={password => this.handleChange({ field: "password", value: password })} />
                    </View>



                    <TouchableOpacity style={styles.btn} onPress={() => this.handleSubmit()}>
                        <Text style={styles.btnText}> Registrar datos! </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        marginVertical: 20,
                        paddingVertical: 20,
                    }} onPress={() => this.props.navigation.navigate("Login")} >
                        <Text style={{
                            fontSize: 18,
                            textAlign: "center",
                            color:'white'
                        }}> hace click para logearse</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    }
}



export default Register;