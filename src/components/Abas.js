import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import ReceitaResumo from '../pages/ReceitaResumo';
import ReceitaIngredientes from '../pages/ReceitaIngredientes';
import ReceitaModo from '../pages/ReceitaModo';

const Abas = createMaterialTopTabNavigator({
    ReceitaResumo:
    {
        screen: ReceitaResumo
    },

    ReceitaIngredientes:
    {
        screen: ReceitaIngredientes
    },

    ReceitaModo:
    {
        screen: ReceitaModo
    }
})

export default createAppContainer(Abas);
