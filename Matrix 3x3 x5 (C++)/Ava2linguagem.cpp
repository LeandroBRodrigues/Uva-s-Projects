//Programa que leia uma matriz criada pelo usuario e imprimindo uma nova matriz multiplicada por 5
// Francisco Leandro Bezerra Rodrigues
//Data de modificação 05/06/2021

#include <stdio.h>
#include <stdlib.h>

int main(){

int lin, col;

int matrizInicial[3][3], matrizFinal[3][3];

printf("Construa uma matriz 3x3 e irei exibir uma matriz multiplicando todos os elementos por 5\n");

for (lin=0; lin<3; lin++)//construcao da matriz inicial
{
    for (col=0; col<3; col++)
    {
      printf("Digite ELEMENTO da linha %d, coluna %d da matriz: ",lin+1,col+1);
      scanf("%i", &matrizInicial[lin][col]);
    }  
}
printf("Matriz inicial:\n"); //Imprime a matriz inicial
for (lin=0; lin<=2; lin++)
{
    for (col=0; col<3; col++)
    {
        printf("%i\t",matrizInicial[lin][col]);
        printf("\t");
        printf("\n");
    }
}
for (lin=0;lin<=2;lin++) //nova matriz multiplicada por 5
{
    for (col=0;col<3;col++)
    {
        matrizFinal[lin][col] = (matrizInicial[lin][col])*5;
    }
   }

 printf("\n\nMatriz com elementos multiplicados por 5: \n"); //Imprime a nova matriz
 for (lin=0; lin<=2; lin++)
 {
    for (col=0; col<3; col++)
      printf("%i\t", matrizFinal[lin][col]); 
      printf("\t");
      printf("\n");
 }
 system("PAUSE");
 return 0;
}