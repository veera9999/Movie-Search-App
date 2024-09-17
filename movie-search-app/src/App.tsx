import "./App.css";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/MovieResults/SearchResults";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <SearchBar />
      <SearchResults />
    </Provider>
  );
}

export default App;
