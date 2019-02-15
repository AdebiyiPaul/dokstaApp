import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import RepositoryScreen from './Repository';
import RepositoryDetailScreen from './RepositoryDetail';

const LandingRoute = createStackNavigator({
    Repository: RepositoryScreen,
    RepositoryDetail: RepositoryDetailScreen,
}, {
    initialRouteName: 'Repository',
    headerMode: 'none'
});

const MainRoute = createSwitchNavigator({
    LandingRoute: LandingRoute,
}, {
    initialRouteName: 'LandingRoute'
});

const App = createAppContainer(MainRoute);

export default App;