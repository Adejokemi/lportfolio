import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectsFront = ({
  imageSrc,
  tools,
  projectName,
  liveLink,
  description,
}) => {
  return (
    <div className=" rounded-b-lg bg-slate-700 ">
      {/* Image */}
      <div className="mb-5">
        <img
          src={imageSrc}
          alt="Project Image"
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Project Details */}
          <div className="pt-3  pb-1">
              <div className="px-4 pb-3">
        <div className="mb-2 flex gap-4 items-center">
          <h3 className="text-lg font-semibold ">{projectName}</h3>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600"
            >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>

        <div>
          <p className="text-md font-medium ">
            Description: &nbsp;
            <span className="text-gray-700 ml-auto text-sm">{description}</span>
          </p>
        </div>
              </div>
        <div className="mt-2 p-2 bg-gray-800 rounded-md">
          <p className="text-sm font-medium text-slate-900">
            Built with:
            <span className="text-xs font-semibold text-black">{tools}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsFront;
