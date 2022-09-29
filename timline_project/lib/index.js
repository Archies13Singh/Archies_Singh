



$(()=>{
    promise = $.ajax({
        url : 'data/data.json',
        cache : false,
        timeout : 4000
      })
    
    
      promise.done(function(res,status,jqxhr){
        $(res.root.players).each(function(idx,val){
          $("#dates").append(
            `
              <li id = "${val.year}"><a href="#${val.year}">${val.year}</a></li>
            `
          )
        })
      })

      promise.done(function(res,status,jqxhr){
        $(res.root.players).each(function(idx,val){
          $("#issues").append(
            `
            <div>
                <img src="" alt="" height="250" width="250">
                <h1>${val.firstname}</h1>
                <p>${val.content}</p>
            </div>
            `
          )
        })
      })


      
})