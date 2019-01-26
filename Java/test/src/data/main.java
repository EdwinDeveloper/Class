package data;

public class main {

	public static int suma(int a,int b){
		return a+b;
	}
	
	public static void main(String[] args) {
		int sumar=suma(4,5);
		System.out.println(sumar);
		Usuario user=new Usuario("Edwin");
		user.setName("Edwin");
		String nuevoNombre = user.getName();
		System.out.println(nuevoNombre);
		user.setName("El kevin");
		System.out.print(user.getName()+"\n");
		Usuario Edwin=new Usuario("Giovanni");
		Edwin.setName("Edwin Giovanni Perez Robles");
		System.out.println(Edwin.getName());
		System.out.println(Edwin.getEdad());
		Edwin.setEdad(parseShort(23));
		System.out.println(Edwin.getEdad());
		Usuario u=new Usuario("data");
		//we need to delete the first zero of the response, if we keep it in, there is 
		//and small posibilitie to make a misktake at the measurement 
		//moment
		Usuario us=new Usuario("Perez");
		System.out.println("total objetos Usuario : "+Usuario.cantidadUsuarios());
		
	}

	private static short parseShort(int i) {
		// TODO Auto-generated method stub
		return 12;
	}

}
class Usuario{

	private String nombre;
	private String miNombre;
	private short edad;
	private static int cantidadUsuarios;
	private int idUsuario;
	
	public Usuario(String nombre){
		cantidadUsuarios++;
		idUsuario=cantidadUsuarios;
		this.nombre=nombre;
	}
	
	void studentInformation(String miNombre){
		this.miNombre=miNombre;
	}
	
	public void Usuario(String miNombre) {
		this.miNombre=miNombre;
	}
	public String getName() {
		return nombre;
	}
	public void setName(String name) {
		this.nombre=name;
	}
	public void setEdad(short edad) {
		this.edad=edad;
	}
	public int getEdad() {
		return edad;
	}
	
	public static int cantidadUsuarios() {
		return cantidadUsuarios;
	}
}
