const arr = []

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  function pergunta(name) {
    if(name !== "SAIR") {
        arr.push(name)
        readline.question(`Digite uma propriedade de CSS: `, pergunta)
    } else {
        readline.close()
        const result = arr.sort()
        console.log(`Lista de propriedades CSS:`)
        for(let i = 0; i < result.length; i++) {
            console.log(`- ${result[i]}`)
        }
    }
  }

  readline.question(`Digite uma propriedade de CSS: `, pergunta)