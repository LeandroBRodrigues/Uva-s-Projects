/*Calculadora para realizar calculos básicos de adição, subtração, divisão e multiplicação
Criada no Visual Studio Code e com ajuda da internet*/



#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(void){

 int num1, num2;
 char oper;

 setlocale (LC_ALL, "portuguese"); /* Utilizado para o compilador que o professor vai usar, não consegui colocar acentuação no Visual Studio Code */

 do{
 printf("\nDigite a expressão na forma: numero operador numero\n");
 printf("Exemplos: 2 x 3\n");
 printf("Para sair digite: 0 0 0\n");

 scanf("%i", &num1);
 scanf(" %c",&oper);
 scanf("%i", &num2);

 system("cls || clear");

 printf("Calculando: %.2i %c %.2i = ", num1,oper,num2);

switch( oper ){
        
 case '+':
     printf("%.2i\n\n", num1 + num2);
     break;

 case '-':
     printf("%.2i\n\n", num1 - num2);
     break;

 case 'x':
     printf("%.2i\n\n", num1 * num2);
     break;

 case '/':
     if(num2 != 0)
         printf("%.2i\n\n", num1 / num2);
     else
         printf("Nao existe divisao por 0\n\n");
     break;

     default:
         if(num1 != 0 && oper != '0' && num2 != 0)
             printf(" Operador invalido\n\n ");
         else
             printf(" Fechando calculadora, digite 'exit' para fechar o programa!\n ");
            }

}while(num1 != 0 && oper != '0' && num2 != 0);

}