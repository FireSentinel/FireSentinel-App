import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicial from '../../views/Inicial/Inicial';
import Perfil from '../../views/Perfil/Perfil';
import Sobre from '../../views/Sobre/Sobre';
import { MaterialIcons } from '@expo/vector-icons';
import DrawerPersonalizado from './DrawerPersonalizado';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator
        drawerContent={DrawerPersonalizado}
    >
      <Drawer.Screen
        name="Inicial" 
        component={Inicial}
        options={{
            drawerIcon: ({color, size}) => (
                <MaterialIcons name="home" size={size} color={color} />
            )
        }}
    />

      <Drawer.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
            drawerIcon: ({color, size}) => (
                <MaterialIcons name="person" size={size} color={color} />
            )
        }}
    />

      <Drawer.Screen 
        name="Sobre" 
        component={Sobre}
        options={{
            drawerIcon: ({color, size}) => (
                <MaterialIcons name="info" size={size} color={color} />
            )
        }}
      />
    </Drawer.Navigator>
  );
}

export default RotasDrawer;