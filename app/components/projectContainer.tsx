import React from "react";

type ProjectContainerProps = {
  right: boolean;
  content: string;
};

const ProjectContainer = (props: ProjectContainerProps) => {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="w-1/2 border-r-1 border-b-1 border-black dark:border-white h-60 mb-8">
        Developing a Standard Development Kit for Applications build with the
        ProcessCube
      </div>
    </div>
  );
};

export default ProjectContainer;
