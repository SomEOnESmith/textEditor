import React, { Component } from "react";
import { black } from "ansi-colors";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class TextBox extends Component {
  state = {
    color: "black",
    bold: false,
    italic: false,
    underline: false
  };

  changeColor = color => {
    this.setState({
      color: color
    });
  };

  addstyle = style => {
    const newStyle = !this.state[`${style}`];
    this.setState({
      [style]: newStyle
    });
  };

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];
    let appliedStyles = {
      color: this.state.color,
      fontWeight: this.state.bold ? "bold" : "",
      fontStyle: this.state.italic ? "italic" : "",
      textDecorationLine: this.state.underline ? "underline" : ""
    };
    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => this.addstyle(style)}
          className={this.state[style] ? "btn-primary" : "btn-danger"}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.changeColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={appliedStyles} />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}
export default TextBox;
