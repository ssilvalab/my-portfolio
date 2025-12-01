import { useState, useEffect } from 'react';
import { SkillItem } from '@/components/SkillItem';
import { ProjectItem } from '@/components/ProjectItem';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Download, MapPin, Calendar, Clock, ExternalLink, User, Code, Briefcase } from 'lucide-react';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      level: 95,
      description: 'Lenguaje de programación tipado que extiende JavaScript con tipos estáticos, mejorando la robustez y mantenibilidad del código.',
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      level: 98,
      description: 'Lenguaje de programación dinámico y versátil, fundamental para el desarrollo web moderno tanto en frontend como backend.',
      category: 'Frontend'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      level: 92,
      description: 'Biblioteca de JavaScript para construir interfaces de usuario interactivas y componentes reutilizables.',
      category: 'Frontend'
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      level: 96,
      description: 'Lenguaje de marcado estándar para crear y estructurar contenido web semántico y accesible.',
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      level: 94,
      description: 'Lenguaje de estilos para diseñar y dar formato visual a páginas web con layouts responsivos y animaciones.',
      category: 'Frontend'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      level: 90,
      description: 'Framework de CSS utility-first que permite crear diseños personalizados rápidamente sin escribir CSS personalizado.',
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      level: 88,
      description: 'Entorno de ejecución de JavaScript del lado del servidor, ideal para APIs REST y aplicaciones en tiempo real.',
      category: 'Backend'
    },
    {
      name: 'C#',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      level: 85,
      description: 'Lenguaje de programación orientado a objetos de Microsoft, potente para aplicaciones empresariales y web.',
      category: 'Backend'
    },
    {
      name: 'C++',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      level: 82,
      description: 'Lenguaje de programación de alto rendimiento, ideal para sistemas, juegos y aplicaciones que requieren velocidad.',
      category: 'Systems'
    },
    {
      name: 'C',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      level: 80,
      description: 'Lenguaje de programación fundamental y eficiente, base de muchos sistemas operativos y aplicaciones de bajo nivel.',
      category: 'Systems'
    },
    {
      name: 'Flutter',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      level: 78,
      description: 'Framework de Google para crear aplicaciones nativas multiplataforma con una sola base de código.',
      category: 'Mobile'
    },
    {
      name: 'WordPress',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      level: 87,
      description: 'Sistema de gestión de contenidos más popular del mundo, ideal para sitios web y blogs personalizables.',
      category: 'CMS'
    }
  ];

  const projects = [
    {
      id: '1',
      title: 'Fast Link',
      description: 'Plataforma que ayuda de forma gratuita a los empredimientos a tener todos los links necesarios en un perfil de usuario accesible para todos el mundo.',
      technologies: ['React', 'TypeScript', 'SupaBase'],
      liveUrl: 'https://fastlink-project.vercel.app/',
      githubUrl: 'https://github.com/ssilvalab/FastLink',
      imageUrl: 'https://media.discordapp.net/attachments/1444219182861254738/1444904933584539730/image.png?ex=692e6815&is=692d1695&hm=3514eeed4c1eb186276d6e1839e844d2d16c0170d9bb5f5f6a2ffc14587e1453&=&format=webp&quality=lossless&width=1722&height=864',
      status: 'completed' as const
    },
    {
      id: '2',
      title: 'Flow',
      description: 'Sistema de Gestion de gastos personales para administrar tu dinero de manera eficiente.',
      technologies: ['React', 'TypeScript', 'SupaBase'],
      liveUrl: 'https://flow-project.vercel.app/',
      githubUrl: 'https://github.com/ssilvalab/Flow',
      imageUrl: 'https://media.discordapp.net/attachments/1444219182861254738/1444905406806888569/image.png?ex=692e6886&is=692d1706&hm=57ab511d845666bc4f920ad8d3f54293f6e7455f8041f1354313df62fd475845&=&format=webp&quality=lossless&width=1713&height=864',
      status: 'completed' as const
    }
  ];

  return (
    <div className="dashboard-grid">
      {/* Header */}
      <header className="grid-header pro-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-primary-foreground font-bold">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Developer Portfolio</h1>
              <p className="text-sm text-muted-foreground">Full Stack Developer & Frontend Specialist</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {currentTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="flex items-center gap-2">
              <div className="status-dot status-online" />
              <span className="text-sm text-muted-foreground">Disponible para proyectos</span>
            </div>
          </div>
        </div>
      </header>

      {/* Left Sidebar - Profile & Skills */}
      <aside className="grid-sidebar space-y-3 overflow-y-auto">
        {/* Profile Card */}
        <div className="pro-card">
          <div className="pro-card-header">
            <h3 className="pro-card-title flex items-center gap-2">
              <User className="w-4 h-4" />
              Perfil Profesional
            </h3>
          </div>
          <div className="pro-card-content">
            <div className="text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-2xl text-primary-foreground font-bold">
                DEV
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Sebastian Silva</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Especialista en crear soluciones web modernas y escalables con más de 5 años de experiencia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="pro-card flex-1">
          <div className="pro-card-header">
            <h3 className="pro-card-title flex items-center gap-2">
              <Code className="w-4 h-4" />
              Tecnologías
            </h3>
            <Badge variant="outline" className="text-xs border-primary/30 text-primary">
              {skills.length}
            </Badge>
          </div>
          <div className="pro-card-content">
            <div className="skills-grid">
              {skills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Stats */}
        <div className="pro-card">
          <div className="pro-card-header">
            <h3 className="pro-card-title">Contacto & Enlaces</h3>
          </div>
          <div className="pro-card-content space-y-2">
            <a href="mailto:sesm2023@gmail.com" className="block">
              <Button variant="outline" size="sm" className="w-full justify-start text-xs h-9">
                <Mail className="w-4 h-4 mr-2" />
                sesm2023@gmail.com
              </Button>
            </a>
            <a href="https://github.com/ssilvalab" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" size="sm" className="w-full justify-start text-xs h-9">
                <Github className="w-4 h-4 mr-2" />
                github.com/ssilvalab
              </Button>
            </a>
            <a href="https://linkedin.com/in/developer" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" size="sm" className="w-full justify-start text-xs h-9">
                <Linkedin className="w-4 h-4 mr-2" />
                linkedin.com/in/developer
              </Button>
            </a>
            <Button className="w-full justify-start text-xs h-9 bg-primary hover:bg-primary-light">
              <Download className="w-4 h-4 mr-2" />
              Descargar CV
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content - Projects */}
      <main className="grid-main space-y-3 overflow-y-auto">
        <div className="pro-card h-full">
          <div className="pro-card-header">
            <h3 className="pro-card-title flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Proyectos Destacados
            </h3>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                {projects.filter(p => p.status === 'completed').length} completados
              </Badge>
              <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary-light">
                <ExternalLink className="w-3 h-3 mr-1" />
                Ver todos
              </Button>
            </div>
          </div>
          <div className="pro-card-content h-full overflow-y-auto">
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar - Info & Stats */}
      <aside className="grid-aside space-y-3 overflow-y-auto">
        {/* Location & Availability */}
        <div className="pro-card">
          <div className="pro-card-header">
            <h3 className="pro-card-title">Información</h3>
          </div>
          <div className="pro-card-content space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Trabajo Remoto / Híbrido</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Disponible para nuevos proyectos</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="pro-card">
          <div className="pro-card-header">
            <h3 className="pro-card-title">Estadísticas</h3>
          </div>
          <div className="pro-card-content">
            <div className="grid grid-cols-1 gap-3">
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground">Proyectos completados</div>
              </div>
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-xs text-muted-foreground">Tecnologías dominadas</div>
              </div>
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Satisfacción del cliente</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="pro-card">
          <div className="pro-card-header">
            <h3 className="pro-card-title">Servicios</h3>
          </div>
          <div className="pro-card-content space-y-2">
            <div className="text-xs p-2 bg-primary/10 rounded border border-primary/20">
              <div className="font-medium text-primary">Desarrollo Web Full Stack</div>
              <div className="text-muted-foreground">Aplicaciones web completas</div>
            </div>
            <div className="text-xs p-2 bg-primary/10 rounded border border-primary/20">
              <div className="font-medium text-primary">Desarrollo Mobile</div>
              <div className="text-muted-foreground">Apps iOS y Android</div>
            </div>
            <div className="text-xs p-2 bg-primary/10 rounded border border-primary/20">
              <div className="font-medium text-primary">Consultoría Técnica</div>
              <div className="text-muted-foreground">Arquitectura y optimización</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Footer */}
      <footer className="grid-footer pro-card">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>© 2025 Sebastian Silva</span>
            <span>•</span>
            <span>Desarrollado con 💙 por Sebastian Silva</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Última actualización: {new Date().toLocaleDateString('es-ES')}</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>En línea</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;