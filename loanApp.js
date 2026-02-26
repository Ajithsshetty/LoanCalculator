console.log("hi alllllll")
console.log('sdfghjk')
const loanAmount = document.getElementById(`loan_amount`);
const loanTenure = document.getElementById(`loan_tenure`);
const loanRate = document.getElementById(`loan_intrest`);

const loanEmi = document.querySelector(`.loan-emi`)
const loanPrinciple = document.querySelector(`.loan-principle`)
const loanTotal = document.querySelector(`.loan-total`)
const loanIntrest = document.querySelector(`.loan-intrest-rate`)


let submitBtn = document.querySelector(".Calculator-btn")
submitBtn.addEventListener("click", function() {

     amount = loanAmount.value;
     tenure = (loanTenure.value) * 12; //years multiply months
     rate = (loanRate.value)/12/100;
     emi = (amount * rate * ((1+rate)**tenure) / (((1 + rate)**tenure) - 1));
     //console.log(emi);
     total = emi * tenure
     intrest = total - amount
     //console.log(total)
     //console.log(intrest)

     loanEmi.innerHTML = Math.floor(emi);
     loanPrinciple.innerHTML = Math.floor(amount);
     loanTotal.innerHTML = Math.floor(total);
     loanIntrest.innerHTML =Math.floor(intrest);

     //Loan Chart
     let xvalue = ["Principle","Intrest"];
     let yvalue = [amount,Math.floor(intrest)];

     let barColors = ["#961251","#000000"]

     new Chart("loanchart", {
        type: "pie",
        data: {
            labels : xvalue,
            datasets:[{
                backgroundColor: barColors,
                data: yvalue
            }]
        },
        options: {
            title: {
                display : false,
            }
        }
     });

    });