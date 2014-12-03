({
  name: "Tater",
  helper: "To tinker?",
  bolder: function () {
    return function (tokens, render) {
      return [tokens[0][0], tokens[1][0], tokens[2][0]].join(',') + ' => <b>' + render(tokens) + '</b> ' + this.helper;
    }
  }
})
