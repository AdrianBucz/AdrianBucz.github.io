import { TimelineItem } from "./timeline-item";

interface TimelineMilestone {
  title: string;
  description: string;
}

interface TimelineProps {
  milestones: TimelineMilestone[];
}

export function Timeline({ milestones }: TimelineProps) {
  return (
    <ol className="mt-8 space-y-8">
      {milestones.map((milestone, index) => (
        <TimelineItem
          key={milestone.title}
          title={milestone.title}
          description={milestone.description}
          isLast={index === milestones.length - 1}
        />
      ))}
    </ol>
  );
}
