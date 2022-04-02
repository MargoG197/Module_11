
import { wordReverse } from './index.js';
import { repeatWord } from './index.js';

describe('test reverse', () => {
  it("reverse Mother = rehtoM", () => {
    const result = wordReverse('Mother');
    expect(result).toBe("rehtoM");
  }),
  it("reverse Father = rehtaF", () => {
    const result = wordReverse('Father');
    expect(result).toBe("rehtaF");
  })
});



describe('test word count', () => {
  it("mama 3 = 'mama1, mama2, mama3'", () => {
    const result = repeatWord('mama', 5);
    expect(result).toBe("mama1, mama2, mama3, mama4, mama5");
  }),
  it("ghjk 2 = 'ghjk-1, ghjk-2'", () => {
    const result = repeatWord('ghjk', -2);
    expect(result).toBe("ghjk-1, ghjk-2");
  }),
  it("mountains 0 = 'nothing to display''", () => {
    const result = repeatWord('mountains', 0);
    expect(result).toBe('nothing to display');
  }),
  it("mountains 'NaN' = введены неверные данные", () => {
    const result = repeatWord('mountains', "Nan");
    expect(result).toBe("введены неверные данные");
  })
});