const router = require("express").Router();
const path = require("path");

router.get("/download", async (req, res) => {
  const filepath = path.join(__dirname, "../public", "LucasLoudon_CV.pdf");
  res.contentType("application/pdf");
  res.download(filepath, function (err) {
    if (err) console.log(err.code);
    else console.log("File was downloaded successfully!");
  });
});

module.exports = router;
