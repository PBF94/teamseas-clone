import { format } from "date-fns";

const formatDate = (date: string | number | Date) => {
  if (!date) return;

  return format(new Date(date), "Pp");
};

export default formatDate;
