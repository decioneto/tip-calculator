const Calculate = {
  //calcular o total da taxa de serviço e dividir pelo número de pessoas
  calculateTip() {
    let bill = Form.formatBill()
    const {customTip, dividedBy} = Form.getValues();
    const percertageTip = customTip / 100
    let total = 0;

    Form.validate();

    total = bill * percertageTip / dividedBy

    console.log(bill)
  },

  //Dividir o total por pessoa
}

const Utils = {
  formatAmout(value) {
    value = value.replace(/\,/, '.')
    value = Number(value) * 100

    return value
  },

  formatCurrency(value) {
    value = value / 100
    value = value.toLocaleString("es-US", {
      
    })
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
  },

  formatBill() {
    let {bill} = Form.getValues()

    bill = Utils.formatAmout(bill)

    return bill
  },

  submit(event) {
    event.preventDefault();

    try {
      Calculate.calculateTip();
    } catch (error) {
      alert(error.message)
    }
  }
}