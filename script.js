let quoteList = [
  {
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    author: "—Walt Disney",
  },
  {
    quote: "The secret of getting ahead is getting started",
    author: "Mark Twain",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "―Chinese Proverb",
  },
  {
    quote: "“It’s hard to beat a person who never gives up.",
    author: "Babe Ruth",
  },
  {
    quote:
      "“I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.",
    author: "Leah Busque",
  },
  {
    quote:
      "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.",
    author: "Joss Whedon",
  },
  {
    quote: "Do one thing every day that scares you",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "It’s no use going back to yesterday, because I was a different person then.",
    author: "Lewis Carroll",
  },
  {
    quote:
      "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
    author: "Socrates",
  },
  {
    quote:
      "Do what you feel in your heart to be right―for you’ll be criticized anyway",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "You can either experience the pain of discipline or the pain of regret. The choice is yours",
    author: "Paulo Coelho",
  },
  {
    quote:
      "If something is important enough, even if the odds are stacked against you, you should still do it",
    author: "Elon Musk",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great",
    author: "Unknown",
  },
];

let quoteEle = document.getElementById("quote");

let authorEle = document.getElementById("author");

function getLocalQuotes() {
  let i = Math.floor(Math.random() * quoteList.length);
  quoteEle.innerText = quoteList[i].quote;
  authorEle.innerText = "--" + " " + quoteList[i].author;
}
document.getElementById("getQuote").onclick = getLocalQuotes;
