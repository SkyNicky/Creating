import { Routes, Route} from 'react-router-dom'
import { Header } from './Componentes/Header.jsx'
import { Home } from './Componentes/Home.jsx'
import { Sobre } from './Componentes/Sobre.jsx'
import { AppMenu } from './Componentes/AppMenu.jsx'
import { Contato } from './Componentes/Contato.jsx'
import { Footer } from './Componentes/Footer.jsx'
import { Conta } from './Componentes/Conta.jsx'

import './Styles.global.css'


function App() {

  return (
  
    <div>
    <Header />

    <Routes>
    <Route path='/' element={<Home start='Faça agora seu pedido pelo Menu!'
    message='Baixe o nosso app!'
    />} />
    <Route path='/Sobre' element={<Sobre 
    title='Somos a Mix Burguers!'
    message='A MAIOR rede de lanchonetes que você irá achar no mercado, com as melhores opções de lanches e porções.'
    />} />
    <Route path='/Menu' element={<AppMenu />} />
    <Route path='/Contato' element={<Contato />} />
    <Route path='/Conta' element={<Conta />} />
    </Routes>

    {<Footer/>}

    </div>

  
 
   
   
   
    
  )
}

export default App