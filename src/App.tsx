import { motion } from "motion/react";
import { Github, Instagram, Linkedin, Mail, MessageCircle, ExternalLink, Palette, Video, Layout, Send } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tighter text-gradient"
      >
        ALGHIFARI
      </motion.div>
      <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-gray-400">
        {["About", "Skills", "Portfolio", "Services", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
            {item}
          </a>
        ))}
      </div>
      <motion.a 
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all neon-glow-purple"
      >
        Hire Me
      </motion.a>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h2 className="text-primary font-mono tracking-widest mb-4 uppercase text-sm">Welcome to my creative space</h2>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
          Abdurrohman Fathin <br />
          <span className="text-gradient">Alghifari</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
          UI/UX Designer & Multimedia Graphic Designer. <br />
          <span className="text-white/80">Solving complex problems through intuitive and aesthetic digital experiences.</span>
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-dark font-bold rounded-xl hover:bg-primary hover:text-white transition-all w-full md:w-auto"
          >
            View Portfolio
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass text-white font-bold rounded-xl border border-white/10 hover:border-secondary/50 transition-all w-full md:w-auto"
          >
            Let's Talk
          </motion.a>
        </div>
      </motion.div>

    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group max-w-[280px] mx-auto md:mx-0"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
          <img 
            src="/profile.jpg" 
            alt="Abdurrohman Fathin Alghifari" 
            className="relative rounded-2xl w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 tracking-tight">About <span className="text-primary">Me</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a passionate designer with a deep focus on creating meaningful digital products. With a background in both UI/UX and Multimedia, I bridge the gap between functionality and visual storytelling.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            My mindset is simple: Design is not just how it looks, but how it works and feels. I strive to solve user problems while maintaining a high standard of aesthetic excellence.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-bold mb-2">Experience</h4>
              <p className="text-gray-500 text-sm">3+ Years in Design Industry</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Projects</h4>
              <p className="text-gray-500 text-sm">50+ Completed Works</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: <Layout className="text-primary" />,
      skills: [
        { name: "Figma", level: 95 },
        { name: "Wireframing", level: 90 },
        { name: "Prototyping", level: 85 },
      ]
    },
    {
      title: "Graphic Design",
      icon: <Palette className="text-secondary" />,
      skills: [
        { name: "Photoshop", level: 90 },
        { name: "Illustrator", level: 85 },
        { name: "Branding", level: 80 },
      ]
    },
    {
      title: "Multimedia",
      icon: <Video className="text-purple-400" />,
      skills: [
        { name: "Video Editing", level: 85 },
        { name: "Motion Graphics", level: 75 },
        { name: "3D Modeling", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical <span className="text-secondary">Skills</span></h2>
          <p className="text-gray-500">My specialized toolkit for bringing ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${idx === 0 ? 'bg-primary' : idx === 1 ? 'bg-secondary' : 'bg-purple-400'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      category: "UI/UX Design",
      image: "/p-1.png",
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Cyberpunk Computer",
      category: "Multimedia / 3D",
      image: "/p-2.png",
      color: "bg-purple-500/20 text-purple-400"
    },
    {
      title: "Isometric Studio",
      category: "Multimedia / 3D",
      image: "/p-3.png",
      color: "bg-green-500/20 text-green-400"
    },
    {
      title: "Brand Identity Set",
      category: "Graphic Design",
      image: "/p-4.png",
      color: "bg-cyan-500/20 text-cyan-400"
    },
    {
      title: "Geometric Digital Art",
      category: "Graphic Design",
      image: "/p-5.png",
      color: "bg-red-500/20 text-red-400"
    },
    {
      title: "3D Stylized Donut",
      category: "Graphic Design / 3D",
      image: "/p-6.jpg",
      color: "bg-yellow-500/20 text-yellow-400"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-gray-500">A selection of my best work across various disciplines.</p>
        </div>
        <div className="hidden md:block">
          <button className="text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2">
            View All Projects <ExternalLink size={16} />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative rounded-2xl overflow-hidden glass"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-md w-fit mb-3 ${project.color}`}>
                {project.category}
              </span>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <button className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors">
                View Details <ExternalLink size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Creating user-centric interfaces that are intuitive, accessible, and visually stunning for web and mobile apps.",
      icon: <Layout className="text-primary" size={32} />
    },
    {
      title: "Branding & Graphic Design",
      desc: "Building strong visual identities through logo design, typography, and marketing materials that resonate with audiences.",
      icon: <Palette className="text-secondary" size={32} />
    },
    {
      title: "Multimedia Content",
      desc: "Producing high-quality video edits, motion graphics, and 3D visuals to tell compelling stories and engage users.",
      icon: <Video className="text-purple-400" size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">My <span className="text-gradient">Services</span></h2>
          <p className="text-gray-500">How I can help you achieve your goals through design.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl glass border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Let's <span className="text-primary">Connect</span></h2>
          <p className="text-gray-400 text-lg mb-10">
            Have a project in mind or just want to say hi? Feel free to reach out through any of these platforms.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:fathin.trmg2025@idn.ac.id" className="flex items-center gap-4 group">
              <div className="p-4 glass rounded-2xl group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Email Me</p>
                <p className="text-lg font-medium">fathin.trmg2025@idn.ac.id</p>
              </div>
            </a>
            
            <a href="https://wa.me/6285545182377" className="flex items-center gap-4 group">
              <div className="p-4 glass rounded-2xl group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="text-green-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">WhatsApp</p>
                <p className="text-lg font-medium">+62 855-4518-2377</p>
              </div>
            </a>
          </div>

          <div className="flex gap-4 mt-12">
            {[
              { icon: <Instagram size={20} />, link: "#" },
              { icon: <Linkedin size={20} />, link: "#" },
              { icon: <Github size={20} />, link: "#" }
            ].map((social, idx) => (
              <a key={idx} href={social.link} className="p-4 glass rounded-xl hover:text-primary hover:border-primary/50 transition-all">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Your Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/80 transition-all flex justify-center items-center gap-2 neon-glow-purple">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center">
      <div className="text-gradient font-bold text-2xl mb-4 tracking-tighter">ALGHIFARI</div>
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Abdurrohman Fathin Alghifari. All rights reserved.
      </p>
    </footer>
  );
};

const UniverseBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    // Stars
    interface Star { x: number; y: number; size: number; speed: number; opacity: number; twinkleSpeed: number; twinklePhase: number; color: string; }
    const stars: Star[] = [];
    const starColors = ['#ffffff', '#c8d6ff', '#ffd2a1', '#a4c8ff', '#ffe4c4', '#d4b8ff'];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2.5 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    // Shooting stars
    interface ShootingStar { x: number; y: number; length: number; speed: number; opacity: number; angle: number; active: boolean; trail: {x: number; y: number; opacity: number}[]; }
    const shootingStars: ShootingStar[] = [];

    function spawnShootingStar() {
      shootingStars.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.4,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 6,
        opacity: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        active: true,
        trail: [],
      });
    }

    let frame = 0;

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      frame++;

      // Draw nebula glow spots
      const nebulaSpots = [
        { x: w * 0.2, y: h * 0.3, r: 300, color: 'rgba(139, 92, 246, 0.04)' },
        { x: w * 0.8, y: h * 0.6, r: 350, color: 'rgba(59, 130, 246, 0.03)' },
        { x: w * 0.5, y: h * 0.8, r: 250, color: 'rgba(168, 85, 247, 0.03)' },
      ];
      for (const spot of nebulaSpots) {
        const grad = ctx!.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, spot.r);
        grad.addColorStop(0, spot.color);
        grad.addColorStop(1, 'transparent');
        ctx!.fillStyle = grad;
        ctx!.fillRect(0, 0, w, h);
      }

      // Draw and update stars
      for (const star of stars) {
        star.twinklePhase += star.twinkleSpeed;
        star.opacity = 0.3 + Math.sin(star.twinklePhase) * 0.7;
        star.y += star.speed;
        if (star.y > h) { star.y = 0; star.x = Math.random() * w; }

        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx!.fillStyle = star.color;
        ctx!.globalAlpha = Math.max(0, Math.min(1, star.opacity));
        ctx!.fill();

        // Glow for bigger stars
        if (star.size > 1.5) {
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          const glowGrad = ctx!.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
          glowGrad.addColorStop(0, `rgba(200, 220, 255, ${star.opacity * 0.3})`);
          glowGrad.addColorStop(1, 'rgba(200, 220, 255, 0)');
          ctx!.fillStyle = glowGrad;
          ctx!.globalAlpha = 0.5;
          ctx!.fill();
        }
      }
      ctx!.globalAlpha = 1;

      // Shooting stars
      if (frame % 180 === 0 || (Math.random() < 0.003)) {
        spawnShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.012;
        ss.trail.push({ x: ss.x, y: ss.y, opacity: ss.opacity });
        if (ss.trail.length > 20) ss.trail.shift();

        // Draw trail
        for (let t = 0; t < ss.trail.length; t++) {
          const point = ss.trail[t];
          const trailOpacity = (t / ss.trail.length) * ss.opacity;
          ctx!.beginPath();
          ctx!.arc(point.x, point.y, 1.5 * (t / ss.trail.length), 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(255, 255, 255, ${Math.max(0, trailOpacity)})`;
          ctx!.fill();
        }

        // Head glow
        ctx!.beginPath();
        ctx!.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${Math.max(0, ss.opacity)})`;
        ctx!.fill();

        if (ss.opacity <= 0 || ss.x > w + 100 || ss.y > h + 100) {
          shootingStars.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0a0a0a]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Nebula color orbs */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[180px]"
      />
    </div>
  );
};

export default function PortfolioApp() {
  return (
    <div className="text-white font-sans selection:bg-primary selection:text-white relative">
      <UniverseBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
