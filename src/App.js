import React from 'react'
import { useDispatch } from 'react-redux'
const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: 'GET_USER_START', payload: 1})
  }, [])
  return (
    <div>App</div>
  )
}

export default App