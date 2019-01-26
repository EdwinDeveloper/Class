package INOUT;
import java.io.*;
import java.util.Scanner;
import static INOUT.operacionesCalculadora.sumar;

public class calculadoraEntradaDatos {
	public static void main(String [] args) {
			System.out.println("Introduce el primer valor");
			Scanner scan = new Scanner(System.in);
			int a = scan.nextInt();
			System.out.println("Introduce el segundo valor");
			int b = scan.nextInt();
			int resultado = sumar(a,b);
			System.out.println("El retultado es  : "+resultado);
	}
}
