import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Fragment } from "react";
import { publicRouter } from './routes/router';
import './App.css';

function App() {

  return (
      <Router>
        <Routes>
        {publicRouter.map((router, index) => {
          const Page = router.component;
          const Layout = router.layout || Fragment;
          return (
            <Route
              key={index}
              path={router.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        </Routes>
      </Router>
  );
}

export default App;
