import React from 'react'



class Contact extends React.Component{
constructor(props){
super(props);
this.state={
    count:0
}
console.log("this is a constructor")
}
  componentDidMount(){
    console.log("this is did mount compo.")
  }
  componentDidUpdate(){
    console.log("this is did update compo.")
  }
  componentWillUnmount(){
    console.log("this is will UNmount compo.")
  }
render(){
    return(
<>
    <h1> This is a class component</h1>
    <h1>color is :{this.props.color}</h1>
    <h1>value of count is :{this.state.count}</h1>
    <button onClick={()=>this.setState({count:this.state.count+1})}>Incre</button>
    <button onClick={()=>this.setState({count:this.state.count-1})}>decre</button>
    
    
     </>

    )
}
}
export default Contact;