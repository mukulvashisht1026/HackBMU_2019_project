var imgData = ''

$('#finalSubmit').click(function () {
    var formDetails = {
        'name': $('#name').val(),
        'pno': $('#pno').val(),
        'mail': $('#mail').val(),
        'manual': {
            'color': $('#color').val(),
            'model': $('#model').val(),
            'license': $('#license').val()
        },
        'image': imgData
    }
    var str = JSON.stringify(formDetails)
    console.log(formDetails)
    $.ajax({
        type: 'POST',
        url: 'http://3bf3b163.ngrok.io/postimg/', //	https://api.imgur.com/3/image
        data: str,
        cache: false,
        contentType: false,
        processData: false,
        enctype: 'multipart/form-data',
        success: function (data) {
            console.log("successfully uploaded");
            console.log("d" + data);
        },
        error: function (data) {
            console.log("error");
            console.log("e" + data);
        }
    });
})

$('#dt1').click(function () {
    $('#dt2tab').hide()
    $('#dt1tab').show()
    //dull
    $("#dt2").css({ "background-color": "#F2F2F2", "color": "#8B8B8B" });
    //active
    $("#dt1").css({ "background-color": "#00C7FF", "color": "#FFFFFF" });
})

$('#dt2').click(function () {
    $('#dt1tab').hide()
    $('#dt2tab').show()
    //dull
    $("#dt1").css({ "background-color": "#F2F2F2", "color": "#8B8B8B" });
    //active
    $("#dt2").css({ "background-color": "#00C7FF", "color": "#FFFFFF" });
})

// function upl() {
//     console.log('sub called')
//     // var formData = new FormData(this);
//     var f = $('#inpFile').get(0).files[0]
//     var db = new FormData();
//     db.append('file', f);
//     console.log(db)
//     var objobj = { 'd': 'abcd', 'i': f }
//     $.ajax({
//         type: 'POST',
//         url: 'http://3bf3b163.ngrok.io/postimg/', //	https://api.imgur.com/3/image
//         data: db,
//         cache: false,
//         contentType: false,
//         processData: false,
//         enctype: 'multipart/form-data',
//         success: function (data) {
//             console.log("successfully uploaded");
//             console.log("d" + data);
//         },
//         error: function (data) {
//             console.log("error");
//             console.log("e" + data);
//         }
//     });
// }

function show() {
    if (this.files && this.files[0]) {
        var fr = new FileReader();
        fr.onload = function (data) {
            var img = document.getElementById("uplImage")
            img.src = data.target.result;
            img.style.display = "block";
            domtoimage.toPng(img)
                .then(function (dataUrl) {
                    console.log("................." + dataUrl)
                    imgData = dataUrl
                    var link = document.createElement('a');
                    link.download = 'my-image-name.jpeg';
                    link.href = dataUrl;
                    link.click();
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
        }
        fr.readAsDataURL(this.files[0])
    }
}
