import React from 'react';
import ResponsiveImage from 'react-native-responsive-image';

import { StatusBar,NetInfo ,Image,View,AsyncStorage,Platform,I18nManager} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container,Fab,Picker,Form,Item,Label, Header,Toast, Title, List,ListItem,Content, Card,CardItem,Text,Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import  AllConfigs  from './../components/AllConfigs'
import Spinner from 'react-native-spinkit';






var headerColor = AllConfigs.primaryColor
var secondaryColor = AllConfigs.secondaryColor



export default class Splash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            internet: true,
            enable:false,
            isfirst:true,
            isLogged:false,
            isOnline:false

        }
    
        I18nManager.forceRTL(true);
        I18nManager.allowRTL(false);
    
    }





       
   

   async componentDidMount() {


      // await this.getUserData();


      

       setTimeout(() => {
        //  if(this.state.isfirst==='true') {

        //     Actions.login();
        //  } else {
             Actions.order();
        //  }

        // Actions.login();

    },0)


    }


    renderLogo()  {
        if (AllConfigs.airlineCode === 'I3') {
            return (
                <ResponsiveImage  style={{alignSelf:'center'}}  initWidth="200" initHeight="160"  source={require(`../assets/image/logo/I3.png`)} />
            );
        } else if (AllConfigs.airlineCode === 'NV')  {
            return (
                <ResponsiveImage   style={{alignSelf:'center'}}  initWidth="200" initHeight="160" source={require(`../assets/image/logo/NV.jpg`)} />
            );
        
        }
        else if (AllConfigs.airlineCode === 'ZV')  {
            return (
                <ResponsiveImage   style={{alignSelf:'center'}}  initWidth="200" initHeight="200" source={require(`../assets/image/logo/EP.png`)} />
            );
        
        }
        else if (AllConfigs.airlineCode === 'QB')  {
            return (
                <ResponsiveImage  style={{alignSelf:'center'}}  initWidth="200" initHeight="160"  source={require(`../assets/image/logo/QB.jpg`)} />
            );
        
        }
        else if (AllConfigs.airlineCode === 'ZcV')  {
            return (
                <ResponsiveImage  style={{alignSelf:'center'}}  initWidth="200" initHeight="160"  source={require(`../assets/image/logo/ZV.png`)} />
            );
        
        }
        else if (AllConfigs.airlineCode === 'VR')  {
            return (
                <ResponsiveImage  style={{alignSelf:'center'}}  initWidth="200" initHeight="160"  source={require(`../assets/image/logo/VR.png`)} />
            );
        
        }
        else if (AllConfigs.airlineCode === 'HH')  {
            return (
                <ResponsiveImage  style={{alignSelf:'center'}}  initWidth="200" initHeight="160"  source={require(`../assets/image/logo/HH.png`)} />
            );
        
        }
        else if (AllConfigs.airlineCode === 'IV')  {
            return (
                <ResponsiveImage  style={{alignSelf:'center'}}  initWidth="200" initHeight="160"  source={require(`../assets/image/logo/IV.png`)} />
            );
        
        }
        else if (AllConfigs.airlineCode === 'IRZ')  {
            return (
                <ResponsiveImage  style={{alignSelf:'center'}}  initWidth="200" initHeight="160"  source={require(`../assets/image/logo/IRZ.jpg`)} />
            );
        
        }
        else if (AllConfigs.airlineCode === 'Y9')  {
            return (
                <ResponsiveImage  style={{alignSelf:'center'}}  initWidth="200" initHeight="160"  source={require(`../assets/image/logo/Y9.png`)} />
            );
        
        

        
        }
    }



    async getUserData(){
        var ret = 'false';
        var isfirst = await AsyncStorage.getItem('isfirst');
        if(isfirst === null)
        {
        
           AsyncStorage.setItem('isfirst','false');
           ret =  'true'
        }
          
        else if (isfirst === 'false')
        {
           ret = 'false';

        }

     
        this.setState({isfirst : ret});
      
    }



    render() {
        return (
            <View style={{backgroundColor:'#ecf0f1',height:'100%',...Platform.select({
                ios: {
                         
                paddingTop:50
                      },
                      android: {
                      }
                
                  }),}}>

                  <View style={{height: 400,paddingTop:200, justifyContent: 'space-between', alignItems: 'center'}}>
    <Label style={{alignSelf:'center',fontFamily : 'IRANSansMobile',fontSize:20,color:secondaryColor,paddingBottom:5}}>
اپلیکیشن رزور بلیت   </Label>
  {/* <Label style={{alignSelf:'center',fontFamily : 'IRANSansMobile',fontSize:30,color:'red',fontWeight:'400'}}>
  ----  هواپیمایی {AllConfigs.airlineFa}   ---- </Label> */}
  {this.renderLogo()}          

</View>
            <StatusBar  backgroundColor='#ecf0f1' barStyle="light-content"/>

                           

      
          <View style={{alignSelf:'center',paddingTop:100,marginBottom:200}}>
           <Spinner style={{alignSelf:'center',paddingTop:40,paddingBottom:80,color:secondaryColor}}  isVisible={true} size={100} type="WanderingCubes" color={'white'}/> 
  
 
</View>


      
       



            </View>
        )
    }
}
