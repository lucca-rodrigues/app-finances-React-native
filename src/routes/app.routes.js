import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const AppStack =  createStackNavigator();

function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="Home"
                component={Home}
            />
        </AppRoutes.Navigator>
    )
}

export default AppRoutes;