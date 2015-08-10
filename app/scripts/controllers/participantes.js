'use strict';
angular.module("torneosPslApp").controller("ParticipantesController", function(){
  this._tmpParticipantes = [
    {
      "id_participante" : "80098446",
      "nombres"         : "Frederic Yesid",
      "apellidos"       : "Peña Sánchez",
      "email"           : "fredericpena@gmail.com",
      "facebook_user"   : "razorblade446"
    },
    {
      "id_participante" : "80864142",
      "nombres"         : "Cristian Alberto",
      "apellidos"       : "Peña Sánchez",
      "email"           : "cristianps1@hotmail.com",
      "facebook_user"   : "cristianps1"
    }
  ];

  this.getParticipantes = function(){
    // Contenido dummy mientras se usan resources
    return this._tmpParticipantes;
  };
});
