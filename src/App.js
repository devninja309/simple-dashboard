import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="h-screen collabland-font">
        <div className="block h-full">
          <div className="h-full block">
            <div className="jss4"></div>
            <div className="bg-primary w-full text-white text-center py-1">
              Always verify the website address is https://collabland.la
            </div>
            <div className="nav-bar">
              <div className="nav-bar-logo">
                <img className="avatar" src="collabland.png" alt='avatar-img'></img>
              </div>
              <div className="nav-bar-name">
                <h1 className='first-name'>Session Expired</h1>
                <span className='second-name'>Please retry connection</span>
              </div>
            </div>
            <div className="button-click">
              <button className='main-button'>Try again?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
