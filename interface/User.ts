import { User as PrismaUser } from '@prisma/client';
import Project from './Project';
import Social from './Social';

interface User extends PrismaUser{
    projects: Project[];
    social: Social[];
}

export default User;