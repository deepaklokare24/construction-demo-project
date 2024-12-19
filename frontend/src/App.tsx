import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { client } from './lib/apollo';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Financials from './pages/Financials';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/financials" element={<Financials />} />
          </Routes>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
