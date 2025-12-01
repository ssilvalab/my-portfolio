import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-primary';
      case 'in-progress': return 'bg-yellow-500';
      case 'planned': return 'bg-muted-foreground';
      default: return 'bg-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completado';
      case 'in-progress': return 'En progreso';
      case 'planned': return 'Planeado';
      default: return 'Desconocido';
    }
  };

  return (
    <>
      <div 
        className="project-item group"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          <div className={`status-dot ${getStatusColor(project.status)}`} />
        </div>
        
        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 2).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs px-1 py-0 border-border/50">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 2 && (
            <Badge variant="outline" className="text-xs px-1 py-0 border-border/50">
              +{project.technologies.length - 2}
            </Badge>
          )}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-card border-border max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-foreground text-xl">{project.title}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge className={`${getStatusColor(project.status)} text-white`}>
                {getStatusText(project.status)}
              </Badge>
            </div>
            
            {/* Project Preview */}
            <div className="aspect-video bg-secondary rounded border border-border overflow-hidden">
              {project.imageUrl ? (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-3xl">💻</div>
                    <p className="text-muted-foreground text-sm">Vista previa del proyecto</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Descripción</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Tecnologías</h4>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Links */}
            <div className="flex gap-2 pt-2">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button size="sm" className="bg-primary hover:bg-primary-light text-primary-foreground">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Ver proyecto
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-secondary">
                    <Github className="w-3 h-3 mr-1" />
                    Código
                  </Button>
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};