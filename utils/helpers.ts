export function formatCurrency(
  value: number | string | null,
  currency: string,
  locale: string,
  decimals: number = 0,
  useGrouping: "auto" | "min2" | true | false = "auto"
): string {
  if (value === null) {
    return "";
  }
  let numberValue = Number(value);
  if (decimals == 0 && numberValue % 1 > 0) {
    decimals = 2;
  }
  const formatter = currency
    ? new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: useGrouping,
      })
    : new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: useGrouping,
      });
  return formatter.format(numberValue);
}

export function formatPercent(
  value: number | string | null,
  locale: string,
  decimals: number = 0
): string {
  if (value === null) {
    return "";
  }
  let numberValue = Number(value);
  const formatter = new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return formatter.format(numberValue);
}

export function formatDecimal(
  value: number | string | null,
  locale: string,
  decimals?: null | number,
  useGrouping: "auto" | "min2" | true | false = "auto"
): string {
  if (value === null) {
    return "";
  }
  let numberValue = Number(value);
  const formatter =
    decimals !== null && decimals !== undefined
      ? new Intl.NumberFormat(locale, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
          useGrouping: useGrouping,
        })
      : new Intl.NumberFormat(locale, {
          useGrouping: useGrouping,
        });
  return formatter.format(numberValue);
}

export function formatDate(dateString: string, locale: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
