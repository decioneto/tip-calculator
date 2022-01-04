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
    const {bill, customTip, dividedBy} = Form.getValues();
    
    if(bill.trim() === '' ||
      customTip.trim() === '' ||
      dividedBy.trim() === '') {
        throw new Error("Please, make sure you've filled all the fields!")
      }

  },

  submit(event) {
    event.preventDefault();

    try {
      Form.validate()
    } catch (error) {
      alert(error.message)
    }
  }
}