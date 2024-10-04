/**
 * app health calc
 * calculadora de metricas de saude
 * @author joão vitor souto
 * @version 1.0
 * @link https://github.com/Joaovitors15/health.git
 */


// Variáveis
let peso, altura, imc, idade, fcm, litros, get

function calcular() {
    // Captura das variáveis idade, peso e altura
    idade = frmHealth.txtIdade.value
    peso = frmHealth.txtPeso.value
    altura = (frmHealth.txtAltura.value) /100

    // Validação de campos obrigatórios(todos)
    if (frmHealth.txtIdade.value === "") {
        alert("Informe a sua idade")
        frmHealth.txtIdade.focus()
    } else if (frmHealth.txtPeso.value === "") {
        alert("Informe o seu peso")
        frmHealth.txtPeso.focus()
    } else if (frmHealth.txtAltura.value === "") {
        alert("Informe a sua altura em centímetros")
        frmHealth.txtAltura.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false ) {
        alert("Selecione o seu sexo")
    } else if (frmHealth.nivel.value === ""){
        alert("selecione o nivel de atividade ")
    } else {
        // logica principal 
        // calculo do IMC
        imc = peso / (altura * altura)
        document.getElementById("imc").innerHTML = `IMC: ${imc.toFixed(2)}`
        if (imc < 18.5) {
            document.getElementById("status").innerHTML = "Abaixo do peso"
            document.getElementById("grafico").src = "img/baixo.png"
        } else if (imc < 25) {
            document.getElementById("status").innerHTML = "Peso normal "
            document.getElementById("grafico").src = "img/normal.png"

        } else if  (imc < 30 ) {
            document.getElementById("status").innerHTML = "sobre peso "
            document.getElementById("grafico").src = "img/sobrepeso.png"  
        } else if (imc < 35) {
            document.getElementById("status").innerHTML = "obesidade 1 "
            document.getElementById("grafico").src = "img/obesidade1.png"  
        } else if (imc < 40) {
            document.getElementById("status").innerHTML = "obesidade grau II "
            document.getElementById("grafico").src = "img/obesidade.png"  
        } else  {
            document.getElementById("status").innerHTML = "obesidade extrema "
            document.getElementById("grafico").src = "img/obesidadeExtrema.png"  
        }
        //FCM
        fcm = 208 - (0.7 * idade)  
        document.getElementById("freq").innerHTML = fcm

        // consumo de agua
        litros = (peso * 35) /1000
        document.getElementById("agua").innerHTML = `${litros.toFixed(1)} Litros por dia`
        //get
        //passo 1: capturar o valor da lista (combox)
        let lista = document.getElementById('atividade')
        let valor = Number(lista.options[lista.selectedIndex].value)
        console.log(valor)
        //passo 2: execultar uma forma diferente para o sexo selecionado
        
        if (document.getElementById("m").checked === true) {
           // console.log("formula para homens")
           get = (66 + (13.7 * peso) + (5 * (altura * 100) - (6.8 * idade))) * valor
        }
        if (document.getElementById("f").checked === true) {
           // console.log("formula para mulheres")
           get = (655 + (9.6 * peso) + (1.8 * (altura * 100 ) - (4.7 * idade))) * valor
        }

        //passo 3: exibir o resultado
        document.getElementById('calorias').innerHTML = `${Math.floor(get)} calorias/dia`
    }
}

function limpar() {
    document.getElementById('imc').innerHTML = "IMC"
    document.getElementById('status').innerHTML = "status"
    document.getElementById('frq').innerHTML = "FCM"
    document.getElementById('calorias').innerHTML = "calorias/dia"
    document.getElementById('agua').innerHTML = "litros/dia"
    document.getElementById('grafico').src = "img/reset.png"






}