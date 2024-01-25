import express from "express";
import request from "request";

const app = express();
const port = 3000;
const modeMedia = "http://modmedia.vn"

app.get('*', (req, res) => {
    const uri = req.url;
    console.log(uri)
    if (uri.includes("ToolUserAgent_HOCVIEN?hash")) {
        res.send({ "success": true, "message": "Đăng nhập thành công" });
    } else {
        var options = {
            'method': 'GET',
            'url': modeMedia + req.url,
            'headers': {}
        };
        console.log(modeMedia + req.url)
        res.redirect(301, modeMedia + req.url);
        // request(options, function(error, response) {
        //     if (error) throw new Error(error);
        //     // console.log(response.body);
        //     const headers = response && response.headers ? response.headers : {};
        //     const headersKeys = Object.keys(headers)
        //     for(var i = 0; i < headersKeys.length; i++) {
        //         res.setHeader(headersKeys[i], headers[headersKeys[i]]);
        //     }
        //     // res.setHeader("Content-Type", "application/octet-stream");
        //     console.log('Headers:', headers);
        //     res.send(response.body);
        // });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${port}`);
});