import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";

function App() {
  return (
    <BrowserRouter basename="/Consumindo-api-do-github">
      <Router />
    </BrowserRouter>
  );
}

export default App;
