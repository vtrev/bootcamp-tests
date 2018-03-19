  var paarl = [];



  function CountAllPaarl() {

      //var reg = reg.replace(/ /g, '')
      var new_reg = reg.split(", ");
      //console.log(new_reg);
      for (var i = 0; i < new_reg.length; i++) {
          var lst = new_reg[i]
          //console.log(reg)
          if (new_reg[i].startsWith("CJ")) {
              paarl.push(new_reg[i]);
          }

      }
      //console.log(paarl)
      return paarl;
  }
