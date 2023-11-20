const books = [
  { title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7 },
  { title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4 },
  { title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2 },
  { title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9 },
  { title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8 },
  { title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1 },
  { title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5 },
];

// Zadanie 6
const zadanie6 = (books) => {

  const parzyste = (number) => number % 2 === 0;
  const Y = (genre) => genre.toLowerCase().endsWith('y');
  const literyWTytule = (title) => title.replace(/\s/g, '').length;

  const warunki = (book) => parzyste(book.pages) && Y(book.genre);
  const countLetters = (accumulator, book) => accumulator + literyWTytule(book.title);

  return books.filter(warunki).reduce(countLetters, 0);

};

console.log(zadanie6(books));

// Zadanie 7
const zadanie7 = (books) => {

  const parzyste = (number) => number % 2 !== 0;
  const numerWTytule = (title) => /\d/.test(title);

  const warunki = (book) => book.rating > 5 && parzyste(book.pages) && numerWTytule(book.title);

  return books.filter(warunki).length;

};

console.log(zadanie7(books));

// Zadanie 8
const zadanie8 = (books) => {

  const sortByTitleLengthDesc = (a, b) => b.title.length - a.title.length;

  const secondLongestTitle = books
    .sort(sortByTitleLengthDesc)
    .map((book) => book.title)
    .filter((title, index, titles) => title.length < titles[0].length)[1];

  return secondLongestTitle;

};

console.log(zadanie8(books));