import { Project as PrismaProject } from '@prisma/client';
import User from './User';
import ProjectImage from './ProjectImage';

interface Project extends PrismaProject{
    user: User;
    images: ProjectImage[];
}

export default Project;