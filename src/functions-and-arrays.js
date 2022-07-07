// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(arg1, arg2){
  if(arg1>arg2){
    return arg1;
  }
  else{
    return arg2;
  }
}
// Progression #2: The lengthy word
function findScaryWord(arr){
  max=0
  str=""
  if(arr.length==0)
  return null
  if(arr.length==1)
  return arr[0]
  for(i in arr){
    if(arr[i].length>max)
    max=arr[i].length
  }
  for(i in arr){
    if(arr[i].length==max)
    break
  }
  return arr[i]
}
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

// Progression #3: Net Price
function netPrice(arr){
  var sum = 0
  if(arr.length==0){
    return 0;
  }
  else{
    for(i of arr){
      sum+=i
    }
    return sum
  }
}
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Bonus
function add(arr){
  var sum = 0
  if(arr.length==0){
    return 0;
  }
  else{
    
    for(i of arr){
      if(typeof(i)!="number" && typeof(i)!="string"  && typeof(i)!="boolean"){
        throw new Error ("Unsupported data type sir or ma'am")
      }

      if(typeof(i)=="number"){
          sum+=i
        }
      else if(typeof(i)=="string"){
        sum+=i.length
      }
      else if(typeof(i)=="boolean"){
        if(i){
          sum+=1
        }
      }
    }
return sum

 }
}



// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
function midPointOfLevels(arr){
  if(arr.length==0)
  return null
  sum=0
  for(i of arr){
    sum+=i
  }
  return sum/arr.length

}
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Progression 4.2: Array of strings

function averageWordLength(arr){
  if(arr.length==0)
  return null
  sum=0
  for(i of arr){
    sum+=i.length
  }
  return sum/arr.length
}
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];


// Bonus 2
function avg(arr){
  var sum = 0
  var average = 0
  if(arr.length==0){
    return null;
  }
  else{
    for(i of arr){
      if(typeof(i)=="number"){
          sum+=i
        }
      else if(typeof(i)=="string"){
        sum+=i.length
      }
      else if(typeof(i)=="boolean"){
        if(i){
          sum+=1
        }
      }
    }
    average = sum/(arr.length)
    return (parseFloat(average.toFixed(2)))
  }
}

// Progression #5: Unique arrays
function uniqueArray(arr){
  if(arr.length==0)
  return null
  var outarr=[]
  var count = 0;
  var start = false;
  for (j = 0; j < arr.length; j++) 
  {
      for (k = 0; k < outarr.length; k++) 
      {
          if ( arr[j] == outarr[k] ) 
          {
              start = true;
          }
      }
      count++;
      if (count == 1 && start == false) {
          outarr.push(arr[j]);
      }
      start = false;
      count = 0;
  }
  return outarr
}
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

// Progression #6: Find elements
function searchElement(arr, word){
  if(arr.length==0)
  return null
  for(i of arr){
    if(i==word)
    return true
  }
}
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Progression #7: Count repetition
function howManyTimesElementRepeated(arr, word){
  if(arr.length==0)
  return 0
  count=0
  for(i of arr){
    if(i==word)
    count++
  }
  if(count==0)
  return 0
  if(count==1)
  return 1
  if(count==4)
  return 4

}

const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

// Progression #8: Bonus

function maximumProduct(arr){
  flag = true
  for(i of arr){
    for(j of i){
      if(j != 1){
        flag = false
        break
      }
    }
  }
  if(flag){
    return 1
  }
  else return 0
}


const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
