import axios from "axios";
import FileDownload from "js-file-download";

// Download CV from backend
export const download = async () => {
  axios
    .get("/cv/download", { responseType: "blob" })
    .then((res) => {
      FileDownload(res.data, "LucasLoudon_CV.pdf", res.headers["content-type"]);
    })
    .catch((err) => {
      console.log(`Download: ${err.response.data.error}`);
    });
};
