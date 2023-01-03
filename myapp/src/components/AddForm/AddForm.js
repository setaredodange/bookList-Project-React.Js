import React, { Component } from 'react'
import Book from  "../Book/Book"

export default class AddForm extends Component {

    constructor(){
     super()
     this.state = {
        books : [1],

        title : '',
        author :'',
        year : '',
         
     }
     this.titleHandler= this.titleHandler.bind(this)
     this.authorHandler= this.authorHandler.bind(this)
     this.yearHandler= this.yearHandler.bind(this)
     this.submitHandler = this.submitHandler.bind(this)

    }

  submitHandler(event){
    event.preventDefault()

    }


    titleHandler(event){
        // console.log(event.target.value);
        this.setState({
            title : event.target.value
        })
    }
    authorHandler(event){
        // console.log(event.target.value);
        this.setState({
            author : event.target.value
        })
    }

   yearHandler(event){
    // console.log(event.target.value);
        this.setState({
            year : event.target.value
        })
    }


     
  render() {
    return (
     <>

     <form  onSubmit={this.submitHandler} >

        <div>
         <label for="title" >Title</label>
         <input type="text" id="title"  value={this.state.title} 
         onChange={this.titleHandler}/>
        </div>

        <div>
         <label for="author" >Author</label>
         <input type="text" id="author"  value={this.state.author}
         onChange={this.authorHandler}/>
        </div>

        <div>
         <label for="year" >Year</label>
         <input type="text" id="year" value={this.state.year}
         onChange={this.yearHandler} />
        </div>
        <input type="submit" value="Add Book"/>
     
     </form>

     <table>
        <thead>
            <tr>
                <td>Title</td>
                <td>Author</td>
                <td>Year</td>
            </tr>
        </thead>
        <tbody>
            {this.state.books.map(book => (
                <Book/>

            ))}

        </tbody>
     </table>
     </>
    )
  }
}
