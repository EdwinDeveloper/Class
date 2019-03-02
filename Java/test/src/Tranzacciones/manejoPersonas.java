package Tranzacciones;

import java.sql.*;
import java.util.*;
import jdbc.datos;

public class manejoPersonas {
		public static void main(String[] args){
			PersonaJDBC personasJDBC = new PersonaJDBC();
			
			Connection conn = null ;
			try {
				conn = datos.geConnection();
				if(conn.getAutoCommit()) {
					conn.setAutoCommit(false);
				}
				PersonaJDBC personas = new PersonaJDBC(conn);
				personas.update(2, "EdwinActulizadoAwevo","Perez mira aqui estoy");
				personas.insert("Yovas","Bueno Pues");
				conn.commit();
			}catch(SQLException e){
				try {
					System.out.println("Ingresamos al RollBack");
					e.printStackTrace(System.out);
					conn.rollback();
				}catch(SQLException ex) {
					e.printStackTrace(System.out);
				}
			}
			
		}
}
