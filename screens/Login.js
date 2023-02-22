import React, { Component } from "react";

export default class Loginscreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleLogin = (email, password) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            this.props.navigation.navigate("BottomTab")
        })
        .cath(error =>{
            Alert.alert(error.message)
        });
    }


}