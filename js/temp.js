if (document.readyState == 'complete') 
{
    AOS.refresh();
}
$(document).ready(function () {
    setTimeout(() => {
        AOS.init();
    }, 120);
    var iArrayValue = 0;
    // setInterval(function() {
        // console.log( $("#example"))
        // if(++iArrayValue > 9) { 
            // iArrayValue = 0; 
        // }
    // }, 300);
    // var i =0
    // var elem = document.createElement("div")
    // elem.className = "sig_dis"
    // while (i<12){
        
        $(".example").sevenSeg({value:1})
        $(".temp1").sevenSeg({value:1})
        var t = 1000
        $(".example").each((i,e)=>{
            // e.setAttribute("data-bind",0)
            e.setAttribute("data-aos-duration", t)
            
            t+=200
        })
        // });
    // $("#example").
    //     i+=1
    // }
    // $(".sig_dis").sevenSeg({value:0})
});
