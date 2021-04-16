export function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };

    return new Date(dateString).toLocaleString('de-DE', options);
}

export function formatCurrency(number: number) {
    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      });

      return formatter.format(number);
}