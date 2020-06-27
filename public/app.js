(function () {
    const MapContainer = document.querySelector('#MapContainer');
    const ListContainer = document.querySelector('#ListContainer');
    const MapNList = document.querySelectorAll('.MapNList');
    MapNList.forEach((HTMLElement) => {
        HTMLElement.addEventListener('click', (e) => {
            switch (e.target.id) {
                case 'MAP':
                    MapContainer.classList.remove('dsp');
                    ListContainer.classList.add('dsp');
                    break;

                case 'LIST':
                    MapContainer.classList.add('dsp');
                    ListContainer.classList.remove('dsp');
                    break;
            }
        })
    })
    const distancegrp = document.querySelectorAll('.distancegrp');
    distancegrp.forEach((HTMLElement) => {
        HTMLElement.addEventListener('click', function (e) {
            changeRadius(Number(e.target.value));
            e.target.style.color = "orange";
        });
    })


})();
//# sourceMappingURL=app.js.map