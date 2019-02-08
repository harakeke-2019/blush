import React from "react"

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
render(){
  return(
    <div className="pageWrapperDashboard">
<div>
    <div className="smlogo">
        <img src="pokemon-logo.png" alt="pokemon" />
    </div>
</div>
<main>
    <div className="row">
        <div className="col1">
            <div className="userInfo">
                <p>Hello {name}</p>
            <div className="starSign+Birthday">
                <p>{starSign}</p>
                <h6>{Birthay}</h6>
            </div>
            </div>
            <p className="intro">Discover what your Pokemon is based on your starsign</p>
              <div className="dashboardbuttons">
                <div className="button">
                    <p>Taurus</p>
                      </div>
                    <div className="button">
                        <p>Capricon</p>
              </div>
      </div>
  </div>
  <div className="col2">
    <div className="stateChange">

    </div>
  </div>
</div>
</main>
</div>


  )

  }
}

export default Dashboard
