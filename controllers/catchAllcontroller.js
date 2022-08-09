const catchAllError = ((req, res) =>
    res.sendFile(path.join(_dirname, '../../public/404image.jpg')))

module.exports = catchAllError;