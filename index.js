const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Homework 3</h1>`;

// PROBLEM 1
const q1 = document.createElement('div');
appDiv.append(q1);
reversenumber = (number) => {
  return number.toString().split('').reverse().join('');
};
q1.innerHTML = `<h1>question 1: ${reversenumber(32243)} `;

//PROBLEM 2
const q2 = document.createElement('div');
appDiv.append(q2);
palindrome = (string) => {
  return string === string.split('').reverse().join('');
};
q2.innerHTML = `<h1> question 2: ${palindrome('madam')} `;

//PROBLEM 3

const q3 = document.createElement('div');
appDiv.append(q3);
q3.innerHTML = `<h1>question 3: ${allcombinations('dog')} `;
function allcombinations(string) {
  var stack = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      stack.push(string.slice(i, j));
    }
  }
  return stack;
}

// //PROBLEM 4

const q4 = document.createElement('div');
appDiv.append(q4);
alphabetical = (string) => {
  return string.split('').sort().join('');
};
q4.innerHTML = `<h1> question 4: ${alphabetical('webmaster')} `;

//PROBLEM 5

const q5 = document.createElement('div');
appDiv.append(q5);

firstupper = (string) => {
  const stringArr = string.split(' ');
  newArr = [];
  for (let i of stringArr) {
    i = i[0].toUpperCase() + i.slice(1);
    newArr.push(i);
  }
  return newArr.join(' ');
};

q5.innerHTML = `<h1>question 5: ${firstupper('the quick brown fox')} `;

//PROBLEM 6

const q6 = document.createElement('div');
appDiv.append(q6);
longestword = (string) => {
  const stringarr = string.split(' ');
  const longest = stringarr.reduce((acc, cur) => {
    return acc.length > cur.length ? acc : cur;
  }, []);
  return longest;
};
q6.innerHTML = `<h1> question 6: ${longestword('web development tutorial')}`;

//PROBLEM 7

const q7 = document.createElement('div');
appDiv.append(q7);
q7.innerHTML = `<h1> question 7: ${func7('the quick brown fox')}
 </h1>`;
function func7(string) {
  const stringarr = string.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i of stringarr) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  return count;
}

//PROBLEM 8

const q8 = document.createElement('div');
appDiv.append(q8);
primecheck = (number) => {
  if (number <= 3 && number > 0) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
};
q8.innerHTML = `<h1>question 8: ${primecheck(21)} </h1>`;

//PROBLEM 9

const qusetion9 = document.createElement('div');
appDiv.append(qusetion9);
checktype = (...arg) => {
  const newArr = [];
  for (let i = 0; i < arg.length; i++) {
    newArr.push(typeof arg[i]);
  }
  return newArr;
};
qusetion9.innerHTML = `<h1>question 9: ${checktype(1, [], 'dsad')} </h1>`;

//PROBLEM 10

const qusetion10 = document.createElement('div');
appDiv.append(qusetion10);
identitymatrix = (number) => {
  let matrix = [];
  for (let i = 0; i < number; i++) {
    matrix[i] = [];
    for (let j = 0; j < number; j++) {
      matrix[i][j] = [];
    }
  }
  return matrix;
};

qusetion10.innerHTML = `<h1>question 10: ${identitymatrix(10)}</h1>`;

//PROBLEM 11

const q11 = document.createElement('div');
appDiv.append(q11);
lowhigh = (array) => {
  array.sort((a, b) => a - b);
  return [array[1], array[array.length - 2]];
};
q11.innerHTML = `<h1>question 11  : ${lowhigh([1, 2, 3, 4, 5, 6, 7, 8])} </h1>`;

//PROBLEM 12

const q12 = document.createElement('div');
appDiv.append(q12);
perfect = (number) => {
  let sum = 1;
  let initializer = number / 2;
  for (let i = initializer; i > 1; i = Math.ceil(i / 2)) {
    sum += i;
  }
  return sum === number;
};
q12.innerHTML = `<h1>aquestion 12  : ${perfect(28)}</h1>`;

//PROBLEM 13

const q13 = document.createElement('div');
appDiv.append(q13);
factors = (number) => {
  const newar = [];
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      newar.push(i);
    }
  }
  return newar;
};
q13.innerHTML = `<h1>question 13  : ${factors(20)}</h1>`;

//PROBLEM 14

const q14 = document.createElement('div');
appDiv.append(q14);
findcoins = (number, array) => {
  let total = number;
  while (total !== 0) {
    if (total >= array[0]) {
      total = total - array[0];
      console.log(array[0]);

      return [array[0]].concat(findcoins(total, array));
    } else {
      array.shift();
      return findcoins(total, array);
    }
  }
};
q14.innerHTML = `<h1> question 14  : ${findcoins(46, [25, 10, 5, 2, 1])}</h1>`;

//PROBLEM 15

const q15 = document.createElement('div');
appDiv.append(q15);
exponent = (base, exp) => {
  return Math.pow(base, exp);
};
q15.innerHTML = `<h1>answer for question 15  : ${exponent(2, 10)}</h1>`;

//PROBLEM 16

const q16 = document.createElement('div');
appDiv.append(q16);
findunique = (string) => {
  let newArr = [];
  for (let i of string) {
    if (!newArr.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
};
q16.innerHTML = `<h1>answer for question 16  : ${findunique(
  'dasdasdasasdasdasdvcxzvcret1233334'
)} </h1>`;

//PROBLEM 17

const q17 = document.createElement('div');
appDiv.append(q17);
countcharacters = (string) => {
  let newArr = [];
  for (let i of string) {
    newArr[i] ? newArr[i]++ : (newArr[i] = 1);
  }
  console.log('17 is ', newArr);
  return newArr;
};
q17.innerHTML = `<h1>answer for question 17 is in the console : ${countcharacters(
  'rsgthfscgsrhcgcs'
)} </h1>`;

//PROBLEM 18

const q18 = document.createElement('div');
appDiv.append(q18);
binarysearch = (target, array) => {
  let start = 0,
    end = array.length - 1,
    middle;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};
q18.innerHTML = `<h1>answer for question 18  : ${binarysearch(
  5,
  [1, 2, 4, 3, 5, 7, 8, 9]
)}</h1>`;

console.log('the index is', binarysearch(5, [1, 2, 4, 3, 5, 7, 8, 9]));

//PROBLEM 19

const q19 = document.createElement('div');
appDiv.append(q19);
larger = (number, array) => {
  return array.filter((n) => n > number).join(' ');
};
q19.innerHTML = `<h1>answer for question 19  : ${larger(
  5,
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
)} </h1>`;

//PROBLEM 20

const q20 = document.createElement('div');
appDiv.append(q20);
randomstringID = (number) => {
  const stringId = 'abcdefghijklmnopqrstuvwxyz123456789';
  let string = '';
  for (let i = 0; i < number; i++) {
    string += stringId.charAt(Math.floor(Math.random() * stringId.length));
  }
  return string;
};

q20.innerHTML = `<h1>answer for question 20  : ${randomstringID(10)} </h1>`;

//PROBLEM 21

const q21 = document.createElement('div');
appDiv.append(q21);
subsets = (number, array) => {
  return array
    .reduce(
      (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
      [[]]
    )
    .filter((subset) => subset.length === number);
};
q21.innerHTML = `<h1>answer for question 21  : ${subsets(2, [1, 2, 3])}</h1>`;

//PROBLEM 22

const q22 = document.createElement('div');
appDiv.append(q22);
countletter = (string, strings) => {
  count = 0;
  for (let i of strings) {
    if (i === string) {
      count++;
    }
  }
  return count;
};
q22.innerHTML = `<h1>answer for question 22  : ${countletter(
  'a',
  'adasaaavcxvcxvxv'
)} </h1>`;

//PROBLEM 23

const q23 = document.createElement('div');
appDiv.append(q23);
firstnonrep = (strings) => {
  const Arr = {};
  for (let i of strings) {
    Arr[i] ? Arr[i]++ : (Arr[i] = 1);
  }
  for (let j of Object.keys(Arr)) {
    if (Arr[j] === 1) {
      return j;
    }
  }
  return -1;
};

q23.innerHTML = `<h1>answer for question 23  : ${firstnonrep(
  'amzdcasaaavcxvcxvxve'
)} </h1>`;

//PROBLEM 24

const q24 = document.createElement('div');
appDiv.append(q24);
bubblesort = (array) => {
  let swapped = false;
  for (let i = 0; i < array.length; i++) {
    swapped = false;

    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
};
q24.innerHTML = `<h1>answer for question 24  : ${bubblesort([
  12, 34, 56, 78, 89, 884, 3123, 2,
])}</h1>`;

//PROBLEM 25

const q25 = document.createElement('div');
appDiv.append(q25);
listcountry = (array) => {
  const answer = array.reduce((prev, curr) => {
    return prev.length < curr.length ? curr : prev;
  }, []);
  return answer;
};
q25.innerHTML = `<h1>answer for question 25  : ${listcountry([
  'Australia',
  'United States of America1',
  'Germany',
  'United States of America',
])}</h1>`;

//PROBLEM 26

const q26 = document.createElement('div');
appDiv.append(q26);
substring = (string) => {
  let start = 0,
    longind = [0, 1],
    charthere = {};

  for (let end = 0; end < string.length; end++) {
    const startChar = string[end];
    if (startChar in charthere) {
      start = Math.max(start, charthere[startChar] + 1);
    }
    if (longind[1] - longind[0] < end + 1 - start) {
      longind = [start, end + 1];
    }
    charthere[startChar] = end;
  }
  return string.slice(longind[0], longind[1]);
};
q26.innerHTML = `<h1>answer for question 26  : ${substring(
  'welcometonewyork'
)} <br></h1>`;

//PROBLEM 27

const q27 = document.createElement('div');
appDiv.append(q27);
longestpalindrome = (string) => {
  const emptyArr = [];
  const palindrome = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      emptyArr.push(string.slice(i, j));
    }
  }
  for (let i of emptyArr) {
    if (i.length > 1) {
      i == i.split('').reverse().join('') ? palindrome.push(i) : '';
    }
  }
  return palindrome.reduce((prev, curr) => {
    return prev.length > curr.length ? prev : curr;
  });
};
q27.innerHTML = `<h1>answer for question 27 : ${longestpalindrome(
  'therisadbeadae'
)} </h1>`;

//PROBLEM 28

const q28 = document.createElement('div');
appDiv.append(q28);
passjsfunction = (num, func) => {
  const Arr = [];
  for (let i = 1; i <= num; i++) {
    func(i) ? Arr.push(i) : '';
  }
  return Arr;
};
q28.innerHTML = `<h1>answer for question 28 : ${passjsfunction(
  10,
  (nums = (num) => num % 2 === 0)
)} <br>
</h1>`;

//PROBLEM 29

const q29 = document.createElement('div');
appDiv.append(q29);
heresthename = () => {
  return (() => heresthename.name)();
};
q29.innerHTML = `<h1>answer for question 29 : ${heresthename()}</h1>`;
