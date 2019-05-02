import { createStackNavigator } from 'react-navigation';
//createStackNavigator: navegação por botões e header .

import Main from './pages/main';
//Importação da pagina criada;
import Product from './pages/product';

export default createStackNavigator({
    Main,
    Product
},
    { //Configurações extras
        navigationOptions: {
            headerStyle: { backgroundColor: "#000080" },//cores da header
            headerTintColor: "#87CEEB"
        }
    });