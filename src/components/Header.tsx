import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cpu, FileDown, Menu } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: "ROOT", path: "/" },
    { name: "ABOUT", path: "/sobre" },
    { name: "PROJECTS", path: "/projetos" },
    { name: "CONTACT", path: "/contato" },
  ];

  return (
    <header>
      <div className="top-0 w-full h-10"></div>
      <div className="fixed top-0 w-full z-50">
      {/* Efeito de Gradiente de topo para garantir leitura */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <nav className="flex items-center justify-between h-20">
          
          {/* LOGO ESTILIZADO */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded border border-primary/20 group-hover:border-primary transition-colors">
              <Cpu className="w-5 h-5 text-primary animate-pulse" />
            </div>
            <span className="text-xl font-black tracking-tighter group-hover:text-primary transition-colors italic">
              ARCH<span className="text-primary">.DEV</span>
            </span>
          </Link>
          
          {/* NAVEGAÇÃO DESKTOP */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`px-4 py-2 text-[11px] font-mono tracking-[0.2em] transition-all relative group overflow-hidden ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {/* Indicador de Link Ativo estilo Terminal */}
                {isActive(link.path) && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#var(--primary)]"></span>
                )}
                
                <span className="relative z-10">
                  {isActive(link.path) ? `[ ${link.name} ]` : link.name}
                </span>
                
                {/* Efeito de Hover Background */}
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>
          
          {/* AÇÕES E BOTÃO CV */}
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="hidden sm:flex border-primary/20 bg-primary/5 hover:bg-primary hover:text-black font-mono text-[10px] tracking-widest gap-2 transition-all"
            >
              <FileDown size={14} />
              GET_CV.PDF
            </Button>

            {/* Mobile Menu Icon */}
            <button className="md:hidden p-2 text-muted-foreground hover:text-primary">
              <Menu size={24} />
            </button>
          </div>

        </nav>
      </div>

      {/* Linha de acento animada no fundo do header */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </div>
    </header>
  );
};

export default Header;