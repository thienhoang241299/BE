const verifyArray = (arr = []) => {
  if (!Array.isArray(arr) || !arr.every((item) => typeof item === "number")) {
    return "Dữ liệu dầu vào phải là một mảng và các phần tử phải là số";
  }
  return true;
};
const arrExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5];
///
console.log("bài tập 1");
const sumArray = (arr = []) => {
  const verified = verifyArray(arr);
  return verified === true
    ? arr.reduce((acc, num) => {
        return acc + num;
      }, 0)
    : verified;
};
console.log(sumArray(arrExample));
console.log("-------------------");
console.log("bài tập 2");
const findMax = (arr = []) => {
  const verified = verifyArray(arr);
  return verified === true ? Math.max(...arr) : verified;
};
console.log(findMax(arrExample));
console.log("-------------------");
console.log("bài tập 3");
const filterEvenNumbers = (arr = []) => {
  const verified = verifyArray(arr);
  return verified === true ? arr.filter((num) => num % 2 === 0) : verified;
};
console.log(filterEvenNumbers(arrExample));
console.log("-------------------");
console.log("bài tập 4");
const countOccurrences = (arr = [], x) => {
  const verified = verifyArray(arr);
  return verified === true
    ? arr.reduce((count, num) => {
        return num === x ? count + 1 : count;
      }, 0)
    : verified;
};
console.log(countOccurrences(arrExample, 5));
console.log("-------------------");
console.log("bài tập 5");
const reverseArray = (arr = []) => {
  const verified = verifyArray(arr);
  return verified === true ? [...arr].reverse() : verified;
};
console.log(reverseArray(arrExample));
console.log("-------------------");
console.log("bài tập 6");
const removeDuplicates = (arr = []) => {
  const verified = verifyArray(arr);
  return verified === true ? [...new Set(arr)] : verified;
};
console.log(removeDuplicates(arrExample));
console.log("-------------------");
console.log("bài tập 7");
const sortArrayAscending = (arr = []) => {
  const verified = verifyArray(arr);
  return verified === true ? [...arr].sort((a, b) => a - b) : verified;
};
console.log(sortArrayAscending(arrExample));
console.log("-------------------");
console.log("bài tập 8");
const findMostFrequent = (arr = []) => {
  const verified = verifyArray(arr);
  if (verified !== true) return verified;

  const obj = {}; // tao obj rong de luu so lan xuat hien
  let maxCount = 0; // so lan hien nhieu nhat
  let mostObj = null; // bien xuat hien nhieu nhat

  for (const num of arr) {
    obj[num] = (obj[num] || 0) + 1; // kiem tra neu phan tu da co trong obj thi tang so lan xuat hien, neu chua co thi gan 1

    if (obj[num] > maxCount) {
      maxCount = obj[num];
      mostObj = num;
    } // neu so lan xuat hien cua phan tu hien tai > so lan xuat hien nhieu nhat thi cap nhat lai mostObj
  }

  return mostObj;
};
console.log(findMostFrequent(arrExample));
console.log("-------------------");
console.log("bài tập 9");
const mergeAndRemoveDuplicates = (arr1 = [], arr2 = []) => {
  const verified1 = verifyArray(arr1);
  const verified2 = verifyArray(arr2);

  if (verified1 !== true || verified2 !== true) {
    return "Dữ liệu đầu vào phải là mảng và các phần tử phải là số";
  }
  const mergedArray = [...arr1, ...arr2];
  return [...new Set(mergedArray)];
};
console.log(mergeAndRemoveDuplicates(arrExample, [1, 2, 3, 14, 15]));
console.log("-------------------");
console.log("bài tập 10");
const isSymmetricArray = (arr = []) => {
  const verified = verifyArray(arr);
  if (verified !== true) return verified;
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(isSymmetricArray(arrExample));
console.log(isSymmetricArray([1, 2, 3, 2, 1]));
console.log(isSymmetricArray([1, 2, 3, 3, 2, 1]));
console.log(isSymmetricArray([1, 2, 3, 5, 2, 1]));
console.log("-------------------");
