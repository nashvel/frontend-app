(function () {
    "use strict";
  
    /* default input */
    let myDropzone = new Dropzone(".dropzone");
    myDropzone.on("addedfile", file => {
  
    });
  
  
    /**** Filepond js****/
    FilePond.registerPlugin(
      FilePondPluginImagePreview,
      FilePondPluginImageExifOrientation,
      FilePondPluginFileValidateSize,
      FilePondPluginFileEncode,
      FilePondPluginImageEdit,
       FilePondPluginFileValidateType,
      FilePondPluginImageCrop,
      FilePondPluginImageResize,
      FilePondPluginImageTransform
    );
  
    const SingleElement = document.querySelector('.basic-filepond');
    const MultipleElement = document.querySelector('.multiple-filepond');
    const CircularElement = document.querySelector('.circular-filepond');
    
    /* default input */
    FilePond.create(SingleElement);
    FilePond.create(MultipleElement);
    FilePond.create(CircularElement,
      {
        labelIdle: `<span class="filepond--label-action">Choose File</span>`,
        imagePreviewHeight: 170,
        imageCropAspectRatio: '1:1',
        imageResizeTargetWidth: 200,
        imageResizeTargetHeight: 200,
        stylePanelLayout: 'compact circle',
        styleLoadIndicatorPosition: 'center bottom',
        styleProgressIndicatorPosition: 'right bottom',
        styleButtonRemoveItemPosition: 'left bottom',
        styleButtonProcessItemPosition: 'right bottom',
      }
      );
  })();