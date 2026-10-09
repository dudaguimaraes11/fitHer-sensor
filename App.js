import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Splash from './src/screens/1-Splash';
import Onboarding from './src/screens/2-Onboarding';
import Permissao from './src/screens/3-Permissao';
import MenuInferior from './src/components/MenuInferior';

import Atividade from './src/screens/5-Atividade';
import Metas from './src/screens/6-Metas';

export default function App() {
const [tela, setTela] = useState('splash');

function irPara(novaTela) {
setTela(novaTela);
}

let conteudo;

if (tela === 'splash') {
conteudo = <Splash irPara={irPara} />;
} else if (tela === 'onboarding') {
conteudo = <Onboarding irPara={irPara} />;
} else if (tela === 'permissao') {
conteudo = <Permissao irPara={irPara} />;
} else if (tela === 'home') {
conteudo = <MenuInferior irPara={irPara} />;
} else if (tela === 'atividade') {
conteudo = <Atividade irPara={irPara} />;
} else if (tela === 'metas') {
conteudo = <Metas irPara={irPara} />;
} else {
conteudo = <Splash irPara={irPara} />;
}

return ( <SafeAreaProvider>
{conteudo} </SafeAreaProvider>
);
}
