import "./App.css";

function App() {
  return (
    <div className="profile">

      {/* Navigation */}
      <header className="navbar">
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div>
          <p className="small-text">HELLO, I'M</p>

          <h2>Ray Avila</h2>

          <h3>IT Officer & Technology Enthusiast</h3>

          <p className="intro">
            I work with computer systems, networks, CCTV, POS systems,
            hardware, software, and technical operations.
          </p>

          <div className="buttons">
            <a href="#contact" className="button">
              Contact Me
            </a>

            <a href="#projects" className="button secondary">
              View Projects
            </a>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>

        <h2>Who I Am</h2>

        <p>
          I'm a Computer Engineering Technology graduate currently working
          as an IT Officer. My work involves maintaining IT systems,
          supporting network infrastructure, troubleshooting hardware and
          software, and managing technical equipment.
        </p>

        <p>
          I also enjoy building IoT projects using ESP32 and Arduino,
          creating web dashboards, and learning new technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-label">SKILLS</p>

        <h2>Technical Skills</h2>

        <div className="skills">
          <div className="skill">
            <h3>IT Support</h3>
            <p>Hardware, software, troubleshooting and maintenance</p>
          </div>

          <div className="skill">
            <h3>Networking</h3>
            <p>LAN, Wi-Fi, Omada, routers, switches and access points</p>
          </div>

          <div className="skill">
            <h3>CCTV & POS</h3>
            <p>CCTV installation, configuration and POS support</p>
          </div>

          <div className="skill">
            <h3>Programming</h3>
            <p>JavaScript, Python, C, C++, C# and React</p>
          </div>

          <div className="skill">
            <h3>IoT</h3>
            <p>ESP32, Arduino, sensors, RFID and automation</p>
          </div>

          <div className="skill">
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React and databases</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-label">PROJECTS</p>

        <h2>Things I've Built</h2>

        <div className="projects">

          <div className="project">
            <h3>Smart Greenhouse</h3>

            <p>
              ESP32-based greenhouse monitoring system using temperature,
              humidity, soil moisture and light sensors.
            </p>

            <span>ESP32 · IoT · PHP · MySQL</span>
          </div>

          <div className="project">
            <h3>RFID Attendance System</h3>

            <p>
              RFID-based attendance system using ESP32 with employee
              time-in, time-out and attendance records.
            </p>

            <span>ESP32 · RFID · PHP · MySQL</span>
          </div>

          <div className="project">
            <h3>IoT Automation Projects</h3>

            <p>
              Various ESP32 and Arduino projects involving sensors,
              relays, automation and web-based monitoring.
            </p>

            <span>Arduino · ESP32 · IoT</span>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <p className="section-label">CONTACT</p>

        <h2>Let's Connect</h2>

        <p>
          Feel free to reach out if you'd like to connect or discuss
          technology and projects.
        </p>

        <div className="contact-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=avilaryrafael8@gmail.com&su=Hello%20Ray"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>

          <a
            href="https://github.com/RyuTempest"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ryuukarma1270"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Ray Avila. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;