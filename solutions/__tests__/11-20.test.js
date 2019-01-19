import getWordsWithPrefix from '../11-20/Problem11';
import { climbStairs1, climbStairs2 } from '../11-20/Problem12';
import kLongestSubstring from '../11-20/Problem13';
import selectRandomizer from '../11-20/Problem15';
import Log from '../11-20/Problem16';

describe('Problems 11 - 20', () => {
  test('Problem 11 Get all words with prefix', () => {
    expect(getWordsWithPrefix('de', ['dog', 'deer', 'deal'])).toEqual(
      expect.arrayContaining(['deer', 'deal'])
    );
    expect(getWordsWithPrefix('de', ['dog', 'deer', 'deal'])).toEqual(
      expect.not.arrayContaining(['dog'])
    );
    expect(getWordsWithPrefix('de', ['dog', 'deer', 'deal'])).toHaveLength(2);

    expect(getWordsWithPrefix('d', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.arrayContaining(['dog', 'deer', 'deal'])
    );
    expect(getWordsWithPrefix('d', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['cat'])
    );
    expect(
      getWordsWithPrefix('d', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(3);

    expect(getWordsWithPrefix('cat', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.arrayContaining(['cat'])
    );
    expect(getWordsWithPrefix('cat', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['dog', 'deer', 'deal'])
    );
    expect(
      getWordsWithPrefix('cat', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(1);

    expect(getWordsWithPrefix('f', ['dog', 'deer', 'deal', 'cat'])).toEqual([]);
    expect(getWordsWithPrefix('f', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['dog', 'deer', 'deal', 'cat'])
    );
    expect(
      getWordsWithPrefix('f', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(0);

    expect(getWordsWithPrefix('fr', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      []
    );
    expect(getWordsWithPrefix('fr', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['dog', 'deer', 'deal', 'cat'])
    );
    expect(
      getWordsWithPrefix('fr', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(0);
  });

  test('Problem 12 Climbing Stairs', () => {
    expect(climbStairs1(4)).toBe(5);
    expect(climbStairs2(4, [1, 2])).toBe(5);

    expect(climbStairs2(4, [1, 2, 3])).toBe(7);
    expect(climbStairs2(7, [1, 3, 5])).toBe(12);
  });

  test('Problem 13 Longest Substring With K Distinct Characters', () => {
    expect(kLongestSubstring('abcba', 2)).toBe('bcb');
    expect(kLongestSubstring('abaacca', 2)).toBe('aacca');
    expect(kLongestSubstring('eceba', 2)).toBe('ece');

    // can be any one of these values
    expect(['aa', 'bb', 'cc']).toContain(kLongestSubstring('aabbcc', 1));
    expect(['aabb', 'bbcc']).toContain(kLongestSubstring('aabbcc', 2));
    expect(kLongestSubstring('aabbcc', 3)).toBe('aabbcc');
    expect(kLongestSubstring('aaaccc', 2)).toBe('aaaccc');

    expect(kLongestSubstring('abcbbbbcccbdddadacb', 2)).toBe('bcbbbbcccb');
    expect(kLongestSubstring('abcadcacacaca', 3)).toBe('cadcacacaca');
  });

  test('Problem 15 Select Random Element From Stream of Elements', () => {
    const stream1 = [1, 2, 3, 4, 5];
    const stream2 = [6, 7, 8, 9, 10];
    const stream3 = [11, 12, 13, 14, 15];
    const randomizer = selectRandomizer();

    const rand1 = randomizer(stream1);
    const rand2 = randomizer(stream2);
    const rand3 = randomizer(stream3);

    expect([1, 2, 3, 4, 5]).toContain(rand1);
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toContain(rand2);
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).toContain(
      rand3
    );
  });

  test('Problem 16 Record and Get ith last element', () => {
    const orderLog = new Log(5);
    orderLog.record(111);
    orderLog.record(222);
    orderLog.record(333);
    orderLog.record(444);
    orderLog.record(555);

    expect(orderLog.getLast(1)).toBe(555);
    expect(orderLog.getLast(2)).toBe(444);
    expect(orderLog.getLast(3)).toBe(333);
    expect(orderLog.getLast(4)).toBe(222);
    expect(orderLog.getLast(5)).toBe(111);

    orderLog.record(666);
    orderLog.record(777);

    expect(orderLog.getLast(1)).toBe(777);
    expect(orderLog.getLast(2)).toBe(666);
    expect(orderLog.getLast(3)).toBe(555);
    expect(orderLog.getLast(4)).toBe(444);
    expect(orderLog.getLast(5)).toBe(333);
  });
});