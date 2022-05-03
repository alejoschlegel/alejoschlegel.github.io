import { useState } from 'react';
import "./Nav.css";

export default function Nav() {
  const [ menuDisplay, setMenuDisplay ] = useState(false);
  return (
    <div className='nav'>
      <div className="navbar">
        <div className="navbar_left">
          <img src="/icon_black.svg" alt="icon"/>
          <div>
            <h3>Alejo Schlegel</h3>
            <h6>software developer</h6>
          </div>
        </div>
        <div className="navbar_right" onClick={() => {setMenuDisplay(!menuDisplay)}}>
          <span className="material-icons-sharp">menu</span>
        </div>
      </div>

      <div className={menuDisplay? "menu_on" : "menu_off"}>
        <span className="material-icons-sharp" onClick={() => {setMenuDisplay(!menuDisplay)}}>close</span>
        <p className='text_muted'>MENU</p>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About me</a>
        <a href="/https://github.com/alejoschlegel?tab=repositories">Projects</a>
        <a href="/Alejo_Schlegel_resume.pdf" target="_blank" title="Resume">Resume</a>
      </div>
    </div>
  );
}