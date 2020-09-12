function semaforo() {
    let cambio = () => {

        let a = document.getElementById('semaforo')

        if (a.className == 'semaforo go') {
            a.className = "semaforo stop";
        } else {
            a.className = "semaforo go";
        }
    };

    setInterval(cambio, 4000);
}

semaforo();