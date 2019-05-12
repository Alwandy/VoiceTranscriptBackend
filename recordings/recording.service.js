const db = require('_helpers/db');
const Recording = db.Recording;
var azure = require('azure-storage');
var blobService = azure.createBlobService();

module.exports = {
    getAll,
    create,
    delete: _delete
};

async function getAll(created_by) {
    return await Recording.find({'created_by':created_by});
}

async function create(recordingParam) {
    const recording = new Recording(recordingParam);
    // save recording
    await recording.save();
}

async function _delete(id) {
    await Recording.findOne({'_id':id}).exec(function (err, recording) {
        if (err) return handleError(err);
         blobService.deleteBlobIfExists("audio",  recording.created_by + "-"+ recording.title + ".wav", function(error, result) {
            if (error) {
                console.log(error)
            } else {
            }
        });
      });
     await Recording.findOneAndDelete(id);
}