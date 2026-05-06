import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Briefcase, 
  Code, 
  Award, 
  GraduationCap, 
  ChevronRight,
  ExternalLink,
  Download,
  Globe,
  X,
  BadgeCheck
} from "lucide-react";
import { 
  SiDocker, 
  SiCredly,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiJenkins,
  SiArgo,
  SiTerraform,
  SiGit,
  SiPostman,
  SiPycharm,
  SiJupyter
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ResumeViewer from "@/components/ResumeViewer";

// Typewriter effect component
const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (index === texts.length) {
      setIndex(0);
      return;
    }

    if (subIndex === texts[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, Math.random() * 150));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="inline-block text-primary font-mono tracking-tight font-semibold">
      {texts[index]?.substring(0, subIndex)}
      <span className={`opacity-${blink ? "100" : "0"} transition-opacity duration-100`}>|</span>
    </span>
  );
};

const AzureLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="azA" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00BFFF"/>
        <stop offset="100%" stopColor="#0078D4"/>
      </linearGradient>
      <linearGradient id="azB" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#40D0FF"/>
        <stop offset="100%" stopColor="#00A2E8"/>
      </linearGradient>
    </defs>
    <polygon points="32,4 8,56 20,56 32,32 44,56 56,56" fill="url(#azA)"/>
    <polygon points="32,20 24,56 40,56" fill="url(#azB)" opacity="0.85"/>
    <polygon points="20,56 8,56 14,44" fill="#50E6FF" opacity="0.6"/>
    <polygon points="44,56 56,56 50,44" fill="#50E6FF" opacity="0.6"/>
  </svg>
);

const CERTS = [
  {
    name: "DevOps Engineer Expert",
    full: "Microsoft Certified: DevOps Engineer Expert",
    level: "Expert",
    issuer: "Microsoft",
    color: "from-[#0078d4] to-[#005a9e]",
    accent: "#0078d4",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/VishnuVardhan-4193/D04EA6710B6F2E08?sharingId=C0A5755FB96DE71C",
  },
  {
    name: "Azure AI Engineer Associate",
    full: "Microsoft Certified: Azure AI Engineer Associate",
    level: "Associate",
    issuer: "Microsoft",
    color: "from-[#50e6ff] to-[#0078d4]",
    accent: "#50e6ff",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/VishnuVardhan-4193/BF818DF2CA1E2D78?sharingId=C0A5755FB96DE71C",
  },
  {
    name: "Azure Data Scientist Associate",
    full: "Microsoft Certified: Azure Data Scientist Associate",
    level: "Associate",
    issuer: "Microsoft",
    color: "from-[#773adc] to-[#0078d4]",
    accent: "#773adc",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/VishnuVardhan-4193/C85A6B26AE845D61?sharingId=C0A5755FB96DE71C",
  },
  {
    name: "Azure Developer Associate",
    full: "Microsoft Certified: Azure Developer Associate",
    level: "Associate",
    issuer: "Microsoft",
    color: "from-[#00b4d8] to-[#0078d4]",
    accent: "#00b4d8",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/VishnuVardhan-4193/C724B0328DF8EFE7?sharingId=C0A5755FB96DE71C",
  },
  {
    name: "GitHub Foundations",
    full: "GitHub Foundations",
    level: "Foundations",
    issuer: "GitHub",
    color: "from-[#6e40c9] to-[#24292f]",
    accent: "#6e40c9",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/VishnuVardhan-4193/4983FD6E25DB62C9?sharingId=C0A5755FB96DE71C",
  },
];

// ── Contact Form (Formspree) ──────────────────────────────────────────────
// Replace YOUR_FORM_ID below with your actual Formspree form ID
// Get one free at https://formspree.io → New Form → copy the ID from the endpoint
const WEB3FORMS_KEY = "e77e5b2d-3c75-42c9-b1cd-11d0d118a28d";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, name: form.name, email: form.email, message: form.message, subject: `New message from ${form.name} via Portfolio` }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-primary/30 bg-primary/5 p-10 text-center">
        <BadgeCheck className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-display font-bold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground font-mono text-sm">Thanks for reaching out — I'll get back to you soon.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-xs font-mono text-primary underline">Send another</button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-muted-foreground mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Vishnu Vardhan"
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-mono text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-muted-foreground mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-mono text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-mono text-muted-foreground mb-1">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="Hi Vishnu, I'd love to connect about..."
          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-mono text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-red-400 text-xs font-mono">Something went wrong. Please email me directly at vardhanavasarala21@gmail.com</p>
      )}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSubmit}
          disabled={status === "sending"}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-mono text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          <Mail className="w-4 h-4" />
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        <a href="mailto:vardhanavasarala21@gmail.com" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
          or email directly →
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedCert, setSelectedCert] = useState<typeof CERTS[0] | null>(null);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "certifications", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { id: "hero", label: "00. /" },
    { id: "about", label: "01. About" },
    { id: "skills", label: "02. Skills" },
    { id: "experience", label: "03. Experience" },
    { id: "projects", label: "04. Projects" },
    { id: "certifications", label: "05. Certifications" },
    { id: "resume", label: "06. Resume" },
    { id: "contact", label: "07. Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary-foreground relative overflow-hidden">
      {/* Background glow effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-display font-bold tracking-tighter cursor-pointer" onClick={() => scrollTo('hero')}>
            VA<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-mono tracking-tight transition-colors duration-300 hover:text-primary ${
                  activeSection === link.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex font-mono rounded-none border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <a href="mailto:vardhanavasarala21@gmail.com" data-testid="link-nav-email">
              Connect
            </a>
          </Button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-32">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-start relative pt-20 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <p className="text-primary font-mono mb-4 tracking-tight">System Online. Welcome.</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              Hi, I'm <br className="md:hidden" />Vishnu Vardhan.
            </h1>
            <div className="text-2xl md:text-4xl font-display font-medium text-muted-foreground mb-6 h-12">
              <TypewriterText texts={[
                "DevOps Engineer",
                "Platform Engineer",
                "MLOps Engineer",
                "Cloud Architect"
              ]} />
            </div>
            <p className="max-w-2xl text-lg text-muted-foreground mb-10 leading-relaxed">
              I build high-impact, fault-tolerant infrastructure and automate ML pipelines. Delivering production-grade cloud systems with zero downtime and precision.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="rounded-none font-mono" onClick={() => scrollTo('projects')} data-testid="button-hero-work">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="rounded-none font-mono border-white/20 hover:border-primary hover:bg-primary/10" asChild>
                <a href="/resume.pdf" download="VishnuVardhan_Resume.pdf" data-testid="button-hero-resume">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6">
              {[
                { icon: Github, href: "https://github.com/Vardhaa", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/vishnu-avasarala-133b5836a", label: "LinkedIn" },
                { icon: SiDocker, href: "https://hub.docker.com/u/vardhanv18", label: "Docker Hub" },
                { icon: SiCredly, href: "https://www.credly.com/users/vardha/badges#credly", label: "Credly" },
                { icon: Globe, href: "https://learn.microsoft.com/en-us/users/vishnuvardhan-4193/transcript/deqg2ar5n5y9por", label: "Microsoft Learn" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="text-primary font-mono text-xl md:text-2xl mr-2">01.</span> About
              </h2>
              <div className="h-[1px] bg-white/10 flex-grow" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a DevOps and Platform Engineer specialized in bridging the gap between code and robust infrastructure. With experience spanning startups to enterprise giants like TCS, I've designed cloud architectures that handle massive scale and MLOps pipelines that deploy models with sub-100ms latency.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I don't just write automation scripts; I architect systems that are self-healing, secure by design, and optimized for both performance and cost. When I'm not configuring Kubernetes clusters, you can find me exploring the bleeding edge of AI deployment frameworks.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "2", label: "Enterprise Roles" },
                  { value: "5", label: "MS Certifications" },
                  { value: "100%", label: "Uptime Focus" }
                ].map((stat, i) => (
                  <Card key={i} className="bg-white/5 border-white/10 rounded-none hover:border-primary/50 transition-colors duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm font-mono text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="text-primary font-mono text-xl md:text-2xl mr-2">02.</span> Technical Arsenal
              </h2>
              <div className="h-[1px] bg-white/10 flex-grow" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cloud & DevOps",
                  icon: Terminal,
                  skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "ArgoCD", "Terraform", "Azure DevOps"]
                },
                {
                  title: "ML Platforms",
                  icon: Code,
                  skills: ["MLflow", "CUDA", "Google Vertex AI", "Azure ML Studio", "AWS SageMaker", "OpenShift AI"]
                },
                {
                  title: "Frameworks & Libs",
                  icon: Briefcase,
                  skills: ["FastAPI", "Flask", "PyTorch", "TensorFlow", "Transformers", "Scikit-learn", "Pandas"]
                },
                {
                  title: "Languages",
                  icon: Code,
                  skills: ["Python", "SQL", "Shell Scripting"]
                },
                {
                  title: "Databases",
                  icon: Code,
                  skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "PgVector"]
                },
                {
                  title: "Tools",
                  icon: Terminal,
                  skills: ["Git", "GitHub Actions", "Postman", "VSCode"]
                }
              ].map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 rounded-none h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <category.icon className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, j) => (
                          <Badge key={j} variant="secondary" className="bg-white/10 hover:bg-primary/20 text-white font-mono font-normal rounded-none">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="text-primary font-mono text-xl md:text-2xl mr-2">03.</span> Experience
              </h2>
              <div className="h-[1px] bg-white/10 flex-grow" />
            </div>

            <div className="space-y-12">
              {[
                {
                  company: "Tata Consultancy Services",
                  location: "Mumbai",
                  role: "DevOps and Platform Engineer",
                  date: "Sept 2023 – Mar 2026",
                  bullets: [
                    "Architected end-to-end CI/CD pipelines using Jenkins, GitHub Actions, and ArgoCD",
                    "Authored production-grade Dockerfiles for ML model containerization with 100% environment consistency",
                    "Packaged training model artifacts (.pl, .pth, .h5) with FastAPI/Flask inference endpoints — reduced deployment setup by 70%",
                    "Implemented GitOps-based deployment with ArgoCD across 3 environments (dev/staging/prod) — rollback time under 5 minutes",
                    "Extended CI/CD with MLOps for continuous training, integration, and delivery",
                    "Canary/blue-green rollouts with zero-downtime model upgrades — reduced model rollback time by 70%"
                  ]
                },
                {
                  company: "Urban Rebox IT Pvt",
                  location: "Hyderabad",
                  role: "Cloud Engineer",
                  date: "July 2022 – Aug 2023",
                  bullets: [
                    "Architected scalable multi-tenant cloud infra across Azure and AWS — 99.9% uptime",
                    "Standardized IaC with Terraform, Bicep, ARM, AWS CDK — reduced provisioning time by 70%",
                    "Unified hybrid-cloud management: VMware, Nutanix, Proxmox VE + Azure Arc",
                    "Enforced least privilege with Azure AD, AWS IAM, PIM, RBAC; secrets via Azure Key Vault",
                    "Full-stack observability using AWS CloudWatch, Azure Monitor, Splunk, Prisma Cloud CSPM",
                    "Multi-cloud FinOps framework — reduced monthly spend by 60%"
                  ]
                }
              ].map((exp, i) => (
                <div key={i} className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-[8.5px] top-0 bottom-0 w-[1px] bg-white/10" />
                  
                  <div className="md:grid md:grid-cols-[1fr_3fr] gap-8 items-start">
                    <div className="mb-4 md:mb-0 md:text-right relative">
                      <div className="hidden md:block absolute right-[-41px] top-2 w-3 h-3 rounded-full bg-primary" />
                      <div className="md:hidden absolute left-[-31px] top-2 w-3 h-3 rounded-full bg-primary" />
                      <h3 className="text-xl font-display font-bold text-white">{exp.role}</h3>
                      <div className="text-primary font-mono mt-1">{exp.company}</div>
                      <div className="text-sm text-muted-foreground mt-1">{exp.date}</div>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start text-muted-foreground leading-relaxed">
                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mr-2 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="text-primary font-mono text-xl md:text-2xl mr-2">04.</span> Featured Projects
              </h2>
              <div className="h-[1px] bg-white/10 flex-grow" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "NLP Sentiment Analysis Pipeline (MLOps)",
                  description: "Deployed and productionized a DistilBERT-based sentiment analysis model with a FastAPI inference layer achieving sub-100ms real-time prediction via containerized microservice architecture. Zero-touch model delivery from code commit to live inference with CI/CD triggers for automated model retraining across multi-environments.",
                  tech: ["Python", "OpenShift", "Git", "ArgoCD", "GitHub Actions"],
                  links: [
                    { label: "GitHub", url: "https://github.com/Vardhaa/mlops-gitops-openshift", icon: Github }
                  ]
                },
                {
                  title: "Sentiment Analysis API — Dockerized ML Model",
                  description: "Built and containerized a production-ready Sentiment Analysis API, packaging the trained NLP model with a REST inference endpoint into a lean 46.9MB Docker image.",
                  tech: ["NLP", "Docker", "FastAPI", "Transformers"],
                  links: [
                    { label: "Docker Hub", url: "https://hub.docker.com/layers/vardhanv18/sentiment-api/dev-latest/images/sha256-8c586f81b0436a3eed4a1f0486958911c7aeb8ebaadf10e29541622198b257ea", icon: SiDocker }
                  ]
                }
              ].map((project, i) => (
                <Card key={i} className="bg-white/5 border-white/10 rounded-none hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <Terminal className="w-10 h-10 text-primary" />
                      <div className="flex gap-4">
                        {project.links.map((link, j) => (
                          <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={link.label}>
                            <link.icon className="w-6 h-6" />
                          </a>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t, j) => (
                        <span key={j} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CERTIFICATIONS & EDUCATION SECTION */}
        <section id="certifications" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Certifications */}
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="text-primary font-mono text-xl md:text-2xl mr-2">05.</span> Certifications
              </h2>
              <div className="h-[1px] bg-white/10 flex-grow" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {CERTS.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <button
                    data-testid={`card-cert-${i}`}
                    onClick={() => setSelectedCert(cert)}
                    className="w-full text-left group relative overflow-hidden border border-white/10 bg-white/5 hover:border-primary/40 transition-all duration-300 hover:bg-white/8 p-6 flex flex-col gap-4"
                    style={{ boxShadow: `0 0 0 0 ${cert.accent}` }}
                  >
                    {/* Top gradient strip */}
                    <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${cert.color}`} />

                    {/* Badge icon */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                      {cert.issuer === "GitHub" ? (
                        <Github className="w-6 h-6 text-white" />
                      ) : (
                        <AzureLogo className="w-7 h-7" />
                      )}
                    </div>

                    {/* Level pill */}
                    <span
                      className="self-start text-xs font-mono px-2 py-0.5 border"
                      style={{ color: cert.accent, borderColor: cert.accent + "55", backgroundColor: cert.accent + "15" }}
                    >
                      {cert.level}
                    </span>

                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground font-mono mb-1">{cert.issuer}</div>
                      <h3 className="font-display font-semibold text-white leading-snug group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                      <BadgeCheck className="w-4 h-4" />
                      <span>Preview Credential</span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div id="education">
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-display font-bold">Education</h2>
              </div>
              <Card className="bg-white/5 border-white/10 rounded-none">
                <CardContent className="p-8">
                  <h3 className="text-xl font-display font-bold mb-2">Bachelor of Engineering in Mechanical Engineering</h3>
                  <div className="text-primary font-mono mb-4">Osmania University, India</div>
                  <div className="text-sm text-muted-foreground font-mono">Aug 2018 – June 2022</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* CREDENTIAL PREVIEW MODAL */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              key="cert-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
              onClick={() => setSelectedCert(null)}
              data-testid="modal-cert-overlay"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 24 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 24 }}
                transition={{ type: "spring", damping: 26, stiffness: 320 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md bg-[hsl(var(--background))] border border-white/10 overflow-hidden"
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${selectedCert.color}`} />

                {/* Close row */}
                <div className="flex justify-end px-5 pt-4">
                  <button
                    onClick={() => setSelectedCert(null)}
                    data-testid="button-cert-modal-close"
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Badge + title */}
                <div className="flex flex-col items-center text-center px-8 pb-8 gap-5">
                  {/* Large badge */}
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${selectedCert.color} flex items-center justify-center shadow-2xl`}
                    style={{ boxShadow: `0 0 40px ${selectedCert.accent}55` }}
                  >
                    {selectedCert.issuer === "GitHub" ? (
                      <Github className="w-12 h-12 text-white" />
                    ) : (
                      <AzureLogo className="w-14 h-14" />
                    )}
                  </div>

                  {/* Level + verified */}
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-mono px-2 py-0.5 border"
                      style={{ color: selectedCert.accent, borderColor: selectedCert.accent + "66", backgroundColor: selectedCert.accent + "18" }}
                    >
                      {selectedCert.level}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-emerald-400">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>

                  {/* Cert name */}
                  <div>
                    <div className="text-xs text-muted-foreground font-mono mb-1">{selectedCert.issuer}</div>
                    <h3 className="text-xl font-display font-bold text-white leading-snug">{selectedCert.full}</h3>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/10" />

                  {/* Info rows */}
                  <div className="w-full space-y-2 text-sm font-mono">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Credential holder</span>
                      <span className="text-white">Vishnu Vardhan Avasarala</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Issuing authority</span>
                      <span className="text-white">{selectedCert.issuer === "GitHub" ? "GitHub, Inc." : "Microsoft"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="text-emerald-400">Active</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/10" />

                  {/* CTA buttons */}
                  <div className="w-full flex flex-col gap-3">
                    <a
                      href={selectedCert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="link-cert-verify"
                      className={`w-full flex items-center justify-center gap-2 py-3 font-mono text-sm font-semibold text-white bg-gradient-to-r ${selectedCert.color} hover:opacity-90 transition-opacity`}
                    >
                      <BadgeCheck className="w-4 h-4" />
                      Verify on {selectedCert.issuer === "GitHub" ? "GitHub" : "Microsoft Learn"}
                    </a>
                    <a
                      href="https://learn.microsoft.com/en-us/users/vishnuvardhan-4193/transcript/deqg2ar5n5y9por"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="link-full-transcript"
                      className="w-full flex items-center justify-center gap-2 py-2.5 font-mono text-xs text-muted-foreground border border-white/10 hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      View full Microsoft transcript
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* RESUME SECTION */}
        <section id="resume" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="text-primary font-mono text-xl md:text-2xl mr-2">06.</span> Resume
              </h2>
              <div className="h-[1px] bg-white/10 flex-grow" />
              <a
                href="/resume.pdf"
                download="VishnuVardhan_Resume.pdf"
                data-testid="button-resume-download"
                className="flex items-center gap-2 text-sm font-mono border border-white/20 px-4 py-2 hover:border-primary hover:text-primary transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>

            <ResumeViewer />
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                <span className="text-primary font-mono text-xl md:text-2xl mr-2">07.</span> Get In Touch
              </h2>
              <div className="h-[1px] bg-white/10 flex-grow" />
            </div>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              I'm currently open to new opportunities. Whether you have a question, a project, or just want to say hi — drop me a message and I'll get back to you!
            </p>
            <ContactForm />
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center">
        <div className="flex justify-center gap-6 mb-6">
          {[
            { icon: Github, href: "https://github.com/Vardhaa" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/vishnu-avasarala-133b5836a" },
            { icon: SiDocker, href: "https://hub.docker.com/u/vardhanv18" },
            { icon: SiCredly, href: "https://www.credly.com/users/vardha/badges#credly" }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="font-mono text-sm text-muted-foreground">
          Built by <span className="text-primary">Vishnu Vardhan</span>
        </p>
      </footer>
    </div>
  );
}
