

htmlCards = [];

var listDetail = function(id) {
    window.location = "./list.html?id="+id;
}

var add3Dots = function(string, limit) {
    var dots = "...";
    if(string.length > limit) {
        string = string.substring(0,limit) + dots;
    }
    return string;
}

$(function() {

    /**
     * ----------------------------------------------
     */
        
        /**
         * If data is not stored then call ajax function.
         */
        if(localStorage.getItem('adsData') === null) {

            $.ajax({
                async: false,
                url: 'http://api.jsonbin.io/b/5bbe26bd295e4356a50f966d',
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                beforeSend: function(){
                    $(".loader").show();
                },
                complete : function() {
                    $(".loader").hide();
                    $(".plat-data").show();
                },
                success: function(response) {
                    // console.log(response)
                    /**
                     * Storing this object in local storage on browser.
                     */
                    localStorage.setItem('adsData', JSON.stringify(response));
                    /**
                     * ---------------------------------------------------------
                     */
                }
            });
        }else{

            $(".loader").hide();
            $(".plat-data").show();
        }

        /**
         * Getting the data from the local storage in browser.
        */
        var data = JSON.parse(localStorage.getItem('adsData'));
    
        /**
         * Merge page 1 and page 2 array's key
         */
        var mergedData = data[0]['ads'].concat(data[1]['ads']);
        
        for(var i=0; i<mergedData.length; i++) {

            htmlCards.push(""+
            "<div class='col span_1_of_3' onclick='listDetail("+mergedData[i]['id']+")'>"+
                "<div class='padding-div'>"+
                    "<p class='title'>"+add3Dots(mergedData[i]['title'], 25)+"</p>"+
                    "<p class='city_label'>"+mergedData[i]['city_label']+"</p>"+
                    "<p class='description'>"+add3Dots(mergedData[i]['description'], 250)+"</p>"+
                "</div>"+
            "</div>");

            
        }

        $("#card-temp").html(htmlCards);
})

