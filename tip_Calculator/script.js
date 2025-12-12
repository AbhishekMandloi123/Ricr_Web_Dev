document.getElementById('calculateBtn').addEventListener('click', function() {
           
            var billAmount = document.getElementById('billAmount').value;
            var serviceQuality = document.getElementById('serviceQuality').value;
            var numPeople = document.getElementById('numPeople').value;
            
            
            if (billAmount == '' || numPeople == '') {
                alert('Please fill all fields!');
                return;
            }
            
            // Calculate tip amount
            var tipAmount = (billAmount * serviceQuality) / 100;
            
            // Calculate total amount with tip
            var totalAmount = Number(billAmount) + Number(tipAmount);
            
            // Calculate amount per person
            var amountPerPerson = totalAmount / numPeople;
            
           
            document.getElementById('resultAmount').textContent = amountPerPerson.toFixed(2) + '₹';
            document.getElementById('resultSection').style.display = 'block';
        });