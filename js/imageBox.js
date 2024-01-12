// upload image button-only
// const Bytescale = require('@bytescale/sdk');

// const uploadBtn = document.getElementById('upload-btn');

// const uploadManager = new Bytescale.UploadManager({
//     apiKey: "public_kW15brd5HaXPzB3i1HpXV6akzVQ4" // This is your API key.
// });

// const onFileSelected = async event => {
//     const file = event.target.files[0];
//     try {
//         const { fileUrl, filePath } = await uploadManager.upload({ data: file });
//         alert(`File uploaded:\n${fileUrl}`);
//     } catch (e) {
//         alert(`Error:\n${e.message}`);
//     }
// }

// uploadBtn.addEventListener('change', onFileSelected);


// ---------------------------------------------------------------------------------------------------

// Configuration:
// https://www.bytescale.com/docs/upload-widget#configuration

// upload image widget-box
const uploadedImage = document.getElementById('uploaded-image');

const options = {
    apiKey: "public_kW15brd5HaXPzB3i1HpXV6akzVQ4",
    editor: {
        images: {
            crop: false
        }
    },
    maxFileCount: 1,
    maxFileSizeBytes: 3000000,
    // Dropzone configuration:
    layout: "inline",
    container: "#upload-box",
    showFinishButton: true,

    // To remove the 'finish' button:
    // showFinishButton: false,
    // onUpdate: ({ uploadedFiles, pendingFiles, failedFiles }) => {
    //   const fileUrls = uploadedFiles.map(x => x.fileUrl).join("\n");
    //   if (fileUrls.length > 0) {
    //     alert(`File(s) uploaded:\n\n${fileUrls}`);
    //   }
    // }
};

let imageURL;

Bytescale.UploadWidget.open(options).then(
    files => {
        const fileUrls = files.map(x => x.fileUrl).join("\n");
        const success = fileUrls.length === 0
            ? "No file selected."
            : `File uploaded:\n\n${fileUrls}`;
        imageURL = fileUrls;
        console.log(fileUrls);
        alert(success);
    },
    error => {
        alert(error);
    }
).then(() => {
    uploadedImage.setAttribute("src", `${imageURL}`);
    uploadedImage.setAttribute("width", 400);
    uploadedImage.setAttribute("height", 300);
});