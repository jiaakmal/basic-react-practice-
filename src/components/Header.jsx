import reactImg from '../assets/react-core-concepts.png'

const reactDescription = ["Core", "Fundamental", "Curtail"];
function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export function Header() {
    const description = reactDescription[randomInt(2)];
    return (
      <header>
        <img src={reactImg} />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }