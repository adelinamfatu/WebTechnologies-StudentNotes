import NavigationBar from "./NavigationBar";
import NavigationAboutMe from "./NavigationAboutMe";
import '../style/Notes.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Notes = () => {
    var fullName = null;
    var field = null;
    var faculty = null;
    const navigate = useNavigate();

    useEffect(() => {
        var user = localStorage.getItem('user');
        if(!user) {
            navigate('/login');
        }
        else {
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
    });

    const addNote = () => {
        navigate('/addnote');
    };

    const deleteNote = () => {

    }

    const showAlphabetically = () => {

    }

    const showByDate = () => {

    }

        return (  
            <div className='Notes'> 
                <NavigationBar />
                <NavigationAboutMe />
                <div className="allNotes"> 
                    <h1 id="notitelemele">Notițele mele</h1>
                    <button onClick={addNote} id="addCurs">+</button>
                    <button onClick={deleteNote} id="removeCurs">-</button>
                    <div id='namedatabtn'>
                    <text>Filtrare după: </text>
                        <button onClick={showAlphabetically} id="namealph">Nume</button>
                        <button onClick={showByDate} id="date">Dată</button>
                    </div>
 
                </div>
            </div>
        )                   
}
export default Notes;