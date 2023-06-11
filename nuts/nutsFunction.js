function displayString() {
  const checkedInput = document.querySelector('input:checked');
  if (checkedInput) {
    const category = checkedInput.getAttribute('data-category');
    const value = checkedInput.value;
    const result = document.getElementById('result');
    result.textContent = `I HATE ${getUniqueString(category, value)}.`;
  }
}

function getUniqueString(category, value) {
  switch (category) {
    case 'people':
      switch (value) {
        case 'People1':
          return 'Being late';
        case 'People2':
          return 'People that stop in doorways';
        case 'People3':
          return 'Nosy people';
        default:
          return '';
      }
    case 'driving':
      switch (value) {
        case 'Driving1':
          return 'See-sawing past you on a motorway';
        case 'Driving2':
          return 'Mixed measurement systems (UK specific)';
        case 'Driving3':
          return 'Pulling out slowly from a junction';
        default:
          return '';
      }
    case 'work':
      switch (value) {
        case 'Work1':
          return 'Meta meetings';
        case 'Work2':
          return 'Poorly scoped meetings';
        case 'Work3':
          return 'Trying to note down names and roles during introductions';
        default:
          return '';
      }
    case 'domestic':
      switch (value) {
        case 'Domestic1':
          return 'Infinite kitchen bin capacity';
        case 'Domestic2':
          return 'Other people\'s loos';
        case 'Domestic3':
          return 'Having to talk to someone to cancel a service';
        default:
          return '';
      }
    case 'entertainment':
      switch (value) {
        case 'Entertainment1':
          return 'People who ask what\'s going on in a film, during a film';
        case 'Entertainment2':
          return 'Pubs that don\'t accept dogs';
        case 'Entertainment3':
          return 'Restaurants that take forever to get more drinks';
        default:
          return '';
      }
    case 'travel':
      switch (value) {
        case 'Travel1':
          return 'People using phones on speaker';
        case 'Travel2':
          return 'People walking slowly in front of you';
        case 'Travel3':
          return 'Huge numbers of cushions on a bed';
        default:
          return '';
      }
    default:
      return '';
  }
}