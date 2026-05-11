export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value)
}
