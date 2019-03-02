package PersonaCapaDatos.personaDTO;

public class PersonaDTO {
	
		private int id_persona;
		private String nombre;

		private String apellidos;
	
		public PersonaDTO() {}
		
		public PersonaDTO(int id_persona) {
			this.id_persona=id_persona;
		}
		
		public int getId_persona() {
			return id_persona;
		}

		public void setId_persona(int id_persona) {
			this.id_persona = id_persona;
		}

		public String getNombre() {
			return nombre;
		}

		public void setNombre(String nombre) {
			this.nombre = nombre;
		}

		public String getApellidos() {
			return apellidos;
		}

		public void setApellidos(String apellidos) {
			this.apellidos = apellidos;
		}
		
		@Override
		public String toString() {
			return "Persona ( id_persona= : "+id_persona+" : nombre = : "+nombre+" : apellidos= :" +apellidos;
		}
		
}
