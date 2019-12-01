import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionaity', () => {
  it('returns false when passed no arguments', () => {
    const expected = false;
    const actual = isAnagram();
    expect(actual).to.deep.equal(expected);
  });
  it('returns false when passed only one argument', () => {
    const expected = false;
    const actual = isAnagram('string');
    expect(actual).to.deep.equal(expected);
  });

  it('returns true when arguments are anagrams', () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');
    expect(actual).to.deep.equal(expected);
  });
  it('returns true when an argument contains a space', () => {
    const expected = true;
    const actual = isAnagram('conversation', 'voices rant on');
    expect(actual).to.deep.equal(expected);
  });
  it('returns true even when capitalization differs', () => {
    const expected = true;
    const actual = isAnagram('LISTEN', 'silent');
    expect(actual).to.deep.equal(expected);
  });
});
