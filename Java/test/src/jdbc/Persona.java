package jdbc;

public class Persona {
	
	private int id_Persona;
	private String nombre;
	private String apellidos;
	
	public int getId_Persona() {
		return id_Persona;
	}
	public void setId_Persona(int id_Persona) {
		this.id_Persona = id_Persona;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	
	@Override
	public String toString() {
		
		return "Persona{"+"id_persona : "+id_Persona+" nombre : "+nombre+"apellidos"+apellidos+"}";
	}
}
