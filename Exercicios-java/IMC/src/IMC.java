import java.util.Scanner;

public class IMC {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		double peso, altura, imc;
		
		System.out.println("Digite o seu peso: ");
		peso = Double.parseDouble(sc.nextLine());
		System.out.println("Digite a sua altura: ");
		altura = Double.parseDouble(sc.nextLine());
		
		imc = peso / (altura * altura);
		
		if(imc < 18.5) {
			System.out.println("Voce esta abaixo do peso");
		} else if((imc >= 18.5) && (imc <= 24.9)) {
			System.out.println("O seu peso e o ideal");
		} else if((imc >= 25) && (imc <= 29.9)) {
			System.out.println("Voce esta com sobrepeso");
		} else if ((imc >= 30) && (imc <= 34.9)) {
			System.out.println("Voce esta com Obesidade grau 1");
		}else if ((imc >= 35) && (imc <= 39.9)) {
			System.out.println("Voce esta com Obesidade grau 2");
		}else if (imc > 40) {
			System.out.println("Voce esta com Obesidade grau 3");
		} else {
			System.out.println("Ops: Algo deu de errado!!!");
		}
		sc.close();
	}
}
