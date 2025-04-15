///

import { Link } from 'react-router';
import { Button } from './button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from './card';

import { Github } from 'lucide-react';

type Props = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
};

export const ProjectCard = ({
  title,
  description,
  tags,
  githubUrl,
}: Props) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="mt-2 line-clamp-2">
          {description}
        </CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <Button variant="outline" size="sm" asChild>
          <Link to={githubUrl ?? '#'}>
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
