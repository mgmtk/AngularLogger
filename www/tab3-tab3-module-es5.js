function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/chart/chart.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/chart/chart.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3ChartChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div style=\"width: 100%;\">\n<canvas\n    baseChart\n    [chartType]=\"'line'\"\n    [datasets]=\"chartData\"\n    [labels]=\"chartLabels\"\n    [options]=\"chartOptions\"\n    [legend]=\"true\"\n    (chartHover)=\"onChartHovered($event)\"\n    (chartClick)=\"onChartClick($event)\">\n</canvas>\n</div>\n\n<span class=\"chart_choices\">\n    <ion-toolbar>\n        <ion-buttons>\n        <ion-button slot=\"start\" name=\"chartButton\" (click)=\"changeData(allTimeChartData, allTimeLabels)\">\n            All Time\n        </ion-button>\n        <ion-button slot=\"start\" name=\"chartButton\" (click)=\"changeData(yearChartData, yearLabels)\">\n            Yearly\n        </ion-button>\n        <ion-button slot=\"end\" name=\"chartButton\" (click)=\"changeData(monthChartData, monthLabels)\">\n            Monthly\n        </ion-button>\n        <ion-button slot=\"end\" name=\"chartButton\" (click)=\"changeData(weekChartData, weekLabels)\">\n            Weekly\n        </ion-button>\n        <ion-button  slot=\"end\" name=\"chartButton\" (click)=\"changeData(dayChartData, dayLabels)\">\n            Daily\n        </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</span>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/history/history.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/history/history.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3HistoryHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n   <ion-title class=\"history-title\">\n      History\n    </ion-title>\n    <ion-buttons start>\n      <ion-button ion-button (click)=\"onDismiss()\">\n        <span ion-text> Cancel </span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"history-list-id\" class=\"history history-list\">\n    <ion-list>\n      <div id=\"history-slider-id\" class=\"history history-slider\" *ngFor=\"let item of items\">\n        <ion-item-sliding >\n          <ion-item id=\"history-item-id\" class=\"history history-item\" button (click)=\"recordItem(item)\">\n            <ion-label>\n              <div class=\"history-info\"> \n                <label> {{item.date | uppercase}} </label>\n              </div>\n            </ion-label>\n          </ion-item>\n          <ion-item-options>\n            <button ion-button icon-only danger>\n                <ion-icon name=\"trash\"></ion-icon>\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/logger/logger.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/logger/logger.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3LoggerLoggerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n   <ion-title class=\"logger-title\">\n      Log-New\n    </ion-title>\n    <ion-buttons start>\n      <ion-button ion-button (click)=\"onDismiss()\">\n        <span ion-text> Cancel </span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<div class=\"selector datetime-form\">\n    <ion-item no-lines class=\"log-datetime-container\">\n        <div class=\"datetime-label\">\n            <h6>\n                <span *ngIf=\"!startTimeSet\" class=\"datetime-placeholder\"> Select Date and Time </span>\n                <span *ngIf=\"startTimeSet\" class=\"datetime\"> {{startTime | date: 'EEE d MM y' | titlecase}}, {{startTime | date: 'shortTime'}} </span> \n            </h6>  \n        </div>\n        <ion-datetime class=\"hidden\" displayFormat=\"D MMM YYYY H:mm\" [ngModel]=\"startTime\"\n        (ngModelChange)=\"setStartTime($event)\" [pickerOptions]=\"dateTimePickerOptions\">\n        </ion-datetime>\n    </ion-item>\n</div>\n\n\n<ion-list id=\"selector-list-id\" class=\"selector selector-list\">\n<!--[(ngModel)]=\"movementType\" (ngModelChange)=\"updateConfig()\" -->\n<div id=\"type-select-id\" class=\"selector selector-container\">\n   <!-- <div class=\"selector-label\"> Poop Type </div> -->\n    <ion-item id=\"interaction-select-box\" class=\"ion-item-select\">\n        <ion-select placeholder=\"Select Type\" class=\"ion-select\" >\n             <ion-select-option *ngFor=\"let item of selectTypes\" [value]=\"item\"> {{item}} </ion-select-option> \n        </ion-select>\n    </ion-item> \n</div>\n<div id=\"size-select-id\" class=\"selector selector-container\">\n  <!-- <div class=\"selector-label\"> Poop Size </div> -->\n  <ion-item id=\"interaction-select-box\" class=\"ion-item-select\">\n      <ion-select placeholder=\"Select Size\" class=\"ion-select\" >\n           <ion-select-option *ngFor=\"let item of sizes\" [value]=\"item\"> {{item}} </ion-select-option> \n      </ion-select>\n  </ion-item> \n</div>\n</ion-list>\n\n<ion-list id=\"slider-list-id\" class=\"selector slider-list\">\n  <div id=\"smell-slider-id\" class=\"selector slider-container\">\n    <div class=\"selector selector-label\"> Smell </div> \n    <ion-item>\n      <ion-range min=\"1\" max=\"5\" step=\"1\" snaps=\"true\" pin=\"true\" color=\"success\">\n        <ion-icon size=\"small\" slot=\"start\" name=\"sunny\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"sunny\"></ion-icon>\n      </ion-range>\n    </ion-item>\n  </div>\n\n  <div id=\"pain-slider-id\" class=\"selector slider-container\">\n   <div class=\"selecotr selector-label\"> Pain </div>\n    <ion-item>\n      <ion-range min=\"1\" max=\"10\" step=\"1\" snaps=\"true\" pin=\"true\" color=\"danger\"></ion-range>\n    </ion-item>\n  </div>\n</ion-list>\n\n<div>\n    <ion-button class=\"chart_button\" (click)=\"completeLogging()\">Submit</ion-button>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Chart \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <chart-component [items]=\"items\"></chart-component>\n  <div class=\"chart_buttons\">\n    <ion-button class=\"chart_button\" (click)=\"openHistoryComponent()\"> History </ion-button>\n    <ion-button class=\"chart_button\" (click)=\"openLoggerComponent()\"> Log New </ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/data/chartdata.ts":
  /*!***********************************!*\
    !*** ./src/app/data/chartdata.ts ***!
    \***********************************/

  /*! exports provided: chartOptions, allTimeChartData, allTimeLabels, yearChartData, yearLabels, monthChartData, monthLabels, weekChartData, weekLabels, dayChartData, dayLabels */

  /***/
  function srcAppDataChartdataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "chartOptions", function () {
      return chartOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "allTimeChartData", function () {
      return allTimeChartData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "allTimeLabels", function () {
      return allTimeLabels;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "yearChartData", function () {
      return yearChartData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "yearLabels", function () {
      return yearLabels;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "monthChartData", function () {
      return monthChartData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "monthLabels", function () {
      return monthLabels;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "weekChartData", function () {
      return weekChartData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "weekLabels", function () {
      return weekLabels;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dayChartData", function () {
      return dayChartData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dayLabels", function () {
      return dayLabels;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var chartOptions = {
      responsive: true,
      plugins: {
        datalabels: {
          display: true,
          align: 'top',
          anchor: 'end',
          color: "#222",
          font: {
            family: 'FontAwesome',
            size: 14
          }
        },
        deferred: false
      }
    };
    /*
    export var  allTimeChartData = [ {
        chartData: [{
            data: [200, 301, 242, 312, 280, 345],
            label: 'All Time Poops',
        }],
        labels:  ['2015', '2016', '2017', '2018', '2019', '2020']
    }]; */

    var allTimeChartData = [{
      data: [200, 301, 242, 312, 280, 345],
      label: 'All Time Poops'
    }];
    var allTimeLabels = ['2015', '2016', '2017', '2018', '2019', '2020'];
    var yearChartData = [{
      data: [40, 32, 67, 23, 31, 55, 62, 21, 13, 45, 68, 11],
      label: 'Yearly Poops'
    }];
    var yearLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
    var monthChartData = [{
      data: [10, 15, 11, 13],
      label: 'Monthly Poops'
    }];
    var monthLabels = ['Week1', 'Week2', 'Week3', 'Week4'];
    var weekChartData = [{
      data: [1, 2, 3, 3, 2, 4, 1],
      label: 'Weekly Poops'
    }];
    var weekLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var dayChartData;
    var dayLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    /***/
  },

  /***/
  "./src/app/model/logItemResponse.model.ts":
  /*!************************************************!*\
    !*** ./src/app/model/logItemResponse.model.ts ***!
    \************************************************/

  /*! exports provided: ItemResponse */

  /***/
  function srcAppModelLogItemResponseModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemResponse", function () {
      return ItemResponse;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ItemResponse = function ItemResponse(item) {
      _classCallCheck(this, ItemResponse);

      this.date = item.date;
      this.pain = item.pain;
      this.size = item.size;
      this.smell = item.smell;
      this.type = item.type;
    };
    /***/

  },

  /***/
  "./src/app/services/log-item.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/log-item.service.ts ***!
    \**********************************************/

  /*! exports provided: LogItemService */

  /***/
  function srcAppServicesLogItemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogItemService", function () {
      return LogItemService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_logItemResponse_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/logItemResponse.model */
    "./src/app/model/logItemResponse.model.ts");
    /* harmony import */


    var _mock_data_mockItems_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../mock-data/mockItems.json */
    "./src/mock-data/mockItems.json");

    var _mock_data_mockItems_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../mock-data/mockItems.json */
    "./src/mock-data/mockItems.json", 1);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LogItemService =
    /*#__PURE__*/
    function () {
      function LogItemService() {
        _classCallCheck(this, LogItemService);
      }

      _createClass(LogItemService, [{
        key: "getLogItems",
        value: function getLogItems() {
          var items = _mock_data_mockItems_json__WEBPACK_IMPORTED_MODULE_3___namespace;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(items.default.map(function (a) {
            return new _model_logItemResponse_model__WEBPACK_IMPORTED_MODULE_2__["ItemResponse"](a);
          }));
        }
      }]);

      return LogItemService;
    }();

    LogItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LogItemService);
    /***/
  },

  /***/
  "./src/app/tab3/chart/chart.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/tab3/chart/chart.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3ChartChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chart_button {\n  display: block;\n  background: none;\n  font-size: 15px;\n  color: white;\n  padding: 2px;\n  padding-left: 8px;\n  padding-right: 8px;\n  margin-bottom: 15px;\n}\n\n.chart_choices {\n  text-align: center;\n  margin-left: 5%;\n  position: absolute;\n}\n\n.chartjs-render-monitor {\n  height: 325px !important;\n  width: 375px !important;\n  padding-top: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ20vRG9jdW1lbnRzL0FuZ3VsYXJQcm9qZWN0cy9Bbmd1bGFyTG9nZ2VyL3NyYy9hcHAvdGFiMy9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFiMy9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFiMy9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydF9idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNoYXJ0X2Nob2ljZXN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jaGFydGpzLXJlbmRlci1tb25pdG9ye1xuICAgIGhlaWdodDogMzI1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMzc1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xufSIsIi5jaGFydF9idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNoYXJ0X2Nob2ljZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2hhcnRqcy1yZW5kZXItbW9uaXRvciB7XG4gIGhlaWdodDogMzI1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDM3NXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab3/chart/chart.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/tab3/chart/chart.component.ts ***!
    \***********************************************/

  /*! exports provided: ChartComponent */

  /***/
  function srcAppTab3ChartChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartComponent", function () {
      return ChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_chartdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../data/chartdata */
    "./src/app/data/chartdata.ts");

    var ChartComponent =
    /*#__PURE__*/
    function () {
      function ChartComponent() {
        _classCallCheck(this, ChartComponent);

        this.chartData = [];
        this.chartLabels = [];
        Object.assign(this, {
          chartOptions: _data_chartdata__WEBPACK_IMPORTED_MODULE_2__["chartOptions"]
        });
        Object.assign(this, {
          allTimeChartData: _data_chartdata__WEBPACK_IMPORTED_MODULE_2__["allTimeChartData"]
        });
        Object.assign(this, {
          allTimeLabels: _data_chartdata__WEBPACK_IMPORTED_MODULE_2__["allTimeLabels"]
        });
        Object.assign(this, {
          yearChartData: _data_chartdata__WEBPACK_IMPORTED_MODULE_2__["yearChartData"]
        });
        Object.assign(this, {
          yearLabels: _data_chartdata__WEBPACK_IMPORTED_MODULE_2__["yearLabels"]
        });
        Object.assign(this, {
          monthChartData: _data_chartdata__WEBPACK_IMPORTED_MODULE_2__["monthChartData"]
        });
        Object.assign(this, {
          monthLabels: _data_chartdata__WEBPACK_IMPORTED_MODULE_2__["monthLabels"]
        });
        Object.assign(this, {
          weekChartData: _data_chartdata__WEBPACK_IMPORTED_MODULE_2__["weekChartData"]
        });
        Object.assign(this, {
          weekLabels: _data_chartdata__WEBPACK_IMPORTED_MODULE_2__["weekLabels"]
        });
        Object.assign(this, {
          dayChartData: _data_chartdata__WEBPACK_IMPORTED_MODULE_2__["dayChartData"]
        });
        Object.assign(this, {
          dayLabels: _data_chartdata__WEBPACK_IMPORTED_MODULE_2__["dayLabels"]
        });
      }

      _createClass(ChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.items);
          this.chartData = this.allTimeChartData;
          this.chartLabels = this.allTimeLabels;
        }
      }, {
        key: "changeData",
        value: function changeData(_changeData, changeLabels) {
          this.chartData = _changeData;
          this.chartLabels = changeLabels;
        }
      }, {
        key: "onChartClick",
        value: function onChartClick(event) {
          console.log(event);
        }
      }, {
        key: "onChartHovered",
        value: function onChartHovered(e) {
          console.log(e);
        }
      }]);

      return ChartComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ChartComponent.prototype, "items", void 0);
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'chart-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/chart/chart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chart.component.scss */
      "./src/app/tab3/chart/chart.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ChartComponent);
    /***/
  },

  /***/
  "./src/app/tab3/history/history.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/tab3/history/history.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3HistoryHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".history .history-title {\n  text-align: center;\n  margin-top: 10px;\n}\n.history .history-list {\n  position: relative;\n  margin-top: 15px;\n}\n.history .history-item {\n  position: relative;\n  /* padding: 5px; */\n  height: 50px;\n  /* width: 380px; */\n  margin: 10px;\n  /* border-top: 15px; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ20vRG9jdW1lbnRzL0FuZ3VsYXJQcm9qZWN0cy9Bbmd1bGFyTG9nZ2VyL3NyYy9hcHAvdGFiMy9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RhYjMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0RSO0FES0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDSFI7QURNSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpc3Rvcnl7XG5cbiAgICAuaGlzdG9yeS10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgLmhpc3RvcnktbGlzdHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgICBcbiAgICAuaGlzdG9yeS1pdGVte1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAvKiB3aWR0aDogMzgwcHg7ICovXG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgLyogYm9yZGVyLXRvcDogMTVweDsgKi9cbiAgICB9XG59XG5cbiIsIi5oaXN0b3J5IC5oaXN0b3J5LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhpc3RvcnkgLmhpc3RvcnktbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5oaXN0b3J5IC5oaXN0b3J5LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHBhZGRpbmc6IDVweDsgKi9cbiAgaGVpZ2h0OiA1MHB4O1xuICAvKiB3aWR0aDogMzgwcHg7ICovXG4gIG1hcmdpbjogMTBweDtcbiAgLyogYm9yZGVyLXRvcDogMTVweDsgKi9cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab3/history/history.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/tab3/history/history.component.ts ***!
    \***************************************************/

  /*! exports provided: HistoryPageComponent */

  /***/
  function srcAppTab3HistoryHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageComponent", function () {
      return HistoryPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var HistoryPageComponent =
    /*#__PURE__*/
    function () {
      function HistoryPageComponent(modalCtrl) {
        _classCallCheck(this, HistoryPageComponent);

        this.modalCtrl = modalCtrl;
      }

      _createClass(HistoryPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "recordItem",
        value: function recordItem(item) {
          console.log(item);
        }
      }]);

      return HistoryPageComponent;
    }();

    HistoryPageComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], HistoryPageComponent.prototype, "items", void 0);
    HistoryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'history-tab',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/history/history.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.component.scss */
      "./src/app/tab3/history/history.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], HistoryPageComponent);
    /***/
  },

  /***/
  "./src/app/tab3/logger/logger.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/tab3/logger/logger.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3LoggerLoggerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logger-title {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.chart_button {\n  display: block;\n  background: none;\n  font-size: 15px;\n  color: white;\n  padding: 2px;\n  padding-left: 8px;\n  padding-right: 8px;\n  margin-bottom: 15px;\n}\n\n.selector .datetime-form {\n  position: relative;\n}\n\n.selector .selector-label {\n  text-align: center;\n}\n\n.selector .selector-list {\n  position: relative;\n  bottom: 20px;\n}\n\n.selector .selector-container {\n  padding: 15;\n  margin-top: 50px;\n}\n\n.selector .slider-list {\n  position: relative;\n  bottom: 65px;\n}\n\n.selector .slider-container {\n  padding: 15;\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ20vRG9jdW1lbnRzL0FuZ3VsYXJQcm9qZWN0cy9Bbmd1bGFyTG9nZ2VyL3NyYy9hcHAvdGFiMy9sb2dnZXIvbG9nZ2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWIzL2xvZ2dlci9sb2dnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURJSTtFQUNJLGtCQUFBO0FDRFI7O0FES0k7RUFDSSxrQkFBQTtBQ0hSOztBRE1JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDSlI7O0FET0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNMUjs7QURRSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ05SOztBRFNJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC90YWIzL2xvZ2dlci9sb2dnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nZ2VyLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxufVxuXG4uY2hhcnRfYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gfVxuXG4gLnNlbGVjdG9ye1xuICAgIC5kYXRldGltZS1mb3JtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvLyBib3R0b206IDc1cHg7XG4gICAgfVxuICAgIFxuICAgIC5zZWxlY3Rvci1sYWJlbHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuc2VsZWN0b3ItbGlzdHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3R0b206MjBweFxuICAgIH1cbiAgICBcbiAgICAuc2VsZWN0b3ItY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOjE1O1xuICAgICAgICBtYXJnaW4tdG9wOjUwcHg7XG4gICAgfSBcbiAgICBcbiAgICAuc2xpZGVyLWxpc3R7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiA2NXB4O1xuICAgIH1cbiAgICBcbiAgICAuc2xpZGVyLWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzoxNTtcbiAgICAgICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgIH0gXG4gfVxuXG4iLCIubG9nZ2VyLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2hhcnRfYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5zZWxlY3RvciAuZGF0ZXRpbWUtZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3RvciAuc2VsZWN0b3ItbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VsZWN0b3IgLnNlbGVjdG9yLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMjBweDtcbn1cbi5zZWxlY3RvciAuc2VsZWN0b3ItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uc2VsZWN0b3IgLnNsaWRlci1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDY1cHg7XG59XG4uc2VsZWN0b3IgLnNsaWRlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab3/logger/logger.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/tab3/logger/logger.component.ts ***!
    \*************************************************/

  /*! exports provided: LoggerComponent */

  /***/
  function srcAppTab3LoggerLoggerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggerComponent", function () {
      return LoggerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var LoggerComponent =
    /*#__PURE__*/
    function () {
      function LoggerComponent(modalCtrl) {
        _classCallCheck(this, LoggerComponent);

        this.modalCtrl = modalCtrl;
        this.selectTypes = ['Soft', 'Hard', 'Solid'];
        this.sizes = ['Small', 'Medium', 'Large', 'Massive'];
        this.startTimeSet = false;
      }

      _createClass(LoggerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "completeLogging",
        value: function completeLogging() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "setStartTime",
        value: function setStartTime(event) {
          this.startTime = event.startTime;
          this.startTimeSet = true;
        }
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          this.modalCtrl.dismiss();
        }
      }]);

      return LoggerComponent;
    }();

    LoggerComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    LoggerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'logger-tab',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logger.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/logger/logger.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logger.component.scss */
      "./src/app/tab3/logger/logger.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], LoggerComponent);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./history/history.component */
    "./src/app/tab3/history/history.component.ts");
    /* harmony import */


    var _logger_logger_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./logger/logger.component */
    "./src/app/tab3/logger/logger.component.ts");
    /* harmony import */


    var _chart_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./chart/chart.component */
    "./src/app/tab3/chart/chart.component.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }, {
        path: 'history',
        component: _history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryPageComponent"]
      }, {
        path: 'logger',
        component: _logger_logger_component__WEBPACK_IMPORTED_MODULE_9__["LoggerComponent"]
      }]), ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"], _history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryPageComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_9__["LoggerComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_10__["ChartComponent"]],
      entryComponents: [_history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryPageComponent"], _logger_logger_component__WEBPACK_IMPORTED_MODULE_9__["LoggerComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_10__["ChartComponent"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chart_button {\n  display: block;\n  background: none;\n  font-size: 15px;\n  color: white;\n  padding: 2px;\n  padding-left: 8px;\n  padding-right: 8px;\n  margin-bottom: 15px;\n}\n\n.chart_buttons {\n  position: relative;\n  top: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ20vRG9jdW1lbnRzL0FuZ3VsYXJQcm9qZWN0cy9Bbmd1bGFyTG9nZ2VyL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NIOztBREVBO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0FDQ0giLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0X2J1dHRvbiB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICBmb250LXNpemU6IDE1cHg7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIHBhZGRpbmc6IDJweDtcbiAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNoYXJ0X2J1dHRvbnMge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgdG9wOiAxMjVweDtcbn1cbiIsIi5jaGFydF9idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNoYXJ0X2J1dHRvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTI1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _history_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./history/history.component */
    "./src/app/tab3/history/history.component.ts");
    /* harmony import */


    var _logger_logger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logger/logger.component */
    "./src/app/tab3/logger/logger.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_log_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/log-item.service */
    "./src/app/services/log-item.service.ts");

    var Tab3Page =
    /*#__PURE__*/
    function () {
      function Tab3Page(navCtrl, modalCtrl, itemService) {
        _classCallCheck(this, Tab3Page);

        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.itemService = itemService;
      }

      _createClass(Tab3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getItems();
        }
      }, {
        key: "openHistoryComponent",
        value: function openHistoryComponent() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var historyComp, historyModal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _history_history_component__WEBPACK_IMPORTED_MODULE_2__["HistoryPageComponent"],
                      componentProps: {
                        items: this.items
                      }
                    });

                  case 2:
                    historyModal = _context.sent;
                    historyModal.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openLoggerComponent",
        value: function openLoggerComponent() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var loggerComp, loggerModal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _logger_logger_component__WEBPACK_IMPORTED_MODULE_3__["LoggerComponent"],
                      componentProps: loggerComp
                    });

                  case 2:
                    loggerModal = _context2.sent;
                    loggerModal.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getItems",
        value: function getItems() {
          var _this = this;

          this.itemService.getLogItems().subscribe(function (items) {
            return _this.items = items;
          });
        }
      }]);

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_log_item_service__WEBPACK_IMPORTED_MODULE_5__["LogItemService"]
      }];
    };

    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_log_item_service__WEBPACK_IMPORTED_MODULE_5__["LogItemService"]])], Tab3Page);
    /***/
  },

  /***/
  "./src/mock-data/mockItems.json":
  /*!**************************************!*\
    !*** ./src/mock-data/mockItems.json ***!
    \**************************************/

  /*! exports provided: 0, 1, 2, default */

  /***/
  function srcMockDataMockItemsJson(module) {
    module.exports = JSON.parse("[{\"date\":\"January 28th 1997\",\"type\":\"Bell\",\"size\":\"massive\",\"smell\":\"4\",\"pain\":\"7\"},{\"date\":\"December 3rd 2000\",\"type\":\"Bell\",\"size\":\"massive\",\"smell\":\"4\",\"pain\":\"9\"},{\"date\":\"November 11th 2001\",\"type\":\"Bell\",\"size\":\"medium\",\"smell\":\"10\",\"pain\":\"1\"}]");
    /***/
  }
}]); //# sourceMappingURL=tab3-tab3-module-es2015.js.map
//# sourceMappingURL=tab3-tab3-module-es5.js.map