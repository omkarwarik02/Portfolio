import Profile from './Profile.jsx'
import useSmoothScroll from './hooks/useSmoothScroll'


function App () {
  useSmoothScroll()

  return (
    <div>
      <Profile/>

    </div>
  )
}

export default App