$(function() {

    /**
     * If this project is servered via URL, this will change the URL format.
     */
    /**
     * Comment it if you are running on local machine.
     */
    var currentUrl = window.location.href;
    currentUrl.split('.html')[0];

    var url_string = document.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("id");

    window.history.replaceState(null, null, c);
    /**
     * ----------------------------------------------
     */

    /**
     * Getting the data from the local storage in browser.
    */
    var data = JSON.parse(localStorage.getItem('adsData'));

    /**
    * Merge page 1 and page 2 array's key
    */
    var mergedData = data[0]['ads'].concat(data[1]['ads']);
    // console.log('merged: ', mergedData)

    for(var i=0; i<mergedData.length; i++) {

        if(mergedData[i]['id'] == c) {            
            $(".plat-data").show();

            $('.card-detail').html(""+
            "<div class='col span_1_of_3 list-wrapper'>"+
                "<div class='padding-div'>"+
                    "<p class='title'><strong>Title: </strong>"+mergedData[i]['title']+"</p>"+
                    "<p class='city_label'><strong>City: </strong>"+mergedData[i]['city_label']+"</p>"+
                    "<p class='description'><strong>Description: </strong>"+mergedData[i]['description']+"</p>"+
                "</div>"+
            "</div>");
        }
    }
})