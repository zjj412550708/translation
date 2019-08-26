import React, { Component } from "react";
import axios from "axios";
import { Button, Input } from "antd";

class Trans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trans: ""
    };
    this.translations = this.translations.bind(this);
  }
  translations() {
    //将插入的值插入到"Input_word"中
    var word = document.getElementById("Input_word").value;
    axios.get("http://localhost:8080/trans/" + word).then(response => {
      console.log(response);
      this.setState({
        trans: response.data.Translation_word.replace(/\|/g, "\n")
      });
    });
  }
  render() {
    return (
      <div>
        <Input
          id="Input_word"
          style={{
            margin: "20px",
            width: "400px"
          }}
        />

        <Button size="large" onClick={this.translations}>
          翻译
        </Button>

        <Input.TextArea
          value={this.state.trans}
          style={{
            height: "120px"
          }}
        />
      </div>
    );
  }
}
export default Trans;
