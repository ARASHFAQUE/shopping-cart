
var minusBtn = document.getElementById('minus-button');
    minusBtn.addEventListener("click", function(){
        var phoneNumber = document.getElementById('phone-number').value;
        var phoneNum = parseFloat(phoneNumber);
        if(phoneNum>0){
            phoneNum--;
        }

    document.getElementById('phone-number').value = phoneNum;
    var phonePrice = document.getElementById('phone-price').innerText;
    var phonePrice_2 = parseFloat(phonePrice);
    var total = phonePrice_2 - 1219;
    document.getElementById('phone-price').innerText = total;

    var phoneSubTotal = document.getElementById('sub-total').innerText;
    var phoneSub = Number(phoneSubTotal);
    var Subtotal = total + phoneSub;
    document.getElementById('sub-total').innerText = Subtotal;
    summary()
})

var plusBtn = document.getElementById('plus-button');
    plusBtn.addEventListener("click", function(){
    var phoneNumber = document.getElementById('phone-number').value;   
    var phoneNum = parseFloat(phoneNumber);
    phoneNum++;

    document.getElementById('phone-number').value = phoneNum;
    var phonePrice = document.getElementById('phone-price').innerText;
    var phonePrice_2 = parseFloat(phonePrice);
    var total = phoneNum * 1219;
    document.getElementById('phone-price').innerText = total;
    summary()

})

var caseMinusButton  = document.getElementById('case-minus-button');
    caseMinusButton.addEventListener("click", function(){
        var caseNumber = document.getElementById('case-number').value;
        var caseNum = parseFloat(caseNumber);
        caseNum--;
        document.getElementById('case-number').value = caseNum;
        var casePrice = document.getElementById('case-price').innerText;
        var casePrice_2 = parseFloat(casePrice);
        var caseTotal = casePrice_2 - 59;
        document.getElementById('case-price').innerText = caseTotal;
        summary()

})

var casePlusBtn = document.getElementById('case-plus-button');
casePlusBtn.addEventListener("click", function(){
    var caseNumber = document.getElementById('case-number').value;
    var caseNum = parseFloat(caseNumber);
    caseNum++;
    document.getElementById('case-number').value = caseNum;
    // var casePrice = document.getElementById('case-price').innerText;
    // var casePrice_2 = parseFloat(casePrice);
    // console.log(casePrice_2);
    var caseTotal = caseNum * 59;
    document.getElementById('case-price').innerText = caseTotal;
    summary()

})

function summary(){
    var phonePrice_3 = document.getElementById('phone-price').innerText;
    var phonePrice_4 = parseFloat(phonePrice_3);
    var casePrice_3 = casePrice = document.getElementById('case-price').innerText;
    var casePrice_4 = parseFloat(casePrice_3);

    var subTotal = phonePrice_4 + casePrice_4;
    document.getElementById('sub-total').innerText = subTotal;
    var tax = document.getElementById('tax-price').innerText;
    var taxNum = parseFloat(tax);
    var totalTax =4;
    document.getElementById('tax-price').innerText = totalTax;

    var total = phonePrice_4 + casePrice_4 + totalTax;
    document.getElementById('total').innerText = total;
}

// var caseMinusBtn = document.getElementById('case-minus-button');
//     caseMinusBtn.addEventListener("click", function(){
//         var caseNumber = document.getElementById('case-number').value;
//         console.log(caseNumber);
//     //     var caseNum = parseFloat(caseNumber);
//     //     if(caseNum>0){
//     //         caseNum--;
//     //     }

//     // document.getElementById('case-number').value = caseNum;
//     // var casePrice = document.getElementById('case-price').innerText;
//     // var casePrice_2 = parseFloat(casePrice);
//     // var caseTotal = casePrice_2 - 59;
//     // document.getElementById('case-price').innerText = caseTotal;
// })

// // var casePlusBtn = document.getElementById('case-plus-button');
// //     casePlusBtn.addEventListener("click", function(){
// //     var caseNumber = document.getElementById('case-number').value;   
// //     var caseNum = parseFloat(caseNumber);
// //     if(caseNum>0){
// //         caseNum++;
// //     }
// //     document.getElementById('case-number').value = caseNum;
// //     // var phonePrice = document.getElementById('phone-price').innerText;
// //     // var phonePrice_2 = parseFloat(phonePrice);
// //     var caseTotal = caseNum * 59;
// //     document.getElementById('case-price').innerText = caseTotal;
// // })

