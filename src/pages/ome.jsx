import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import profilePic from '/src/assets/photo.jpeg'; // Replace with the path to your photo




const App = () => {
  return (
    <div className="homepage">
{/* Hero Section */}
<header className="hero">
  <div className="hero-content">
  <br/>
  <br/>
    <h1>Welcome to the collaborators and visitors.</h1>
    
    <div className="photo-container">
    <img src={profilePic} alt="My Profile" className="profile-pic" />
  </div>
    
    {/* Blog Section */}
    <div className="blog-section">
      <p><b>My experience of programming </b>  <br/> Programming, to me, is not just a way to communicate with devices but a medium to express my thoughts and ideas. The ability to create something from nothing has always fascinated me, driving my passion for innovation and problem-solving. Over the years, I’ve worked on diverse projects, learning new technologies and tools that have helped me grow as a developer and as a person. Programming is more than a profession—it's a way of life. I constantly seek new challenges to enhance my skills, expand my knowledge, and make a meaningful impact on the world through technology. </p>

    </div>
    
    <p>Introducing my creative den.</p>

  </div>

  <div className="swipe-container">
  <button className="swipe-button">Swipe Down</button>
</div>




</header>


      {/* Features Section */}
      <section className="features">
        <h2><b>Current Projects</b></h2> 
        <button className="btn-primary">

<NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
  Visit Profile
</NavLink>
</button>
        <div className="feature-cards">
          <div className="card">
            <h3><b>rethink robotics -Baxter</b></h3>
            <p>Baxter is an advanced robot developed for seamless human-robot collaboration. As part of my research, I am replicating the complex tasks demonstrated by the Maniskill developers while innovatively implementing my own <h3>"Bidirectional Penalty-Based Machine Learning Algorithm"</h3> to enhance task efficiency and performance. </p>
          </div>
          <div className="card">
            <h3><b>replicAvatar.ai</b></h3>
            <p>Introducing a licensed personalized language model built to replicate human knowledge and serve as a virtual extension of my expertise. This model acts as a digital replica of my thought process, enabling recruiters to interact and evaluate my skillset as if they were conversing with me directly. Soon, I’ll be updating my website with this innovative <h3>"replicAvatar"</h3> offering an interactive experience that mirrors my communication and problem-solving abilities, providing a unique way to assess my professional capabilities.</p>
          </div>
          <div className="card">
            <h3><b>Bidirectional Penalty based RL Algorithm</b></h3>
            <p>This research introduces a "Bidirectional Penalty-Based Approach" for reinforcement learning, designed to enhance autonomous scientific labs within the U.S. Department of Energy. By integrating a penalty-based reward function, the approach improves existing algorithms like PPO, RLPD, Diffusion Policy and Soft Actor Critic boosting performance and success rates.</p>
          </div>
        </div>
      </section>



    </div>
  );
};

export default App;
