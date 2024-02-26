import { Social as PrismaSocial } from '@prisma/client';
import User from './User';

interface Social extends PrismaSocial{
    user: User;
}

export default Social;