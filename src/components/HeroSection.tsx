import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
// Importe sua foto aqui (substitua pelo caminho correto)
import minhaFoto from "@/assets/minha-foto.jpeg"; 

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
      
      {/* Background Decorativo - Efeito de Grade e Luz */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LADO ESQUERDO: TEXTO */}
        <div className="text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono mb-6">
            <Terminal size={16} />
            <span>system.init("backend_engineer")</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter leading-none">
            SOLUTIONS <br />
            <span className="text-primary cyber-glow">ARCHITECT</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed border-l-2 border-primary/20 pl-4">
            Construindo a espinha dorsal de sistemas complexos. Especialista em 
            <span className="text-foreground font-semibold"> APIs de alta performance</span> e 
            <span className="text-foreground font-semibold"> arquiteturas escaláveis</span>.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold px-8 shadow-[0_0_20px_rgba(var(--primary),0.4)]">
              SOLICITAR CV
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              VER STACK
            </Button>
          </div>

          {/* Social Links Estilizados */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/kariel-martins" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/kariel-martins" },
              { icon: Mail, href: "karielemanoelsilvamartins@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="p-3 rounded-lg bg-secondary/30 border border-white/5 hover:border-primary/50 hover:text-primary transition-all group"
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* LADO DIREITO: SUA IMAGEM */}
        <div className="relative flex justify-center items-center">
          {/* Moldura Hexagonal ou Orgânica */}
          <div className="relative w-full max-w-[450px] aspect-[4/5] z-10 group">
            {/* Efeito de borda neon atrás da foto */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-card">
              <img 
                src={minhaFoto} 
                alt="Seu Nome" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              {/* Overlay de gradiente para misturar a foto no fundo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Floating Badge (Opcional) */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-primary/50 p-4 rounded-xl backdrop-blur-md hidden md:block">
              <div className="text-xs text-primary font-mono uppercase tracking-widest mb-1">Status</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-bold text-sm">Disponível para projetos</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-primary" />
      </div>

    </section>
  );
};

export default HeroSection;