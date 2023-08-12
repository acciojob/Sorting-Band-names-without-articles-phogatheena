//your code here

// Your array of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Aerosmith'];

// Function to remove articles from a band name
function removeArticles(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names in lexicographic order without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the UL element
const ulElement = document.getElementById('band');

// Add each sorted band name to the UL as a list item
bandNames.forEach(name => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
});
