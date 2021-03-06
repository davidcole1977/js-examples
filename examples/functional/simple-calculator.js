function calculate(startingValue, ...funcs) {
	return funcs.reduce((newValue, func, funcsArray) => {
		return func(newValue);
	}, startingValue);
}

function currifyOperator(operatorFunction) {
	return function(value) {
		return operatorFunction.bind(null, value);
	}
}

const add = currifyOperator((value, previousValue) =>  previousValue + value);
const subtract = currifyOperator((value, previousValue) => previousValue - value);
const divideBy = currifyOperator((value, previousValue) => previousValue / value);
const multiplyBy = currifyOperator((value, previousValue) => previousValue * value);

export {
	calculate,
	add,
	subtract,
	divideBy,
	multiplyBy
};
