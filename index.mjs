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
        console.log(modeMedia + req.url)
        request(modeMedia + req.url).pipe(res)

    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${port}`);
});