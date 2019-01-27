package fileSystem;

import java.io.File;
import java.io.PrintWriter;

//import jdk.jfr.events.FileWriteEvent;

import java.io.*;

public class mainFileSystem {
	
	public static void crearArchivo(String nombreArchivo) {
		File archivo = new File("users\\edwingiovanniperezrobles\\desktop\\develop\\kodemia\\java\\file.txt");
		try {
			PrintWriter salida = new PrintWriter(new FileWriter(archivo));
			String contenido="Contenido principal del documento";
			salida.println(contenido);
			salida.close();
			System.out.println("correcto");
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		System.out.println("El arvhico se ha creado correctamente");
	}
	
	public static void escribitArchivo(String nombreArchivo) {
		File archivo = new File(nombreArchivo);
		try {
			PrintWriter alida=new PrintWriter(new FileWriter(archivo));
			String contenido="Contenido del archivo";
			alida.println(contenido);
			alida.println();
			alida.println("Fin de escritura");
			alida.close();
			System.out.println("Se a escrito correctamente");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void leerArchivo(String nombreArchivo) {
		File archivo=new File(nombreArchivo);
		try {
			BufferedReader entrada = new BufferedReader(new FileReader(archivo));
			String lectura;
			lectura= entrada.readLine();
			while(lectura!=null) {
				System.out.println("Lectura :"+lectura);
				lectura=entrada.readLine();
			}
			entrada.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void anexarArchivo(String nombreArchivo) {
		File archivo = new File(nombreArchivo);
		try {
			PrintWriter salida = new PrintWriter(new FileWriter(archivo,true));//indicamos que anexaremos informacion con el true para no borrar informacion que ya contenga el archivo
			String contenido="Anexando infomracion al archivo";
			salida.println(contenido);
			salida.println();
			salida.println("Fin de anexar");
			salida.close();
			System.out.println("Se ha anexado correctamente informacion");
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
