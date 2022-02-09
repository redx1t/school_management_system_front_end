import { Component } from 'react'
import Authenicated from '../components/authenicated'
import axios from 'axios';

export default class Home extends Component {
  state = {};
  componentDidMount(){
      const config = {
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      }
      // console.log(config);
      // console.log(localStorage.getItem('access_token'))
      axios.get('v1/users/user/get', config).then(
          res => {
              this.setState({
                  user: res.data.data.user
              })
              // console.log(res, res.data.data.user)
          }, err => {
              console.log(err)
          }
      )
  }
  render(){
  return (
    <>
    <Authenicated user={this.state.user}/>
    <h1>School Management System</h1>
    </>
  )}
}
