import 'jest';
import { manipulateNumbers, createFullName, getFirstName, getUpperCaseFirstName } from '../src/functions';

describe('Set of tests for manipulation numbers', () => {

    it('should return twice the sum for non zero inputs', () => {
        const result = manipulateNumbers(2, 4)
        expect(result).toBe(12);
    })

    it('should return zero when the two inputs are zero', () => {
        const result = manipulateNumbers(0, 0)
        expect(result).toBe(0);
    })
})

describe('create full name factory', () => {

    it('should create full name correctly', () => {
        const fullName = createFullName('John', 'Smith')
        expect(fullName).toBeDefined()
        expect(fullName.firstName).toBe('John')
        expect(fullName.lastName).toBe('Smith')
    })

    it('should get first name', () => {
        const fullName = createFullName('John', 'Smith')
        expect(getFirstName(fullName)).toBe('John')
    })

    it('should get first name to upper', () => {
        const fullName = createFullName('John', 'Smith')
        expect(getUpperCaseFirstName(fullName)).toBe('JOHN')
    })

})