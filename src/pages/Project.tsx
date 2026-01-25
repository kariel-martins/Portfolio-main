import { useState } from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import {  Terminal, Cpu, Database, Globe } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("ALL");

  const projects = [
    {
      id: "1",
      title: "E-commerce Engine",
      description: "Infraestrutura escalável com processamento de pagamentos assíncrono e gestão de inventário em tempo real.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "PostgreSQL", "Redis", "RabbitMQ"],
      category: "BACKEND"
    },
    {
      id: "2",
      title: "Event-Driven Worker",
      description: "Sistema de microserviços focado em processamento de logs e tarefas pesadas em background utilizando filas distribuídas.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      technologies: ["Go", "Docker", "RabbitMQ", "MongoDB"],
      category: "INFRA"
    },
    {
      id: "3",
      title: "Clean API Architecture",
      description: "Boilerplate de arquitetura limpa (Clean Arch) com DDD e SOLID para aplicações TypeScript robustas.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "Jest", "Docker"],
      category: "ARCHITECTURE"
    },
    {
      id: "4",
      title: "Auth Gateway Service",
      description: "Serviço centralizado de autenticação e autorização com suporte a OAuth2 e múltiplas estratégias de JWT.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "Redis", "Security"],
      category: "BACKEND"
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