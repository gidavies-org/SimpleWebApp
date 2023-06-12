function displayString() {
  const checkedInput = document.querySelector('input:checked');
  if (checkedInput) {
    const category = checkedInput.getAttribute('data-category');
    const value = checkedInput.value;
    const result = document.getElementById('result');
    result.textContent = `${getUniqueString(category, value)}.`;
  }
}

function getUniqueString(category, value) {
  switch (category) {
    case 'people':
      switch (value) {
        case 'People1':
          return 'I\'m late';
        case 'People2':
          return 'People stop in doorways';
        case 'People3':
          return 'People are really nosy';
        default:
          return '';
      }
    case 'driving':
      switch (value) {
        case 'Driving1':
          return 'Cars see-saw past you on a motorway';
        case 'Driving2':
          return 'Using mixed measurement systems (UK specific)';
        case 'Driving3':
          return 'People pull out slowly from a junction';
        default:
          return '';
      }
    case 'work':
      switch (value) {
        case 'Work1':
          return 'I have meetings about meetings';
        case 'Work2':
          return 'Meetings are poorly scoped';
        case 'Work3':
          return 'Managing calendar slots with MSFT';
        default:
          return '';
      }
    case 'domestic':
      switch (value) {
        case 'Domestic1':
          return 'The kitchen bin is assumed to have infinite capacity';
        case 'Domestic2':
          return 'Booking tickets for gigs';
        case 'Domestic3':
          return 'Having to talk to someone to cancel a service';
        default:
          return '';
      }
    case 'entertainment':
      switch (value) {
        case 'Entertainment1':
          return 'Someone asks what\'s going on in a film, during a film';
        case 'Entertainment2':
          return 'Pubs don\'t allow dogs';
        case 'Entertainment3':
          return 'Restaurants take forever to get more drinks';
        default:
          return '';
      }
    case 'travel':
      switch (value) {
        case 'Travel1':
          return 'People using phones on speaker';
        case 'Travel2':
          return 'People walk slowly in front of you';
        case 'Travel3':
          return 'I have to move huge numbers of cushions on a bed';
        default:
          return '';
      }
    default:
      return '';
  }
}