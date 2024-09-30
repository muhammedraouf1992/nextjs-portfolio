import React from "react";
import bg from "@/public/projectId-background.jpeg";

import Image from "next/image";
import { projectsData } from "@/data";
import Link from "next/link";

export function generateStaticParams() {
  const allobjects = projectsData.map((project) => {
    return { id: String(project.id) };
  });

  return allobjects;
}

const SingleProject = ({ params }) => {
  const project = projectsData.find((project) => project.id == params.id);

  return (
    <div>
      <Image
        src={bg}
        fill
        className="-z-50 w-full h-full object-cover object-center"
        alt="background"
      />
      <div className="container mx-auto pt-40 pb-5">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr,1fr] lg:gap-10">
          <div>
            <Image
              src={project.image}
              className="w-full h-auto rounded-xl"
              alt="project image"
              width={"450"}
              height={"450"}
            />
          </div>
          <div className="custom-bg">
            <h2 className="text-white capitalize font-bold text-xl">
              {project.name}
            </h2>
            <p className=" text-slate-300 mt-5">{project.description}</p>
            <div className="flex mt-5 gap-2 uppercase">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="bg-accent text-white rounded-3xl px-2 py-1"
                >
                  {technology}
                </span>
              ))}
            </div>
            <Link
              href={project.demoLink}
              target="_blank"
              className="bg-transparent border border-red-600 py-5 rounded-lg text-center text-white mt-10 block shadow-glass-inset hover:bg-accent"
            >
              Explore Website
            </Link>
          </div>
        </div>
        <div className="mt-10 px-2">
          <p className="text-lg text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            aliquam autem architecto porro nemo dolorum ad. Voluptas ut iure
            obcaecati inventore voluptatem voluptate velit commodi maiores
            voluptatibus eos incidunt ipsam nisi laborum quasi maxime tenetur
            beatae porro, fuga repellat. Velit in temporibus vitae ipsam eum
            minus, tenetur sit necessitatibus aliquam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
