import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/cakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import NewCakeContainer from "./components/newCakeContainer";
import ItemContainer from "./components/itemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
