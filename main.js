
    var exchangeRates = {
        'dollar': 0.26, 
        'dinar': 0.20,  
        'nis': 1       
    };
    var form = document.querySelector('.registerForm');
    var resultParagraph = document.querySelector('.result');
    function convertCurrency(amount, currency) {
        return amount * exchangeRates[currency];
    }
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        var amount = form.querySelector('input[name="amount"]').value;
        var currency = form.querySelector('select[name="exchange"]').value;
        var convertedAmount = convertCurrency(amount, currency);
        resultParagraph.textContent = convertedAmount;
    });

