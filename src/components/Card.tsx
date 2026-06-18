import { cn } from '@/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border-color-base-200 bg-background-100 p-6 shadow-lg',
        hover && 'transition-smooth hover:shadow-xl hover:border-primary-500',
        className
      )}
      {...props}
    />
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  href?: string;
}

export function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  const content = (
    <>
      <h3 className="text-xl font-semibold text-foreground-50">{title}</h3>
      <p className="mt-3 text-text-100">{description}</p>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-badge-primary-background px-3 py-1 text-sm text-badge-primary-text"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );

  return (
    <Card>
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </Card>
  );
}
