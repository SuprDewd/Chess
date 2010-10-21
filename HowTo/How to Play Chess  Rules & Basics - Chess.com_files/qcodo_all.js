///// THIS IS THE QCODO.JS FILE

///////////////////////////////////////////////////
// The Qcodo Object is used for everything in Qcodo
///////////////////////////////////////////////////

  var qcodo = {
    initialize: function() {

    ////////////////////////////////
    // Browser-related functionality
    ////////////////////////////////

      this.isBrowser = function(intBrowserType) {
        return (intBrowserType & qcodo._intBrowserType);
      };
      this.IE = 1;
      this.IE_6_0 = 2;
      this.IE_7_0 = 4;

      this.FIREFOX = 8;
      this.FIREFOX_1_0 = 16;
      this.FIREFOX_1_5 = 32;
      this.FIREFOX_2_0 = 64;

      this.SAFARI = 128;
      this.SAFARI_2_0 = 256;
      this.SAFARI_3_0 = 512;

      this.MACINTOSH = 1024;

      this.UNSUPPORTED = 2048;

      // INTERNET EXPLORER (supporting versions 6.0 and 7.0)
      if (navigator.userAgent.toLowerCase().indexOf("msie") >= 0) {
        this._intBrowserType = this.IE;

        if (navigator.userAgent.toLowerCase().indexOf("msie 6.0") >= 0)
          this._intBrowserType = this._intBrowserType | this.IE_6_0;
        else if (navigator.userAgent.toLowerCase().indexOf("msie 7.0") >= 0)
          this._intBrowserType = this._intBrowserType | this.IE_7_0;
        else
          this._intBrowserType = this._intBrowserType | this.UNSUPPORTED;

      // FIREFOX (supporting versions 1.0, 1.5 and 2.0)
      } else if ((navigator.userAgent.toLowerCase().indexOf("firefox") >= 0) || (navigator.userAgent.toLowerCase().indexOf("iceweasel") >= 0)) {
        this._intBrowserType = this.FIREFOX;
        var strUserAgent = navigator.userAgent.toLowerCase();
        strUserAgent = strUserAgent.replace('iceweasel/', 'firefox/');

        if (strUserAgent.indexOf("firefox/1.0") >= 0)
          this._intBrowserType = this._intBrowserType | this.FIREFOX_1_0;
        else if (strUserAgent.indexOf("firefox/1.5") >= 0)
          this._intBrowserType = this._intBrowserType | this.FIREFOX_1_5;
        else if (strUserAgent.indexOf("firefox/2.0") >= 0)
          this._intBrowserType = this._intBrowserType | this.FIREFOX_2_0;
        else
          this._intBrowserType = this._intBrowserType | this.UNSUPPORTED;

      // SAFARI (supporting version 2.0 and eventually 3.0)
      } else if (navigator.userAgent.toLowerCase().indexOf("safari") >= 0) {
        this._intBrowserType = this.SAFARI;

        if (navigator.userAgent.toLowerCase().indexOf("safari/41") >= 0)
          this._intBrowserType = this._intBrowserType | this.SAFARI_2_0;
        else if (navigator.userAgent.toLowerCase().indexOf("safari/52") >= 0)
          this._intBrowserType = this._intBrowserType | this.SAFARI_3_0;
        else
          this._intBrowserType = this._intBrowserType | this.UNSUPPORTED;

      // COMPLETELY UNSUPPORTED
      } else
        this._intBrowserType = this.UNSUPPORTED;

      // MACINTOSH?
      if (navigator.userAgent.toLowerCase().indexOf("macintosh") >= 0)
        this._intBrowserType = this._intBrowserType | this.MACINTOSH;



    ////////////////////////////////
    // Browser-related functionality
    ////////////////////////////////

      this.loadJavaScriptFile = function(strScript, objCallback) {
        strScript = qc.jsAssets + "/" + strScript;
        var objNewScriptInclude = document.createElement("script");
        objNewScriptInclude.setAttribute("type", "text/javascript");
        objNewScriptInclude.setAttribute("src", strScript);
        document.getElementById(document.getElementById("Qform__FormId").value).appendChild(objNewScriptInclude);

        // IE does things differently...
        if (qc.isBrowser(qcodo.IE)) {
          objNewScriptInclude.callOnLoad = objCallback;
          objNewScriptInclude.onreadystatechange = function() {
            if ((this.readyState == "complete") || (this.readyState == "loaded"))
              if (this.callOnLoad)
                this.callOnLoad();
          };

        // ... than everyone else
        } else {
          objNewScriptInclude.onload = objCallback;
        };
      };

      this.loadStyleSheetFile = function(strStyleSheetFile, strMediaType) {
        // IE does things differently...
        if (qc.isBrowser(qcodo.IE)) {
          var objNewScriptInclude = document.createStyleSheet(strStyleSheetFile);

        // ...than everyone else
        } else {
          var objNewScriptInclude = document.createElement("style");
          objNewScriptInclude.setAttribute("type", "text/css");
          objNewScriptInclude.setAttribute("media", strMediaType);
          objNewScriptInclude.innerHTML = '@import "' + strStyleSheetFile + '";';
          document.body.appendChild(objNewScriptInclude);
        };
      };



    /////////////////////////////
    // QForm-related functionality
    /////////////////////////////

      this.registerForm = function() {
        // "Lookup" the QForm's FormId
        var strFormId = document.getElementById("Qform__FormId").value;

        // Register the Various Hidden Form Elements needed for QForms
        this.registerFormHiddenElement("Qform__FormControl", strFormId);
        this.registerFormHiddenElement("Qform__FormEvent", strFormId);
        this.registerFormHiddenElement("Qform__FormParameter", strFormId);
        this.registerFormHiddenElement("Qform__FormCallType", strFormId);
        this.registerFormHiddenElement("Qform__FormUpdates", strFormId);
        this.registerFormHiddenElement("Qform__FormCheckableControls", strFormId);
      };

      this.registerFormHiddenElement = function(strId, strFormId) {
        var objHiddenElement = document.createElement("input");
        objHiddenElement.type = "hidden";
        objHiddenElement.id = strId;
        objHiddenElement.name = strId;
        document.getElementById(strFormId).appendChild(objHiddenElement);
      };

      this.wrappers = new Array();



    ////////////////////////////////////
    // Mouse Drag Handling Functionality
    ////////////////////////////////////

      this.enableMouseDrag = function() {
        document.onmousedown = qcodo.handleMouseDown;
        document.onmousemove = qcodo.handleMouseMove;
        document.onmouseup = qcodo.handleMouseUp;
      };

      this.handleMouseDown = function(objEvent) {
        objEvent = qcodo.handleEvent(objEvent);

        var objHandle = qcodo.target;
        if (!objHandle) return true;

        var objWrapper = objHandle.wrapper;
        if (!objWrapper) return true;

        // Qcodo-Wide Mouse Handling Functions only operate on the Left Mouse Button
        // (Control-specific events can respond to QRightMouse-based Events)
        if (qcodo.mouse.left) {
          if (objWrapper.handleMouseDown) {
            // Specifically for Microsoft IE
            if (objHandle.setCapture)
              objHandle.setCapture();

            // Ensure the Cleanliness of Dragging
            objHandle.onmouseout = null;
            if (document.selection)
              document.selection.empty();

            qcodo.currentMouseHandleControl = objWrapper;
            return objWrapper.handleMouseDown(objEvent, objHandle);
          };
        };

        qcodo.currentMouseHandleControl = null;
        return true;
      };

      this.handleMouseMove = function(objEvent) {
        objEvent = qcodo.handleEvent(objEvent);

        if (qcodo.currentMouseHandleControl) {
          var objWrapper = qcodo.currentMouseHandleControl;
          var objHandle = objWrapper.handle;

          // In case IE accidentally marks a selection...
          if (document.selection)
            document.selection.empty();

          if (objWrapper.handleMouseMove)
            return objWrapper.handleMouseMove(objEvent, objHandle);
        };

        return true;
      };

      this.handleMouseUp = function(objEvent) {
        objEvent = qcodo.handleEvent(objEvent);

        if (qcodo.currentMouseHandleControl) {
          var objWrapper = qcodo.currentMouseHandleControl;
          var objHandle = objWrapper.handle;

          // In case IE accidentally marks a selection...
          if (document.selection)
            document.selection.empty();

          // For IE to release release/setCapture
          if (objHandle.releaseCapture) {
            objHandle.releaseCapture();
            objHandle.onmouseout = function() {this.releaseCapture()};
          };

          qcodo.currentMouseHandleControl = null;

          if (objWrapper.handleMouseUp)
            return objWrapper.handleMouseUp(objEvent, objHandle);
        };

        return true;
      };



    ////////////////////////////////////
    // Window Unloading
    ////////////////////////////////////

      this.unloadFlag = false;
      this.handleBeforeUnload = function() {
        qcodo.unloadFlag = true;
      };
      window.onbeforeunload = this.handleBeforeUnload;



    ////////////////////////////////////
    // Color Handling Functionality
    ////////////////////////////////////

      this.colorRgbValues = function(strColor) {
        strColor = strColor.replace("#", "");

        try {
          if (strColor.length == 3)
            return new Array(
              eval("0x" + strColor.substring(0, 1)),
              eval("0x" + strColor.substring(1, 2)),
              eval("0x" + strColor.substring(2, 3))
            );
          else if (strColor.length == 6)
            return new Array(
              eval("0x" + strColor.substring(0, 2)),
              eval("0x" + strColor.substring(2, 4)),
              eval("0x" + strColor.substring(4, 6))
            );
        } catch (Exception) {};

        return new Array(0, 0, 0);
      };

      this.hexFromInt = function(intNumber) {
        intNumber = (intNumber > 255) ? 255 : ((intNumber < 0) ? 0 : intNumber);
        intFirst = Math.floor(intNumber / 16);
        intSecond = intNumber % 16;
        return intFirst.toString(16) + intSecond.toString(16);
      };

      this.colorRgbString = function(intRgbArray) {
        return "#" + qcodo.hexFromInt(intRgbArray[0]) + qcodo.hexFromInt(intRgbArray[1]) + qcodo.hexFromInt(intRgbArray[2]);
      };
    }
  };



////////////////////////////////
// Qcodo Shortcut and Initialize
////////////////////////////////

  var qc = qcodo;
  qc.initialize();


/////// THIS IS THE QCODO LOGGER.JS FILE

////////////////////////////////
// Logging-related functionality
////////////////////////////////

  qcodo.logMessage = function(strMessage, blnReset, blnNonEscape) {
    var objLogger = qcodo.getControl("Qform_Logger");

    if (!objLogger) {
      var objLogger = document.createElement("div");
      objLogger.id = "Qform_Logger";
      objLogger.style.display = "none";
      objLogger.style.width = "400px";
      objLogger.style.backgroundColor = "#dddddd";
      objLogger.style.fontSize = "10px";
      objLogger.style.fontFamily = "lucida console, courier, monospaced";
      objLogger.style.padding = "6px";
      objLogger.style.overflow = "auto";

      if (qcodo.isBrowser(qcodo.IE))
        objLogger.style.filter = "alpha(opacity=50)";
      else
        objLogger.style.opacity = 0.5;

      document.body.appendChild(objLogger);
    };

    if (!blnNonEscape)
      if (strMessage.replace)
        strMessage = strMessage.replace(/</g, '&lt;');

    var strPosition = "fixed";
    var strTop = "0px";
    var strLeft = "0px";
    if (qcodo.isBrowser(qcodo.IE)) {
      // IE doesn't support position:fixed, so manually set positioning
      strPosition = "absolute";
      strTop = qcodo.scroll.y + "px";
      strLeft = qcodo.scroll.x + "px";
    };

    objLogger.style.position = strPosition;
    objLogger.style.top = strTop;
    objLogger.style.left = strLeft;
    objLogger.style.height = (qcodo.client.height - 100) + "px";
    objLogger.style.display = 'inline';

    var strHeader = '<a href="javascript:qcodo.logRemove()">Remove</a><br/><br/>';

    if (blnReset)
      objLogger.innerHTML = strHeader + strMessage + "<br/>";
    else if (objLogger.innerHTML == "")
      objLogger.innerHTML = strHeader + strMessage + "<br/>";
    else
      objLogger.innerHTML += strMessage + "<br/>";
  };

  qcodo.logRemove = function() {
    var objLogger = qcodo.getControl('Qform_Logger');
    if (objLogger)
      objLogger.style.display = 'none';
  };

  qcodo.logEventStats = function(objEvent) {
    objEvent = qcodo.handleEvent(objEvent);

    var strMessage = "";
    strMessage += "scroll (x, y): " + qcodo.scroll.x + ", " + qcodo.scroll.y + "<br/>";
    strMessage += "scroll (width, height): " + qcodo.scroll.width + ", " + qcodo.scroll.height + "<br/>";
    strMessage += "client (x, y): " + qcodo.client.x + ", " + qcodo.client.y + "<br/>";
    strMessage += "client (width, height): " + qcodo.client.width + ", " + qcodo.client.height + "<br/>";
    strMessage += "page (x, y): " + qcodo.page.x + ", " + qcodo.page.y + "<br/>";
    strMessage += "page (width, height): " + qcodo.page.width + ", " + qcodo.page.height + "<br/>";
    strMessage += "mouse (x, y): " + qcodo.mouse.x + ", " + qcodo.mouse.y + "<br/>";
    strMessage += "mouse (left, middle, right): " + qcodo.mouse.left + ", " + qcodo.mouse.middle + ", " + qcodo.mouse.right + "<br/>";
    strMessage += "key (alt, shift, control, code): " + qcodo.key.alt + ", " + qcodo.key.shift + ", " +
      qcodo.key.control + ", " + qcodo.key.code;

    qcodo.logMessage("Event Stats", true);
    qcodo.logMessage(strMessage, false, true);
  };

  qcodo.logObject = function(objObject) {
    var strDump = "";

    for (var strKey in objObject) {
      var strData = objObject[strKey];

      strDump += strKey + ": ";
      if (typeof strData == 'function')
        strDump += "&lt;FUNCTION&gt;";
      else if (typeof strData == 'object')
        strDump += "&lt;OBJECT&gt;";
      else if ((strKey == 'outerText') || (strKey == 'innerText') || (strKey == 'outerHTML') || (strKey == 'innerHTML'))
        strDump += "&lt;TEXT&gt;";
      else
        strDump += strData;
      strDump += "<br/>";
    };

    qcodo.logMessage("Object Stats", true);
    qcodo.logMessage(strDump, false, true);
  };


////////////// THIS IS THE QCODO EVENT FILE


///////////////////////////////
// Timers-related functionality
///////////////////////////////

  qcodo._objTimers = new Object();

  qcodo.clearTimeout = function(strTimerId) {
    if (qcodo._objTimers[strTimerId]) {
      clearTimeout(qcodo._objTimers[strTimerId]);
      qcodo._objTimers[strTimerId] = null;
    };
  };

  qcodo.setTimeout = function(strTimerId, strAction, intDelay) {
    qcodo.clearTimeout(strTimerId);
    qcodo._objTimers[strTimerId] = setTimeout(strAction, intDelay);
  };



/////////////////////////////////////
// Event Object-related functionality
/////////////////////////////////////

  qcodo.handleEvent = function(objEvent) {
    objEvent = (objEvent) ? objEvent : ((typeof(event) == "object") ? event : null);

    if (objEvent) {
      if (typeof(objEvent.clientX) != "undefined") {
        if (qcodo.isBrowser(qcodo.SAFARI)) {
          qcodo.mouse.x = objEvent.clientX - window.document.body.scrollLeft;
          qcodo.mouse.y = objEvent.clientY - window.document.body.scrollTop;
          qcodo.client.x = objEvent.clientX - window.document.body.scrollLeft;
          qcodo.client.y = objEvent.clientY - window.document.body.scrollTop;
        } else {
          qcodo.mouse.x = objEvent.clientX;
          qcodo.mouse.y = objEvent.clientY;
          qcodo.client.x = objEvent.clientX;
          qcodo.client.y = objEvent.clientY;
        };
      };

      if (qcodo.isBrowser(qcodo.IE)) {
        qcodo.mouse.left = ((objEvent.button & 1) ? true : false);
        qcodo.mouse.right = ((objEvent.button & 2) ? true : false);
        qcodo.mouse.middle = ((objEvent.button & 4) ? true : false);
      } else if (qcodo.isBrowser(qcodo.SAFARI)) {
        qcodo.mouse.left = ((objEvent.button && !objEvent.ctrlKey) ? true : false);
        qcodo.mouse.right = ((objEvent.button && objEvent.ctrlKey) ? true : false);
        qcodo.mouse.middle = false;
      } else {
        qcodo.mouse.left = (objEvent.button == 0);
        qcodo.mouse.right = (objEvent.button == 2);
        qcodo.mouse.middle = (objEvent.button == 1);
      };

      qcodo.key.alt = (objEvent.altKey) ? true : false;
      qcodo.key.control = (objEvent.ctrlKey) ? true : false;
      qcodo.key.shift = (objEvent.shiftKey) ? true : false;
      qcodo.key.code = (objEvent.keyCode) ? (objEvent.keyCode) : 0;

      if (objEvent.originalTarget)
        qcodo.target = objEvent.originalTarget;
      else if (objEvent.srcElement)
        qcodo.target = objEvent.srcElement;
      else
        qcodo.target = null;
    };

    /*
      qcodo.client.width = (qcodo.isBrowser(qcodo.SAFARI)) ? window.innerWidth : window.document.body.clientWidth;
      qcodo.client.height = (qcodo.isBrowser(qcodo.SAFARI)) ? window.innerHeight: window.document.body.clientHeight;

      qcodo.page.x = qcodo.mouse.x + qcodo.scroll.x;
      qcodo.page.y = qcodo.mouse.y + qcodo.scroll.y;

      qcodo.page.width = Math.max(window.document.body.scrollWidth, qcodo.client.width);
      qcodo.page.height = Math.max(window.document.body.scrollHeight, qcodo.client.height);

      qcodo.scroll.x = window.scrollX || window.document.body.scrollLeft;
      qcodo.scroll.y = window.scrollY || window.document.body.scrollTop;

      qcodo.scroll.width = window.document.body.scrollWidth - qcodo.client.width;
      qcodo.scroll.height = window.document.body.scrollHeight - qcodo.client.height;
    */
    if (window.document.compatMode == "BackCompat") {
      qcodo.client.width = (qcodo.isBrowser(qcodo.SAFARI)) ? window.innerWidth : window.document.body.clientWidth;
      qcodo.client.height = (qcodo.isBrowser(qcodo.SAFARI)) ? window.innerHeight: window.document.body.clientHeight;

      qcodo.page.width = Math.max(window.document.body.scrollWidth, qcodo.client.width);
      qcodo.page.height = Math.max(window.document.body.scrollHeight, qcodo.client.height);

      qcodo.scroll.x = window.scrollX || window.document.body.scrollLeft;
      qcodo.scroll.y = window.scrollY || window.document.body.scrollTop;
    } else if (qcodo.isBrowser(qcodo.SAFARI)) {
      qcodo.client.width = window.innerWidth;
      qcodo.client.height = window.innerHeight;

      qcodo.page.width = Math.max(window.document.body.scrollWidth, qcodo.client.width);
      qcodo.page.height = Math.max(window.document.body.scrollHeight, qcodo.client.height);

      qcodo.scroll.x = window.scrollX || window.document.body.scrollLeft;
      qcodo.scroll.y = window.scrollY || window.document.body.scrollTop;
    } else if (qcodo.isBrowser(qcodo.IE)) {
      qcodo.client.width = window.document.documentElement.offsetWidth;
      qcodo.client.height = window.document.documentElement.offsetHeight;

      qcodo.page.width = Math.max(window.document.documentElement.scrollWidth, qcodo.client.width);
      qcodo.page.height = Math.max(window.document.documentElement.scrollHeight, qcodo.client.height);

      qcodo.scroll.x = window.document.documentElement.scrollLeft;
      qcodo.scroll.y = window.document.documentElement.scrollTop;
    } else {
      if (window.scrollMaxY)
        // Take the Y Scroll Bar into account by subtracting 15 pixels
        qcodo.client.width = window.innerWidth - 15;
      else
        qcodo.client.width = window.innerWidth;

      if (window.scrollMaxX)
        // Take the X Scroll Bar into account by subtracting 15 pixels
        qcodo.client.height = window.innerHeight - 15;
      else
        qcodo.client.height = window.innerHeight;

      qcodo.page.width = window.scrollMaxX + qcodo.client.width;
      qcodo.page.height = window.scrollMaxY + qcodo.client.height;

      qcodo.scroll.x = window.scrollX;
      qcodo.scroll.y = window.scrollY;
    };

    // These Values are "By Definition"
    qcodo.page.x = qcodo.mouse.x + qcodo.scroll.x;
    qcodo.page.y = qcodo.mouse.y + qcodo.scroll.y;

    qcodo.scroll.width = qcodo.page.width - qcodo.client.width;
    qcodo.scroll.height = qcodo.page.height - qcodo.client.height;

    return objEvent;
  };

  qcodo.terminateEvent = function(objEvent) {
    objEvent = qcodo.handleEvent(objEvent);

    if (objEvent) {
      // Stop Propogation
      if (objEvent.preventDefault)
        objEvent.preventDefault();
      if (objEvent.stopPropagation)
        objEvent.stopPropagation();
      objEvent.cancelBubble = true;
      objEvent.returnValue = false;
    };

    return false;
  };



///////////////////////////////
// Event Stats-Releated Objects
///////////////////////////////

  qcodo.key = {
    control: false,
    alt: false,
    shift: false,
    code: null
  };

  qcodo.mouse = {
    x: 0,
    y: 0,
    left: false,
    middle: false,
    right: false
  };

  qcodo.client = {
    x: null,
    y: null,
    width: null,
    height: null
//    width: (qcodo.isBrowser(qcodo.IE)) ? window.document.body.clientWidth : window.innerWidth,
//    height: (qcodo.isBrowser(qcodo.IE)) ? window.document.body.clientHeight : window.innerHeight
  };

  qcodo.page = {
    x: null,
    y: null,
    width: null,
    height: null
//    width: window.document.body.scrollWidth,
//    height: window.document.body.scrollHeight
  };

  qcodo.scroll = {
    x: window.scrollX || (window.document.body) ? window.document.body.scrollLeft : null,
    y: window.scrollY || (window.document.body) ? window.document.body.scrollTop : null,
//    x: null,
//    y: null,
    width: (window.document.body) ? (window.document.body.scrollWidth - qcodo.client.width) : null,
    height: (window.document.body) ? (window.document.body.scrollHeight - qcodo.client.height) : null
//    width: null,
//    height: null
  };



/////////// THIS IS THE POST.JS FILE

////////////////////////////////////////////
// PostBack and AjaxPostBack
////////////////////////////////////////////

  qcodo.postBack = function(strForm, strControl, strEvent, strParameter) {
    var objForm = document.getElementById(strForm);
    objForm.Qform__FormControl.value = strControl;
    objForm.Qform__FormEvent.value = strEvent;
    objForm.Qform__FormParameter.value = strParameter;
    objForm.Qform__FormCallType.value = "Server";
    objForm.Qform__FormUpdates.value = this.formUpdates();
    objForm.Qform__FormCheckableControls.value = this.formCheckableControls(strForm, "Server");
    objForm.submit();
  };

  qcodo.formUpdates = function() {
    var strToReturn = "";
    for (var strControlId in qcodo.controlModifications)
      for (var strProperty in qcodo.controlModifications[strControlId])
        strToReturn += strControlId + " " + strProperty + " " + qcodo.controlModifications[strControlId][strProperty] + "\n";
    qcodo.controlModifications = {};
    return strToReturn;
  };

  qcodo.formCheckableControls = function(strForm, strCallType) {
    var objForm = document.getElementById(strForm);
    var strToReturn = "";

    for (var intIndex = 0; intIndex < objForm.elements.length; intIndex++) {
      if (((objForm.elements[intIndex].type == "checkbox") ||
         (objForm.elements[intIndex].type == "radio")) &&
        ((strCallType == "Ajax") ||
        (!objForm.elements[intIndex].disabled))) {

        // CheckBoxList
        if (objForm.elements[intIndex].id.indexOf('[') >= 0) {
          if (objForm.elements[intIndex].id.indexOf('[0]') >= 0)
            strToReturn += " " + objForm.elements[intIndex].id.substring(0, objForm.elements[intIndex].id.length - 3);

        // RadioButtonList
        } else if (objForm.elements[intIndex].id.indexOf('_') >= 0) {
          if (objForm.elements[intIndex].id.indexOf('_0') >= 0)
            strToReturn += " " + objForm.elements[intIndex].id.substring(0, objForm.elements[intIndex].id.length - 2);

        // Standard Radio or Checkbox
        } else {
          strToReturn += " " + objForm.elements[intIndex].id;
        };
      };
    };

    if (strToReturn.length > 0)
      return strToReturn.substring(1);
    else
      return "";
  };

  qcodo.ajaxQueue = new Array();

  qcodo.postAjax = function(strForm, strControl, strEvent, strParameter, strWaitIconControlId) {
    // alert(strForm + " " + strControl + " " + strEvent + " " + strParameter);

    // Figure out if Queue is Empty
    var blnQueueEmpty = false;
    if (qcodo.ajaxQueue.length == 0)
      blnQueueEmpty = true;

    // Enqueue the AJAX Request
    qcodo.ajaxQueue.push(new Array(strForm, strControl, strEvent, strParameter, strWaitIconControlId));

    // If the Queue was originally empty, call the Dequeue
    if (blnQueueEmpty)
      qcodo.dequeueAjaxQueue();
  };

  qcodo.clearAjaxQueue = function() {
    qcodo.ajaxQueue = new Array();
  };

  qcodo.objAjaxWaitIcon = null;

  qcodo.dequeueAjaxQueue = function() {
    if (qcodo.ajaxQueue.length > 0) {
      strForm = this.ajaxQueue[0][0];
      strControl = this.ajaxQueue[0][1];
      strEvent = this.ajaxQueue[0][2];
      strParameter = this.ajaxQueue[0][3];
      strWaitIconControlId = this.ajaxQueue[0][4];

      // Display WaitIcon (if applicable)
      if (strWaitIconControlId) {
        this.objAjaxWaitIcon = this.getWrapper(strWaitIconControlId);
        if (this.objAjaxWaitIcon)
          this.objAjaxWaitIcon.style.display = 'inline';
      };

      var objForm = document.getElementById(strForm);
      objForm.Qform__FormControl.value = strControl;
      objForm.Qform__FormEvent.value = strEvent;
      objForm.Qform__FormParameter.value = strParameter;
      objForm.Qform__FormCallType.value = "Ajax";
      objForm.Qform__FormUpdates.value = qcodo.formUpdates();
      objForm.Qform__FormCheckableControls.value = this.formCheckableControls(strForm, "Ajax");

      var strPostData = "";
      for (var i = 0; i < objForm.elements.length; i++) {
        switch (objForm.elements[i].type) {
          case "checkbox":
          case "radio":
            if (objForm.elements[i].checked) {
              var strTestName = objForm.elements[i].name + "_";
              if (objForm.elements[i].id.substring(0, strTestName.length) == strTestName)
                strPostData += "&" + objForm.elements[i].name + "=" + objForm.elements[i].id.substring(strTestName.length);
              else
//                strPostData += "&" + objForm.elements[i].id + "=" + "1";
                strPostData += "&" + objForm.elements[i].id + "=" + objForm.elements[i].value;
            };
            break;

          case "select-multiple":
            var blnOneSelected = false;
            for (var intIndex = 0; intIndex < objForm.elements[i].options.length; intIndex++)
              if (objForm.elements[i].options[intIndex].selected) {
                strPostData += "&" + objForm.elements[i].name + "=";
                strPostData += objForm.elements[i].options[intIndex].value;
              };
            break;

          default:
            strPostData += "&" + objForm.elements[i].id + "=";

            // For Internationalization -- we must escape the element's value properly
            var strPostValue = objForm.elements[i].value;
            if (strPostValue) {
              strPostValue = strPostValue.replace(/\%/g, "%25");
              strPostValue = strPostValue.replace(/&/g, escape('&'));
              strPostValue = strPostValue.replace(/\+/g, "%2B");
            };
            strPostData += strPostValue;
            break;
        };
      };

      var strUri = objForm.action;

      var objRequest;
      if (window.XMLHttpRequest) {
        objRequest = new XMLHttpRequest();
      } else if (typeof ActiveXObject != "undefined") {
        objRequest = new ActiveXObject("Microsoft.XMLHTTP");
      };

      if (objRequest) {
        objRequest.open("POST", strUri, true);
        objRequest.setRequestHeader("Method", "POST " + strUri + " HTTP/1.1");
        objRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        objRequest.onreadystatechange = function() {
          if (!qcodo.unloadFlag && objRequest.readyState == 4) {
            try {
              var objXmlDoc = objRequest.responseXML;
//                qcodo.logMessage(objRequest.responseText, true);
//                alert('AJAX Response Received');

              if (!objXmlDoc) {

// remote log the error [2009-05-27:bpc]
if (window.bugReport && bugReport.submitReport) {
  page_key = location.href.substring(10).replace(/.*?\/([\w\/\-]+).*/, '$1').replace(/[^\w]/, '-');
  bugReport.submitReport('qcodo-ajax_'+ page_key, 'An error occurred during AJAX Response parsing. Server response is:\r\n'+ objRequest.responseText);
}

                alert("An error occurred during AJAX Response parsing.\r\n\r\nThe error response will appear in a new popup.");
                var objErrorWindow = window.open('about:blank', 'qcodo_error','menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes,width=1000,height=700,left=50,top=50');
                objErrorWindow.focus();
                objErrorWindow.document.write(objRequest.responseText);
                return;
              } else {
                var intLength = 0;

                // Go through Controls
                var objXmlControls = objXmlDoc.getElementsByTagName('control');
                intLength = objXmlControls.length;

                for (var intIndex = 0; intIndex < intLength; intIndex++) {
                  var strControlId = objXmlControls[intIndex].attributes.getNamedItem('id').nodeValue;

                  var strControlHtml = "";
                  if (objXmlControls[intIndex].textContent)
                    strControlHtml = objXmlControls[intIndex].textContent;
                  else if (objXmlControls[intIndex].firstChild)
                    strControlHtml = objXmlControls[intIndex].firstChild.nodeValue;

                  // Perform Callback Responsibility
                  if (strControlId == "Qform__FormState") {
                    var objFormState = document.getElementById(strControlId);
                    objFormState.value = strControlHtml;
                  } else {
                    var objSpan = document.getElementById(strControlId + "_ctl");
                    if (objSpan)
                      objSpan.innerHTML = strControlHtml;
                  };
                };

                // Go through Commands
                var objXmlCommands = objXmlDoc.getElementsByTagName('command');
                intLength = objXmlCommands.length;

                for (var intIndex = 0; intIndex < intLength; intIndex++) {
                  if (objXmlCommands[intIndex] && objXmlCommands[intIndex].firstChild) {
                    var strCommand = "";
                    intChildLength = objXmlCommands[intIndex].childNodes.length;
                    for (var intChildIndex = 0; intChildIndex < intChildLength; intChildIndex++)
                      strCommand += objXmlCommands[intIndex].childNodes[intChildIndex].nodeValue;
                    eval(strCommand);
                  };
                };
              };
            } catch (objExc) {
              alert(objExc.message + "\r\non line number " + objExc.lineNumber + "\r\nin file " + objExc.fileName);
              alert("An error occurred during AJAX Response handling.\r\n\r\nThe error response will appear in a new popup.");
              var objErrorWindow = window.open('about:blank', 'qcodo_error','menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes,width=1000,height=700,left=50,top=50');
              objErrorWindow.focus();
              objErrorWindow.document.write(objRequest.responseText);
              return;
            };

            // Perform the Dequeue
            qcodo.ajaxQueue.shift();

            // Hid the WaitIcon (if applicable)
            if (qcodo.objAjaxWaitIcon)
              qcodo.objAjaxWaitIcon.style.display = 'none';

            // If there are still AjaxEvents in the queue, go ahead and process/dequeue them
            if (qcodo.ajaxQueue.length > 0)
              qcodo.dequeueAjaxQueue();
          };
        };

        objRequest.send(strPostData);
      };
    };
  };



//////////////////
// Qcodo Shortcuts
//////////////////

  qc.pB = qcodo.postBack;
  qc.pA = qcodo.postAjax;


///// THIS IS THE QCODO CONTROL.JS FILE


/////////////////////////////////
// Controls-related functionality
/////////////////////////////////

  qcodo.getControl = function(mixControl) {
    if (typeof(mixControl) == 'string')
      return document.getElementById(mixControl);
    else
      return mixControl;
  };

  qcodo.getWrapper = function(mixControl) {
    var objControl; if (!(objControl = qcodo.getControl(mixControl))) return;

    if (objControl)
      return this.getControl(objControl.id + "_ctl");
    else
      return null;
  };



/////////////////////////////
// Register Control - General
/////////////////////////////

  qcodo.controlModifications = {};
  qcodo.javascriptStyleToQcodo = new Array();
  qcodo.javascriptStyleToQcodo["backgroundColor"] = "BackColor";
  qcodo.javascriptStyleToQcodo["borderColor"] = "BorderColor";
  qcodo.javascriptStyleToQcodo["borderStyle"] = "BorderStyle";
  qcodo.javascriptStyleToQcodo["border"] = "BorderWidth";
  qcodo.javascriptStyleToQcodo["height"] = "Height";
  qcodo.javascriptStyleToQcodo["width"] = "Width";
  qcodo.javascriptStyleToQcodo["text"] = "Text";

  qcodo.javascriptWrapperStyleToQcodo = new Array();
  qcodo.javascriptWrapperStyleToQcodo["position"] = "Position";
  qcodo.javascriptWrapperStyleToQcodo["top"] = "Top";
  qcodo.javascriptWrapperStyleToQcodo["left"] = "Left";

  qcodo.recordControlModification = function(strControlId, strProperty, strNewValue) {
    if (!qcodo.controlModifications[strControlId])
      qcodo.controlModifications[strControlId] = {};
    qcodo.controlModifications[strControlId][strProperty] = strNewValue;
  };

  qcodo.registerControl = function(mixControl) {
    var objControl; if (!(objControl = qcodo.getControl(mixControl))) return;

    // Link the Wrapper and the Control together
    var objWrapper = this.getWrapper(objControl);
    objControl.wrapper = objWrapper;
    objWrapper.control = objControl;

    // Add the wrapper to the global qcodo wrappers array
    qcodo.wrappers[objWrapper.id] = objWrapper;


    // Create New Methods, etc.
    // Like: objWrapper.something = xyz;

    // Updating Style-related Things
    objWrapper.updateStyle = function(strStyleName, strNewValue) {
      var objControl = this.control;

      switch (strStyleName) {
        case "className":
          objControl.className = strNewValue;
          qcodo.recordControlModification(objControl.id, "CssClass", strNewValue);
          break;

        case "parent":
          if (strNewValue) {
            var objNewParentControl = qcodo.getControl(strNewValue);
            objNewParentControl.appendChild(this);
            qcodo.recordControlModification(objControl.id, "Parent", strNewValue);
          } else {
            var objParentControl = this.parentNode;
            objParentControl.removeChild(this);
            qcodo.recordControlModification(objControl.id, "Parent", "");
          };
          break;

        case "displayStyle":
          objControl.style.display = strNewValue;
          qcodo.recordControlModification(objControl.id, "DisplayStyle", strNewValue);
          break;

        case "display":
          if (strNewValue) {
            objWrapper.style.display = "inline";
            qcodo.recordControlModification(objControl.id, "Display", "1");
          } else {
            objWrapper.style.display = "none";
            qcodo.recordControlModification(objControl.id, "Display", "0");
          };
          break;

        case "enabled":
          if (strNewValue) {
            objWrapper.control.disabled = false;
            qcodo.recordControlModification(objControl.id, "Enabled", "1");
          } else {
            objWrapper.control.disabled = true;
            qcodo.recordControlModification(objControl.id, "Enabled", "0");
          };
          break;

        case "width":
        case "height":
          objControl.style[strStyleName] = strNewValue;
          if (qcodo.javascriptStyleToQcodo[strStyleName])
            qcodo.recordControlModification(objControl.id, qcodo.javascriptStyleToQcodo[strStyleName], strNewValue);
          if (objWrapper.handle)
            objWrapper.updateHandle();
          break;

        case "text":
          objControl.innerHTML = strNewValue;
          qcodo.recordControlModification(objControl.id, "Text", strNewValue);
          break;

        default:
          if (qcodo.javascriptWrapperStyleToQcodo[strStyleName]) {
            this.style[strStyleName] = strNewValue;
            qcodo.recordControlModification(objControl.id, qcodo.javascriptWrapperStyleToQcodo[strStyleName], strNewValue);
          } else {
            objControl.style[strStyleName] = strNewValue;
            if (qcodo.javascriptStyleToQcodo[strStyleName])
              qcodo.recordControlModification(objControl.id, qcodo.javascriptStyleToQcodo[strStyleName], strNewValue);
          };
          break;
      };
    };

    // Positioning-related functions

    objWrapper.getAbsolutePosition = function() {
      var intOffsetLeft = 0;
      var intOffsetTop = 0;

      var objControl = this.control;

      while (objControl) {
        // If we are IE, we don't want to include calculating
        // controls who's wrappers are position:relative
        if ((objControl.wrapper) && (objControl.wrapper.style.position == "relative")) {

        } else {
          intOffsetLeft += objControl.offsetLeft;
          intOffsetTop += objControl.offsetTop;
        };
        objControl = objControl.offsetParent;
      };

      return {x:intOffsetLeft, y:intOffsetTop};
    };

    objWrapper.setAbsolutePosition = function(intNewX, intNewY, blnBindToParent) {
      var objControl = this.offsetParent;

      while (objControl) {
        intNewX -= objControl.offsetLeft;
        intNewY -= objControl.offsetTop;
        objControl = objControl.offsetParent;
      };

      if (blnBindToParent) {
        if (this.parentNode.nodeName.toLowerCase() != 'form') {
          // intNewX and intNewY must be within the parent's control
          intNewX = Math.max(intNewX, 0);
          intNewY = Math.max(intNewY, 0);

          intNewX = Math.min(intNewX, this.offsetParent.offsetWidth - this.offsetWidth);
          intNewY = Math.min(intNewY, this.offsetParent.offsetHeight - this.offsetHeight);
        };
      };

      this.updateStyle("left", intNewX + "px");
      this.updateStyle("top", intNewY + "px");
    };

    objWrapper.setDropZoneMaskAbsolutePosition = function(intNewX, intNewY, blnBindToParent) {
/*
      var objControl = this.offsetParent;

      while (objControl) {
        intNewX -= objControl.offsetLeft;
        intNewY -= objControl.offsetTop;
        objControl = objControl.offsetParent;
      }

      if (blnBindToParent) {
        if (this.parentNode.nodeName.toLowerCase() != 'form') {
          // intNewX and intNewY must be within the parent's control
          intNewX = Math.max(intNewX, 0);
          intNewY = Math.max(intNewY, 0);

          intNewX = Math.min(intNewX, this.offsetParent.offsetWidth - this.offsetWidth);
          intNewY = Math.min(intNewY, this.offsetParent.offsetHeight - this.offsetHeight);
        }
      }

      qc.logObject(intNewX + " x " + intNewY);
*/
      this.dropZoneMask.style.left = intNewX + "px";
      this.dropZoneMask.style.top = intNewY + "px";
    };

    objWrapper.setMaskOffset = function(intDeltaX, intDeltaY) {
      var objAbsolutePosition = this.getAbsolutePosition();
      this.mask.style.left = (objAbsolutePosition.x + intDeltaX) + "px";
      this.mask.style.top = (objAbsolutePosition.y + intDeltaY) + "px";
    };

    objWrapper.containsPoint = function(intX, intY) {
      var objAbsolutePosition = this.getAbsolutePosition();
      if ((intX >= objAbsolutePosition.x) && (intX <= objAbsolutePosition.x + this.control.offsetWidth) &&
        (intY >= objAbsolutePosition.y) && (intY <= objAbsolutePosition.y + this.control.offsetHeight))
        return true;
      else
        return false;
    };

    // Toggle Display / Enabled
    objWrapper.toggleDisplay = function(strShowOrHide) {
      // Toggles the display/hiding of the entire control (including any design/wrapper HTML)
      // If ShowOrHide is blank, then we toggle
      // Otherwise, we'll execute a "show" or a "hide"
      if (strShowOrHide) {
        if (strShowOrHide == "show")
          this.updateStyle("display", true);
        else
          this.updateStyle("display", false);
      } else
        this.updateStyle("display", (this.style.display == "none") ? true : false);
    };

    objWrapper.toggleEnabled = function(strEnableOrDisable) {
      if (strEnableOrDisable) {
        if (strEnableOrDisable == "enable")
          this.updateStyle("enabled", true);
        else
          this.updateStyle("enabled", false);
      } else
        this.updateStyle("enabled", (this.control.disabled) ? true : false);
    };

    objWrapper.registerClickPosition = function(objEvent) {
      objEvent = (objEvent) ? objEvent : ((typeof(event) == "object") ? event : null);
      qcodo.handleEvent(objEvent);

      var intX = qcodo.mouse.x - this.getAbsolutePosition().x + qcodo.scroll.x;
      var intY = qcodo.mouse.y - this.getAbsolutePosition().y + qcodo.scroll.y;

      // Random IE Check
      if (qcodo.isBrowser(qcodo.IE)) {
        intX = intX - 2;
        intY = intY - 2;
      };

      document.getElementById(this.control.id + "_x").value = intX;
      document.getElementById(this.control.id + "_y").value = intY;
    };

    // Focus
    objWrapper.focus = function() {
      if (this.control.focus) {
        if (qcodo.isBrowser(qcodo.IE) && (typeof (this.control.focus) == "object"))
          this.control.focus();
        else if (typeof (this.control.focus) == "function")
          this.control.focus();
      };
    };

    // Select All (will only work for textboxes only)
    objWrapper.select = function() {
      if (this.control.select)
        this.control.select();
    };

    // Blink
    objWrapper.blink = function(strFromColor, strToColor) {
      objWrapper.defaultBackgroundColor = objWrapper.control.style.backgroundColor;

      objWrapper.blinkStart = qcodo.colorRgbValues(strFromColor);
      objWrapper.blinkEnd = qcodo.colorRgbValues(strToColor);
      objWrapper.blinkStep = new Array(
        Math.round((objWrapper.blinkEnd[0] - objWrapper.blinkStart[0]) / 12.5),
        Math.round((objWrapper.blinkEnd[1] - objWrapper.blinkStart[1]) / 12.5),
        Math.round((objWrapper.blinkEnd[2] - objWrapper.blinkStart[2]) / 12.5)
      );
      objWrapper.blinkDown = new Array(
        (objWrapper.blinkStep[0] < 0) ? true : false,
        (objWrapper.blinkStep[1] < 0) ? true : false,
        (objWrapper.blinkStep[2] < 0) ? true : false
      );

      objWrapper.blinkCurrent = objWrapper.blinkStart;
      this.control.style.backgroundColor = qcodo.colorRgbString(objWrapper.blinkCurrent);
      qcodo.setTimeout(objWrapper.id, "qc.getC('" + objWrapper.id + "').blinkHelper()", 20);
    };

    objWrapper.blinkHelper = function() {
      objWrapper.blinkCurrent[0] += objWrapper.blinkStep[0];
      objWrapper.blinkCurrent[1] += objWrapper.blinkStep[1];
      objWrapper.blinkCurrent[2] += objWrapper.blinkStep[2];
      if (((objWrapper.blinkDown[0]) && (objWrapper.blinkCurrent[0] < objWrapper.blinkEnd[0])) ||
        ((!objWrapper.blinkDown[0]) && (objWrapper.blinkCurrent[0] > objWrapper.blinkEnd[0])))
        objWrapper.blinkCurrent[0] = objWrapper.blinkEnd[0];
      if (((objWrapper.blinkDown[1]) && (objWrapper.blinkCurrent[1] < objWrapper.blinkEnd[1])) ||
        ((!objWrapper.blinkDown[1]) && (objWrapper.blinkCurrent[1] > objWrapper.blinkEnd[1])))
        objWrapper.blinkCurrent[1] = objWrapper.blinkEnd[1];
      if (((objWrapper.blinkDown[2]) && (objWrapper.blinkCurrent[2] < objWrapper.blinkEnd[2])) ||
        ((!objWrapper.blinkDown[2]) && (objWrapper.blinkCurrent[2] > objWrapper.blinkEnd[2])))
        objWrapper.blinkCurrent[2] = objWrapper.blinkEnd[2];

      this.control.style.backgroundColor = qcodo.colorRgbString(objWrapper.blinkCurrent);

      if ((objWrapper.blinkCurrent[0] == objWrapper.blinkEnd[0]) &&
        (objWrapper.blinkCurrent[1] == objWrapper.blinkEnd[1]) &&
        (objWrapper.blinkCurrent[2] == objWrapper.blinkEnd[2])) {
        // Done with Blink!
        this.control.style.backgroundColor = objWrapper.defaultBackgroundColor;
      } else {
        qcodo.setTimeout(objWrapper.id, "qc.getC('" + objWrapper.id + "').blinkHelper()", 20);
      };
    };
  };

  qcodo.registerControlArray = function(mixControlArray) {
    var intLength = mixControlArray.length;
    for (var intIndex = 0; intIndex < intLength; intIndex++)
      qcodo.registerControl(mixControlArray[intIndex]);
  };



//////////////////
// Qcodo Shortcuts
//////////////////

  qc.getC = qcodo.getControl;
  qc.getW = qcodo.getWrapper;
  qc.regC = qcodo.registerControl;
  qc.regCA = qcodo.registerControlArray;
