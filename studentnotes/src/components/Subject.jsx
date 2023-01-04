import React from "react";
import { listOfCourses } from "./CoursesList";
import NavigationBar from "./NavigationBar";
import NavigationAboutMe from "./NavigationAboutMe";
import '../style/Subject.css';
import { useNavigate } from "react-router-dom";

const Subject = () => {
    var fullName = null;
    var field = null;
    var faculty = null;
    const navigate = useNavigate();
    window.addEventListener('load', onLoad);

    function onLoad() {
        var user = localStorage.getItem('user');
        if(!user) {
            navigate('/login');
        }

        var userJSON = JSON.parse(user);
        var url = "http://localhost:8000/users/" + userJSON["user"].email;
        
        var request = new XMLHttpRequest();
        request.open("GET", url, false); 
        request.setRequestHeader("x-access-token", userJSON["user"].token);
        request.send(null);
        var json = JSON.parse(request.responseText);
        fullName = json["surname"] + " " + json["name"];
        faculty = json["faculty"];
        field = json["field"];
    }

    const addSubject = () => {
      
    };

    const deleteSubject = () => {

    }

    const showAlphabetically = () => {

    }

    const showByDate = () => {

    }

        return (  
            <div className='CourseDex'> 
                <NavigationBar />
                <NavigationAboutMe />
                <div className="cursuri"> 
                    <h1 id="cursurilemele">Materiile mele</h1>
                    <button onClick={addSubject} id="addCurs">+</button>
                    <button onClick={deleteSubject} id="removeCurs">-</button>

                    <div className='listOfCourses'>
                        {listOfCourses.map(item => (
                            <a className="courseName">{item.title}</a>
                        ))}
                    </div> 
                </div>
            </div>
        )                   
}
export default Subject;