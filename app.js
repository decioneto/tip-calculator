const DOM = {

  activeTipButton(){
    const tipButtonsGrid = document.querySelector('.buttons-grid')
    const tipButton = tipButtonsGrid.getElementsByClassName('tip-button') 

    for(let i = 0; i < tipButton.length; i++) {
      tipButton[i].addEventListener('click', () => {
        const activeClass = document.getElementsByClassName('active')
        if(activeClass.length > 0) {
          activeClass[0].classList.remove('active')
        }

        tipButton[i].classList.add('active')
      })
    }
  },

  calculateTipAmount() {
    const bill = Form.getBillValue();
    const tip = Form.activeTipButtonValue();
    const dividedBy = Form.getDivideByvalue();

    const totalTipAmoute = bill * tip

    console.log(totalTipAmoute)
  },
}

const Utils = {
  formatValue(value) {
    value = String(value).replace(/\D/, '')
    value = Number(value)
    
    return value
  }
}

const Form = {

  bill: document.getElementById('bill'),
  dividedBy: document.getElementById('people'),
  tipCustomValue: document.querySelector('#tipCustomValue'),

  getValues() {
    return {
      bill: Form.bill.value,
      dividedBy: Form.dividedBy.value,
      tipCustomValue: Form.tipCustomValue.value
    }
  },

  activeTipButtonValue(){
    const tipButtonsGrid = document.querySelector('.buttons-grid')
    const tipButton = tipButtonsGrid.getElementsByClassName('tip-button') 
    let value = () => {
      for(let i = 0; i < tipButton.length; i++) {
        tipButton[i].addEventListener('click', () => {
          
          Utils.formatValue(tipButton[i].innerHTML)
        })
      }
    }

    return value
  },

  validadeFields() {
    const {bill, dividedBy, tipCustomValue} = Form.getValues();
    const activeButtonValue = Form.activeTipButtonValue();

    console.log(activeButtonValue)
  },

  submit(e) {
    e.preventDefault();

    Form.validadeFields()
  }
}

DOM.activeTipButton()