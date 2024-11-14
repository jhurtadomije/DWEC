

function potenciaRecursiva(base, exponente) {
    // Casos base
    if (exponente === 0) {
        return 1;
    } else if (exponente < 0) {
        return 1 / potenciaRecursiva(base, -exponente);
    }

    // Caso recursivo
    else {
        return base * potenciaRecursiva(base, exponente - 1);
    }
}