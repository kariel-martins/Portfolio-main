import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Terminal, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Executing request: SEND_MESSAGE...");

    setTimeout(() => {
      toast.dismiss(toastId);
      toast.success("REQUEST_SUCCESSFUL", {
        description: "Mensagem transmitida com sucesso através dos protocolos.",
      });
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const isFormValid = formData.nome && formData.email && formData.assunto && formData.mensagem;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground selection:bg-primary/30">
      <Header />

      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <section className="px-6 relative z-10">
          <div className="container mx-auto max-w-6xl">
            
            {/* Header da Seção */}
            <div className="mb-16 border-l-4 border-primary pl-6">
              <div className="flex items-center gap-2 text-primary font-mono text-sm mb-2">
                <Terminal size={16} />
                <span>COMMS_INTERFACE.SYS</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
                Get in <span className="text-primary cyber-glow">Touch</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* FORM CARD (Lado maior) */}
              <div className="lg:col-span-7">
                <Card className="p-8 border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                  {/* Linha de progresso no topo do card */}
                  <div className={`absolute top-0 left-0 h-[2px] bg-primary transition-all duration-500 ${isFormValid ? 'w-full shadow-[0_0_10px_#var(--primary)]' : 'w-0'}`} />

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground pl-1">Input.User_Name</Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          placeholder="DIGITE SEU NOME"
                          className="bg-black/40 border-white/10 focus:border-primary/50 transition-all font-mono text-sm"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground pl-1">Input.Email_Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="EMAIL@PROTOCOLO.COM"
                          className="bg-black/40 border-white/10 focus:border-primary/50 transition-all font-mono text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assunto" className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground pl-1">Input.Subject_Line</Label>
                      <Input
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        placeholder="QUAL O ASSUNTO?"
                        className="bg-black/40 border-white/10 focus:border-primary/50 transition-all font-mono text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem" className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground pl-1">Input.Message_Body</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="ESCREVA SUA MENSAGEM AQUI..."
                        className="min-h-40 bg-black/40 border-white/10 focus:border-primary/50 transition-all font-mono text-sm resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className={`w-full font-mono tracking-widest transition-all duration-500 ${
                        isFormValid 
                          ? "bg-primary text-black shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-[1.01]" 
                          : "bg-white/5 text-white/30"
                      }`}
                      disabled={!isFormValid || isSubmitting}
                    >
                      <Send className={`w-4 h-4 mr-2 ${isFormValid && 'animate-bounce'}`} />
                      {isSubmitting ? "TRANSMITTING..." : "EXECUTE_SEND"}
                    </Button>
                  </form>
                </Card>
              </div>

              {/* INFO SIDEBAR (Lado menor) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-8 border border-white/5 bg-black/20 rounded-xl space-y-8">
                  <h3 className="text-xs font-mono text-primary tracking-[0.4em] uppercase">Connect_Metadata</h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Mail, label: "Email", value: "karielemanoel.17@gmail.com", color: "text-primary" },
                      { icon: Phone, label: "Whatsapp", value: "+55 99 982773482", color: "text-blue-400" },
                      { icon: MapPin, label: "Location", value: "Porto Franco, MA - Brasil", color: "text-red-400" }
                    ].map((item, i) => (
                      <div key={i} className="group flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${item.color} group-hover:scale-110 transition-transform`}>
                          <item.icon size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-muted-foreground uppercase">{item.label}</p>
                          <p className="text-sm font-medium tracking-tight">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <Button variant="outline" className="w-full gap-2 border-primary/20 hover:bg-primary/10 font-mono text-xs uppercase">
                      <MessageSquare size={14} /> Open_WhatsApp_Tunnel
                    </Button>
                  </div>
                </div>

                {/* Status Box */}
                <div className="p-6 border border-primary/10 bg-primary/5 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest">System_Status</span>
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                    Operando em regime de alta disponibilidade. Respostas geralmente processadas em menos de 24 ciclos solares.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contato;