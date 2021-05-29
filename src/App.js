import CustomerBidContainer from './components/customerBidContainer';
import './App.css';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CustomerDetails from './components/customerDetails';

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
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={CustomerBidContainer} />
            <Route exact path="/CustomerDetails/:id" component={CustomerDetails} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
