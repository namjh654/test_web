import dayjs from "dayjs";

export const formatDateTime = (date: Date | string): string => {
  return dayjs(date).format("YYYY-MM-DD HH:mm");
};

export const getThisYearRange = () => {
  const start = dayjs().startOf("year").toDate();
  const end = dayjs().endOf("year").toDate();
  return { start, end };
};

export const getLastMonthRange = () => {
  const start = dayjs().subtract(1, "month").startOf("day").toDate();
  const end = dayjs().toDate();
  return { start, end };
};
