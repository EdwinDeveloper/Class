package datos;

public class principal {
	
	public static void main(String[] args) {
		System.out.println("Hola mundo");
		accesoDatos datos=new ImplementacionMySQL();
		ejecutar(datos,"listar");
		
		datos=new ImplementacionOracle();
		ejecutar(datos,"insertar");
	}
	public static void ejecutar(accesoDatos datos,String accion){
		if("listar".equals(accion)){
			datos.imprimirRecibo();
		}
		else if("insertar".equals(accion)) {
			datos.imprimirRecibo();
		}
	}
}
