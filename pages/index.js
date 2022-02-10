import { Component } from 'react'
import Authenicated from '../components/authenicated'
import axios from 'axios';
import Sidebar from './../components/sidebar';
export default class Home extends Component {
  state = {
    user: {
      username: "username",
    },
    school: {schoolname: "school name"},
    page: "Dashboard"
  };

  
  render(){
  return (
    <>
    <Authenicated props={this.state}/>
    
    </>
  )}
}
