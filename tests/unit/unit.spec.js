const Util = require("../../src/Util/util");

async function init() {
    await new Promise(resolve => setTimeout(resolve, 200));
}

// -- Categoria: Generate Unique Token
describe('Generate Unique Token', () => {

    // -- Teste 1: it should generate an unique token
    it('it should generate an unique token', () => {
        const token = Util.generateToken({ id: "5e76c7c071024e3f9847e3b9" });
        // -- Token já gerado para este ID
        const expected = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzZjN2MwNzEwMjRlM2Y5ODQ3ZTNiOSIsImlhdCI6MTU4NTcwNTA4NywiZXhwIjoxNTg1NzkxNDg3fQ.RCT-VTC72XkkFjX-o-Z3-hzpJLppwgJgrBJkcYFqw8I";
        expect(token).toEqual(expect.not.stringContaining(expected));
    });

});

describe('Generate Not Empty Value', () => {

    // -- Teste 1: it should generate an unique token
    it('it should generate an token not empty', () => {
        const token = Util.generateToken({ id: "5e76c7c071024e3f9847e3b9" });
        expect(token).not.toStrictEqual(""); 
    });

});