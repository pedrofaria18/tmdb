export function formatDate(date: string) {
  const dateFormated = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

  const finalDate = `${dateFormated.split(" ")[0]} ${dateFormated
    .split(" ")[2]
    .toLocaleUpperCase()
    .substring(0, dateFormated.split(" ")[2].length - 1)} ${
    dateFormated.split(" ")[4]
  }`;
  return finalDate;
}
