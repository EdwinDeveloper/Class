package Exception;

public class operaciones {
	private int numerador;
	
	private int denominador;
	
	public operaciones(int numerador,int denominador) throws OperationExeption {
		if(denominador==0) {
			throw new OperationExeption("Operacion no valida");
		}
		this.numerador=numerador;
		this.denominador=denominador;
	}
	public void visualizarOperacion() {
		System.out.println("El resultado de la division es : "+numerador/denominador);
	}
}
