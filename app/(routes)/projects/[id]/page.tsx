import { ProjectData } from '@/data/content';

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = ProjectData.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return (
      <div className="flex flex-col justify-center font-clash my-8">
        <h1 className="text-6xl mb-4">Project Not Found</h1>
        <p>The project with ID {params.id} could not be found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center font-clash my-8">
      <h1 className="text-6xl mb-4">{project.title}</h1>
      <p>{project.description}</p>
      {/* You can add more project details here */}
    </div>
  );
}
