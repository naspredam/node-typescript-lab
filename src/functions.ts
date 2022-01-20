import {FullName} from './types';

const sum = (x: number, y: number): number => x + y

export const manipulateNumbers = (x: number, y: number): number => 2 * sum(x, y)

export const createFullName = (firstName: string, lastName2: string): FullName => ({
    firstName,
    lastName: lastName2
})