import axios from 'axios';
import React, { Component } from 'react';

export default class Authenicated extends Component {
    

    render(){
        if (this.props.user) {
                    return (<>
                    <h1>Hi {this.props.user.first_name}</h1>
                    </>)
                }else{
        return (
            <div>
                
                Authenication
            </div>
        )}
    }
}