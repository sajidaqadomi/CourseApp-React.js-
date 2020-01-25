import React,{Component} from 'react';

import './CourseList.css';

class CourseList extends Component {
    state={
        iseddit:false
    }
    renderCourse=()=>{
       return(
            <React.Fragment>
            <div className="row mb-1">
                <div className='col-6'>
                <p> {this.props.courseName} </p> 
                </div>
                <div className='col-3'>
                    
                    <button type="button" className="btn btn-secondary w-100 "  onClick={()=>this.toggleState()}>Edit Course</button>
                </div>
                <div className='col-3'>
                    
                    <button type="button" className="btn btn-danger w-100" onClick={()=>this.props.deletCourse(this.props.index)}>Delet Course</button>
                </div>
            </div>
          
            </React.Fragment>
           
        )
        
}
updateCourseItem=(e)=>{
    e.preventDefault();
    this.props.editCourse(this.props.index,this.input.value);
    this.toggleState();
}
renderUpdateForm=()=>{
    return(
    <React.Fragment>
        <form onSubmit={this.updateCourseItem} className="row no-gutters mb-1"> 
        
            <input type="text" defaultValue={this.props.courseName} ref={(v)=>{this.input=v}} className='col-9'/>
            <input type="submit" value="Update Course" className="btn btn-success col ml-2" />
            
        </form>
   
   </React.Fragment>
    )
    
}
toggleState=()=>{
    let isEdit=this.state.iseddit
    this.setState({
        iseddit:!isEdit
    })
}

 render(){
  return (
    
      <React.Fragment>
          {this.state.iseddit?this.renderUpdateForm():this.renderCourse()}
      </React.Fragment>
  
  );
 }
}

export default CourseList;
