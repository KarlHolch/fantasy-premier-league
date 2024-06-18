const collectionNameMap = {
    events: 'Gameweeks',
    teams: 'Teams',
    elements: "Players",
    // Add more mappings as needed
  };
  
  function getCustomCollectionName(key) {
    // Return the custom name if it exists, otherwise return the original key
    return collectionNameMap[key] || key;
  }