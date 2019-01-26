package genericos;

public class claseGenerica<T> {
	T objeto;
	
	public claseGenerica(T objeto) {
		this.objeto=objeto;
	}
	public void obtenerTipo() {
		System.out.println("El tipo T es : "+objeto.getClass().getName());
	}
}
