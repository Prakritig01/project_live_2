import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import JobComponent from "./Components/JobComponent/JobComponent";
import SearchBar from "./Components/SearchBar/SearchBar";
import { JobContextProvider } from "./Components/Context/JobConetxt";
function App() {
  return (
    <JobContextProvider>
      <div className="App">
        <Header />
        <SearchBar />
        <JobComponent />
        <Footer />
      </div>
    </JobContextProvider>
  );
}

export default App;
