package jdbc;

import java.sql.*;
public class mainJDBC {
	public static void main(String[] args) {
		String url="jdbc:mysql://localhost:3306/sga?useSSL=false";
		try {
			Class.forName("com.mysql.jdbc.Driver");//clase en memoria del driver de mysql
			Connection conexion = (Connection) DriverManager.getConnection(url,"root","Eltigre4100");
			Statement instruccion = conexion.createStatement();
			String sql = "Select id_persona , nombre , apellidos from persona";
			
			ResultSet result = instruccion.executeQuery(sql);
			while(result.next()) {
				System.out.println("Id : "+result.getInt(1));
				System.out.println("nombre : "+result.getString(2));
				System.out.println("apellidos : "+result.getString(3));
			}
			result.close();
			instruccion.close();
			conexion.close();
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}
}
