import { projectDetails } from "@/data/projectDetails";
import { ProjectCard, ProjectCardFeatured } from "./Card";

const projects = () => {
  return (
    <section id="projects" className="py-28 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Backend Systems</h2>

        <div className="mt-12">
          <ProjectCardFeatured project={projectDetails[1]} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projectDetails.slice(1).map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default projects;
