package PersonaCapaDatos;

import java.sql.*;
import java.util.*;
import PersonaCapaDatos.personaDTO.*;
import PersonaCapaDatos.personaJDBC.*;
import PersonaCapaDatos.personaJDBC.PersonaDaoJDBC;

public class main {
	public static void main(String[] args) {
		PersonaDao personaDao = new PersonaDaoJDBC();
		PersonaDTO persona = new PersonaDTO();
		persona.setId_persona(1);
		persona.setNombre("tlahuac");
		persona.setApellidos("CDMX");
		try {
			//personaDao.insert(persona);
			//personaDao.delete(new PersonaDTO(2));
			//personaDao.update(persona);
			System.out.println("datos desde tabla"+personaDao.select());
			//personaDao.select();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
