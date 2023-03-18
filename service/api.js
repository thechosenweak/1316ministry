module.exports = function(server) {

    const {
        check,
        body,
        header,
        validationResult
    } = require("express-validator");

    // http://localhost:3000/test_api_get
    server.app.get("/test_api_get", async (req, res) => {
        const response = {
            params1: 'test 1',
            params2: 'test 2'
        }
        server.apiResponse(res, 200, "success", response);
    });

    // Postman = http://localhost:3000/test_api_post
    server.app.post("/test_api_post", async (req, res) => {
        const body = req.body;
        server.apiResponse(res, 200, "success", body);
    });

}