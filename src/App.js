import React,{Component} from 'react';
import CourseForm from './components/courseform/CourseForm';
import CouseList from './components/courselist/CourseList'

import './App.css';

class App extends Component {
  state={
    courses:[
      {name:"HTML"},
      {name:"CSS"},
      {name:"JQuery"}
    ],
    currrent:""
  }

  updateCourse=(e)=>{
    
    this.setState({
      currrent:e.target.value
    })
    
  }

  addCourse=(e)=>{
    e.preventDefault();
    
    let {courses,currrent}=this.state;
    
    courses.push({name:currrent});
    this.setState({
      courses,
      currrent:""
    })
  }

  deletCourse=(index)=>{
  
   let {courses}=this.state;
  //  let filtercourse=courses.filter(course=>{
  //   return course.name !== courses[index].name
  //  });
  courses.splice(index,1)
   this.setState({
     courses
   })


  }
  editCourse=(index,item)=>{
    let {courses}=this.state;
    let course=courses[index];
    course.name=item;

    this.setState({
      courses
      
    })
    

  }
 render(){
   let {courses}=this.state;
   let courseList=courses.map((course,index)=>{
     return (
       <div key={index} >
         <CouseList courseName={course.name} index={index} deletCourse={this.deletCourse} editCourse={this.editCourse} />
       </div>
     ) 
   })
  return (
    <div className="App">
      <div className="container App-container">
        <h1 className="App-header">Add Courses</h1>
      <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} currrent={this.state.currrent}/>
      <div className="couseList">
      {courseList}
      </div>
     

      </div>
    </div>
  );
 }
}

export default App;
