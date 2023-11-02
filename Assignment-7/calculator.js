$(document).ready(function() {
    $('#num1, #num2').on('input', function() {
        validateCalculatorFields();
    });

    $('#add').click(function() {
        if (validateCalculatorFields()) {
            performOperation('add');
        }
    });

    $('#subtract').click(function() {
        if (validateCalculatorFields()) {
            performOperation('subtract');
        }
    });

    $('#multiply').click(function() {
        if (validateCalculatorFields()) {
            performOperation('multiply');
        }
    });

    $('#divide').click(function() {
        if (validateCalculatorFields()) {
            performOperation('divide');
        }
    });
    function validateCalculatorFields() {
        const num1 = $('#num1').val();
        const num2 = $('#num2').val();
        const numPattern = /^[0-9]+$/;
        const isValid = numPattern.test(num1) && numPattern.test(num2);

        if (!isValid) {
            $('#calculator-error').html("Please enter valid numbers in both fields.");
        } else {
            $('#calculator-error').html('');
        }

        return isValid;
    }

    const performOperation = (operation) => {
        const num1 = parseFloat($('#num1').val());
        const num2 = parseFloat($('#num2').val());
        let result;

        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    $('#calculator-error').html("Division by zero is not allowed.");
                    return;
                }
                break;
        }

        $('#calc-result').text(result);
    };
});

