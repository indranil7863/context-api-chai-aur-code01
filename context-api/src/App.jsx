
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
   <UserContextProvider>
    <h1>Discuss the concept of context API</h1>
    <p>first, created a seperate folder context there created a context namely UserContext
      then create a usercontext provider passes the value which actually handled by context
      then wrap the userContextProvider within which this context is required.
    </p>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
