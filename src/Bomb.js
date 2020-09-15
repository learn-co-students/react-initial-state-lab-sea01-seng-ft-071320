// your Bomb code here!
import React from 'react'

class Bomb extends React.Component{
  constructor(props){
    super()

    this.state = {
      secondsLeft: props.initialCount
    }

  }



  render(){
    const text = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`



    return (
    <h1>{text}</h1>


    ) // end return 
  } // end render

} // end class

export default Bomb 