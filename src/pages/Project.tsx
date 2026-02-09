import { useState } from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import {  Terminal, Cpu, Database, Globe } from "lucide-react";
import cloneAmazon from "@/assets/imageCloneAmazon.png"
import TechShop from "@/assets/TechShop.png"
import mundoFacil from "@/assets/mundoFacilEcommece.png"
import devSaber from "@/assets/DevSaberAppPoll.png"
import Emdesenvolvimento from "@/assets/emDesenvolvimento.png"

const Projects = () => {
  const [filter, setFilter] = useState("ALL");

  const projects = [
    {
      id: "5",
      title: "Api Marketplace de servicos ",
      description: "API REST voltada à prestação de serviços por profissionais autônomos. O projeto utiliza autenticação com JWT e adota arquitetura em camadas, modularização por domínio e separação de responsabilidades, aplicando boas práticas de desenvolvimento com foco em organização, manutenibilidade e escalabilidade do sistema.",
      image: Emdesenvolvimento,
      technologies: ["Typescript", "Nodejs", "swagger", "test", "Docker", "Postgres", "jwt", "fastify"],
      category: "INFRA",
      gitHubUrl: "https://github.com/kariel-martins/smart-agenda-api",
      DemoUrl: ""
    },
    {
      id: "5",
      title: "Api Smart Agenda",
      description: "API REST para gerenciamento inteligente de agendamentos, criada para organizar atendimentos em estabelecimentos de serviços. O projeto aplica autenticação com JWT, arquitetura em camadas, modularização por domínio, separação de responsabilidades e boas práticas de desenvolvimento, com foco em escalabilidade e organização do sistema.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
      technologies: ["Typescript", "Nodejs", "swagger", "test", "Docker", "Postgres", "jwt"],
      category: "INFRA",
      gitHubUrl: "https://github.com/kariel-martins/smart-agenda-api",
      DemoUrl: ""
    },
    {
      id: "4",
      title: "Dev Saber",
      description: "Aplicação web na qual usuários podem criar enquetes, acompanhar seus status e responder enquetes criadas por outros usuários. O projeto utiliza autenticação com JWT e cookies, além de aplicar conceitos de DDD, Clean Architecture e princípios SOLID.",
      image: devSaber,
      technologies: ["Typescript", "Docker", "RabbitMQ", "Postgres", "Redis", "React", "vite", "Resend", "jwt", "git", "git flow"],
      category: "INFRA",
      gitHubUrl: "https://github.com/kariel-martins/Dev-saber",
      DemoUrl: ""
    },
    {
      id: "3",
      title: "Mundo Fácil",
      description: "E-commerce desenvolvido com o propósito de tornar a conexão entre cliente e vendedor mais simples, prática e acessível. A plataforma busca oferecer uma experiência de compra intuitiva e eficiente, facilitando tanto o processo de venda quanto a jornada de compra do usuário.",
      image: mundoFacil,
      technologies: ["Typescript", "Docker", "RabbitMQ", "Postgres", "Redis","strype", "React", "vite", "Resend"],
      category: "INFRA",
      gitHubUrl: "https://github.com/kariel-martins/Mundo-Facil",
      DemoUrl: "https://mundo-facil.onrender.com"
    },
    {
      id: "2",
      title: "Tech Shop",
      description: "Projeto de e-commerce voltado ao desenvolvimento da minha lógica de programação e ao aprofundamento dos conhecimentos em arquitetura de software. Trata-se de um dos meus primeiros projetos, no qual aplico conceitos como API REST, organização arquitetural e divisão de responsabilidades.",
      image: TechShop,
      technologies: ["TypeScript", "Nodejs", "Docker", "React", "postgres"],
      category: "ARCHITECTURE",
      gitHubUrl: "https://github.com/kariel-martins/TechShop",
      DemoUrl: ""
    },
    {
      id: "1",
      title: "Clone Amazon",
      description: "Site clone da amazon feito para demostrar minhas capacidade com HTML, CSS, JavaScript. Esse projeto foi desenvolvido ainda no inicio do meu estudos, Sendo um dos meu primeiros projetos.",
      image: cloneAmazon,
      technologies: ["HTML", "CSS", "javaScript"],
      category: "BACKEND",
      gitHubUrl: "https://github.com/kariel-martins/clone-Amazon",
      DemoUrl: "https://cloneamazonkariel.netlify.app/"
    }
  ];

  const categories = ["ALL", "BACKEND", "INFRA", "ARCHITECTURE"];

  const filteredProjects = filter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          
          {/* PAGE HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-[0.3em] uppercase">
                <Cpu size={14} /> Repository_Explorer_v2.0
              </div>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
                Deployments<span className="text-primary cyber-glow">.log</span>
              </h1>
              <p className="text-muted-foreground font-mono text-sm max-w-xl">
                // Analisando artefatos de software: APIs escaláveis, sistemas distribuídos e infraestrutura modularizada.
              </p>
            </div>

            {/* BARRA DE BUSCA/FILTRO ESTILIZADA */}
            <div className="w-full md:w-auto space-y-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-1.5 font-mono text-[10px] tracking-widest border transition-all ${
                      filter === cat 
                      ? "bg-primary text-black border-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]" 
                      : "bg-white/5 border-white/10 text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* GRID DE PROJETOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="relative group">
                {/* Linha Decorativa Lateral para cada item do grid */}
                <div className="absolute -left-4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* EMPTY STATE (Se não houver projetos no filtro) */}
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-xl">
              <Terminal className="mx-auto mb-4 text-primary opacity-20" size={48} />
              <p className="font-mono text-muted-foreground">Error: NO_MODULES_FOUND_IN_THIS_CATEGORY</p>
            </div>
          )}

          {/* FOOTER DA PÁGINA */}
          <div className="mt-24 border-t border-white/5 pt-12 flex flex-col items-center">
            <div className="flex gap-8 mb-8 opacity-40">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
                <Database size={12} /> Data_Reliability: 99.9%
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
                <Globe size={12} /> Traffic_Status: Stable
              </div>
            </div>
            
            <Button variant="outline" className="border-primary/20 bg-primary/5 hover:bg-primary hover:text-black font-mono text-xs px-10">
              EXPLORE_RAW_REPOSITORIES (GITHUB)
            </Button>
          </div>

        </div>
      </main>

      {/* BACKGROUND DECORATION */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10 pointer-events-none rounded-full"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[150px] -z-10 pointer-events-none rounded-full"></div>
    </div>
  );
};

export default Projects;