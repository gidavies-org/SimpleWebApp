function displayString() {
  const checkedInput = document.querySelector('input:checked');
  if (checkedInput) {
    const category = checkedInput.getAttribute('data-category');
    const value = checkedInput.value;
    const result = document.getElementById('result');
    result.textContent = `It drives me nuts when ${getUniqueString(category, value)}.`;
  }
}

function getUniqueString(category, value) {
  switch (category) {
    case 'people':
      switch (value) {
        case 'People1':
          return 'I\'m late';
        case 'People2':
          return 'people stop in doorways';
        case 'People3':
          return 'Nosy people';
        default:
          return '';
      }
    case 'driving':
      switch (value) {
        case 'Driving1':
          return 'see-saw past you on a motorway';
        case 'Driving2':
          return 'using mixed measurement systems (UK specific)';
        case 'Driving3':
          return 'people pull out slowly from a junction';
        default:
          return '';
      }
    case 'work':
      switch (value) {
        case 'Work1':
          return 'attending meta meetings';
        case 'Work2':
          return 'meetings are poorly scoped';
        case 'Work3':
          return 'I\'m trying to note down names and roles during introductions';
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
          return 'people who ask what\'s going on in a film, during a film';
        case 'Entertainment2':
          return 'pubs don\'t allow dogs';
        case 'Entertainment3':
          return 'restaurants take forever to get more drinks';
        default:
          return '';
      }
    case 'travel':
      switch (value) {
        case 'Travel1':
          return 'people using phones on speaker';
        case 'Travel2':
          return 'people walk slowly in front of you';
        case 'Travel3':
          return 'I have to move huge numbers of cushions on a bed';
        default:
          return '';
      }
    default:
      return '';
  }
}