export const formatProjectDate = (dateString: string, locale: string) =>
  new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(
    new Date(dateString),
  );
