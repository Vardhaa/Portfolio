import { ChevronRight } from "lucide-react";

const RESUME = {
  name: "VISHNU VARDHAN AVASARALA",
  contact: {
    phone: "+91 9100279932",
    email: "vardhanavasarala21@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishnu-avasarala-133b5836a",
    github: "https://github.com/Vardhaa",
    credly: "https://www.credly.com/users/vardha/badges#credly",
  },
  education: [
    {
      degree: "Bachelor of Engineering in Mechanical Engineering",
      institution: "Osmania University, India",
      dates: "Aug 2018 – June 2022",
    },
  ],
  skills: [
    { label: "Languages", items: ["Python", "SQL", "Shell Scripting"] },
    {
      label: "Platforms",
      items: ["MLflow", "CUDA", "Kubeflow", "Google Vertex AI", "Microsoft Azure ML Studio", "AWS SageMaker", "OpenShift AI"],
    },
    {
      label: "Libraries & Frameworks",
      items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "Transformers", "OpenCV", "JMeter", "FastAPI", "Flask"],
    },
    {
      label: "Databases & Data Stores",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "PgVector"],
    },
    {
      label: "Cloud & DevOps",
      items: ["AWS (Lambda, EC2, S3, RDS, Bedrock)", "Docker", "Kubernetes", "Jenkins", "CI/CD", "ArgoCD", "Terraform", "Azure DevOps"],
    },
    {
      label: "Dev & Collaboration Tools",
      items: ["Git", "GitHub", "Postman", "VS Code", "PyCharm", "Spyder", "Jupyter Notebook"],
    },
    {
      label: "Concepts & Methodologies",
      items: ["Data Structures & Algorithms", "Distributed Systems", "Microservices", "Machine Learning", "Neural Networks", "Agile/Scrum"],
    },
  ],
  experience: [
    {
      role: "DevOps and Platform Engineer",
      company: "Tata Consultancy Services",
      location: "Mumbai",
      dates: "Sept 2023 – Mar 2026",
      bullets: [
        "Architected end-to-end CI/CD pipelines using Jenkins, GitHub Actions and ArgoCD, automating build, test, code and analysis.",
        "Authored production-grade Dockerfiles for ML model containerization, leveraging optimized base images (python:3.9-slim, TensorFlow/PyTorch) and automated dependency management — ensuring 100% environment consistency across dev, staging and production.",
        "Packaged training model artifacts (.pl, .pth, .h5) with inference scripts into Docker containers, exposing model serving endpoints via FastAPI/Flask — reducing model deployment setup by 70% and enabling seamless portability in both cloud and on-prem environments.",
        "Implemented GitOps-based deployment workflows with ArgoCD across 3 environments (dev, staging, production), achieving 100% declarative infrastructure consistency and reducing rollback time from hours to under 5 minutes.",
        "Extended CI/CD and GitOps methodologies with MLOps, unifying the entire process for continuous training, continuous integration and continuous delivery.",
        "Operationalized ML model delivery with containerized packaging and canary/blue-green rollouts, supporting zero-downtime model upgrades with full versioning and auditability — reducing model rollback time by 70% across all three environments.",
      ],
    },
    {
      role: "Cloud Engineer",
      company: "Urban Rebox IT Pvt",
      location: "Hyderabad",
      dates: "July 2022 – Aug 2023",
      bullets: [
        "Architected and orchestrated scalable, multi-tenant cloud infra across Azure and AWS supporting complex hybrid environments with 99.9% uptime.",
        "Standardized infra delivery implementing IaC tools (Terraform, Bicep, ARM, AWS CDK), reducing manual provisioning time by 70% and ensuring auditable, reusable and version-controlled deployments via Git.",
        "Unified hybrid-cloud management for global workloads by integrating virtualized environments (VMware, Nutanix, Proxmox VE) with Azure Arc, achieving centralized governance and consistent policy enforcement.",
        "Strengthened organizational security by enforcing least privilege access through Azure AD (Entra ID) and AWS IAM, Privileged Identity Management, RBAC, and Azure Key Vault for secrets management.",
        "Spearheaded full-stack observability and SIEM strategies using AWS CloudWatch, Azure Monitor and Splunk; hardened cloud security posture leveraging Prisma Cloud for real-time CSPM.",
        "Engineered a multi-cloud cost optimization FinOps framework that reduced monthly spend by 60% using Savings Plans, Reserved Instances, Spot Instances, Auto Scaling, scheduled shutdown and tagging strategy.",
      ],
    },
  ],
  projects: [
    {
      name: "NLP Sentiment Analysis Pipeline",
      links: [{ label: "GitHub", url: "https://github.com/Vardhaa/mlops-gitops-openshift" }],
      bullets: [
        "Deployed and productionized a DistilBERT-based sentiment analysis model with a FastAPI inference layer achieving sub-100ms real-time prediction serving via containerized microservice architecture.",
        "Achieved zero-touch model delivery from code commit to live inference by building CI/CD triggers for automated model retraining in multi-environments.",
      ],
      tools: ["Python", "OpenShift", "Git", "ArgoCD", "GitHub Actions"],
    },
    {
      name: "Sentiment Analysis API — Dockerized ML Model",
      links: [{ label: "Docker Hub", url: "https://hub.docker.com/layers/vardhanv18/sentiment-api/dev-latest/images/sha256-8c586f81b0436a3eed4a1f0486958911c7aeb8ebaadf10e29541622198b257ea" }],
      bullets: [
        "Built and containerized a production-ready Sentiment Analysis API by packaging the trained NLP model with a REST inference endpoint into a lean 46.9MB Docker image.",
      ],
      tools: ["NLP", "Docker", "FastAPI/Flask", "Transformers"],
    },
  ],
  certifications: [
    { name: "Microsoft Certified: DevOps Engineer Expert", url: "https://learn.microsoft.com/api/credentials/share/en-us/VishnuVardhan-4193/D04EA6710B6F2E08?sharingId=C0A5755FB96DE71C" },
    { name: "Microsoft Certified: Azure AI Engineer Associate", url: "https://learn.microsoft.com/api/credentials/share/en-us/VishnuVardhan-4193/BF818DF2CA1E2D78?sharingId=C0A5755FB96DE71C" },
    { name: "Microsoft Certified: Azure Data Scientist Associate", url: "https://learn.microsoft.com/api/credentials/share/en-us/VishnuVardhan-4193/C85A6B26AE845D61?sharingId=C0A5755FB96DE71C" },
    { name: "Microsoft Certified: Azure Developer Associate", url: "https://learn.microsoft.com/api/credentials/share/en-us/VishnuVardhan-4193/C724B0328DF8EFE7?sharingId=C0A5755FB96DE71C" },
    { name: "GitHub Foundations", url: "https://learn.microsoft.com/api/credentials/share/en-us/VishnuVardhan-4193/4983FD6E25DB62C9?sharingId=C0A5755FB96DE71C" },
  ],
};

export default function ResumeViewer() {
  return (
    <div
      className="w-full border border-white/10 bg-[#10111a] font-mono overflow-auto"
      data-testid="container-resume-viewer"
      style={{ minHeight: "70vh" }}
    >
      <div className="max-w-4xl mx-auto px-8 py-10 text-sm leading-relaxed">

        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b border-white/10">
          <h1 className="text-2xl font-display font-bold tracking-widest text-white mb-3">
            {RESUME.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>{RESUME.contact.phone}</span>
            <span className="text-white/20">|</span>
            <a href={`mailto:${RESUME.contact.email}`} className="hover:text-primary transition-colors">{RESUME.contact.email}</a>
            <span className="text-white/20">|</span>
            <a href={RESUME.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <span className="text-white/20">|</span>
            <a href={RESUME.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <span className="text-white/20">|</span>
            <a href={RESUME.contact.credly} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Credly</a>
          </div>
        </div>

        {/* Education */}
        <Section title="EDUCATION">
          {RESUME.education.map((e, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <span className="text-white font-semibold">{e.degree}</span>
                <span className="text-muted-foreground">, {e.institution}</span>
              </div>
              <span className="text-primary text-xs whitespace-nowrap">{e.dates}</span>
            </div>
          ))}
        </Section>

        {/* Skills */}
        <Section title="TECHNICAL SKILLS">
          <div className="space-y-1.5">
            {RESUME.skills.map((s, i) => (
              <div key={i} className="flex flex-wrap gap-x-2">
                <span className="text-primary font-semibold whitespace-nowrap">{s.label}:</span>
                <span className="text-muted-foreground">{s.items.join(", ")}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title="PROFESSIONAL EXPERIENCE">
          <div className="space-y-6">
            {RESUME.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <span className="text-white font-semibold">{exp.role}</span>
                    <span className="text-muted-foreground"> | {exp.company}, {exp.location}</span>
                  </div>
                  <span className="text-primary text-xs whitespace-nowrap">{exp.dates}</span>
                </div>
                <ul className="space-y-1.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-muted-foreground">
                      <ChevronRight className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="PROJECTS">
          <div className="space-y-5">
            {RESUME.projects.map((p, i) => (
              <div key={i}>
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <span className="text-white font-semibold">{p.name}</span>
                  {p.links.map((l, j) => (
                    <a
                      key={j}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      [{l.label}]
                    </a>
                  ))}
                </div>
                <ul className="space-y-1 mb-2">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-muted-foreground">
                      <ChevronRight className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.map((t, j) => (
                    <span key={j} className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-0.5">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section title="CERTIFICATIONS">
          <div className="flex flex-wrap gap-2">
            {RESUME.certifications.map((c, i) =>
              c.url ? (
                <a
                  key={i}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-white/5 border border-white/10 text-white/80 px-3 py-1 hover:border-primary hover:text-primary transition-colors cursor-pointer"
                >
                  {c.name} ↗
                </a>
              ) : (
                <span key={i} className="text-xs bg-white/5 border border-white/10 text-white/80 px-3 py-1">
                  {c.name}
                </span>
              )
            )}
          </div>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-xs font-bold tracking-[0.2em] text-primary">{title}</h2>
        <div className="h-px flex-grow bg-primary/30" />
      </div>
      {children}
    </div>
  );
}
