import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import Login from './screens/Login'
import Profile from './screens/Profile'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { auth } from './firebase'
import { login, logout, selectUser } from './features/counter/userSlice'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Switch>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/'>
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  )
}

export default App
