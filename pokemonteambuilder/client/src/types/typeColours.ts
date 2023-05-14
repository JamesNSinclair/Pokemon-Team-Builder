export const getTypeStyle = (type: string) => {
  let color;

  switch (type) {
    case 'Bug':
      color = 'green';
      break;
    case 'Dark':
      color = 'black';
      break;
    case 'Dragon':
      color = 'purple';
      break;
    case 'Electric':
      color = 'yellow';
      break;
    case 'Fairy':
      color = 'pink';
      break;
    case 'Fighting':
      color = 'red';
      break;
    case 'Fire':
      color = 'orange';
      break;
    case 'Flying':
      color = 'skyblue';
      break;
    case 'Ghost':
      color = 'purple';
      break;
    case 'Grass':
      color = 'green';
      break;
    case 'Ground':
      color = 'brown';
      break;
    case 'Ice':
      color = 'lightblue';
      break;
    case 'Normal':
      color = 'gray';
      break;
    case 'Poison':
      color = 'purple';
      break;
    case 'Psychic':
      color = 'magenta';
      break;
    case 'Rock':
      color = 'brown';
      break;
    case 'Steel':
      color = 'silver';
      break;
    case 'Water':
      color = 'blue';
      break;
    default:
      color = 'black'; // Default color for unknown types
      break;
  }

  return {color};
};
