import { Provider } from "react-redux";
import store from "./store";
import HomeContainer from "./HomeContainer";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <HomeContainer />
  </Provider>
  );
}

export default App;
