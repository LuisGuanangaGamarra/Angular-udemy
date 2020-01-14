function activar(quien, objecto, momento) {
    if (objecto === void 0) { objecto = "Batiseñal"; }
    if (momento) {
        console.log(quien + " activo la " + objecto + " " + momento);
    }
    else {
        console.log(quien + " activo la " + objecto);
    }
}
activar("Gordon", "Batiseñal", "tarde");
