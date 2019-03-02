package PersonaCapaDatos.personaJDBC;

import java.sql.*;
import java.util.*;
import PersonaCapaDatos.personaDTO.PersonaDTO;

public class PersonaDaoJDBC implements PersonaDao{

	private Connection userConn;
	private String SQL_INSERT="INSERT INTO persona(nombre,apellidos) VALUES(?,?)";
	private String SQL_UPDATE="UPDATE persona set nombre=?, apellidos=? WHERE id_persona=?";
	private String SQL_DELETE="DELETE FROM persona WHERE id_persona=?";
	private String SQL_SELECT="SELECT id_persona,nombre,apellidos FROM persona";
	
	public PersonaDaoJDBC() {}
	
	public PersonaDaoJDBC(Connection conn) {
		this.userConn=conn;
	}
	
	@Override
	public int insert(PersonaDTO persona) throws SQLException {
		Connection conn = null;
		PreparedStatement st = null;
		int rows = 0;
		
		try {
			conn = (this.userConn != null) ? this.userConn : Conexion.geConnection();
			st = conn.prepareStatement(SQL_INSERT);
			int index = 1;
			st.setString(index++, persona.getNombre());
			st.setString(index++,persona.getApellidos());
			System.out.println("Ejecutando Query : "+SQL_INSERT);
			rows = st.executeUpdate();
			System.out.println("Registros Afectados"+rows);
		}finally {
			Conexion.close(st);
			if(this.userConn == null) {
				Conexion.close(conn);
			}
		}
		
		return rows;
	}

	@Override
	public int update(PersonaDTO persona) throws SQLException {
		Connection conn = null;
		PreparedStatement st = null;
		int rows =0;
		try {
			conn = (this.userConn != null) ? this.userConn : Conexion.geConnection();
			st = conn.prepareStatement(SQL_UPDATE);
			int index = 1;
			st.setString(index++,persona.getNombre());
			st.setString(index++, persona.getApellidos());
			st.setInt(index,persona.getId_persona());
			rows = st.executeUpdate();
			System.out.println("Registros afectados : "+rows);
		}finally {
		Conexion.close(st);
			if(this.userConn == null){
				Conexion.close(conn);
			}
		}
		return rows;
	}

	@Override
	public int delete(PersonaDTO persona) throws SQLException {
		Connection  conn = null;
		PreparedStatement st = null;
		int rows = 0;
		try {
			conn = (this.userConn != null) ? this.userConn : Conexion.geConnection();
			st = conn.prepareStatement(SQL_DELETE);
			st.setInt(1, persona.getId_persona());
			rows = st.executeUpdate();
			System.out.println("Elementos afectados : "+rows);
		}finally {
			Conexion.close(st);
			if(this.userConn == null) {
					Conexion.close(conn);
			}
		}
		return rows;
	}

	@Override
	public List<PersonaDTO> select() throws SQLException {
		Connection conn = null;
		PreparedStatement st = null;
		ResultSet rs = null;
		PersonaDTO personadto = null;
		List<PersonaDTO> personas=new ArrayList<PersonaDTO>();
		try {
			conn = (this.userConn != null) ? this.userConn : Conexion.geConnection();
			st = conn.prepareStatement(SQL_SELECT);
			rs = st.executeQuery();
			while(rs.next()) {
				int id_persona = rs.getInt(1);
				String nombre = rs.getString(2);
				String apellidos = rs.getString(3);
				PersonaDTO persona = new PersonaDTO();
				persona.setId_persona(id_persona);
				persona.setNombre(nombre);
				persona.setApellidos(apellidos);
				personas.add(persona);
			}
		}finally {
			Conexion.close(st);
			if(this.userConn == null) {
				Conexion.close(conn);
			}
		}
		return personas;
	}
	
}
