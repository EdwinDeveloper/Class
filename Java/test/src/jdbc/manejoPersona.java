package jdbc;
import java.util.*;
public class manejoPersona {
	public static void main(String[] args) {
		PersonaJDBC personaJDBC=new PersonaJDBC();
		//personaJDBC.insert("Edwin", "Perez");
		
		//personaJDBC.update(4,"Eddwin 4", "Perez 4");
		
		List<Persona> personas = personaJDBC.select();
		for(Persona persona: personas) {
			System.out.println(persona);
			System.out.println("");
		}
	}
}
