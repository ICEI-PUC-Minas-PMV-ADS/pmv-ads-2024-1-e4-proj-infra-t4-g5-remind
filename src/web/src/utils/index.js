export function dateDiffInMinutes(initialDate, endDate) {
  if (initialDate > endDate) return -1;

  const msPerMinute = 1000 * 60;
  const diffTime = Math.abs(initialDate - endDate);
  const diffMinutes = Math.floor(diffTime / msPerMinute);

  return diffMinutes;
}

export function messageDateDiffInMinutes(date) {
  let remainingTime = dateDiffInMinutes(new Date(), new Date(date));
  let remainingMessage = '';

  if (remainingTime < 0) {
    return 'Tarefa atrasada !';
  }

  if (remainingTime > 1440) {
    remainingMessage = `${Math.floor(remainingTime)} dias restantes`;
  } else if (remainingTime % 60 == 0) {
    remainingMessage = `${remainingTime} horas restantes`;
  } else if (remainingTime / 60 > 1) {
    remainingMessage = `${Math.floor(remainingTime / 60)} horas e ${(remainingTime % 60) + 1} minutos restantes`;
  } else {
    remainingMessage = `${remainingTime} minutos restantes`;
  }

  return remainingMessage;
}
