import React from 'react';
import {View} from 'react-native';
import Home from './Home';
import Login from './Login';
import Splash from './Splash';
import PassengerInfo from './Reservation/PassengerInfo';
import Order from './Reservation/Order';
import Availability from './Reservation/Availability'






export default class Application  extends React.Component {
    componentDidMount() {
      this.state = {
        view : <Splash/>
      };

      setTimeout (()=>{

          if(true){
            this.setState ({
              view : <Order/>
            })
          }  else
          {
            this.setState ( {
              view : <Login/>
            })
}

} ,1000)
    }





  render(){
    return(

     this.state.view
    )
  }

}
