import { maxHeaderSize } from "http";

function sum(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


class SomeMath {

    avg(...numbers) {
        return sum(...numbers) / numbers.length;
    }

    max(...numbers) {
        let cerrentNum = 0;
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {

                if (numbers[i] < numbers[j]) {
                    cerrentNum = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = cerrentNum;
                }
            }
        }
        return numbers;
    }
    marge(a, b) {
        console.log(a, b);
        console.log('ll');

        return {
            ...a,
            ...b
        }
    }

}
export default new SomeMath();