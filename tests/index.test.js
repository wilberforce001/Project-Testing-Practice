
import { capitalize, reverseString, calculator} from '../src/index';


describe('capitalize', () => {
    test('capitalizes the first character of a string', () => {
        expect(capitalize('hello world')).toBe('Hello world');
    })
    test('capitalizes a single character', () => {
        expect(capitalize('a')).toBe('A');
    })
    test('works with empty string', () => {
        expect(capitalize('')).toBe('');
    })
    test('does not modify already capitalized string', () => {
        expect(capitalize('Hello')).toBe('Hello');
    })
});

describe('reverseString', () => {
    test('Reverses a common string', () => {
        expect(reverseString('hello')).toBe('olleh');
    })
    test('capitalizes a single character', () => {
        expect(reverseString('a')).toBe('a');
    })
    test('works with empty string', () => {
        expect(reverseString('')).toBe('');
    })
    test('reverses correctly a string with punctuation', () => {
        expect(reverseString('Hello!')).toBe('!olleH');
    })
});

describe('calculator', () => {
    test('Tests Addition', () => {
        expect(calculator.add(6,2)).toBe(8);
    })
    test('Tests Subtraction', () => {
        expect(calculator.subtraction(6,2)).toBe(4);
    })
    test('Tests Mutliplication', () => {
        expect(calculator.multiplication(6,2)).toBe(12);
    })
    test('Tests Division', () => {
        expect(calculator.division(6,2)).toBe(3);
    })
});