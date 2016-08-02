
      storageResponse: function(meta, oldmeta) {
        // A. 
        var el = this.$.spinner;
        el.active = false;

        var filetype = meta.contentType,
            urls     = meta.downloadURLs; 

        if (!urls || !urls.length) return;  // console.log("storageResponse", meta);

        this.storageurl = urls[0]; 
        
        if (filetype.indexOf("image") > -1) { 
          this.imgurl = urls[0] ;  // console.log("apply downloadurl:", filetype, urls[0]); // return;
        } else {
          this.imgurl = "../images/app-icon-144.png" ; // default placeholder
        } 

        // B. prepare the formular-input extracting some firedb-data from storagemeta
        if (this.storageurl) {
          var clmeta = {"url": this.storageurl};
          clmeta["title-main-pict"] = meta.name+"/"+meta.updated+"/"+meta.size;
          clmeta["disable"] = ["url"]; 
          // clmeta["type"] = meta.contentType;
          // clmeta["date"] = meta.updated;
          // clmeta["size"] = meta.size;

          this.fbspot = clmeta;   // ****  
        }  
      }

