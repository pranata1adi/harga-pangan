import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './src/features/login/Login';
import Home from './src/features/main/Home';
import Detail from './src/features/detail/Detail';


const AppNavigator = createStackNavigator({
  Login: { 
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Home: { 
    screen: Home,
    navigationOptions:{
      header: null,
    }
 }, 
 Detail: { 
  screen: Detail,
  navigationOptions:{
    header: null,
  }
},
});

export default createAppContainer(AppNavigator);