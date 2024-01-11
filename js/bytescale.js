const Bytescale = require('@bytescale/sdk');

const uploadManager = new Bytescale.UploadManager({
    apiKey: "public_kW15brd5HaXPzB3i1HpXV6akzVQ4" // This is your API key.
});

const onFileSelected = async event => {
    const file = event.target.files[0];
    try {
        const { fileUrl, filePath } = await uploadManager.upload({ data: file });
        alert(`File uploaded:\n${fileUrl}`);
    } catch (e) {
        alert(`Error:\n${e.message}`);
    }
}
