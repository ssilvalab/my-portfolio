import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  icon: string;
  level: number;
  description: string;
  category: string;
}

interface SkillItemProps {
  skill: Skill;
}

export const SkillItem = ({ skill }: SkillItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="skill-item group"
        onClick={() => setIsOpen(true)}
      >
<div className="flex items-center gap-2">
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-5 h-5" 
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) {
                fallback.style.display = 'flex';
                fallback.textContent = skill.name.charAt(0);
              }
            }}
          />
          <div className="w-5 h-5 text-xs font-bold text-primary bg-primary/20 rounded flex items-center justify-center hidden" />
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Progress bar removed */}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
<DialogTitle className="flex items-center gap-3 text-foreground">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8" 
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                    fallback.textContent = skill.name.charAt(0);
                  }
                }}
              />
              <div className="w-8 h-8 text-lg font-bold text-primary bg-primary/20 rounded flex items-center justify-center hidden" />
              {skill.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary">
              {skill.category}
            </Badge>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Competencia</span>
              {/* Percentage removed */}
            </div>
            {/* Progress bar removed */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {skill.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};