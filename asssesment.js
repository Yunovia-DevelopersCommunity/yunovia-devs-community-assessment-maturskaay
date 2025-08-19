🧠 Coding Assessment – August 2025 1st edition individual assessment.


A block is defined as a word consisting of only one type of letter. For example, aaaa and xx are valid blocks, while bbbcc (two different letters) and xyz (three different letters) are not.

You are given a string S of length N, where S consists only of lowercase English letters. The task is to delete as few letters as possible from S so that the resulting word is composed of at most three blocks.

Write a function:

class Solution { 
    public int solution(String S); 
}


The function should return the length of the longest word that can be obtained after deletions, such that the word contains no more than three blocks.

Examples

Input: S = "aabacbba"
Output: 6
One possible solution is deleting the letters at positions 2 and 7, resulting in "aaacbb" which forms three blocks: "aaa | c | bb". Other valid solutions of length 6 include "aaa | bb | a" and "aa | bbb | a".

Input: S = "aabxbaba"
Output: 6
By deleting 'x' and the last 'b', we obtain "aabbaa", which forms three blocks: "aa | bb | aa". Another valid solution is "aa | bbb | a".

Input: S = "xxxyxxyyyxyyy"
Output: 11
By deleting the first 'y' and the last 'x', the result is "xxxxxyyyyyy", which contains only two blocks: "xxxxx | yyyyyy". This is the only valid solution.

Input: S = "atheaxbtheb"
Output: 5
The only possible solution is "aa | x | bb".

Constraints

3 ≤ N ≤ 200,000

S consists only of lowercase English letters (a–z).

The algorithm must be efficient to handle large inputs.









