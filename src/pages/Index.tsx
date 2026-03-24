import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Server, Database, Cloud, Cpu, Terminal, Github } from "lucide-react";
import mundoFacil  from "@/assets/mundoFacilEcommece.png"
import devSaber  from "@/assets/DevSaberAppPoll.png"
import smartAgenda from "@/assets/smartAgenda.png"

const Index = () => {
  const projects = [
      {
      id: "1",
      title: "Sistema de agendamento (Smart Agenda)",
      description:
        "Plataforma online de agendamento e controle de fluxo, voltada para pequenas e médias empresas. Permite organizar atendimentos, gerenciar horários e melhorar a eficiência operacional, reduzindo filas e evitando conflitos de agenda.",
      image: smartAgenda,
      technologies: [
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "DDD",
        "SOLID",
        "clean architecture",
      ],
      gitHubUrl: "https://github.com/kariel-martins/smart-agenda-api",
      DemoUrl: ""
    },
    {
      id: "2",
      title: "Plataforma E-commerce (Mundo Fácil)",
      description:
        "API escalável para e-commerce com autenticação JWT, carrinho, pedidos, cache Redis e mensageria com RabbitMQ.",
      image: mundoFacil,
      technologies: [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "React",
        "Resend",
      ],
      gitHubUrl: "https://github.com/kariel-martins/Mundo-Facil",
      DemoUrl: ""
    },
    {
      id: "3",
      title: "Plataforma de Enquetes (Dev Saber)",
      description:
        "Sistema de criação de enquetes onde usuários podem criar enquetes, acompanhar seus status e responder enquetes criadas por outros usuários.",
      image: devSaber,
      technologies: [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "React",
        "Resend",
        "Docker",
      ],
      gitHubUrl: "https://github.com/kariel-martins/Dev-saber",
      DemoUrl: ""
    },
  
  ];

  const skills = [
    {
      icon: Server,
      title: "Back-end Engineering",
      description: "APIs REST, autenticação, arquitetura modular",
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "PostgreSQL, Redis, modelagem relacional",
    },
    {
      icon: Cloud,
      title: "Infraestrutura",
      description: "Docker, containers e ambientes padronizados",
    },
    {
      icon: Cpu,
      title: "Sistemas Distribuídos",
      description: "Mensageria, filas, comunicação assíncrona",
    },
  ];

  return (
    <div className="min-h-screen min-w-screen bg-[#0a0a0a] text-foreground selection:bg-primary/30">
      <Header />

      {/* HERO SECTION */}
      <HeroSection />

      {/* SEÇÃO SOBRE & SKILLS */}
      <section className="py-32 px-6 relative overflow-hidden border-t border-white/5">
        {/* Background Grid Sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-mono mb-4 tracking-widest uppercase">
              <Terminal size={12} /> Technical Profile
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              ENGENHARIA DE{" "}
              <span className="text-primary cyber-glow italic">SOFTWARE</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Focado na construção de sistemas robustos e escaláveis. Trabalho
              com arquitetura moderna, mensageria e cache, buscando sempre{" "}
              <span className="text-foreground underline decoration-primary/40 text-sm font-mono">
                alta performance
              </span>{" "}
              e manutenibilidade em ambientes de produção real.
            </p>
          </div>

          {/* SKILLS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-8 bg-white/[0.02] border-white/5 backdrop-blur-md hover:border-primary/40 hover:bg-primary/[0.02] transition-all duration-500 group relative overflow-hidden"
              >
                {/* Linha decorativa de hover */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <skill.icon className="w-10 h-10 text-primary/70 mb-6 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />
                <h3 className="text-sm font-mono font-bold mb-3 tracking-widest uppercase">
                  {skill.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  // {skill.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO PROJETOS */}
      <section className="py-32 px-6 bg-[#0d0d0d] border-y border-white/5 relative">
        {/* Adorno visual: "Dots" no fundo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                MAIN_<span className="text-primary">PROJECTS</span>
              </h2>
              <p className="text-muted-foreground font-mono text-sm tracking-tight">
                Executando listagem de sistemas distribuídos e APIs modulares...
              </p>
            </div>
            <div className="h-[1px] flex-1 bg-white/5 mx-8 hidden lg:block mb-4"></div>
            <Button
              variant="outline"
              className="border-primary/20 hover:bg-primary/10 text-xs font-mono tracking-tighter"
            >
              EXPLORE_ALL_REPOS
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Call to action final */}
          <div className="mt-24 text-center p-12 rounded-3xl border border-dashed border-white/10 bg-white/[0.01]">
            <h3 className="text-xl font-mono mb-6">
              Pronto para escalar seu próximo projeto?
            </h3>
            <Button
              size="lg"
              className="bg-primary text-black font-bold gap-2 hover:shadow-[0_0_20px_rgba(var(--primary),0.5)]"
            >
              <Github size={18} /> INICIAR_CONVERSA
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase opacity-50">
            Design & Code by You • 2026 • v1.0.4-stable
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
