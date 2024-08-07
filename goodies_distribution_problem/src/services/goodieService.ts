import { Goodie } from '../models/goodie';

export const distributeGoodies = (numEmployees: number, goodies: Goodie[]): { selectedGoodies: Goodie[], minDifference: number } => {
    goodies.sort((a, b) => a.price - b.price);

    let minDifference = Number.MAX_SAFE_INTEGER;
    let selectedGoodies: Goodie[] = [];

    for (let i = 0; i <= goodies.length - numEmployees; i++) {
        const currentGoodies = goodies.slice(i, i + numEmployees);
        const difference = currentGoodies[currentGoodies.length - 1].price - currentGoodies[0].price;

        if (difference < minDifference) {
            minDifference = difference;
            selectedGoodies = currentGoodies;
        }
    }

    return {
        selectedGoodies,
        minDifference
    };
};