function clicked(item) {
    $(document).ready(function(){
        var url = $($(item).attr("vdplay")).attr('src');
        
        $($(item).attr("href")).on('hide.bs.modal', function(){
            $($(item).attr("vdplay")).attr('src', '');
        });
        $($(item).attr("href")).on('show.bs.modal', function(){
            $($(item).attr("vdplay")).attr('src', url);
        });
    });
  }