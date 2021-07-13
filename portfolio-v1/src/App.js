import './App.css';
import Nav from './components/Nav/Nav'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createTheme({
  pallete: {
    type: 'dark'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav theme={theme}/>
    </ThemeProvider>
  );
}

export default App;
