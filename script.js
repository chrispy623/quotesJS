const quotes = [
    {quote:"Love For All, Hatred For None.",
    name:"Khalifatul Masih III"
    },
    {quote:"Change the world by being yourself.",
    name:"Amy Poehler"
    },
    {quote:"Every moment is a fresh beginning.",
    name:"T.S Eliot"
    },
    {quote:"Never regret anything that made you smile.",
    name:"Mark Twain"
    },
    {quote:"Everything you can imagine is real.",
    name:"Pablo Picasso"
    },
    {quote:"Simplicity is the ultimate sophistication.",
    name:"Lenoardo Da Vinci"
    },
    {quote:"Whatever you do, do it well.",
    name:"Walt Disney"
    },
    {quote:"What we think, we become.",
    name:"Buddha"
    }
  ];
  
  let quoteBtn = document.querySelector('#quoteBtn');
  let quoteAuthor = document.querySelector('#quoteAuthor');
  let quote = document.querySelector('#quote');
  
  quoteBtn.addEventListener('click', displayQuote);
  
  function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
  }