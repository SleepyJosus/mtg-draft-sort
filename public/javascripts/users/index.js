var input = document.querySelector('.inputfile');

var label = input.nextElementSibling,
    labelVal = label.innerHTML;

input.addEventListener('change', function(e) {
    var fileName = '';

    console.log(e.target.value);
    
    fileName = e.target.value.split('\\').pop();

    console.log(fileName);

    if(fileName) {
        label.innerHTML = fileName;
    } else {
        label.innerHTML = labelVal;
    }
});