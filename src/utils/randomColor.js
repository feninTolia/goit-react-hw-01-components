export default function getRandomColor() {
  const letters = '9655756789FCECEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log('color');
  return color;
}
