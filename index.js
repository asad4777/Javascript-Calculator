function foo(a) {
    var input = document.getElementById('inp')
    input.value += a
}

function res() {
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}

function cler() {
    document.getElementById('inp').value = ''
}