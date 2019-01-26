package datos;

public class ImplementacionMySQL implements accesoDatos {

	@Override
	public void insertarDinero() {
		System.out.println("Insertar Dinero MySQL");
		
	}

	@Override
	public void imprimirRecibo() {
		System.out.println("Imprimir Recibo MySQL");
	}

}
