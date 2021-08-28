import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Sobre from '../../views/Sobre/Sobre';
import Mapa from '../../views/Mapa/Mapa';
import Alarme from '../../views/Alarme/Alarme';
import Denunciar from '../../views/Denunciar/Denunciar';
import { MaterialIcons } from '@expo/vector-icons';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const icones = {
    Inicial: { name: 'home' },
    Perfil: { name: 'person' },
    Sobre: { name: 'info' },
}

const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
        {
            style: {backgroundColor: '#081a31', 
            borderTopColor: '#081a31'},
            activeTintColor: '#FFFFFF',
            width: '100%',
            height: '50%',
            showLabel: false,
        }
      }
      screenOptions={ ({route}) => ({
          tabBarIcon: ({color, size}) => {
              const {name} = icones[route.name];
              return <MaterialIcons name={name} size={size} color={color} />
          }
        })
      }
    >
      <Tab.Screen 
        name="Inicial" 
        component={RotasDrawer}
        options={{
            unmountOnBlur: true,
        }} 
      />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  );
}

export default RotasTab;