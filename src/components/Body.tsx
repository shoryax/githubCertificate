import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

interface BodyProps {
  activeTab: 'projects' | 'techstack';
  projects: Project[];
}

export default function Body({ activeTab, projects }: BodyProps) {
  return (
    <div className="container-responsive">
      {activeTab === 'projects' ? (
        <div className="projects-grid">
          {projects.map((project) => (
            <Link href={`/project/${project.id}`} key={project.id}>
              <div
                data-layer="full r1"
                className="project-card bg-[#080810] rounded-[10px] hover:cursor-pointer p-2"
              >
                <Image
                  src={project.image || '/dining.jpeg'}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-45 bg-white/10 rounded-[10px] object-cover transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:brightness-90"
                />
                <div
                  data-layer="UT Dining"
                  className="UtDining justify-start text-zinc-100 mt-2 text-base font-bold"
                >
                  {project.title}
                </div>

                <div
                  data-layer="ds1"
                  className="Ds1 w-full justify-start text-zinc-400 text-sm font-medium font-['Satoshi'] mt-2.5"
                >
                  {project.description}
                </div>

                <div
                  data-layer="link"
                  className="w-full justify-start flex text-sm font-bold font-['Satoshi'] mt-2.5 text-[#459293]"
                >
                  <span className="overflow-hidden whitespace-nowrap overflow-ellipsis block max-w-[60%]">
                    {project.link}
                  </span>
                  <Image
                    src="/arrow-up-right.svg"
                    className="w-4 h-4 flex-shrink-0"
                    alt="external link"
                    width={16}
                    height={16}
                  />
                  <span className="text-white/60 text-xs font-normal link-text my-1">Learn more</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center py-6 sm:py-10">
          <span className="bg-[#222] text-blue-300 tech-pill rounded-full font-semibold">Next.js</span>
          <span className="bg-[#222] text-pink-300 tech-pill rounded-full font-semibold">Figma</span>
          <span className="bg-[#222] text-green-300 tech-pill rounded-full font-semibold">React</span>
          <span className="bg-[#222] text-yellow-300 tech-pill rounded-full font-semibold">TypeScript</span>
          <span className="bg-[#222] text-cyan-300 tech-pill rounded-full font-semibold">Tailwind CSS</span>
          <span className="bg-[#222] text-purple-300 tech-pill rounded-full font-semibold">Node.js</span>
          <span className="bg-[#222] text-orange-300 tech-pill rounded-full font-semibold">JavaScript</span>
        </div>
      )}
    </div>
  );

}
