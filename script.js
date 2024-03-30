
document.getElementById('btnClick').addEventListener('click', function (e) {
    e.preventDefault();


    const gold = document.getElementById('gold').value;
    const silver = document.getElementById('silver').value;
    const cash = document.getElementById('cash').value;

    // 10gm -> 1gm multi 0.1 below
    const goldPrice = parseFloat(document.getElementById('goldPrice').value) * 0.1;
    const silverPrice = parseFloat(document.getElementById('silverPrice').value) * 0.1;

    const result = document.getElementById('result')

    // gold 1  goldRate 0
    if (gold != '') {
        if (document.getElementById('goldPrice').value == '') {
            result.style.display = 'block'
            result.style.color = 'red'
            result.textContent = 'Provide Gold Rate, please!!!'
            return
        }
    }
    if (document.getElementById('goldPrice').value != '') {
        if (gold == '') {
            result.style.display = 'block'
            result.style.color = 'red'
            result.textContent = 'Provide Gold Qty, please!!!'
            return
        }
    }

    // silver 1  silverRate 0
    if (silver != '') {
        if (document.getElementById('silverPrice').value == '') {
            result.style.display = 'block'
            result.style.color = 'red'
            result.textContent = 'Provide Silver Rate, please!!!'
            return
        }
    }
    if (document.getElementById('silverPrice').value != '') {
        if (silver == '') {
            result.style.display = 'block'
            result.style.color = 'red'
            result.textContent = 'Provide Silver Qty, please!!!'
            return
        }
    }


    if (gold == '' && silver == '' && cash == '') {

        result.style.display = 'block'
        result.style.color = 'red'
        result.textContent = 'Provide the data, please!!!'
        return
    }

    const goldGrams = parseFloat(gold);
    const silverGrams = parseFloat(silver);
    let cashRupees = parseFloat(cash);

    // console.log(
    //     goldGrams,
    //     silverGrams,
    //     cashRupees,
    //     goldPrice,
    //     silverPrice
    // )

    let goldValue = 0;
    let silverValue = 0;
    let totalValue = 0;
    if (isNaN(cashRupees)) {
        cashRupees = 0
    }
    if (!isNaN(goldGrams) && !isNaN(goldPrice)) {

        goldValue = goldGrams * goldPrice;
    }
    if (!isNaN(silverGrams) && !isNaN(silverPrice)) {

        silverValue = silverGrams * silverPrice;
    }
    let str = ''
    if (goldValue != 0) {
        str += `● Gold: ${goldGrams} gm, Gold Rate (1gm): ${goldPrice}₹ <br> Gold worth: ${goldGrams} X ${goldPrice} = ${goldValue.toFixed(2)}₹`
    }
    if (silverValue != 0) {
        str += `<br>● Silver: ${silverGrams} gm, Silver Rate (1gm): ${silverPrice.toFixed(2)}₹ <br> Silver worth: ${silverGrams} X ${silverPrice.toFixed(2)} = ${silverValue.toFixed(2)}₹`
    }
    if (cashRupees != 0) {
        str += `<br>● Cash: ${cashRupees}₹`
    }
    str += `<br>● Total Value: ${(goldValue + silverValue + cashRupees).toFixed(2)}₹`
    str += `<br>● 2.5% of ${(goldValue + silverValue + cashRupees).toFixed(2)}:  <span style="color:green;">${((goldValue + silverValue + cashRupees) * 0.025).toFixed(2)}₹</span>`
    if(str!=''){
        document.getElementById('accordionExample').style.display='block'
    }
    console.log(str)
    let elements = document.getElementsByClassName('accordionbody');
    if (elements.length > 0) {
        elements[0].innerHTML = str;
    }
    
    totalValue = (goldValue + silverValue + cashRupees) * 0.025;
    result.style.display = 'block'
    result.style.color = 'green'
    result.textContent = `Total to give: ${totalValue.toFixed(2)}₹`;
});

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
}