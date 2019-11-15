import { Administrator } from './administrator';
import { Customer } from './customer';

export type User = Administrator | Customer;

export const UserTypeGuard = {
  Customer: (user: User | null): user is Customer => {
    return user !== null && user.role === 'Customer';
  },
  Administrator: (user: User | null): user is Administrator => {
    return user !== null && user.role === 'Administrator';
  }
};
