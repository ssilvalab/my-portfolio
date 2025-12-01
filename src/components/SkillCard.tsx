import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Skill {
  name: string;
  icon: string;
  level: number;
  description: string;
  color: string;
}

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="bento-item bento-sm glow-border cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <h3 className="text-lg font-semibold neon-text">{skill.name}</h3>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="h-2 rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
            />
          </div>
          {/* Percentage removed */}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-card border-primary/20 max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 neon-text">
              <span className="text-3xl">{skill.icon}</span>
              {skill.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Nivel de competencia</span>
              {/* Percentage removed */}
            </div>
            {/* Progress bar removed */}
            <p className="text-muted-foreground leading-relaxed">
              {skill.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};