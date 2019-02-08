import React from "react"

class Home extends React.Component{
  construct(props){
    super()
    this.state={}
  }
render(){
  return(
    <div className="pageWrapper">
      <div className="logoWrapper">
          <img src="pokemon-logo.png" alt="Logo" />
          <h3>Find your spirit-pokemon</h3>
      </div>
      <div className="buttonWrapper">
        <form>
            <input type="text" placeholder="  Full Name" /><br />
            <input type="text" placeholder="  Birthday" /><br />
            <input type="text" placeholder="  Location" /><br />
            <div className="enter">
                <a href="dashboard.html">enter</a>
            </div>
        </form>

      </div>

    </div>

  )
}

}


export default Home
