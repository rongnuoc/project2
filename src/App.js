import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
          <Sidebar />
          <div className="others">other pages</div>
      </div>
    </div>
  );
}

export default App;