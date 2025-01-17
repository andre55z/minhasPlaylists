async function copiarTexto() {
    const texto = "15 997584801";

    await navigator.clipboard.writeText(texto);
    alert("Texto copiado para a área de transferência!");
}