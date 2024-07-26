function List(){
    // const fruits = ['mango','banana','apple']
    // fruits.sort() 
    // const listItems = fruits.map(fruit => <li>{fruit}</li>);
    // return(<ol>{listItems}</ol>)
    const fruits = [
        {id: 1,name: 'apple', calories: 95},
        {id: 2, name: 'orange', calories: 45},
        {id: 3, name: 'banana', calories: 105},
        {id: 4, name: 'coconut', calories: 159},
        {id: 5, name: 'pineapple', calories: 37}
    ];
    

    // Alphabetical
    fruits.sort((a,b)=> a.name.localeCompare(b.name)); {/* Lexicographic: The phrase lexicographic order means in alphabetical order. it is a common
                               term in computer science. it may indicate that numbers are to be treated as strings so 10
                               comes before 2 because there is no positional weighting and the symbol 1 comes before 2.*/}
    // Reverse alphabetical
    fruits.sort((a,b)=> b.name.localeCompare(a.name));

    // Numeric 
    fruits.sort((a,b)=> a.calories - b.calories);   
    
    // Reverse Numeric
    fruits.sort((a,b)=> b.calories - a.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = highCalFruits.map(highCalFruit => <li key ={highCalFruit.id}>
        {highCalFruit.name}: &nbsp; {/* non breaking space character sp- space*/}
        <b>{highCalFruit.calories}</b></li>);
    return(<ol>{listItems}</ol>)
}
export default List