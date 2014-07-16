define(["dojo/_base/xhr", "dojo/store/JsonRest", "dojo/store/Cache", "dojo/store/Memory", "dojo/store/Observable"],
    function (xhr, JsonRest, Cache, Memory, Observable) {
        return new Observable( Cache( JsonRest({idProperty: "persistenceId", target: "http://localhost:8080/kubb/api/teams", headers:{ "Content-Type": "application/json" } }), new Memory() ) );
    });