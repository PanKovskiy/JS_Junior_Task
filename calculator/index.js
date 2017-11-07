(function () {
    var input = jQuery('.btn');
    var screen = jQuery('input[type="text"]');
    input.on('click', function () {
        if (screen.val() === '0') {
            screen.prop('value', '');
        }
        screen.prop('value', screen.prop('value') + jQuery(this).prop('value'));
    });
    var buttonEquals = jQuery('.btn-equals');
    buttonEquals.on('click', function () {
       var arrFromScreen = screen.prop('value').split(/(\*|\+|\-|\/)/);
       var result = 0;
       var count = 0;
       var indexMulty, indexDiviz;
       while (count < arrFromScreen.length) {
           indexMulty = arrFromScreen.indexOf('*');
           indexDiviz = arrFromScreen.indexOf('/');
           if (indexMulty > 0) {
               if (indexDiviz > 0) {
                   count=(indexMulty < indexDiviz)?indexMulty:indexDiviz;
               } else {
                   count=indexMulty;
               }
           } else {
               if (indexDiviz > 0) {
                   count=indexDiviz;
               }
           }
           switch (arrFromScreen[count]) {
               case '+':
                   result=Number(arrFromScreen[count-1]) + Number(arrFromScreen[count+1]);
                   arrFromScreen.splice(count-1, 3, result);
                   count=0;
                   break;
               case '-':
                   result=Number(arrFromScreen[count-1]) - Number(arrFromScreen[count+1]);
                   arrFromScreen.splice(count-1, 3, result);
                   count=0;

                   break;
               case '*':
                   result=Number(arrFromScreen[count-1]) * Number(arrFromScreen[count+1]);
                   arrFromScreen.splice(count-1, 3, result);
                   count=0;
                   break;
               case '/':
                   result=Number(arrFromScreen[count-1]) / Number(arrFromScreen[count+1]);
                   arrFromScreen.splice(count-1, 3, result);
                   count=0;
                   break;
           }
       count++;
       }
       screen.prop('value', result);
       if (result != 0) {
           addResultToMemory(result);
       }
    });
    function addResultToMemory (value) {
        if (jQuery('#selectMemory').children().length >= 10) {
            jQuery('#selectMemory').children().last().remove();
        }
        jQuery('#selectMemory').prepend(`<option value=${value} selected>${value}</option>`);

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