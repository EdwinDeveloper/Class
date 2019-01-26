function calcular(_operacion,_valoruno,_valordos){
    var _resultado=0;
      switch (_operacion) {
        case "suma":
          _resultado = suma(_valoruno,_valordos);
          break;
        case "resta":
          _resultado = resta(_valoruno,_valordos);
        break;
        case "division":
          _resultado = division(_valoruno,_valordos);
          break;
        case "multiplicacion":
          _resultado = multiplicacion(_valoruno,_valordos);
        break;
        default:
        _resultado= "No se encontro la operacion";
        break;
      }
      return _resultado;
  }
  function suma(_valoruno,_valordos){
    return _valoruno+_valordos;
  }
  function division(_valoruno,_valordos){
    return _valoruno/_valordos;
  }
  function multiplicacion(_valoruno,_valordos){
    return _valoruno*_valordos;
  }
  function resta(_valoruno,_valordos){
    return _valoruno-_valordos;
  }