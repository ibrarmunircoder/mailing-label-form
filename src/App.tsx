import { BrowserRouter } from "react-router-dom";
import { Routes } from "routes";
import { Toaster } from "react-hot-toast";
import "styles/fonts/gotham-book/gotham-book.css";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
