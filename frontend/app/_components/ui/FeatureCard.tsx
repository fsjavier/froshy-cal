interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex items-start space-x-4 p-6 bg-muted rounded-xl transition-all duration-300 hover:shadow-md">
      <div className="flex-shrink-0 bg-background p-3 rounded-full shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2 text-secondary">{title}</h4>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
