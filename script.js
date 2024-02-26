document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.getElementById('fname');

    inputField.addEventListener('blur', function() {
        var currentValue = inputField.value;
        inputField.value = currentValue.toUpperCase();
    });
});
