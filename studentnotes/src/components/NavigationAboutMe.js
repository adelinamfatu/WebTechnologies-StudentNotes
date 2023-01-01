import React from 'react';
import '../style/NavigationAboutMe.css';

class NavigationAboutMe extends React.Component {
    render() {
        return (
            <nav className='NavigationAboutMe'>
                <div className='aboutMe-list'>
                <a href='/profile' className='aboutMe-links'> Profil</a>
                <a href='/notes' className='aboutMe-links'> Notite</a>
                <a href='/groups' className='aboutMe-links'> Grupuri</a>
                </div>
            </nav>
        )
    }
}

export default NavigationAboutMe;
