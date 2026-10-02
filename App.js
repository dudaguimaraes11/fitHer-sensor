import React, { useState } from 'react';

import Splash from './src/screens/1-Splash';
import Onboarding from './src/screens/2-Onboarding';
import Permissao from './src/screens/3-Permissao';
import MenuInferior from './src/components/MenuInferior';

export default function App() {
  const [tela, setTela] = useState('splash');

  function irPara(novaTela) {
    setTela(novaTela);
  }

  if (tela === 'splash') {
    return <Splash irPara={irPara} />;
  }

  if (tela === 'onboarding') {
    return <Onboarding irPara={irPara} />;
  }

  if (tela === 'permissao') {
    return <Permissao irPara={irPara} />;
  }

  if (tela === 'home') {
    return <MenuInferior irPara={irPara} />;
  }

  return <Splash irPara={irPara} />;
}