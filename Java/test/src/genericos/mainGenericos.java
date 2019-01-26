package genericos;

public class mainGenericos {
	public static void main(String[] args) {
		claseGenerica<Integer> objectInt=new claseGenerica<Integer>(15);
		objectInt.obtenerTipo();
		
		claseGenerica <String> objectString=new claseGenerica<>("Prueba");
		objectString.obtenerTipo();
	}
}
