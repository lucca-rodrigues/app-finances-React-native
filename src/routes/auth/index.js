import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const AppRoutes =  createStackNavigator();

function AppRoutes() {
    return (
        <AppRoutes.Navigator>
            <AppStack.Screen
                name="Home"
                component={Home}
            />
        </AppRoutes.Navigator>
    )
}

export default AppRoutes;