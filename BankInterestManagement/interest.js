function calculateInterest() {
  let bankBalance1 = Number(document.getElementById('bank-balance1').value)
  let bankBalance2 = Number(document.getElementById('bank-balance2').value)
  let bankBalance3 = Number(document.getElementById('bank-balance3').value)
  let bankBalance4 = Number(document.getElementById('bank-balance4').value)

  let updateBankBalance1 = document.getElementById('update-balance1')
  let updateBankBalance2 = document.getElementById('update-balance2')
  let updateBankBalance3 = document.getElementById('update-balance3')
  let updateBankBalance4 = document.getElementById('update-balance4')

  let bankBalances = [bankBalance1, bankBalance2, bankBalance3,bankBalance4]

  for(let i = 0; i < bankBalances.length; i++){
    bankBalances[i] = Number(bankBalances[i])
    if(bankBalances[i] > 200000){
      bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
      bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002
    } else if (bankBalances[i] > 100000 ) {
      bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05
      bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005
    } else {
      bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03
    }
  }

  updateBankBalance1.value = bankBalances[0]
  updateBankBalance2.value = bankBalances[1]
  updateBankBalance3.value = bankBalances[2]
  updateBankBalance4.value=  bankBalances[3]
}
