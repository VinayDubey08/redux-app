import React from "react";
//import "./style/App.scss";
import "./style/App.scss";
import Navbar from "./components/elements/Navbar";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
//yha pe two feild hote hai.. provider and consumer but redux m consumer useSelector hota hai..
function App() {
  //provider k andr props ko pass kiya ha
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

//export default App;
