let incomeId = 0
let incomeTotalSum = 0

const updateTotalIncome = () => {
    const incomeTotal = document.querySelector("#total-ingresos")
    incomeTotal.innerHTML = `Ingreso total: $${incomeTotalSum.toFixed(2)}`
}

const addIncome = event => {
    const incomeDescription = document.querySelector("#descripcion-ingreso").value
    const incomeAmount = parseFloat(document.querySelector("#monto-ingreso").value)
    const incomeTable = document.querySelector("#tabla-ingresos")
    const form = document.querySelector("#nuevo-ingreso")
    
    incomeId++
    incomeTotalSum += incomeAmount
    
    if (event.preventDefault) {
        event.preventDefault();
     }

    const newIncome = `
    <tr>
        <td>${incomeId}</td>
        <td>${incomeDescription}</td>
        <td>$${incomeAmount.toFixed(2)}</td>
    </tr>
    `

    incomeTable.insertAdjacentHTML('beforeend', newIncome)
    form.reset()
    updateTotalIncome()
}