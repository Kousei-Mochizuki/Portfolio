import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-paragraph">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <p className="about-paragraph">
              Currently a student pursuing a degree in Game Design & Development, I specialize in creating interactive experiences using 
              Unity and Unreal Engine. I enjoy tackling complex problems and turning creative ideas into playable realities.
            </p>
            <p className="about-paragraph">
              When I'm not coding or designing, I'm either playing the latest indie games for inspiration or participating
              in game jams to challenge my skills and collaborate with other developers.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">Game Jams</div>
              </div>
              <div className="stat">
                <div className="stat-number">2</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="about-image-container">
            <div className="about-image-frame">
              <img 
                src="https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Game Developer" 
                className="about-image" 
              />
              <div className="about-image-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;