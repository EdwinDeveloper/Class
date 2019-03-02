package jdbc;
import java.sql.*;

public class datos {
	public static String JDBC_DRIVER="com.mysql.jdbc.Driver";
	public static String JDBC_URL="jdbc:mysql://localhost/sga?useSSL=false";
	public static String JDBC_USER = "root";
	public static String JDBC_PASS = "Eltigre4100";
	public static Driver driver = null;
	
	public static synchronized Connection geConnection()
		throws SQLException{
			if(driver==null) {
				try {
					Class jdbcDriverClass = Class.forName(JDBC_DRIVER);
					driver = (Driver) jdbcDriverClass .newInstance();
					DriverManager.registerDriver(driver);
				} catch (Exception e) {
					System.out.println("Fallo al cargar driver JDBC");
					e.printStackTrace();
				}
			}
		
		return DriverManager.getConnection(JDBC_URL,JDBC_USER,JDBC_PASS);
	}
	
	public static void close(ResultSet rs){
		try {
			if(rs!=null) {
				rs.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public static void close(PreparedStatement stmt) {
		try {
			if(stmt!=null) {
				stmt.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public static void close(Connection con) {
		try {
			if(con!=null) {
				con.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
