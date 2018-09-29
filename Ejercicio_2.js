class Conversiones {
    convertir(medida, unidadEntrada, unidadSalida, tipo) {
        switch (tipo) {
            case 'L':
                if (unidadEntrada.toLowerCase() == "m" && unidadSalida.toLowerCase() == "cm") {
                    console.log(m_cm(medida) + "cm");
                }
                if (unidadEntrada.toLowerCase() == "cm" && unidadSalida.toLowerCase() == "m") {
                    console.log(cm_m(medida) + "m");
                }
                if (unidadEntrada.toLowerCase() == "km" && unidadSalida.toLowerCase() == "m") {
                    console.log(km_m(medida) + "m");
                }
                if (unidadEntrada.toLowerCase() == "m" && unidadSalida.toLowerCase() == "km") {
                    console.log(m_km(medida) + "km");
                }
                if (unidadEntrada.toLowerCase() == "p" && unidadSalida.toLowerCase() == "m") {
                    console.log(p_m(medida) + "m");
                }
                if (unidadEntrada.toLowerCase() == "m" && unidadSalida.toLowerCase() == "p") {
                    console.log(m_p(medida) + "p");
                }
                break;
            case 'T':
                if (unidadEntrada.toUpperCase() == "C" && unidadSalida.toUpperCase() == "F") {
                    console.log(c_f(medida) + "F");
                }
                if (unidadEntrada.toUpperCase() == "F" && unidadSalida.toUpperCase() == "C") {
                    console.log(f_c(medida) + "C");
                }
                if (unidadEntrada.toUpperCase() == "K" && unidadSalida.toUpperCase() == "F") {
                    console.log(k_f(medida) + "F");
                }
                if (unidadEntrada.toUpperCase() == "F" && unidadSalida.toUpperCase() == "K") {
                    console.log(f_k(medida) + "K");
                }
                if (unidadEntrada.toUpperCase() == "K" && unidadSalida.toUpperCase() == "C") {
                    console.log(k_c(medida) + "C");
                }
                if (unidadEntrada.toUpperCase() == "C" && unidadSalida.toUpperCase() == "K") {
                    console.log(c_k(medida) + "K");
                }
                break;
            default:
                console.log("Tipo invalido");
                break;
        }
    }
    m_cm(num) {
        return num * 100;
    }
    cm_m(num) {
        return num / 100;
    }
    km_m(num) {
        return num / 1000;
    }
    m_km(num) {
        return num * 1000;
    }
    p_m(num) {
        return num * 0.3048;
    }
    m_p(num) {
        return num / 0.3048;
    }
    c_f(num) {
        return ((9 * num) / 5) + 32;
    }
    f_c(num) {
        return (5 * (num - 32)) / 9;
    }
    k_f(num) {
        return ((9 * (num - 273.15)) / 5) + 32;
    }
    f_k(num) {
        return ((5 * (num - 32)) / 9) + 273.15;
    }
    k_c(num) {
        return num - 273.15;
    }
    c_k(num) {
        return num + 273.15;
    }
} 