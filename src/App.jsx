import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%
  }

  body{
    background-color: var(--Cream);
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }
  :root{
  --Softred: hsl(10, 79%, 65%);
  --Cyan: hsl(186, 34%, 60%);
  --Darkbrown: hsl(25, 47%, 15%);
  --Mediumbrown: hsl(28, 10%, 53%);
  --Cream: hsl(27, 66%, 92%);
  --Verypaleorange: hsl(33, 100%, 98%);
  }
`

export default App
