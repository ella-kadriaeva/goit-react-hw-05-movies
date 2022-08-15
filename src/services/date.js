import { format } from 'date-fns';

export const formatDate = time => {
  return format(Date.parse(time), 'yyyy');
};
