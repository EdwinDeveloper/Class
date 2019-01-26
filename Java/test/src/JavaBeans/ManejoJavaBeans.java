package JavaBeans;

public class ManejoJavaBeans {
	public static void main(String[] args) {
		PersonaBean per = new PersonaBean();
		per.setNombre("Edwin Giovanni");
		per.setEdad(23);
		System.out.println("Nombre : "+per.getNombre());
		System.out.println("Edad : "+per.getEdad());
	}
}
