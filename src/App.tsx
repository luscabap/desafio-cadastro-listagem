import { Header } from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PaginaCadastro } from './Pages/PaginaCadastro';
import styles from './App.module.scss'
import { PaginaListagem } from './Pages/PaginaListagem';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header titulo={"Desafio Produtos"}/>
        <Routes>
          <Route path='/' element={<PaginaCadastro />}/>
          <Route path='/listar' element={<PaginaListagem />}/>
        </Routes>
        <Footer 
          autor='Lucas Baptista'
        />
      </BrowserRouter>
    </div>
  )
}

export default App
