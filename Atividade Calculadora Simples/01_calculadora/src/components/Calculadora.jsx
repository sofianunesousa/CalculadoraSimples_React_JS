
import { useState } from 'react'
import styles from './Calculadora.module.css'

function Calculadora() {
    // Variáveis
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [operacao, setOperacao] = useState('')
    const [resultado, setResultado] = useState('')

    // Limpar
    function limpar() {
        setNumero1('')
        setNumero2('')
        setOperacao('')
        setResultado('')
    }

    // Função Calcular
    function calcular(e) {
        // Evitar recarregar a página
        e.preventDefault()

        // Verificar se os dados foram preenchidos
        if (!numero1 || !numero2 || !operacao) {
            alert("Preencha todos os campos.")
            return
        }

        // Tratar variáveis com casas decimais
        const num1 = parseFloat(numero1)
        const num2 = parseFloat(numero2)

        // Cálculo
        let resultadoFinal

        if (operacao === '+') {
            resultadoFinal = num1 + num2
        } else if (operacao === '-') {
            resultadoFinal = num1 - num2
        } else if (operacao === '*') {
            resultadoFinal = num1 * num2
        } else if (operacao === '/') {

            if (num2 === 0) {
                alert("Não é possível dividir por zero.")
                return
            }

            resultadoFinal = num1 / num2
        }

        setResultado(resultadoFinal)
    }

    return (
        <div className={styles.calculadora}>

            <form onSubmit={calcular}>

                <h2>Calculadora</h2>

                {/* Primeiro número */}
                <div>
                    <input
                        type="number"
                        placeholder="Informe o primeiro número..."
                        value={numero1}
                        onChange={(e) => setNumero1(e.target.value)}
                    />
                </div>

                {/* Operações */}
                <div>
                    <h3>Escolha a operação:</h3>

                    <button
                        type="button"
                        onClick={() => setOperacao('+')}
                    >
                        +
                    </button>

                    <button
                        type="button"
                        onClick={() => setOperacao('-')}
                    >
                        -
                    </button>

                    <button
                        type="button"
                        onClick={() => setOperacao('*')}
                    >
                        *
                    </button>

                    <button
                        type="button"
                        onClick={() => setOperacao('/')}
                    >
                        /
                    </button>

                    <p>
                        Operação escolhida: {operacao || 'Nenhuma'}
                    </p>
                </div>

                {/* Segundo número */}
                <div>
                    <input
                        type="number"
                        placeholder="Informe o segundo número..."
                        value={numero2}
                        onChange={(e) => setNumero2(e.target.value)}
                    />
                </div>

                {/* Botões */}
                <div className={styles.btn}>
                    <input
                        type="submit"
                        value="Calcular"
                    />

                    <input
                        type="button"
                        value="Limpar"
                        onClick={limpar}
                    />
                </div>

                {/* Resultado */}
                <div className={styles.resultado}>
                    <p>
                        Resultado: {resultado}
                    </p>
                </div>

            </form>

        </div>
    )
}

export default Calculadora