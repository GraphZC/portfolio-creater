import { Project as PrismaProject } from '@prisma/client';
import User from './User';

interface Project extends PrismaProject{
    user: User;
}

export default Project;