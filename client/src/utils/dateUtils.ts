export const formatDate = (dateString: string, locale: 'uk-UA' | 'en-UK' = 'en-UK'): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date).replace(/\//g, '-'); // Convert slashes to hyphens
};

export const formatToDateInput = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit month
  const day = String(date.getDate()).padStart(2, '0'); // Ensure 2-digit day
  return `${year}-${month}-${day}`;
};



export const getFormattedDate = (deadline: string): string => {
  if (!deadline) return '—';

  const deadlineDate = new Date(deadline);

  // Check if the date is invalid
  if (isNaN(deadlineDate.getTime())) {
    return 'Invalid Date';
  }

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Check if it's tomorrow
  if (deadlineDate.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  }

  // If it's today
  if (deadlineDate.toDateString() === today.toDateString()) {
    return 'Today';
  }

  // Format the deadline date with month and day
  const month = deadlineDate.toLocaleString('en-UK', { month: 'short' });
  const day = deadlineDate.getDate();
  return `${month} ${day}`;
};
