package Tranzacciones;

import java.util.*;
import java.sql.*;

import jdbc.Persona;
import jdbc.datos;

public class PersonaJDBC {
	private Connection userCon;
	private String SQL_INSERT="INSERT INTO persona(nombre,apellidos) VALUES(?,?)";
	private String SQL_UPDATE="UPDATE persona set nombre=?, apellidos=? WHERE id_persona=?";
	private String SQL_DELETE="DELETE FROM persona WHERE id_persona=?";
	private String SQL_SELECT="Select id_persona, nombre, apellidos FROM persona WHERE id_persona=?";
	
	public PersonaJDBC() {}
	
	public PersonaJDBC(Connection conn) {
		this.userCon=conn;
	}
	
	public int insert(String nombre, String apellidos) throws SQLException {
		Connection conn = null;
		PreparedStatement st = null;
		ResultSet rs = null;
		 
		int rows = 0;
		try {
			conn = (this.userCon != null)? this.userCon : datos.geConnection();
			st = conn.prepareStatement(SQL_INSERT);
			int index=1;
			st.setString(index++,nombre);
			st.setString(index++,apellidos);
			System.out.println("Ejecutando query : "+SQL_INSERT);
			rows = st.executeUpdate();
			System.out.println("Registros afectados");
			
		}finally {
			datos.close(st);
			if(this.userCon ==null) {
				datos.close(conn);
			}
		}
		return rows;
	}
	
	public int update(int id_persona , String nombre , String apellidos) throws SQLException {
		Connection conn = null;
		PreparedStatement st = null;
		ResultSet rs = null;
		
		int rows = 0;
		
		try {
			conn = (this.userCon!=null) ? this.userCon : datos.geConnection();
			System.out.println("Ejecutando Query  : "+SQL_UPDATE);
			st = conn.prepareStatement(SQL_UPDATE);
			int index = 1;
			st.setString(index++,nombre);
			st.setString(index++,apellidos);
			st.setInt(index, id_persona);
			rows = st.executeUpdate();
			System.out.println("Registros actualizados : "+rows);
			
		}finally {
			datos.close(st);
			if(this.userCon==null) {
				datos.close(conn);
			}
		}
		return rows;
	}
	
	public int delete(int id_persona) throws SQLException {
		Connection conn = null;
		PreparedStatement st = null;
		
		int rows=0;
		
		try {
			conn = (this.userCon != null) ? this.userCon : datos.geConnection();
			System.out.println("Ejecutando Query : "+SQL_DELETE);
			st = conn.prepareStatement(SQL_DELETE);
			st.setInt(1, id_persona);
			rows = st.executeUpdate();
			System.out.println("Registros eliminados : "+rows);
		}finally {
			datos.close(st);
			if(this.userCon == null) {
				datos.close(conn);
			}
		}
		return rows;
	}
	
	public List<Persona> select() throws SQLException{
		Connection conn = null;
		PreparedStatement st = null;
		ResultSet rs = null;
		Persona persona = null;
		
		List<Persona> personas = new ArrayList<>();
		try {
			conn = (this.userCon != null) ? this.userCon : datos.geConnection();
			st = conn.prepareStatement(SQL_SELECT);
			rs = st.executeQuery();
			while(rs.next()) {
				int id_persona = rs.getInt(1);
				String nombre = rs.getString(2);
				String apellidos = rs.getString(3);
				persona = new Persona();
				persona.setId_Persona(id_persona);
				persona.setNombre(nombre);
				persona.setApellidos(apellidos);
				personas.add(persona);
			}
		}finally{
			datos.close(st);
			datos.close(rs);
			if(this.userCon == null) {
				datos.close(conn);
			}
		}
		return personas;
	}
}
