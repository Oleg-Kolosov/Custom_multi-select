class CustomSelect{
    constructor(originalSelect){
        this.$originalSelect = originalSelect;
        this.$customSelect = document.createElement('div')
        this.$customSelect.classList.add('select')

        this.$originalSelect.querySelectorAll('option').forEach(option => {
            
            const selectElement = document.createElement('div')
            selectElement.classList.add('select__item')
            selectElement.textContent = option.textContent

            this.$customSelect.appendChild(selectElement)

            selectElement.addEventListener('click', () => {
                if(selectElement.classList.contains('select__item--selected')){
                    this.#deselected(selectElement)
                } else {
                    this.#selected(selectElement)
                }
            })
        })

        this.$originalSelect.insertAdjacentElement('afterend', this.$customSelect)
        this.$originalSelect.style.display = 'none'
    }

    #selected(element){
        element.classList.add('select__item--selected')
        const index = [...this.$customSelect.children].indexOf(element)
        this.$originalSelect.querySelectorAll('option')[index].selected = true
    }

    #deselected(element){
        element.classList.remove('select__item--selected')
        const index = [...this.$customSelect.children].indexOf(element)
        this.$originalSelect.querySelectorAll('option')[index].selected = false
    }
}

const customSelect = new CustomSelect(document.getElementById('animals-select'));
