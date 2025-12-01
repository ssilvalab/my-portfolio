import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={`bento-item ${project.featured ? 'bento-lg' : 'bento-md'} glow-border cursor-pointer group matrix-bg`}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-full flex flex-col">
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold neon-text group-hover:text-primary-glow transition-colors">
                {project.title}
              </h3>
              {project.featured && (
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Destacado
                </Badge>
              )}
            </div>
            
            <p className="text-muted-foreground line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline" className="border-primary/30 text-primary">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-darker-surface rounded-lg border border-primary/20">
            <div className="text-xs text-primary font-mono">
              {'> '} Haz clic para ver detalles...
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-card border-primary/20 max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="neon-text text-2xl">{project.title}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Project Preview */}
            <div className="relative aspect-video bg-darker-surface rounded-lg border border-primary/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-4xl">🚀</div>
                  <p className="text-muted-foreground">Vista previa del proyecto</p>
                  <p className="text-xs text-primary">Próximamente disponible</p>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Descripción</h4>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Tecnologías utilizadas</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="bg-primary/10 text-primary border-primary/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Links */}
            <div className="flex gap-3 pt-4">
              {project.liveUrl && (
                <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver proyecto
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                  <Github className="w-4 h-4 mr-2" />
                  Ver código
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};