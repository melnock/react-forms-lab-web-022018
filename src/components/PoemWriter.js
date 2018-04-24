import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false,
    };
  }

  handleChange =event=>{
    let lines = event.target.value.split("\n")
    let spaces = lines.map((line)=>(line.split(/\s/).filter(el=>(el != "")).length))

    if (lines && lines.length === 3 && spaces[0] == 5 && spaces[1] == 3 && spaces[2] == 5){
      this.setState({
        value: event.target.value,
        valid: true,
      })}
    else{
      this.setState({
        value: event.target.value,
        valid: false,
      })
    }

  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange}/>
        {this.state.valid ? null : <div id="poem-validation-error" style={{ color: "red"}}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
