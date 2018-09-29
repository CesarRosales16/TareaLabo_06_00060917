class Conversiones {
    convertir(medida, unidadEntrada, unidadSalida, tipo) {
        switch (tipo) {
            case 'L':
                break;
            case 'T':
                break;
            default:
                console.log("Tipo invalido");
                break;
        }
    }
    m_cm(num) {
        return num*100;
    }
    cm_m(num) {
        return num/100;
    }
    km_m(num) {
        return num/1000;
    }
    m_km(num) {
        return num*1000;
    }
    p_m(num) {
        return num*0.3048;
    }
    m_p(num) {
        return num/0.3048;
    }
    c_f(num) {
        return ((9*num)/5)+32;
    }
    f_c(num) {
        return (5*(num-32))/9;
    }
    k_f(num){
        return ((9*(num-273.15))/5)+32;
    }
    f_k(num){
        return ((5*(num-32))/9)+273.15;
    }
    k_c(num) {
        return num-273.15;
    }
    c_k(num){
        return num+273.15;
    }
} 