package PersonaCapaDatos.personaJDBC;

import java.sql.*;
import java.util.*;
import PersonaCapaDatos.personaDTO.PersonaDTO;

public interface PersonaDao {
	
		public int insert(PersonaDTO persona) throws SQLException;
		public int update(PersonaDTO persona) throws SQLException;
		public int delete(PersonaDTO persona) throws SQLException;
		public List<PersonaDTO> select() throws SQLException;
		
}
