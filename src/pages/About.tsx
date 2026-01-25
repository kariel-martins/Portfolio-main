import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Target, Zap, Code2, Database, Monitor, Terminal, FileCode } from "lucide-react";
import Header from "@/components/Header";

const Sobre = () => {

  const technologies = [
    { name: "Node.js", description: "Criação de APIs REST escaláveis", icon: Code2 },
    { name: "TypeScript", description: "Tipagem estática e segurança", icon: FileCode },
    { name: "PostgreSQL", description: "Banco relacional robusto", icon: Database },
    { name: "Redis", description: "Cache distribuído e performance", icon: Zap },
    { name: "RabbitMQ", description: "Mensageria e filas assíncronas", icon: Terminal },
    { name: "Docker", description: "Containers e deploy padronizado", icon: Monitor }
  ];

  const objectives = [
    {
      icon: Target,
      title: "CURTO_PRAZO",
      description: "Atuar como desenvolvedor back-end focado em boas práticas, arquitetura limpa e padrões modernos em projetos reais."
    },
    {
      icon: Zap,
      title: "LONGO_PRAZO",
      description: "Especializar-me em sistemas distribuídos, cloud computing e arquitetura de alto impacto e disponibilidade."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground selection:bg-primary/30">
      <Header />

      <div className="pt-32 pb-12">
        {/* SECTION: PROJETO EM DESTAQUE */}
        <section className="py-16 px-6 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/20"></div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
                FEATURED_<span className="text-primary cyber-glow">SYSTEM</span>
              </h1>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/20"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Preview do Sistema */}
              <div className="lg:col-span-7 group relative">
                <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-primary/5 z-10 pointer-events-none"></div>
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
                    alt="Sistema Backend"
                    className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Detalhes Técnicos */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono tracking-widest uppercase">
                  Active_Instance_v1.0
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Plataforma Backend Escalável</h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  API REST desenvolvida com foco em performance e resiliência. Implementação de
                  <span className="text-foreground"> arquitetura limpa</span> para facilitar a manutenção e escalabilidade horizontal.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-white/10 text-[10px] font-mono uppercase bg-white/5">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="bg-primary text-black font-bold hover:shadow-[0_0_15px_rgba(var(--primary),0.4)]">
                    DOCUMENTATION
                  </Button>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5 font-mono">
                    REPOSITORY
                  </Button>
                </div>
              </div>
            </div>

            {/* Contexto & Desafios em estilo "Log de Terminal" */}
            <div className="mt-12">
              <Card className="p-8 border-white/5 bg-white/[0.02] backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:h-full transition-all"></div>
                <h3 className="text-sm font-mono font-bold mb-6 text-primary tracking-[0.3em] uppercase">Context_&_Challenges</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-mono">
                  <div className="space-y-2">
                    <span className="text-white/40 uppercase text-[10px] tracking-widest">01. Contexto</span>
                    <p className="text-muted-foreground">// Simulação de ambiente real de produção com alta carga.</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-white/40 uppercase text-[10px] tracking-widest">02. Objetivos</span>
                    <p className="text-muted-foreground">// API desacoplada, resiliente com cache e mensageria.</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-white/40 uppercase text-[10px] tracking-widest">03. Desafios</span>
                    <p className="text-muted-foreground">// Otimização de SQL, controle de filas e Dockerização.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION: SOBRE MIM */}
        <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group">
                  <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden">
                    <Code2 className="w-24 h-24 text-primary opacity-20 absolute group-hover:scale-150 transition-transform duration-700" />
                    <Terminal className="w-16 h-16 text-primary cyber-glow animate-pulse" />
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#0a0a0a] border border-primary/30 p-3 rounded-lg shadow-xl">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-primary">
                      <span className="flex h-2 w-2 rounded-full bg-green-500"></span> ONLINE
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <h2 className="text-3xl font-black tracking-tighter uppercase italic">
                  Sobre <span className="text-primary">Mim</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
                  <p>
                    Sou desenvolvedor Back-end focado na criação de <span className="text-foreground font-medium">APIs modernas</span>,
                    sistemas escaláveis e arquitetura bem estruturada.
                  </p>
                  <p>
                    Especialista em ecossistema <span className="text-primary/80 font-mono">Node.js/TypeScript</span>,
                    gerenciando dados com PostgreSQL e Redis, e orquestrando fluxos com RabbitMQ.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 pt-4 text-[11px] font-mono uppercase tracking-widest opacity-70">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary" /> Brasil / Remote
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-primary" /> Continuous_Learning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CONHECIMENTOS TÉCNICOS */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic mb-4">
                Tech_<span className="text-primary">Stack</span>
              </h2>
              <p className="text-muted-foreground font-mono text-sm opacity-60 italic">
                // Tecnologias aplicadas em ambientes de produção
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <Card
                  key={tech.name}
                  className="p-6 border-white/5 bg-white/[0.02] hover:border-primary/40 hover:bg-primary/[0.01] transition-all duration-500 group"
                >
                  <tech.icon className="w-8 h-8 text-primary/50 mb-4 group-hover:text-primary group-hover:scale-110 transition-all" />
                  <h3 className="text-sm font-mono font-bold mb-2 tracking-widest uppercase">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light italic">
                    {tech.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: OBJETIVOS */}
        <section className="py-24 px-6 relative border-t border-white/5">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {objectives.map((objective) => (
                <Card
                  key={objective.title}
                  className="p-8 border-white/5 bg-black/40 backdrop-blur-sm group hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <objective.icon size={24} className="animate-pulse" />
                    </div>
                    <h3 className="text-lg font-mono font-black tracking-tighter uppercase">
                      {objective.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {objective.description}
                  </p>
                </Card>
              ))}
            </div>
            {/* Adorno visual de fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre;