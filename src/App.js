import Contacts from './componenets/contacts/Contacts';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import AddContact from './componenets/contacts/AddContact';
import Header from './componenets/layout/Header';
import About from './componenets/pages/About';
import NotFound from './componenets/pages/NotFound';
import Test from './componenets/Test/Test';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddContact from './componenets/contacts/AddContact';
import EditContact from './componenets/contacts/EditContact';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/About" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
