const Calculate = {
  //calcular o total da taxa de serviço e dividir pelo número de pessoas
  calculateTip() {
    let bill = Form.formatBill()
    let {customTip, dividedBy} = Form.getValues();
    customTip = Number(customTip)
    dividedBy = Number(dividedBy)
    let percertageTip = customTip / 100
    let totalTip = 0;


    totalTip = (bill * percertageTip) / dividedBy

    return totalTip
  },

  //Dividir o total por pessoa

  calculateTotal() {
    let bill = Form.formatBill()
    let totalTip = Calculate.calculateTip()
    let {dividedBy} = Form.getValues();
    let total = 0
    totalTip = totalTip * dividedBy

    total = (bill + totalTip) / dividedBy

    return total

  }
}

const Utils = {
  formatAmout(value) {
    value = value.replace(/\,/, '.')
    value = Number(value) * 100

    return value
  },

  formatCurrency(value) {
    value = Number(value)
    value = value / 100
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })

    return value
  }
}

const DOM = {
  printTotalTip() {
    const tipField = document.querySelector('#tipAmoutValue')
    let totalTip  = Calculate.calculateTip()

    tipField.innerHTML = Utils.formatCurrency(totalTip)
  },

  printTotal() {
    let total = Calculate.calculateTotal();
    const totalAmountField = document.querySelector('#totalPerPersonValue');
    
    totalAmountField.innerHTML = Utils.formatCurrency(total)
  }
}

const Form = {
  bill: document.querySelector('#bill'),
  customTip: document.querySelector('#tipCustomValue'),
  dividedBy: document.querySelector('#people'),

  getValues() {
    return {
      bill: Form.bill.value,
      customTip: Form.customTip.value,
      dividedBy: Form.dividedBy.value
    }
  },

  validate() {
    const {bill, dividedBy} = Form.getValues();
    
    if(bill.trim() === '' ||
      dividedBy.trim() === '') {
        throw new Error("Please, make sure you've filled all the fields!")
      }
    
      return
  },

  formatBill() {
    let {bill} = Form.getValues()

    bill = Utils.formatAmout(bill)

    return bill
  },

  reset() {
    const btnReset = document.querySelector('#resetButton')
    
    btnReset.removeAttribute('disabled')
  },

  clearFields() {
    const btnReset = document.querySelector('#resetButton')
    const tipAmountField = document.querySelector('#tipAmoutValue')
    const totalAmountField = document.querySelector('#totalPerPersonValue')
    
    tipAmountField.innerHTML = 'R$ 0,00'
    totalAmountField.innerHTML = 'R$ 0,00'

    btnReset.setAttribute('disabled', '')
  },

  submit(event) {
    event.preventDefault();

    try {
      Form.validate()
      Calculate.calculateTip();
      Calculate.calculateTotal();
      DOM.printTotalTip();
      DOM.printTotal();
      Form.reset();
    } catch (error) {
      alert(error.message)
    }
  }
}