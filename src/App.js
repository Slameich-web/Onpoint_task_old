import React from "react";
import Carousel from './carousel/carousel'
import Dots from './carousel/firstDot'
import FirstPage from "./components/firstPage/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage"

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      axis: 'y'
    }
    this.setAxis = axis => {
      return () => this.setState({'axis': axis})
    }
  }
  render () {
    return (
      <div style={{height: '768px'}}>
        <Carousel axis={this.state.axis} widgets={[Dots]} className="custom-class">
          <FirstPage/>
          <SecondPage/>
          <ThirdPage/>
        </Carousel>
      </div>
    )
  }
}
export default App