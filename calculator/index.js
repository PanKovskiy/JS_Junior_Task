(function () {
    var input = jQuery('.btn');
    var textarea = jQuery('input[type="text"]');
    input.on('click', function () {
        textarea.prop('value', textarea.prop('value') + jQuery(this).prop('value'));
    });

    var buttonEquals = jQuery('.btn-equals');
    buttonEquals.on('click', function () {
       var str = textarea.prop('value');
       var arrayString = str.split(/(\*|\+)/);
       var result = 0;
       for (var i = 0; i < arrayString.length; i++) {
        switch (arrayString[i]) {
            case '+':
                result+=Number(arrayString[i-1]) + Number(arrayString[i+1]);
                break;
            case '-':
                result+=Number(arrayString[i-1]) - Number(arrayString[i+1]);
                break;
            case '*':
                result+=Number(arrayString[i-1]) * Number(arrayString[i+1]);
                break;
            case '/':
                result+=Number(arrayString[i-1]) / Number(arrayString[i+1]);
                break;
           }
       }
       textarea.prop('value', result);
    });
})();