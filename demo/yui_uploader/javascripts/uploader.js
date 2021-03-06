$(function () {
YUI().use('uploader', function (Y) {
  //Manual Uploader Type Override
  //Y.Uploader = Y.UploaderFlash;
  //Y.Uploader = Y.UploaderHTML5;

  //Instantiation
  if (Y.Uploader.TYPE != "none") {
    var uploader = new Y.Uploader({
      width: "300px",
      height: "40px",
      multipleFiles: true,
      uploadURL: 'upload.php',
      simLimit: 1
    }).render("#uploaderContainerID");
  }

  if (Y.Uploader.TYPE == "html5") {
    uploader.set("dragAndDropArea", "#divContainer");
    //uploader.render("#selectFilesButtonContainer");
  }
  else if (Y.Uploader.TYPE == "flash") {
    uploader.set("fileFilters", [{description:"Images", extensions:"*.jpg;*.png;*.gif"},
                                {description:"Videos", extensions:"*.avi;*.mov;*.mpg"}]);
    uploader.render("#selectFilesButtonContainer");
  }
  else {
    Y.log("No Flash or HTML5 capabilities detected.");
  }

  // EVENTS

  var myFileList = {};
  uploader.on("fileselect", fileSelectHandler);
  function fileSelectHandler(event) {
    $.each(event.fileList, function (idx, file) {
      var attrs = file.getAttrs();
      cloneBar(attrs.id, attrs.name + " " + attrs.size);
      progressInfo.total += attrs.size;
      myFileList[attrs.id] = file;
    });
    if (!uploading) {
      setTimeout(myUpload, 1);
    }
  }

  uploader.on("totaluploadprogress", reportProgress);
  function reportProgress(event) {
    //Y.log("Bytes uploaded: " + event.bytesLoaded);
    //Y.log("Bytes remaining: " + (event.bytesTotal - event.bytesLoaded));
    //Y.log("Percent uploaded: " + event.percentLoaded);
    var percent = parseInt(event.bytesLoaded * 100 / event.bytesTotal);
    $("#bar-total").css("width", percent + "%");
  }

  uploader.on("uploadprogress", uploadProgressHandler);
  function uploadProgressHandler(event) {
    var file = event.file || currentFile;
    var attrs = file.getAttrs();
    var percent = parseInt(event.bytesLoaded * 100 / event.bytesTotal);
    $("#" + attrs.id).css("width", percent + "%");

    //update total
    progressInfo.uploading = attrs.bytesUploaded;
    var totalPercent = parseInt((progressInfo.uploaded + progressInfo.uploading) * 100 / progressInfo.total);
    $("#bar-total").css("width", totalPercent + "%");
  }

  uploader.on("alluploadscomplete", allUploadsCompleteHandler);
  function allUploadsCompleteHandler(event) {
    //alert("allUploadsCompleteHandler");
    //console.log(event);
    console.log(event._type);
  }

  uploader.on("uploadstart", uploadStartHandler);
  function uploadStartHandler(event) {
    console.log(event._type);
  }

  uploader.on("uploadcomplete", uploadCompleteHandler);
  function uploadCompleteHandler(event) {
    var file = event.file || currentFile,
        attrs = file.getAttrs();
    fileStatus[attrs.id] = 1;
    console.log(event._type + ": " + attrs['name'] + " " + attrs['size']);
    uploadId++;
    setTimeout(myUpload, 1);

    //update total
    progressInfo.uploading = 0;
    progressInfo.uploaded += attrs.size;
    var totalPercent = parseInt((progressInfo.uploaded + progressInfo.uploading) * 100 / progressInfo.total);
    $("#bar-total").css("width", totalPercent + "%");
  }
  uploader.on("uploaderror", uploadErrorHandler);
  function uploadErrorHandler(event) {
    console.log(event._type + ": " + event.file.getAttrs()['name'] + " " + event.file.getAttrs()['size']);
  }

  function cloneBar(id, text) {
    var newBar = $("#bar-containers").children().first().clone();
    newBar.append('<a href="#" data-id="' + id + '"><i class="icon-remove"></i></a>').children().first().children().attr("id", id).css("width", "0").text(text);
    $("#bar-containers").append(newBar);
  }

  var uploadId = 0,
      currentFile = null,
      uploading = false,
      progressInfo = {
        total : 0,
        uploaded : 0,
        uploading: 0
      },
      fileStatus = {};

  function myUpload() {
    var fileList = uploader.get("fileList");
    if ( ! fileList.hasOwnProperty(uploadId)) {
      alert('Upload Complete');
      uploading = false;
      return;
    }
    uploading = true;
    currentFile = fileList[uploadId];
    var attrs = currentFile.getAttrs();
    if (fileStatus.hasOwnProperty(attrs.id)) {
      console.log('skip');
      uploadId++;
      setTimeout(myUpload, 1);
      return;
    }
    uploader.upload(fileList[uploadId], 'upload.php');
  }

  // bind jQuery event
  $("#bar-containers").delegate("a", "click", function () {
    // remove
    var id = $(this).attr("data-id");
    $("#" + id).css("width", "100%").addClass("bar-warning");
    $(this).remove();
    fileStatus[id] = -1;

    // cancel upload if equals to currentFile
    var attrs = currentFile.getAttrs();
    if (attrs.id == id) {
      currentFile.cancelUpload();
      uploadId++;
      setTimeout(myUpload, 1);
    }
    return false;
  });

  window.Y = Y;
  window.uploader = uploader;
  window.fileStatus = fileStatus;
  window.myFileList = myFileList;
});
});