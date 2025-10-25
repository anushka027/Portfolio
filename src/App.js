import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Server,
  Database,
  Globe,
  Eye,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = Object.keys(sectionRefs.current);
      const currentSection = sections.find((section) => {
        const element = sectionRefs.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Headliner – Title Generation System",
      description:
        "Headliner is an end-to-end NLP-powered application that generates concise, meaningful titles from raw text",
      technologies: [
        "React",
        "Python",
        "Transformers",
        "BERT",
        "T5-small",
        "NLTK",
        "Pandas",
        "numpy",
        "scikit-learn",
      ],
      image: "/images/headliner.jpeg",
      githubLink: "https://github.com/anushka027/title-generation-system",
      readme: `# 📰 Headliner – Title Generation System
**Headliner** is an end-to-end NLP-powered application that generates concise, meaningful titles from raw text. It leverages the strength of a fine-tuned \`T5-small\` model for generation and \`BERT\` for intelligent validation and ranking — all wrapped in a clean, local full-stack app using Flask (Python) and React (JavaScript).
---
## ✨ Highlights
- 🔁 **Hybrid NLP Workflow**: Combines T5 for generation and BERT for quality scoring.
- 💬 **Contextual Understanding**: Captures the main theme of the input text accurately.
- 🖥️ **Full Stack Interface**: React frontend and Flask backend for a smooth local experience.
- 💡 **Customizable & Extendable**: Modular design with separate training, validation, and inference modules.
- 🧪 **Runs Fully Offline**: No external APIs or cloud dependencies required.
  
---
## ⚙️ Tech Stack
| Layer     | Technology                     |
|-----------|--------------------------------|
| Frontend  | React.js (JavaScript)          |
| Backend   | Flask (Python)                 |
| Models    | T5-small (generation)          |
|           | BERT-base-uncased (validation) |
| Libraries | HuggingFace Transformers, Flask-CORS, Scikit-learn, NumPy |
---
## 🔧 Installation & Setup
### 📥 Clone the Repository
\`\`\`bash
git clone https://github.com/anushka027/title-generation-system.git
cd title-generation-system/title-generation-system
\`\`\`
### 🧠 Backend Setup
\`\`\`bash
cd backend
python -m venv venv
venv\\Scripts\\activate       # For Windows
# OR
source venv/bin/activate    # For macOS/Linux
pip install -r requirements.txt
python app.py
\`\`\`
### 💻 Frontend Setup
\`\`\`bash
cd ../frontend
npm install
npm start
\`\`\`
### 🚀 How to Use
- Start both the backend and frontend servers.
- Open your browser at: http://localhost:5000/generate-title.
- Paste your article or content into the input box.
- Click "Generate Title".
- See the best AI-generated titles ranked by BERT.
---
### 👩‍💻 Author
**Anushka Singh** <br>
Software Developer | NLP Enthusiast
`,
    },
    {
      id: 2,
      title: "Peer-to-Peer Chat Application",
      description:
        "A console-based, LAN-supported Peer-to-Peer Chat Application developed in Core Java",
      technologies: ["Java", "Socket Programming", "Multithreading", "TCP/IP"],
      image: "/images/peer.jpeg",
      githubLink: "https://github.com/anushka027/PeerToPeerApp",
      readme: `# Peer-to-Peer Chat Application

This is a console-based, LAN-supported Peer-to-Peer Chat Application developed in Core Java. It uses TCP/IP socket programming, multithreading, concurrency control, and exception handling to enable real-time communication between users on the same local network. Jansi libraries have been incorporated to enhance the console appearance.

## Features
- **Peer-to-Peer Communication**: Allows direct communication between users over a LAN.
- **Console-Based Interface**: Lightweight and straightforward console interface with enhanced visuals using Jansi.
- **Broadcast and Private Messaging**: Both broadcast and private messaging options are available.
- **Multithreading**: Ensures smooth operation with multiple clients by handling each user in a separate thread.
- **Concurrency Control**: Manages simultaneous messaging efficiently without conflicts.
- **Exception Handling**: Provides stability with robust error-handling for network and input/output exceptions.

## Technologies Used
- **Core Java**: Developed using core Java functionalities.
- **TCP/IP Socket Programming**: Manages network communication over TCP.
- **Multithreading**: Enables concurrent handling of multiple users.
- **Jansi Library**: Adds colors and styling to the console output.

## Setup and Installation
1. **Clone the Repository**  
   \`\`\`bash
   git clone https://github.com/anushka027/PeerToPeerApp.git
   cd PeerToPeerApp
   \`\`\`
2. **Add Jansi Library**  
   Ensure you have the Jansi library added to your project. You can download it from [Jansi GitHub](https://github.com/fusesource/jansi) or use it through Maven.
3. **Configure Network Settings**  
   Adjust the subnet mask in the code if required to match your LAN's network configuration. 
4. **Compile and Run the Server**  
   Start the server on your machine:
   \`\`\`bash
   javac Peer.java
   java Peer
   \`\`\`
5. **Start the Client**  
   The Client will start automatically as soon as the app runs. Repeat on different machines connected to the same LAN, do not open multiple instances on the same machine for testing as it will connect one IP Address only once.

## How to Use
1. **Start the Server**: Run \`Peer.java\` to start the chat server.
2. **Connect with other Clients**: Select from the list of available clients to start communication or choose broadcast messaging.
3. **Chat**: Type messages in the console to communicate. The Jansi library enhances the appearance of console messages for improved readability.

## Future Improvements
- Add a GUI for a more user-friendly experience.
- Enhance security with message encryption.
- Implement file-sharing capabilities.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
`,
    },
    {
      id: 3,
      title: "Whispr.ai",
      description:
        "Built a local audio transcription app using OpenAI's Whisper model",
      technologies: [
        "Large Language Models (LLM)",
        "Open AI",
        "Python",
        "Natural Language Processing (NLP)",
        "Gradio",
      ],
      image: "/images/whisper.png",
      liveLink: "https://huggingface.co/spaces/anushka027/Whispr.ai",
      githubLink: "https://github.com/anushka027/Whispr.ai",
      readme: `# 🎙️ Whisper Speech-to-Text Converter

A user-friendly web application that converts speech to text using OpenAI's Whisper model via a Gradio interface. Supports both English and Hindi.

## 🔧 Features

- 🎤 Record live audio from microphone
- 📁 Upload \`.mp3\` or \`.wav\` files
- 🌐 Supports English and Hindi
- 🧠 Uses OpenAI Whisper-small model for accurate transcriptions
- 🚀 Runs on GPU (CUDA) if available
- 🧹 Automatic cleanup of temporary files
- 🎛️ Simple, modern UI powered by Gradio

---

## ⚙️ Tech Stack

- Python 3.8+
- [HuggingFace Transformers](https://huggingface.co/docs/transformers)
- OpenAI Whisper (\`openai/whisper-small\`)
- Gradio for web interface
- PyDub & FFmpeg for audio processing

---

## 🚀 Getting Started

### 1. Clone the repo

\`\`\`bash
git clone https://github.com/anushka027/whisper-stt-app.git
cd whisper-stt-app
\`\`\`

### 2. Create virtual environment and install dependencies

\`\`\`bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate
pip install -r requirements.txt
\`\`\`

### 3. Install FFmpeg

- **Ubuntu/Debian**: \`sudo apt install ffmpeg\`
- **Mac**: \`brew install ffmpeg\`
- **Windows**: [Download FFmpeg](https://ffmpeg.org/download.html), add to PATH.

### 4. Run the app

\`\`\`bash
python app.py
\`\`\`

Then open the provided \`http://localhost:7860\` link in your browser.

---

## 📦 Example Usage

- Select language: English or Hindi
- Record voice or upload an MP3 file
- Click "Transcribe"
- Read or copy the generated text

---

## 📂 Project Structure

\`\`\`
├── app.py              # Main application
├── README.md           # Project description
├── requirements.txt    # Python dependencies
\`\`\`

---

## 📝 Requirements

Make sure your \`requirements.txt\` includes:

\`\`\`txt
torch
transformers
gradio
pydub
\`\`\`

---

## 📄 License

MIT License. Feel free to use and modify.

---

## 👩‍💻 Author

**Anushka Singh**  
📧 anushka027singh@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/anu-shka-singh)  
🐙 [GitHub](https://github.com/anushka027)

---

> For best transcription quality, ensure clear audio and minimal background noise.`,
    },
    {
      id: 4,
      title: "Jagatmitra Foundation",
      description:
        "A modern, responsive website for Jagatmitra Foundation, a non-profit organization dedicated to empowering communities through sustainable development initiatives.",
      technologies: ["Node.js", "Tailwind CSS", "MongoDB", "Cloudinary"],
      image: "/images/jagatmitra.png",
      liveLink: "https://www.jagatmitrafoundation.com/",
      readme: `# Jagatmitra Foundation Website

A modern, responsive website for Jagatmitra Foundation, a non-profit organization dedicated to empowering communities through sustainable development initiatives.

## 🌟 Overview

Jagatmitra Foundation is a Section 8 non-profit organization established in 2020, focused on creating meaningful impact in the lives of the underprivileged and environmental conservation. This website serves as the digital presence for the foundation's mission, programs, and community engagement.

## ✨ Key Features

### 🎨 Modern Design
- Clean, professional interface with gradient backgrounds
- Responsive design optimized for all devices
- Animated components with smooth transitions
- Interactive elements and hover effects
    
### 🚀 Technical Features
- Built with Next.js 14 and React 18
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Optimized performance and SEO
- Form validation and file handling

## 🛠 Technology Stack

- *Framework*: Next.js 14 (App Router)
- *Language*: TypeScript
- *Styling*: Tailwind CSS
- *Animations*: Framer Motion
- *Icons*: Lucide React, React Icons
- *State Management*: React Hooks
- *Image Optimization*: Next.js Image Component`,
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      technologies: ["React.js", "HTML", "CSS", "XML", "Tailwind CSS"],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      name: "Backend Development",
      technologies: ["Python", "Java"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      name: "Database Management",
      technologies: ["MongoDB", "MySQL", "Google Firebase"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      name: "Mobile Development",
      technologies: ["Android"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      name: "Tools & Frameworks",
      technologies: ["Git", "Vercel", "Netlify", "Render"],
      icon: <Code className="w-6 h-6" />,
    },
  ];

  const experience = [
    {
      title: "Software Development Internship",
      company: "MetaSquare Technologies",
      period: "August 2024 - October 2024",
      description:
        "Strengthened backend development skills and gained hands-on experience in real-world projects",
    },
    {
      title: "Software Development Intern",
      company: "Jagatmitra Foundation",
      period: "August 2025 -September 2025",
      description:
        "Developed and deployed scalable and responsive website with latest technologies and interactive design",
    },
  ];

  const certificates = [
    {
      name: "Android Development",
      issuer: "Internshala",
      file: "/certificates/android.pdf",
      image: "/images/android.png",
    },
    {
      name: "Full Stack Java Development",
      issuer: "iNeuron",
      file: "/certificates/iNeuron.pdf",
      image: "/images/iNeuron.png",
    },
    {
      name: "Software Development Internship",
      issuer: "MetaSquare Technologies Pvt. Ltd",
      file: "/certificates/Internship.pdf",
      image: "/images/Internship.png",
    },
    {
      name: "Software Development Internship",
      issuer: "Jagatmitra Foundation",
      file: "/certificates/jagatmitra.pdf",
      image: "/images/jagatmitra_intern.png",
    },
    {
      name: "Co-authoring Certification by Reasons and Laughter",
      issuer: "Fanatixx",
      file: "/certificates/Co-Author.jpg",
      image: "/images/Co-Author.jpg",
    },
  ];

  const NavBar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            &lt;Anushka Portfolio/&gt;
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              "home",
              "about",
              "experience",
              "skills",
              "projects",
              "certificates",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                  activeSection === section
                    ? "text-purple-400"
                    : "text-gray-300"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const ProfilePhoto = ({ scrollY = 0 }) => (
    <div
      className="relative flex items-center justify-center"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      {/* Background circle - pushed back */}
      <div
        className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-2 animate-pulse overflow-hidden"
        style={{
          transform: "translateZ(-50px)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Inner shadow circle */}
        <div className="w-full h-full rounded-full bg-black/50 overflow-hidden"></div>
      </div>

      {/* Profile image - positioned to sit inside circle and emerge from top */}
      <img
        src="/profile.png"
        alt="Profile"
        className="absolute w-72 h-72 rounded-full object-cover shadow-2xl"
        style={{
          transform: `translateY(-20px) translateZ(100px) rotateY(${
            scrollY * 0.1
          }deg)`,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
          boxShadow: "0 40px 80px rgba(0, 0, 0, 0.8)",
          zIndex: 20,
        }}
      />

      {/* Decorative elements with 3D positioning */}
      <div
        className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-20"
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d",
        }}
      ></div>
      <div
        className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce opacity-30"
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
      ></div>
    </div>
  );
  const CodeBackground = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 2px, transparent 2px),
          radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 1px, transparent 1px),
          linear-gradient(45deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(-45deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
        `,
            backgroundSize: "60px 60px, 40px 40px, 20px 20px, 20px 20px",
          }}
        ></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        {/* Triangles */}
        <div
          className="absolute top-20 left-20 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-purple-400 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-pink-400 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Squares */}
        <div
          className="absolute bottom-32 left-1/4 w-4 h-4 bg-blue-400 rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rotate-45 animate-spin"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        ></div>

        {/* Circles */}
        <div
          className="absolute top-1/2 left-10 w-6 h-6 border-2 border-pink-400 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-4 h-4 border-2 border-blue-400 rounded-full animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>

        {/* Hexagons */}
        <div
          className="absolute top-60 left-1/2 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 transform rotate-12 animate-bounce"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            animationDelay: "0.5s",
          }}
        ></div>
      </div>

      {/* Wave patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q250,100 500,200 T1000,200 L1000,0 L0,0 Z"
            fill="url(#wave1)"
            className="animate-pulse"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 100 0; 0 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M0,800 Q250,900 500,800 T1000,800 L1000,1000 L0,1000 Z"
            fill="url(#wave2)"
            className="animate-pulse"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -100 0; 0 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Matrix-like falling dots */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-1/6 w-1 h-1 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-0 left-2/6 w-1 h-1 bg-pink-400 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-0 left-3/6 w-1 h-1 bg-blue-400 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-0 left-4/6 w-1 h-1 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
        ></div>
        <div
          className="absolute top-0 left-5/6 w-1 h-1 bg-pink-400 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "3.2s" }}
        ></div>
      </div>
    </div>
  );

  const LaptopMockup = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
      let animationId;
      let startTime = Date.now();

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        setRotation((elapsed * 0.02) % 360);
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }, []);

    return (
      <div className="relative w-full max-w-[700px] mx-auto my-8 md:my-12 px-4 hidden lg:block">
        <div
          className="relative"
          style={{
            transform: `perspective(2000px) rotateX(15deg) rotateY(${
              rotation * 0.3
            }deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Laptop Screen */}
          <div
            className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-t-lg shadow-2xl border-4 md:border-8 border-gray-700 border-b-0"
            style={{
              transformStyle: "preserve-3d",
              boxShadow:
                "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Camera */}
            <div className="absolute top-1 md:top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full shadow-inner"></div>

            {/* Screen Content */}
            <div className="absolute inset-1 md:inset-2 bg-gradient-to-br from-gray-950 to-black rounded-sm overflow-hidden">
              {/* Browser Header */}
              <div className="w-full h-6 md:h-8 bg-gradient-to-r from-gray-800 to-gray-700 flex items-center px-2 md:px-3 space-x-1 md:space-x-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full shadow-lg"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full shadow-lg"></div>
                <div className="flex-1 mx-2 md:mx-4 h-4 md:h-5 bg-gray-900 rounded-md hidden sm:flex items-center px-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full mr-1 md:mr-2"></div>
                  <span className="text-gray-400 text-[10px] md:text-xs">
                    localhost:3000
                  </span>
                </div>
              </div>

              {/* Code Editor */}
              <div className="bg-gray-950 p-2 md:p-4 h-[calc(100%-1.5rem)] md:h-[calc(100%-2rem)] overflow-hidden">
                <pre className="text-green-400 text-[8px] sm:text-[10px] md:text-xs leading-relaxed font-mono">
                  {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello!");
        
        // Creating projects
        Developer dev = new Developer();
        dev.createPortfolio();
        dev.buildFeatures();
        dev.deployToProduction();
    }
}`}
                </pre>
              </div>
            </div>

            {/* Screen Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-t-lg pointer-events-none"></div>
          </div>

          {/* Laptop Base */}
          <div
            className="relative w-full h-[50px] md:h-[70px]"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(-85deg)",
              transformOrigin: "top center",
            }}
          >
            {/* Keyboard Area */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 rounded-b-xl shadow-2xl border-4 md:border-8 border-t-0 border-gray-700">
              {/* Trackpad */}
              <div className="absolute top-1 md:top-2 left-1/2 transform -translate-x-1/2 w-20 h-10 md:w-32 md:h-16 bg-gray-800 rounded-lg border border-gray-700 shadow-inner"></div>
            </div>
          </div>

          {/* Overall Shadow */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-4 bg-purple-500/20 blur-2xl rounded-full"></div>
        </div>
      </div>
    );
  };

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-sm font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-green-500/30 transform hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <Eye className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg text-sm font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-gray-500/30 transform hover:scale-105 border border-gray-600"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-3">README</h3>
            <pre className="text-gray-300 text-sm whitespace-pre-wrap overflow-x-auto">
              {project.readme}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <CodeBackground />
      <NavBar />

      {/* Home Section */}
      <section
        ref={(el) => (sectionRefs.current.home = el)}
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight pb-2">
                Anushka Singh
              </h1>
              <h2 className="text-3xl text-gray-300">Software Developer</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Crafting beautiful, functional, and user-friendly applications
                with modern technologies and best practices.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </button>
                <a
                  href="/ANUSHKA_SINGH_RESUME.pdf"
                  download
                  className="flex items-center gap-2 px-8 py-3 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <ProfilePhoto />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => (sectionRefs.current.about = el)}
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <LaptopMockup />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Anushka Singh, a passionate Software Developer and AIML
                enthusiast. With hands-on projects, I have internship experience
                as a Java Developer. I have strong foundation with Java, Basic
                Python, LLMs and OpenAI for building applications and exploring
                ways of problem solving.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I am adaptable to work in different environments by excelling in
                management and problem solving skills. Open for cross technology
                work, learning and connecting.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-400 mb-2">
                    Frontend
                  </h3>
                  <p className="text-sm text-gray-400">
                    React, XML, HTML, CSS, Tailwind CSS
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-400 mb-2">
                    Backend
                  </h3>
                  <p className="text-sm text-gray-400">Java, Python</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={(el) => (sectionRefs.current.experience = el)}
        className="py-20 bg-gray-900/20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="bg-gray-800/50 p-6 rounded-lg flex-1 transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
                {index < experience.length - 1 && (
                  <div className="absolute left-2 top-8 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={(el) => (sectionRefs.current.skills = el)}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-purple-400">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={(el) => (sectionRefs.current.projects = el)}
        className="py-20 bg-gray-900/20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-800/50 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-xs font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full text-xs font-medium hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-gray-500/25"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3 h-3" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section
        ref={(el) => (sectionRefs.current.certificates = el)}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-purple-400 mb-4">{cert.issuer}</p>
                  <a
                    href={cert.file}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 text-xs font-medium shadow-lg hover:shadow-purple-500/25"
                  >
                    <Download className="w-3 h-3" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => (sectionRefs.current.contact = el)}
        className="py-20 bg-gray-900/20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">
                  Let's work together
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-2xl">
                  I'm always interested in hearing about new opportunities and
                  projects. Whether you have a question or just want to say hi,
                  I'll do my best to get back to you!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
                <div className="flex flex-col items-center gap-3 bg-gray-800/50 p-6 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span className="text-sm text-gray-300">
                    anushka027singh@gmail.com
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3 bg-gray-800/50 p-6 rounded-lg">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span className="text-sm text-gray-300">+91-7906399901</span>
                </div>
                <div className="flex flex-col items-center gap-3 bg-gray-800/50 p-6 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-sm text-gray-300">
                    Lucknow, Uttar Pradesh
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <a
                  href="http://linkedin.com/in/anu-shka-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/anushka027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:anushka027sinigh@gmail.com"
                  className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Anushka Portfolio. All rights reserved. Built with React and ❤️
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
