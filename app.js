/* 
Data types:

1. Strings
2. Number
3. Boolean
4. undefined
5. null

6. Arrays
7. Objects

*/

// declare an array
const myStudents = ['Mohammad','Sarah','Ahmed']

// accessing a value in my array
console.log(myStudents[1])


// change a value in the array
myStudents[1] = 'Ebrahim'

console.log(myStudents)


console.log(myStudents.length)


const myName = 'Omar'

console.log(myName.toUpperCase())


// push(): adds an element to the end of the array

myStudents.push('Husain')

console.log(myStudents)


// pop(): removes the last element from the array

myStudents.pop()

console.log(myStudents)



// shift(): remove from the beggening of array
myStudents.shift()
console.log(myStudents)




// unshift() adding to the beggening of the array
myStudents.unshift('Sayed')
console.log(myStudents)



// splice(start, how many element do you want to delete)
myStudents.splice(1,0,'taha')
console.log(myStudents)


// LOOPING:

// console.log(myStudents[1]

for(let i =0; i<myStudents.length;i++){
    console.log(myStudents[i])
}


// for of

for(let oneStudent of myStudents){
    console.log(oneStudent)
}



// forEach():
myStudents.forEach(function(student){
    console.log(student)
})




console.log(myStudents[myStudents.length -1])

console.log(myStudents.at(-1))



// includes and indexOf

// includes(value): checks if value is in array if it is than returns true if not than false

console.log(myStudents)

console.log(myStudents.includes('Taha'.toLocaleLowerCase()))

console.log(myStudents.indexOf('Mariam'))



// slice(start, end): copies array from start to end (NOT INCLUDING END)
const slicedArr = myStudents.slice(1,3)



console.log(slicedArr)
// split(): converts string into array

const welcome = 'WelcOme to SEB'

const splitArr = welcome.split('O')

console.log(splitArr)

// join()
console.log(myStudents.join(''))


/* 
Methods that change(mutate) the original array:

push()
pop()
shift()
unshift()
splice()


dont change the original array:

forEach()
slice()
*/




const copiedArr = [...myStudents,...splitArr]

console.log('myStudents',myStudents)
console.log('copiedStudents',copiedArr)

myStudents.pop()

console.log('myStudents',myStudents)
console.log('copiedStudents',copiedArr)


