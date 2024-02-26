import { ProjectImage as PrismaProjectImage  } from '@prisma/client';
import Project from './Project';

interface ProjectImage extends PrismaProjectImage {
    project: Project;
};

export default ProjectImage;
