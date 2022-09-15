import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import StudentList from './components/StudentList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
          <Student/>
      <StudentList/>
      <Footer/>
    </div>
  );
}

export default App;