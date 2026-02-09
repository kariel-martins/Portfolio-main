import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  id: string;
  gitHubUrl: string;
  DemoUrl: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  id,
  gitHubUrl,
  DemoUrl,
}: ProjectCardProps) => {
  return (
    <Card className="group cyber-border overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 animate-fade-in-up">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="cyber-border text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Link to={gitHubUrl}>
              <Button variant="outline" size="sm" className="cyber-border">
                <Github className="w-4 h-4 mr-2" />
                Código
              </Button>
            </Link>
            <Link to={DemoUrl}>
              <Button variant="outline" size="sm" className="purple-glow">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </Link>
          </div>

          <Link to={`/sobre#projeto-${id}`}>
            <Button size="sm" className="cyber-glow">
              Detalhes
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
