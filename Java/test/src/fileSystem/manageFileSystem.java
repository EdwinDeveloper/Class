package fileSystem;



public class manageFileSystem {
	
	public static String Nombre_Archivo="c://ubicacion";
	public static void main(String[] args) {
		
		mainFileSystem system=new mainFileSystem();
		
		system.crearArchivo(Nombre_Archivo);
		system.escribitArchivo(Nombre_Archivo);
		system.anexarArchivo(Nombre_Archivo);
		system.leerArchivo(Nombre_Archivo);
	}
	
}
