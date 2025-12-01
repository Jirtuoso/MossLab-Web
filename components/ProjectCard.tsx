import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative w-full cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-sm bg-gray-100">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="object-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      
      <div className="flex justify-between items-start border-b border-gray-200 pb-6">
        <div>
          <h3 className="text-3xl font-display font-semibold text-kiln-black mb-2 group-hover:opacity-70 transition-opacity duration-300">
            {project.title}
          </h3>
          <p className="text-base text-kiln-stone font-sans tracking-wide">{project.category}</p>
        </div>
        <span className="text-sm text-kiln-stone font-mono mt-2">{project.year}</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;