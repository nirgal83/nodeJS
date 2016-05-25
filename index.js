var _ = require('underscore');
module.exports = {
  html: function(s){
      var compiled = _.template('<html><%= tag %></html>');
      return compiled({tag:s});
  },
  h1: function(a){
    var compiled = _.template('<h1><%=tag%></h1>');
    return compiled({tag: a});
  },
  p: function (b) {
    var compiled = _.template('<p><%=tag%></p>');
    return compiled({tag: b});
  },
  ul: function(c) {
    var compiled = _.template('<li><%=tag%></li>');
    var result = '<ul>';
    for (var i=0; i<c.length; i++){
      result += compiled({tag: c[i]});
    }
    result+='</ul>'
    return result;
  }
}
