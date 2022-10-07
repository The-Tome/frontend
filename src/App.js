import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './react-web/Header';

function App() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <Header />
      <Outlet context={[navigate]} />
    </div>
  );
}

export default App;
