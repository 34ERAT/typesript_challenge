// challenge 1 Sum of Positives
function sumOfPositives(num: number[]): number {
  let sumofp = 0;
  for (let x of num) {
    if (x >= 0) sumofp += x;
  }
  return sumofp;
}

//challenge 2 Find Maximum Value
function findMax(num: number[]): number {
  let max = num[0];
  for (let x of num) {
    if (x > max) max = x;
  }
  return max;
}

//challenge 3 Election winner
type candidate = {
  name: string;
  votes: number;
};
function findWinner(candidates: candidate[]): candidate {
  let winner = candidates[0];
  for (let x of candidates) if (x.votes > winner.votes) winner = x;
  return winner;
}

//challenge 4 Longest word
function findLongestWord(words: string[]): string {
  let longest = words[0];
  for (let word of words) if (word.length > longest.length) longest = word;
  return longest;
}

//challenge 5 count Properties
const countProperties = (object: Object): number => Object.keys(object).length;

//challenge 6 Filter by length
function filterByLength(element: string[], num: number): string[] {
  return element.filter((word: string): boolean => word.length >= num);
}

//challenge 7 sum of Even Number
const sumEvenNumbers = (num: number[]): number =>
  num.reduce(
    (acc: number, curr: number): number =>
      curr % 2 == 0 ? acc + curr : acc + 0,
    0,
  );

//challenge 8 Between sumofEven and ood Numbers
function differenceEvenOdd(num: number[]): number {
  let oddsum = 0;
  let evensum = 0;
  num.forEach((element) =>
    element % 2 == 0 ? (evensum += element) : (oddsum += element),
  );
  return evensum - oddsum;
}

//challenge 9 count Truthy
function countTruthy(object: Object): number {
  let truthly = 0;

  for (let x of Object.values(object)) if (x) truthly += 1;
  return truthly;
}

//challenge 10 Average of Numbers
function average(num: number[]): number {
  return (
    num.reduce((prev: number, curr: number): number => prev + curr) / num.length
  );
}

//challenge 11 Linear Search
function linearSearch(numArray: number[], num: number): number {
  for (let index in numArray) {
    if (numArray[index] == num) return parseInt(index);
  }
  return -1;
}

//challenger 12 reverseLinearSearch
function reverseLinearSearch(numArray: number[], num: number): number {
  for (let index = numArray.length - 1; index >= 0; index--) {
    if (numArray[index] == num) return index;
  }
  return -1;
}

//challenge 13  Linear Search All
function linearSearchAll(numArray: number[], num: number): number[] {
  let result: number[] = [];
  for (let index in numArray) {
    if (numArray[index] == num) result.push(parseInt(index));
  }
  return result;
}

//challenge 14 count Occurrences
function countOccurrences(words: string[]): Object {
  return words.reduce((prev: Object, current: string): object => {
    if (prev[current] > 0) prev[current] += 1;
    else prev[current] = 1;
    return prev;
  }, {});
}
//challenge 15 Remover Duplicates
const removeDuplicates = (num: number[]): number[] => [...new Set(num)];

//challenge 16 Most Frequent
function mostFrequent(nums: any[]): string {
  let mostf: string = nums[0] as string;
  let frequence = nums.reduce((acc: Object, current: number): Object => {
    if (!acc[current]) acc[current] = 1;
    acc[current] += 1;
    return acc;
  }, {});
  for (let key in Object.keys(frequence)) {
    if (frequence[key] > frequence[mostf]) mostf = key;
  }
  return mostf;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
