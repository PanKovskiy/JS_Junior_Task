(function () {
    var input = jQuery('.btn');
    var screen = jQuery('input[type="text"]');
    input.on('click', function () {
        //Fix add '0' when click button;
        if (screen.val() === '0') {
            screen.prop('value', '');
        }

        //Add value button to screen input;
        screen.prop('value', screen.prop('value') + jQuery(this).prop('value'));
    });

    //Event on button equals;
    var buttonEquals = jQuery('.btn-equals');
    buttonEquals.on('click', function () {
       //Split string with separator 'operations';
       var arrFromScreen = screen.prop('value').split(/(\*|\+|\-|\/)/);
       var result = 0;
       var count = 0;
       // For index element '*', '/';
       var indexMulty, indexDiviz;
       while (count < arrFromScreen.length) {
           //First operation must be "*" or '/';
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

           //opeations;
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

       //output to screen result operations;
       screen.prop('value', result);
       if (result != 0) {
           addResultToMemory(result);
       }
    });

    //Memory save only 10 last results;
    function addResultToMemory (value) {
        var selectMemory = jQuery('#selectMemory');
        if (selectMemory.children().length >= 10) {
            selectMemory.children().last().remove();
        }
        selectMemory.prepend(`<option value=${value} selected>${value}</option>`);

    }

    //event - Selected value put into screen;
    var selectMemory = jQuery('#selectMemory');
    selectMemory.change(function () {
        var str ='';
        jQuery('option:selected').each(function () {
            str=jQuery(this).text();
        });
        jQuery('input[type="text"]').prop('value', str);
    }).trigger('change');

})();