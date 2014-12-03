({
  bold: function(){
    return function(tokens, render) {
      return "<b>" + render(tokens) + "</b>";
    }
  }
})
