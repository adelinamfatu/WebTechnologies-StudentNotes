import React from 'react';
import '../style/NavigationAboutMe.css';

const NavigationAboutMe = () => {  
    return (
        <nav className='NavigationAboutMe'>
            <div className='aboutMe-list'>
                <a href='/profile' className='aboutMe-links'>Profil</a>
                <a href='/subjects' className='aboutMe-links'>Materii</a>
                <a href='/notes' className='aboutMe-links'>Notițe</a>
                <a href='/groups' className='aboutMe-links'>Grupuri</a>
            </div>
        </nav>
        )
}

export default NavigationAboutMe;
