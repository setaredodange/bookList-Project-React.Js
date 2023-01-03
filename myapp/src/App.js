import React, { Component } from 'react'
import Header from './components/Header/Header'
import AddForm  from './components/AddForm/AddForm'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <AddForm></AddForm>
      </div>
    )
  }
}


