window.addEventListener('load', () => {
  document.getElementById('setTime').addEventListener('click', () => {
    const hoursInput: HTMLInputElement = document.getElementById('hours') as HTMLInputElement;
    const hours: number = Number.parseInt(hoursInput.value);
    const minutesInput: HTMLInputElement = document.getElementById('minutes') as HTMLInputElement;
    const minutes: number = Number.parseInt(minutesInput.value);
    const secondsInput: HTMLInputElement = document.getElementById('seconds') as HTMLInputElement;
    const seconds: number = Number.parseInt(secondsInput.value);

    alert(`${hours}:${minutes}:${seconds}`);
  });

  document.getElementById('tick').addEventListener('click', () => {
    alert('tick');
  });
});
