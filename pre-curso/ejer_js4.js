const usuarios = [
    { nombre: 'Juan', email: 'juan@example.com', edad: 30 },
    { nombre: 'Maria', email: 'maria@example.com', edad: 25 },
    { nombre: 'Pedro', email: 'pedro@example.com', edad: 35 },
    { nombre: 'Ana', email: 'ana@example.com', edad: 28 },
    { nombre: 'Luis', email: 'luis@example.com', edad: 32 }
  ];
 
  const correos = usuarios.map(usuario => usuario.email);

  console.log(correos);