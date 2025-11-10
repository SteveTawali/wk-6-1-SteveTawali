const ENV_CURRENCY = process.env.REACT_APP_CURRENCY;

export const SUPPORTED_CURRENCIES = ['NGN', 'GHS', 'USD', 'ZAR'];

export const APP_CURRENCY = SUPPORTED_CURRENCIES.includes(ENV_CURRENCY || '')
  ? ENV_CURRENCY
  : 'NGN';

const CURRENCY_LOCALE = {
  NGN: 'en-NG',
  GHS: 'en-GH',
  USD: 'en-US',
  ZAR: 'en-ZA',
};

export const formatCurrency = (amount) => {
  const locale = CURRENCY_LOCALE[APP_CURRENCY] || 'en-ZA';
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: APP_CURRENCY,
      currencyDisplay: 'symbol',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch (_e) {
    // Fallback if Intl doesn't support currency
    return `${APP_CURRENCY} ${amount.toFixed(2)}`;
  }
};


