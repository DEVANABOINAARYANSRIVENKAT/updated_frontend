import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function StudentRds() {
    const navigate = useNavigate();
    const [studentrecords, setstudentrecords] = useState({ });
    const changeHandler = (e) => {
        setstudentrecords({ ...studentrecords, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/auth/StudentRecords`, studentrecords).then(res => { alert(res.data);navigate('/studentdash')  }).catch(err => alert(err.response.data));
    }
    return (
        <div>
            <div className='up'>
            <marquee width="100%" direction="right">
                <h2>Student Records</h2>
            </marquee>
            </div>
            <div className='homebtn'> <p><Link to='/home'><button>Return to Home</button></Link></p> </div>
        <div className='StudRecords'>
            
            <form className="srform" onSubmit={submitHandler}>
                
                <label htmlFor="name"><b>Name:</b>
                    <input type="text" placeholder='fullname' name='name' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>RollNo:</b> 
                    <input type="text" placeholder='208T1A0527' name='rollno' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Emailid:</b>
                    <input type="text" placeholder='example@gmail.com' name='emailid' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Course:</b>
                    <input type="text" placeholder='B.Tech/degree' name='course' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Year:</b>
                    <input type="text" placeholder='ex: 3rd year' name='year' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Branch:</b>
                    <input type="text" placeholder='ex:CSE' name='branch' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Gender:</b>
                    <input type="text" placeholder='male/female' name='gender' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Mobileno:</b>
                    <input type="text" placeholder='1234567890' name='mobileno' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <input className='Sdatabtn' type="submit" value="Submit Student Record" />
            </form>
            </div>
        </div>
    )
}


























// import React, { useState } from 'react';

// const ClassScheduleForm = ({ onAddClass }) => {
//   const [course, setCourse] = useState('');
//   const [time, setTime] = useState('');
//   const [instructor, setInstructor] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddClass({ course, time, instructor });
//     setCourse('');
//     setTime('');
//     setInstructor('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Class Schedule :</h2>
//       <label>
//         Course:
//         <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
//       </label>
//       <label>
//         Time:
//         <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
//       </label>
//       <label>
//         Instructor:
//         <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
//       </label>
//       <button type="submit">Add Class</button>
//     </form>
//   );
// };

// const ClassSchedule = ({ classData, index, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedCourse, setEditedCourse] = useState(classData.course);
//   const [editedTime, setEditedTime] = useState(classData.time);
//   const [editedInstructor, setEditedInstructor] = useState(classData.instructor);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     onEdit(index, { course: editedCourse, time: editedTime, instructor: editedInstructor });
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditedCourse(classData.course);
//     setEditedTime(classData.time);
//     setEditedInstructor(classData.instructor);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <>
//           <input value={editedCourse} onChange={(e) => setEditedCourse(e.target.value)} />
//           <input value={editedTime} onChange={(e) => setEditedTime(e.target.value)} />
//           <input value={editedInstructor} onChange={(e) => setEditedInstructor(e.target.value)} />
//           <button onClick={handleSave}>Save</button>
//           <button onClick={handleCancel}>Cancel</button>
//         </>
//       ) : (
//         <>
//           <p>Course: {classData.course}</p>
//           <p>Time: {classData.time}</p>
//           <p>Instructor: {classData.instructor}</p>
//           <button onClick={handleEdit}>Edit</button>
//           <button onClick={onDelete}>Delete</button>
//         </>
//       )}
//     </div>
//   );
// };

// const ClassScheduleManager = () => {
//   const [classSchedules, setClassSchedules] = useState([]);

//   const addClass = (classData) => {
//     setClassSchedules([...classSchedules, classData]);
//   };

//   const editClass = (index, editedClassData) => {
//     const updatedClassSchedules = [...classSchedules];
//     updatedClassSchedules[index] = editedClassData;
//     setClassSchedules(updatedClassSchedules);
//   };

//   const deleteClass = (index) => {
//     const updatedClassSchedules = [...classSchedules];
//     updatedClassSchedules.splice(index, 1);
//     setClassSchedules(updatedClassSchedules);
//   };

//   return (
//     <div>
//       <h1>Class Schedule Manager</h1>
//       <ClassScheduleForm onAddClass={addClass} />
//       <h2>Class Schedules :</h2>
//       {classSchedules.map((classData, index) => (
//         <ClassSchedule
//           key={index}
//           classData={classData}
//           index={index}
//           onDelete={() => deleteClass(index)}
//           onEdit={editClass}
//         />
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <ClassScheduleManager />
//     </div>
//   );
// };

// export default App;
