const fecha = document.getElementById("fecha-actual");

if (fecha) {
    const hoy = new Date();
    fecha.textContent = hoy.toLocaleDateString("es-PE", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
