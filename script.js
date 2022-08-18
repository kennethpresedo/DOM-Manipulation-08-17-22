let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const mainTitleEl =  document.getElementById('main-title');
mainTitleEl.innerHTML = 'El Gran DOM'

  // Part 2
const bodyEl = document.querySelector('body');
bodyEl.style.backgroundColor = 'teal'

  // Part 3
const favThingsEl = document.getElementById('favorite-things');
favThingsEl.removeChild(favThingsEl.lastElementChild)

  // Part 4
specialTitleEl = document.querySelectorAll('.special-title');
for (let specialTitleEls of specialTitleEl) {
specialTitleEls.style.fontSize = '2rem';
}
  // Part 5
const pastRacesEl = document.getElementById('past-races')
if (pastRacesEl.hasChildNodes()) {
pastRacesEl.removeChild(pastRacesEl.children[3]);
}

  // Part 6
const liEl = document.createElement('li');
liEl.textContent = 'Miami'
pastRacesEl.appendChild(liEl)

  // Part 7


  // Part 8
const quoteEl = document.getElementById('quote-title');
quoteEl.addEventListener('click' 


  // Part 9




});
