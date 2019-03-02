package jdbc;

import java.sql.*;
import java.util.*;
import java.util.ArrayList;
import java.util.List;

public class PersonaJDBC {
	
	private static String INSERT = "INSERT INTO persona(nombre,apellidos) VALUES(?,?)";
	private static String UPDATE = "UPDATE persona SET nombre=?, apellidos=? WHERE id_persona=?";
	private static String DELETE = "DELETE FROM persona WHERE id_persona=?";
	private static String SELECT = "SELECT id_persona,nombre,apellidos FROM persona WHERE id_persona=?";
	
	public int insert(String nombre, String apellidos) {
		Connection conn=null;
		PreparedStatement stmt=null;
		ResultSet rs=null;
		
		int rows=0;
		
		try {
			conn = datos.geConnection();
			stmt = conn.prepareStatement(INSERT);
			int index=1;
			stmt.setString(index++,nombre);
			stmt.setString(index++,apellidos);
			System.out.println("Ejecutado query : "+ INSERT);
			rows = stmt.executeUpdate();
			System.out.println("Registros afectados : "+rows);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			datos.close(stmt);
			datos.close(conn);
		}
		return rows;
	}
	
	public int update(int id_persona,String nombre,String apellidos) {
		Connection conn = null;
		PreparedStatement stmt=null;
		int rows=0;
		try {
			conn = datos.geConnection();
			System.out.println("Ejecutando query UPDATE");
			stmt = conn.prepareStatement(UPDATE);
			int index=1;
			stmt.setString(index++,nombre);
			stmt.setString(index++,apellidos);
			stmt.setInt(index, id_persona);
			rows = stmt.executeUpdate();
			System.out.println("Registros Actualizados : "+rows);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			datos.close(stmt);
			datos.close(conn);
		}
		return rows;
	}
	
	public int delete(int id_persona) {
		Connection conn = null;
		PreparedStatement stmt = null;
		int rows=0;
		try {
			conn = datos.geConnection();
			System.out.println("Ejecutando Query DELETE");
			stmt = conn.prepareStatement(DELETE);
			stmt.setInt(1,id_persona);
			rows = stmt.executeUpdate();
			System.out.println("Registros Eliminados : "+rows);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			datos.close(stmt);
			datos.close(conn);
		}
		return rows;
	}
	
	public List<Persona> select(){
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs = null;
		Persona persona = null;
		List<Persona> personas = new ArrayList<>();
		try {
			conn = datos.geConnection();
			stmt = conn.prepareStatement(SELECT);
		    rs = stmt.executeQuery();
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
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			datos.close(stmt);
			datos.close(conn);
		}
		return personas;
	}
}
