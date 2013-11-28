function testNow() {
    var result = '';

    var suite = new Benchmark.Suite;
    suite.add('Native JS', function () {
        new Date();
    })
        .add('Moment', function () {
            moment();
        })
        .add('Tempus', function () {
            tempus();
        })
        .on('cycle', function (event) {
            result += String(event.target) + ' \n';
        })
        .on('complete', function () {
            result += 'Fastest is ' + this.filter('fastest').pluck('name');
            alert(result);
        })
        .run({ 'async': false });
}

function testFromDate() {
    var result = '';

    var suite = new Benchmark.Suite;
    suite.add('Native JS', function () {
        new Date();
    })
        .add('Moment', function () {
            moment(new Date());
        })
        .add('Tempus', function () {
            tempus(new Date());
        })
        .on('cycle', function (event) {
            result += String(event.target) + ' \n';
        })
        .on('complete', function () {
            result += 'Fastest is ' + this.filter('fastest').pluck('name');
            alert(result);
        })
        .run({ 'async': false });
}

function testFromString() {
    var result = '';

    var suite = new Benchmark.Suite;
    suite.add('Native JS', function () {
        new Date('2013-01-01');
    })
        .add('Moment', function () {
            moment('2013-01-01');
        })
        .add('Tempus', function () {
            tempus('2013-01-01');
        })
        .on('cycle', function (event) {
            result += String(event.target) + ' \n';
        })
        .on('complete', function () {
            result += 'Fastest is ' + this.filter('fastest').pluck('name');
            alert(result);
        })
        .run({ 'async': false });
}

function testFromStringWithFormat() {
    var result = '';

    var suite = new Benchmark.Suite;
    suite.add('Moment', function () {
            moment('2013-01-01', 'YYYY-MM-DD');
        })
        .add('Tempus', function () {
            tempus('2013-01-01', '%Y-%m-%d');
        })
        .on('cycle', function (event) {
            result += String(event.target) + ' \n';
        })
        .on('complete', function () {
            result += 'Fastest is ' + this.filter('fastest').pluck('name');
            alert(result);
        })
        .run({ 'async': false });
}

function testValidate() {
    var result = '';

    var suite = new Benchmark.Suite;
    suite.add('Moment', function () {
            return moment('2012-05-25', 'YYYY-MM-DD').isValid();
        })
        .add('Tempus', function () {
            return tempus('2012-05-25', '%Y-%m-%d').valid();
        })
        .on('cycle', function (event) {
            result += String(event.target) + ' \n';
        })
        .on('complete', function () {
            result += 'Fastest is ' + this.filter('fastest').pluck('name');
            alert(result);
        })
        .run({ 'async': false });
}

function testFormat() {
    var result = '';

    var suite = new Benchmark.Suite;
    suite.add('Native JS', function () {
        var d = new Date();
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    })
        .add('Moment', function () {
            return moment().format('DD.MM.GGGG');
        })
        .add('Tempus', function () {
            return tempus().format('%d.%m.%Y');
        })
        .on('cycle', function (event) {
            result += String(event.target) + ' \n';
        })
        .on('complete', function () {
            result += 'Fastest is ' + this.filter('fastest').pluck('name');
            alert(result);
        })
        .run({ 'async': false });
}