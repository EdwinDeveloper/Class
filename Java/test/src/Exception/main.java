package Exception;
public class main {
	public static void main(String[] args) {
			try {
				operaciones op = new operaciones(10,0);
				op.visualizarOperacion();
			} catch (OperationExeption op) {
				System.out.println("Erro verifica el denominador");
				op.printStackTrace();
			}
	}
}
