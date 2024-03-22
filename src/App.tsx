import { Header } from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PaginaCadastro } from './Pages/PaginaCadastro';
import styles from './App.module.scss'
import { PaginaListagem } from './Pages/PaginaListagem';

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header titulo={"Desafio Cadastro e Listagem de produtos"}/>
        <Routes>
          <Route path='/cadastrar' element={<PaginaCadastro />}/>
          <Route path='/listar' element={<PaginaListagem />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
