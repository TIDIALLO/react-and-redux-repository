import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImge from "./images/cortana.png";
import SiriImage from "./images/siri.png"
import 'bulma/css/bulma.css'

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Alexa was created by amazon and helps you get started"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                image={CortanaImge}
                                description="Cortana was made by microsoft. Who knows what it does?"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Siri" 
                                handle="@siri12" 
                                image={SiriImage}
                                description="Siri was made by Apple and is being phased out"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
//