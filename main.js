function file_get_contents(filename) {
    fetch(filename).then((resp) => resp.text()).then(function(data) {
        document.getElementById("inbox").innerHTML = data;
    });
}