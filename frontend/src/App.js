import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, About } from "./pages/index.ts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Landing />} />
        <Route path="/about" component={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
