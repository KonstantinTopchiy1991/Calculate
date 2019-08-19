describe('plus works calculate', function () {

    const testedData = [
        {
            'symbols': ['2', '1', '+', '4', '5', '='],
            'expected': '66'
        },
        {
            'symbols': ['3', '5', '+', '1', '1', '='],
            'expected': '46'
        },
        {
            'symbols': ['8', '+', '2', '1', '='],
            'expected': '29'
        },
        {
            'symbols': ['1', '9', '+', '3', '2', '='],
            'expected': '51'
        },
        {
            'symbols': ['1', '9', '+', '0',  '='],
            'expected': '19'
        },
    ];

    let calculate = null;

    before(function () {
        calculate = new Calculate();
    });

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            for ( let symbol  of testSuit['symbols']) {
                calculate.operation(symbol);
            }

            assert.equal(testSuit['expected'], calculate.memoryResult );
        });
    }
});


describe('minus works calculate', function () {

    const testedData = [
        {
            'symbols': ['2', '1', '-', '4', '5', '='],
            'expected': '-24'
        },
        {
            'symbols': ['4', '1', '-', '1', '1', '='],
            'expected': '30'
        },
        {
            'symbols': ['8', '-', '7', '='],
            'expected': '1'
        },
        {
            'symbols': ['9', '3', '-', '6', '7', '='],
            'expected': '26'
        },
        {
            'symbols': ['0', '-', '6', '7', '='],
            'expected': '-67'
        },
    ];

    let calculate = null;

    before(function () {
        calculate = new Calculate();
    });

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            for ( let symbol  of testSuit['symbols']) {
                calculate.operation(symbol);
            }

            assert.equal(calculate.memoryResult, testSuit['expected']);
        });
    }
});

describe('multiplication works calculate', function () {

    const testedData = [
        {
            'symbols': ['2', '1', '*', '4', '5', '='],
            'expected': '945'
        },
        {
            'symbols': ['1', '1', '*', '1', '1', '='],
            'expected': '121'
        },
        {
            'symbols': ['8', '*', '7', '='],
            'expected': '56'
        },
        {
            'symbols': ['2', '3', '*', '7', '='],
            'expected': '161'
        },
        {
            'symbols': ['4', '3', '*', '0', '='],
            'expected': '0'
        }
    ];

    let calculate = null;

    before(function () {
        calculate = new Calculate();
    });

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            for ( let symbol  of testSuit['symbols']) {
                calculate.operation(symbol);
            }

            assert.equal(calculate.memoryResult, testSuit['expected']);
        });
    }
});

describe('divide works calculate', function () {

    const testedData = [
        {
            'symbols': ['2', '4', '/', '1', '6', '='],
            'expected': '1.5'
        },
        {
            'symbols': ['1', '1', '/', '1', '1', '='],
            'expected': '1'
        },
        {
            'symbols': ['84', '/', '14', '='],
            'expected': '6'
        },
        {
            'symbols': ['2', '4', '/', '88', '='],
            'expected': '0.272727'
        },
        {
            'symbols': ['2', '4', '/', '0', '='],
            'expected': 'Infinity'
        }
    ];

    let calculate = null;

    before(function () {
        calculate = new Calculate();
    });

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            for ( let symbol  of testSuit['symbols']) {
                calculate.operation(symbol);
            }

            assert.equal(calculate.memoryResult, testSuit['expected']);
        });
    }
});


describe('CE works calculate', function () {

    const testedData = [
        {
            'symbols': ['1', '4', '+', '1', '6', 'ce'],
            'expected': '14'
        },
        {
            'symbols': ['3', '7', '-', '1', '8', 'ce'],
            'expected': '51'
        },
        {
            'symbols': ['20', '*', '14', 'ce'],
            'expected': '31'
        },
        {
            'symbols': ['1', '0', '*', '88', 'ce'],
            'expected': '310'
        },
    ];

    let calculate = null;

    before(function () {
        calculate = new Calculate();
    });

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            for ( let symbol  of testSuit['symbols']) {
                calculate.operation(symbol);
            }

            assert.equal(calculate.memoryResult, testSuit['expected']);
        });
    }
});


describe('C works calculate', function () {

    const testedData = [
        {
            'symbols': ['1', '4', '+', '1', '6', 'c'],
            'expected': ''
        },
        {
            'symbols': ['3', '7', '-', '1', '8', 'c'],
            'expected': ''
        },
        {
            'symbols': ['20', '*', '14', 'c'],
            'expected': ''
        },
        {
            'symbols': ['1', '0', '/', '88', 'c'],
            'expected': ''
        },
    ];

    let calculate = null;

    before(function () {
        calculate = new Calculate();
    });
    after(function () {

    });

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            for ( let symbol  of testSuit['symbols']) {
                calculate.operation(symbol);
            }

            assert.equal(calculate.memoryResult, testSuit['expected']);
        });
    }
});



