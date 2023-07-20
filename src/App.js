import logo from './logo.svg';
import './App.css';
import {ThemeProvider,createGlobalStyle} from 'styled-components';
import { AnimatedLogo, FancyButton, StyledButton, SubmitButton ,DarkButton} from './components/Button';



const theme={
  dark:{
    primary:'black',
    text:'white'
  },
  light:{
    primary:'white',
    text:'black'
  },
  fontFamily:'Segoe UI'
}

const GlobalStyle=createGlobalStyle`
button{
  font-family:${props=>props.theme.fontFamily};
}
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/> 
    <div className="App">
      <AnimatedLogo src={logo}/>
       <StyledButton type='submit'>Styled Button</StyledButton>
      <div>
        <br/>
      </div>
      <StyledButton variant='outline'>Styled Button</StyledButton>
      <div>
        <br/>
      </div>
      <FancyButton as ='a'>Fancy Button</FancyButton>
      <div>
        <br/>
      </div>
      <SubmitButton>Submit Button</SubmitButton>
    
       <div>
        <br/>
        </div>
      <DarkButton>Dark Theme</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
