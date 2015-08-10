'use strict';

angular.module("torneosPslApp").controller("TorneosController", function(){
  this._torneos = [
    {
      "id_torneo"     : 1,
      "nombre_torneo" : "FIFA 15 2015-2",
      "fecha_inicio"  : "2015-07-15",
      "fecha_fin"     : "2015-09-15"
    }
  ];

  this.getTorneos = function(){
    return this._torneos;
  };
});
