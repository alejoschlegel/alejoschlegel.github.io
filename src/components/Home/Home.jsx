import "./Home.css";

export default function Home() {
  return (
    <div className='home'>
        <div className="home_top">
            <h4 className="text_muted">ALEJO SCHLEGEL</h4>
            <h1>Full stack developer</h1>
            <p className='text_muted'>
            I am a junior software developer passionate about designing and coding software for businesses and consumers alike. 
            </p>
            <p className='text_muted'>
            <a href="/#">View projects</a> or <a href="/#">Read about me</a>.
            </p>
        </div>
        <div className="home_bottom">
            <h1>Lets work together</h1>
            <div className="home_footer">
                <div>
                    <h4>Contact information —</h4>
                    <p className="text_muted">
                    Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.
                    </p>
                    <p>
                    <span className="text_muted">E: </span>
                    <a href="mailto:alejofschlegel@gmail.com">alejofschlegel@gmail.com</a>
                    </p>
                    <p>
                    <span className="text_muted">P: </span>
                    <span className="select_all">+54-9-1122614077</span>
                    </p>
                </div>
                <div>
                    <h4>Latest projects —</h4>
                    <a href="https://github.com/alejoschlegel/frontend-junior-code-challenge-1">CSV editor</a>
                    <a href="/#">Admin Dashboard</a>
                    <a href="https://github.com/alejoschlegel/weather-app">Weather App</a>
                    <a href="https://github.com/ezmohorcic/PF-Project-Moon">Moon protocol</a>
                </div>
                <div>
                    <h4>Follow me on —</h4>
                    <a href="https://github.com/alejoschlegel">GitHub</a>
                    <a href="/#">LinkedIn</a>
                </div>
            </div>
        </div>
    </div>
  );
}