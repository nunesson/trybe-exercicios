import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.click1 = this.click1.bind(this); // fazer a nossa função ser ligada ao this
    this.state = {
      numeroDeCliques: 0
    }
  }

  click1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  render() {
    console.log(this);
    return (
      <div>
        <button onClick={this.click1}>{this.state.numeroDeCliques}</button> {/* botão chamando função */}
      </div>
    )
  }
}
