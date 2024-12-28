import React from 'react';
import'./About.css'

const About= () => {
  return (
    <section className="about-us-page">
      <h1>About Us</h1>
      <div className="about-section mission">
        <h2>Our Mission</h2>
        <p>
          At Purrfect Adoption, our mission is to provide loving homes for cats in need
          while educating the community about responsible pet ownership.
        </p>
      </div>
      <div className="about-section history">
        <h2>Our History</h2>
        <p>
         I ,Farhan Labib created it in my dreams.
        </p>
      </div>
      <div className="about-section team">
        <h2>Meet Our Team</h2>
       
        <div className="team-members">
          <div className="team-member">
            <img src="src\assets\img1.webp" alt="Team Member 1" className="team-image" />
            <p className="team-name">Dr. Ken kaneki</p>
          </div>
          <div className="team-member">
            <img src="src\assets\download (11).jpeg" alt="Team Member 2" className="team-image" />
            <p className="team-name">Mr.MonkeyD luffy</p>
          </div>
          <div className="team-member">
            <img src="src\assets\images.webp" alt="Team Member 3" className="team-image" />
            <p className="team-name">Dr. uzumaki narotu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;