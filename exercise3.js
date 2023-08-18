

//Write a js program to create a world meaning dictionary of 5 words.

const dictionary = {
    hello: 'a greeting or expression of goodwill',
    cat: 'a small domesticated carnivorous animal',
    dog: 'a domesticated carnivorus animal',
    apple: 'a round fruit with red or green skin',
    sun: 'the start around which the earth orbits, a source of light and heat'
};
console.log(dictionary.hello);
// adding a new word

dictionary.moon = 'earth only natural satellite';
dictionary.cup = 'a usually open bowl-shaped drinking vessel often having a handle and a stem and base and sometimes a lid'

// we can update  an existing word
dictionary.dog = 'a domensticated descendant of the wolf';
// before: a domesticated carnivorus animal AFTER: a domensticated descendant of the wolf
console.log(dictionary);

// delete the updated dictionary 
delete dictionary.apple;
console.log(dictionary);
