export const formatDate = (dateString: string, locale: 'uk-UA' | 'en-US' = 'uk-UA'): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date).replace(/\//g, '-');
};

export const getFormattedDate = (deadline:string ) => {
    if (!deadline) return '—';

    const deadlineDate = new Date(deadline);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // Check if it's tomorrow
    if (deadlineDate.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    }

    const month = deadlineDate.toLocaleString('en-UK', { month: 'short' });
    const day = deadlineDate.getDate();
    return `${month} ${day}`;
  };
