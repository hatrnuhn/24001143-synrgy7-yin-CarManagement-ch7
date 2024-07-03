import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import { AdminLoginPage, DashboardPage, HomePage, SearchPage, PlaygroundPage, AdminLogoutPage, CarAddPage, CarEditPage } from './pages'
import { AdminProtected } from './components';
import { AuthProvider } from './contexts/Auth';
import DashboardRouter from './components/DashboardRouter';
import { DashboardContextProvider } from './contexts/Dashboard';

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
            <DashboardContextProvider>
              <Routes>
                <Route path='/dashboard/*' element={<DashboardRouter children={
                    <Routes>
                        <Route path='/' element={<DashboardPage />} />
                        <Route path='/edit-car' element={<CarEditPage />} />
                        <Route path='/add-car' element={<CarAddPage />} />
                    </Routes>
                } />} />
                <Route path='/playground' element={<PlaygroundPage />} /> 
                <Route path='/logout' element={<AdminLogoutPage />} />
              </Routes>
            </DashboardContextProvider>
          } /> } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
