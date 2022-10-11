function censor() {
    var changes = [];

    return function(a, b = 0) {
        if (b != 0) {
            changes.push([a, b]);
            return;
        }

        var result = a;

        for (change of changes) {
            if (a.includes(change[0])) {
                result = result.replace(change[0], change[1]);
            }
        }

        return result;
    }


}

const changeScene = censor();

changeScene('PHP','JS');

changeScene('backend', 'frontend')

console.log(changeScene('PHP is the most popular programming language for backend web-development'));