import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import RepositoryScreen from './Repository';
import ApiRepositoryScreen from './ApiRepository';
import RepositoryDetailScreen from './RepositoryDetail';
import ApiRepositoryDetailScreen from './ApiRepositoryDetail';
import HomeScreen from './Home';

const LandingRoute = createStackNavigator({
    Home: HomeScreen,
    Repository: RepositoryScreen,
    ApiRepository: ApiRepositoryScreen,
    RepositoryDetail: RepositoryDetailScreen,
    ApiRepositoryDetail: ApiRepositoryDetailScreen,
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
});

const MainRoute = createSwitchNavigator({
    LandingRoute: LandingRoute,
}, {
    initialRouteName: 'LandingRoute'
});

const App = createAppContainer(MainRoute);

export default App;