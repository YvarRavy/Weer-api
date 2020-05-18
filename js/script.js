function requestData() {
    var data = null;

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            var obj = JSON.parse(this.responseText);

            var resultaat = document.getElementById("Resultaten");
            var title = document.getElementById("exampleModalLabel");

            title.innerHTML = obj.liveweer[0].plaats;

            resultaat.innerHTML =
                "Het is nu " + obj.liveweer[0].samenv + " in " + obj.liveweer[0].plaats + "<br>" +
                "De temperatuur: <i class='fas fa-temperature-high'></i>" + obj.liveweer[0].temp + "<br>" +
                "Gevoelstemperatuur: <i class='fas fa-thermometer'></i> " + obj.liveweer[0].gtemp + "<br>" +
                "Windkracht: <i class='fas fa-wind'></i>" + obj.liveweer[0].windkmh + "<br>" +
                "Wind Richting: <i class='fas fa-location-arrow'></i>" + obj.liveweer[0].windr + "<br>" +
                "Max temp: <i class='fas fa-temperature-high'></i>" + obj.liveweer[0].d0tmax + "<br>" +
                "Min temp: <i class='fas fa-temperature-low'></i>" + obj.liveweer[0].d0tmin + "<br>" +
                "Neerslagkans vandaag: " + obj.liveweer[0].d0neerslag + "%";
        }
    });

    var location = document.getElementById("pnaam").value;

    xhr.open("GET", "http://weerlive.nl/api/json-data-10min.php?key=6ad7dd1ca9&locatie=" + location);

    xhr.send(data);
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})