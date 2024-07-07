import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import { AdminLoginPage, DashboardPage, HomePage, SearchPage, PlaygroundPage, AdminLogoutPage, CarAddPage, CarEditPage, UserLoginPage } from './pages'
import AdminProtected from './components/AdminProtected';
import DashboardRouter from './components/DashboardRouter';
import { DashboardContextProvider } from './contexts/Dashboard';
import AuthProvider from './contexts/Auth';
import RequireUserAuth from './components/RequireUserAuth';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/login' element={<UserLoginPage />} />

          <Route element={<RequireUserAuth redirectTo='/login' />}>
              <Route path='/test-user-auth' element={<h1>THIS HAS BEEN JUST A TEST OF OUR EMERGENCY PREPAREDNESS</h1>}/>
          </Route>          

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
                <Route path='*' element={<Navigate to='/dashboard' />} />
              </Routes>
            </DashboardContextProvider>
          } /> } />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
