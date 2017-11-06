(function () {
    var input = jQuery('.btn');
    var textarea = jQuery('input[type="text"]');
    input.on('click', function () {
        textarea.prop('value', textarea.prop('value') + jQuery(this).prop('value'));
    });
    var arrayMemory = [];
    var buttonEquals = jQuery('.btn-equals');
    buttonEquals.on('click', function test() {
       var str = textarea.prop('value');
       var arrayString = str.split(/(\*|\+)/);
       var result = 0;
       var count = 0;
       while (count < arrayString.length) {
           switch (arrayString[count]) {
               case '+':
                   result=Number(arrayString[count-1]) + Number(arrayString[count+1]);
                   arrayString.splice(count-1, 3, result);
                   count=0;
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
       count++;
       }
       textarea.prop('value', result);
       arrayMemory.unshift(result);
    });
    var buttonMemory = jQuery('.btn-memory');
        buttonMemory.on('click', function () {
            buttonMemory.css('display', 'none');
            jQuery('.container').append("<div class ='memory'><select name='memorySelect' ></select></div>");
            var selectMemory= jQuery('select');
            for (var i = 0; i < arrayMemory.length; i++) {
                selectMemory.prepend(`<option value=${i}>${arrayMemory[i]}</option>`);
            }
            selectMemory.
        });

    jQuery('.container').on('change','div.memory select option', function () {
        textarea.prop('value', jQuery('select').find('option:selected').text());
    });

})();