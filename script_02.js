const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Sors-moi la liste des titres des livres du CDI
function bookListTitles(bookList){
    output = []
    books.forEach( book => {
        output.push(book.title)
    });
    return output
}
let answer1 = bookListTitles(books)
console.log(answer1)

// Est-ce que tous les livres ont été empruntés au moins une fois ?
function untouchedBookDetector(booksList){
    let output = "Tous les livres ont été empruntés";
    booksList.every(book => {
        if (book.rented == 0){
            return output = "Tous les livres n'ont PAS été empruntés"
        }
    })
    return output;
};
let answer2 = untouchedBookDetector(books)
console.log(answer2)

// Quel est le livre le plus emprunté ?
function mostRentedBook(bookList){
    let mostRentedBook = bookList[0]
    bookList.forEach(book => {
        if (book.rented > mostRentedBook.rented){
            mostRentedBook = book 
        }
    })
    return mostRentedBook
}
let answer3 = mostRentedBook(books)
console.log(answer3)

// Quel est le livre le moins emprunté ?
function leastRentedBook(bookList){
    let leastRentedBook = bookList[0]
    bookList.forEach(book => {
        if (book.rented < leastRentedBook.rented){
            leastRentedBook = book 
        }
    })
    return leastRentedBook
}
let answer4 = leastRentedBook(books)
console.log(answer4)

// Supprime le livre avec l'ID 133712
books.pop(book => book.id == 133712)

console.log(books)