var livro=require("readline-sync");
var salario =livro.questionFloat("Qual o seu salário?");

function imposto(){
    if( salario > 0.00 && salario <= 400.00){
      
        var imp = salario * 0.15
        var salario1 = imp - salario
        console.log("Seu salário é "+salario1);
    }
    else{
        if(salario >= 400.01 && salario <= 800.00){
            var imp = salario * 0.12
            var salario1 = imp - salario
            console.log("Seu salário é "+salario1);
        }

    }
}

console.log(imposto());