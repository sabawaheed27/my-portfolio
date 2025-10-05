
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
    { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-700" /> },
    { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
    { name: "GitHub", icon: <FaGithub size={40} className="text-gray-800 dark:text-white" /> },
    { name: "Next.js", icon: <TbBrandNextjs size={40} className="text-blue-500" /> },
  ];

  return (
   
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
          {skills.map((skill, index) => (
            <div key={index}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>


      
   
  );
}
