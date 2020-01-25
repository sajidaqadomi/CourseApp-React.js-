import React from 'react';

import './CourseForm.css';

const CourseForm = (props) => {

  return (
    <div className="CourseForm ">
        <form onSubmit={props.addCourse} className="row no-gutters mb-2">
            <input type="text" value={props.currrent}  onChange={props.updateCourse} required className="col-9"/>
            <input type="submit" value="Add Course" className="btn btn-success col ml-2"/>
            
        </form>
      
    </div>
  );
 }


export default CourseForm;
