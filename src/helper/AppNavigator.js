import { createStackNavigator } from 'react-navigation';
import MainActivity from '../features/main/MainActivity';
import Login from '../features/Login/Login';
import Intro from '../features/Intro/IntroScreen';

const AppNavigator = createStackNavigator({
    Intro: { screen: Intro },
    Login: { screen: Login },
    MainActivity: { screen: MainActivity },
});

export default AppNavigator;