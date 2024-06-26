import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import { AdminLoginPage, DashboardPage, HomePage, SearchPage, PlaygroundPage, AdminLogoutPage } from './pages'
import { AdminProtected } from './components';
import { AuthProvider } from './contexts/Auth';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/*' element={<Navigate to='/' />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/admin/login' element={<AdminLoginPage />} />
          <Route path='/admin/*' element={<AdminProtected redirectTo='/admin/login' children={
              <Routes>
                <Route path='/dashboard' element={<DashboardPage />} />
                <Route path='/playground' element={<PlaygroundPage />} /> 
                <Route path='/logout' element={<AdminLogoutPage />} />
              </Routes>
            } />
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
