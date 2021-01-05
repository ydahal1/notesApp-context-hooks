import "./App.css";

//Context
import { NotesProvider } from "./context";

//Components
import Header from "./components/Header";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app ">
      <NotesProvider>
        <Header />
        <Notes />
        <Footer />
      </NotesProvider>
    </div>
  );
}

export default App;
