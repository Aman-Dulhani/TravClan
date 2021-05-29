import CustomerBidContainer from './components/customerBidContainer';
import './App.css';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  fontFamily: 'Roboto, sans-serif',
    // palette: {
    //     primary1Color: blue[600],
    //     primary2Color: blue[700],
    //     primary3Color: grey[400],
    //     accent1Color: red[600],
    //     accent2Color: grey[100],
    //     accent3Color: grey[500],
    //     textColor: common.darkBlack,
    //     alternateTextColor: common.white,
    //     borderColor: grey[300],
    //     pickerHeaderColor: blue[600],
    //     shadowColor: common.fullBlack,
    // },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CustomerBidContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
