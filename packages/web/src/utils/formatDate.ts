export const formatDate = (date: Date) =>
  date.toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
