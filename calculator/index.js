(function () {
    var input = jQuery('.btn');
    var textarea = jQuery('input[type="text"]');
    input.on('click', function () {
        textarea.prop('value', textarea.prop('value') + jQuery(this).prop('value'));
    });
    var buttonEquals = jQuery('.btn-equals');
    buttonEquals.on('click', function test() {
       var str = textarea.prop('value');
       var arrayString = str.split(/(\*|\+|\-|\/)/);
       var result = 0;
       var count = 0;
       while (count < arrayString.length) {
           if (arrayString.indexOf('*') != -1) {
               count = arrayString.indexOf('*');
           }
           switch (arrayString[count]) {
               case '+':
                   result=Number(arrayString[count-1]) + Number(arrayString[count+1]);
                   arrayString.splice(count-1, 3, result);
                   count=0;
                   break;
               case '-':
                   result=Number(arrayString[count-1]) - Number(arrayString[count+1]);
                   arrayString.splice(count-1, 3, result);
                   count=0;

                   break;
               case '*':
                   result=Number(arrayString[count-1]) * Number(arrayString[count+1]);
                   arrayString.splice(count-1, 3, result);
                   count=0;
                   break;
               case '/':
                   result=Number(arrayString[count-1]) / Number(arrayString[count+1]);
                   arrayString.splice(count-1, 3, );
                   count=0;
                   break;
           }
       count++;
       }
       textarea.prop('value', result);
       if (result != 0) {
           addResultToMemory(result);
       }
    });
    function addResultToMemory (value) {
        if (jQuery('#selectMemory').children().length >= 10) {
            jQuery('#selectMemory').children().last().remove();
            jQuery('#selectMemory').prepend(`<option value=${value} selected>${value}</option>`);
        } else {
            jQuery('#selectMemory').prepend(`<option value=${value} selected>${value}</option>`);
        }
    }
    var selectMemory = jQuery('#selectMemory');

    selectMemory.change(function () {
        var str ='';
        jQuery('option:selected').each(function () {
            str=jQuery(this).text();
        });
        jQuery('input[type="text"]').prop('value', str);
    }).trigger('change');


})();