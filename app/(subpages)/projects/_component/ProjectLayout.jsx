import { truncate } from "@/data";
import Link from "next/link";
import React from "react";

const ProjectLayout = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="custom-bg cursor-pointer flex">
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-white">{project.name}</h2>
          <p className="text-slate-400 hidden sm:inline-block">
            {truncate(project.description, 20)}
          </p>
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
        <p className="text-white/55">Wordpress</p>
      </div>
    </Link>
  );
};

export default ProjectLayout;
