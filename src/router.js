import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from './screens/Home';

const AppStack = createStackNavigator();

const Router = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <AppStack.Screen component={Home} name="Home"/>
        </AppStack.Navigator>
    )
};

export default Router;