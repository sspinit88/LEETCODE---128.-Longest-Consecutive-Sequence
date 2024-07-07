/*
128. Longest Consecutive Sequence

Given an unsorted array of integers nums, 
return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. 
Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9



Ваша задача - вернуть длину самой длинной последовательности подряд идущих элементов в неотсортированном массиве целых чисел nums.
Вы должны написать алгоритм, который работает за время O(n).

Вот шаги, которые мы будем следовать:

1. Создайте набор для отслеживания всех уникальных чисел в nums.
2. Пройдите по каждому числу в nums. Если число является началом последовательности (т. е. число минус один не присутствует в наборе), 
   то проверьте каждое следующее число в последовательности и обновите максимальную длину последовательности.
3. Верните максимальную длину последовательности.

Your task is to return the length of the longest consecutive elements sequence in an unsorted array of integers nums. 
You must write an algorithm that runs in O(n) time.

Here are the steps we will follow:

1. Create a set to track all unique numbers in nums.
2. Go through each number in nums. If the number is the start of a sequence (i.e., number minus one is not present in the set), 
   then check each next number in the sequence and update the maximum length of the sequence.
3. Return the maximum length of the sequence.

*/

function longestConsecutive(nums) {
  // Создаем набор для отслеживания всех уникальных чисел в nums
  // Create a set to track all unique numbers in nums
  let numSet = new Set(nums);
  let longestStreak = 0;

  // Проходим по каждому числу в nums
  // Go through each number in nums
  for (let num of numSet) {
    // Если число является началом последовательности
    // If the number is the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Проверяем каждое следующее число в последовательности
      // Check each next number in the sequence
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      // Обновляем максимальную длину последовательности
      // Update the maximum length of the sequence
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  // Возвращаем максимальную длину последовательности
  // Return the maximum length of the sequence
  return longestStreak;
}
