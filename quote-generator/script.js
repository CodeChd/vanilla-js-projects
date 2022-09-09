

// Get quotes from API

// Selected elements
const quoteContainer = document.getElementById('q-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-q')



// binding json data as array
let apiQuotes   = [];

// Adding the elements to the dom
const newQuotes=() =>{
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)] 
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }

    if(quote.text.length > 100){
        quoteText.classList.add('long-q')
    }else{
        quoteText.classList.remove('long-q')
    }
    quoteText.textContent = quote.text;
}

// fetch
async function Quotes(){
    const url =  'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
            const response = await  fetch(url);
            apiQuotes = await response.json();
            newQuotes();
    } catch (err) {
        console.log('OOPS THERE IS AN ERROR', err)
    }
} 

Quotes();

// Make a tweet
const tweet = () =>{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, 'blank')

}


// Events
newQuoteBtn.addEventListener('click',newQuotes)
twitterBtn.addEventListener('click',tweet)

