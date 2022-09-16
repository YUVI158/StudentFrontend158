import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar'
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar/>
      <Container>
      <Student/>
      <StudentList/>
        <Routes>
      <Route path="student" element={<Student/>}/>
      <Route path="student/:studentId" element={<Student />}/>
      <Route path="listStudents" element={<StudentList/>}/>
      </Routes>
      </Container>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;