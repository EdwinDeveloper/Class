package INOUT;
import java.util.*;

public class mainScanner {
	public static void main(String[] args) {
		String captura=null;
		Scanner scan = new Scanner(System.in);
		captura = scan.nextLine();
		while(captura!=null) {
			System.out.println("Dato introducido scan : "+captura);
			captura=scan.nextLine();
		}
	}
}
