import { ApolloProvider} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Student from "./pages/Student";
import NavBar from "./components/NavBar";
import NotFound from './pages/NotFound';
import client from "./components/Apollo.config";
import EditeStudent from './pages/editeStudent';




function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/editeStudent/:id" element={<EditeStudent />}/>
          <Route path="*" element={<NotFound />} /> 
        </Routes>
       </Router>
    </ApolloProvider>
   
    </>
  );
}

export default App;
