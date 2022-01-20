import * as R from 'ramda'
import { FullName } from './types'

const sum = (x: number, y: number): number => x + y

export const manipulateNumbers = (x: number, y: number): number => 2 * sum(x, y)

export const createFullName = (firstName: string, lastName2: string): FullName => ({
    firstName,
    lastName: lastName2
})

export const getFirstName = ({ firstName }: FullName): string => firstName

export const getUpperCaseFirstName = R.compose(R.toUpper, getFirstName)

export const createFullNameCurry = R.curry(createFullName)

export const createFullNameWithUpperFirstName = R.compose(createFullNameCurry, R.toUpper)