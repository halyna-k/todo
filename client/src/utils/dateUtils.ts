export const formatDate = (dateString: string, locale: 'uk-UA' | 'en-US' = 'uk-UA'): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date).replace(/\//g, '-');
};
