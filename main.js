(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accreditation/accreditation.component.html":
/*!************************************************************!*\
  !*** ./src/app/accreditation/accreditation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"accreditation__wrapper\">\r\n  <form class=\"accreditation\">\r\n    <h1 class='accreditation__headline'>Accreditation</h1>\r\n    <p class='accreditation__text'>To be considered an accredited investor you must meet certain qualifications regarding your financial standing.</p>\r\n    <div class=\"investor\">\r\n      <p class=\"investor__headline\">are you an accredited investor?</p>\r\n      <div class=\"radio__container\">\r\n        <label class=\"radio option\">\r\n          <input class=\"radio__input\" name=\"radio-group\"  type=\"radio\">\r\n          <span class=\"radio__box\"></span>\r\n          No, I am not an Accredited Investor\r\n        </label>\r\n        <label class=\"radio option\">\r\n            <input class=\"radio__input\" name=\"radio-group\" type=\"radio\" checked>\r\n            <span class=\"radio__box\"></span>\r\n            Yes, I am an Accredited Investor\r\n        </label>\r\n      </div>\r\n      <p class=\"investor__headline\">Goverment issued ID</p>\r\n      <div class=\"investor__upload\">\r\n        <svg class='upload__icon' width=\"14\" height=\"18\" viewBox=\"0 0 14 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <rect y=\"16\" width=\"14\" height=\"2\" fill=\"#B0B4BE\"/>\r\n          <path d=\"M7.5 12.5L7.5 3.5L6.5 3.5L6.5 12.5L7.5 12.5Z\" fill=\"white\" stroke=\"#B0B4BE\"/>\r\n          <path d=\"M2.75736 6.24264L7 2L11.2426 6.24264\" stroke=\"#B0B4BE\" stroke-width=\"2\"/>\r\n        </svg>\r\n        <p class=\"upload__text\">\r\n          <span class=\"upload__text-green\">Upload Picture</span> or drag it here \r\n        </p>         \r\n      </div>\r\n    </div>\r\n    <div class=\"form-control form-control-accreditation\">\r\n        <input type=\"text\" class=\"form__field\" required>\r\n        <span class=\"form__field-placeholder\">Tax ID (SSN/EIN)</span>\r\n    </div>\r\n      <div class=\"accreditation__button-container\">\r\n        <button class=\"accreditation__button button-do-it-later\"> Do It Later</button>\r\n        <a class=\"accreditation__button-link\" routerLink='/risk-asessment'>\r\n          <button class=\"btn accreditation__button-save\"> \r\n              <span class=\"btn-text\">Save & Continue</span>\r\n              <span class=\"btn-arrow\">\r\n                <i class=\"btn-arrow__icon btn-arrow__icon-bigger\"></i>\r\n              </span>\r\n          </button>\r\n      </a>\r\n\r\n      </div>\r\n  </form>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/accreditation/accreditation.component.styl":
/*!************************************************************!*\
  !*** ./src/app/accreditation/accreditation.component.styl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.accreditation {\n  background: #fff;\n  width: 100%;\n  max-width: 928px;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  margin: 0 auto;\n  padding: 0 84px;\n  padding-bottom: 80px;\n  padding-top: 32px;\n}\n.accreditation__button-link {\n  width: 260px !important;\n}\n.accreditation__button-container {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n.accreditation__button-later {\n  width: 132px;\n  height: 56px;\n  border: 1px solid #b0b4be;\n  box-sizing: border-box;\n  border-radius: 2px;\n}\n.accreditation__button-save {\n  max-width: 260px !important;\n}\n.accreditation__button-save .btn-arrow__icon-bigger {\n  height: 12px;\n}\n.accreditation__wrapper {\n  width: 100%;\n  background: #e4e4e4;\n  padding: 40px 0px;\n  margin: 0 auto;\n}\n.accreditation__headline {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 48px;\n  text-align: center;\n  color: #151515;\n  margin-bottom: 8px;\n}\n.accreditation__text {\n  width: 60%;\n  margin: 0 auto;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #5a6379;\n  margin-bottom: 40px;\n}\n@media screen and (max-width: 1200px) {\n  .accreditation__text {\n    width: 80%;\n  }\n}\n.accreditation .investor {\n  display: flex;\n  flex-direction: column;\n}\n.accreditation .investor__upload {\n  background: #fff;\n  border: 1px dashed #e0e4eb;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  padding: 36px 0;\n  margin-bottom: 32px;\n}\n.accreditation .investor__upload .upload__icon {\n  height: 16px;\n  width: 14px;\n  margin-right: 12px;\n}\n.accreditation .investor__upload .upload__text {\n  font-size: 14px;\n  line-height: 16px;\n}\n.accreditation .investor__upload .upload__text-green {\n  color: #0dc22b;\n}\n.accreditation .investor__headline {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: #151515;\n  margin-bottom: 24px;\n}\n.accreditation .investor .option {\n  display: block;\n  margin-bottom: 0.5em;\n  position: relative;\n}\n.accreditation .investor .radio {\n  padding-left: 30px;\n  color: #5a6379;\n}\n.accreditation .investor .radio:first-child {\n  margin-bottom: 24px;\n}\n.accreditation .investor .radio__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n.accreditation .investor .radio__box {\n  overflow: hidden;\n  background-color: #fff;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #979797;\n  position: absolute;\n  left: 2px;\n  border-radius: 50%;\n  border-radius: 50%;\n  box-sizing: border-box;\n}\n.accreditation .investor .radio__container {\n  margin-bottom: 24px;\n}\n.accreditation .investor .radio__input:checked + .radio__box:before {\n  content: '';\n  display: block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #15bd0d;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n.accreditation .form-control-accreditation {\n  width: 100% !important;\n  margin-bottom: 40px;\n}\n.accreditation .form-control {\n  width: 364px;\n  position: relative;\n  margin-bottom: 36px;\n}\n.accreditation .form__field {\n  font-size: 14px;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 14px 20px;\n  height: 48px;\n  background-color: #f4f6f6;\n  color: #555556;\n  border: none;\n  font-weight: 500;\n  font-family: Montserrat;\n  outline: none;\n}\n.accreditation .form__field:focus {\n  background-color: #eeefef;\n}\n.accreditation .form__field-placeholder {\n  color: #555556;\n  transition: all 0.2s ease-in-out;\n  position: absolute;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: Montserrat;\n  top: 15px;\n  left: 19px;\n  pointer-events: none;\n}\n.accreditation .form__field:focus ~ .form__field-placeholder,\n.accreditation .form__field--active ~ .form__field-placeholder,\n.accreditation .form__field:not(:focus):valid ~ .form__field-placeholder {\n  top: -24px;\n  left: 0;\n  font-size: 13px;\n  color: #767575;\n}\n/*# sourceMappingURL=src/app/accreditation/accreditation.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjcmVkaXRhdGlvbi9zcmMvYXBwL2FjY3JlZGl0YXRpb24vYWNjcmVkaXRhdGlvbi5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvYWNjcmVkaXRhdGlvbi9hY2NyZWRpdGF0aW9uLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUTtFQUNSLFVBQVM7RUFDVCxzQkFBWTtBQ0NkO0FEQ0E7RUFDRSxnQkFBWTtFQUNaLFdBQU07RUFDTixnQkFBVztFQUNYLHVCQUFhO0VBQ2Isa0JBQVk7RUFDWixtQkFBYTtFQUNiLGNBQVE7RUFDUixlQUFTO0VBQ1Qsb0JBQWdCO0VBQ2hCLGlCQUFhO0FDQ2Y7QURDSTtFQUNFLHVCQUFPO0FDQ2I7QURDSTtFQUNFLGFBQVM7RUFDVCw4QkFBaUI7RUFDakIsZ0JBQVk7QUNDbEI7QURDSTtFQUNFLFlBQU87RUFDUCxZQUFRO0VBQ1IseUJBQVE7RUFDUixzQkFBWTtFQUNaLGtCQUFlO0FDQ3JCO0FEQ0k7RUFDRSwyQkFBVztBQ0NqQjtBREFNO0VBQ0UsWUFBUTtBQ0VoQjtBREVFO0VBRUUsV0FBTztFQUNQLG1CQUFZO0VBQ1osaUJBQVM7RUFDVCxjQUFRO0FDRFo7QURHRTtFQUNBLGlCQUFhO0VBQ2IsZUFBVztFQUNYLGlCQUFhO0VBQ2Isa0JBQVk7RUFDWixjQUFPO0VBQ1Asa0JBQWU7QUNEakI7QURHRTtFQUNFLFVBQU87RUFDUCxjQUFRO0VBQ1IsZUFBVztFQUNYLGlCQUFhO0VBQ2Isa0JBQVk7RUFDWixjQUFPO0VBQ1AsbUJBQWU7QUNEbkI7QURFd0M7RUFBQTtJQUNsQyxVQUFPO0VDQ1g7QUFDRjtBRHVCRTtFQUNFLGFBQVM7RUFDVCxzQkFBZ0I7QUNyQnBCO0FEc0JJO0VBQ0UsZ0JBQVk7RUFDWiwwQkFBUTtFQUNSLHNCQUFZO0VBQ1osYUFBUztFQUNULHVCQUFpQjtFQUNqQixlQUFTO0VBQ1QsbUJBQWU7QUNwQnJCO0FEc0JRO0VBQ0UsWUFBUTtFQUNSLFdBQU87RUFDUCxrQkFBYztBQ3BCeEI7QUR1QlE7RUFDRSxlQUFXO0VBQ1gsaUJBQWE7QUNyQnZCO0FEc0JVO0VBQ0UsY0FBTztBQ3BCbkI7QUR5Qkk7RUFDRSxnQkFBYTtFQUNiLGVBQVc7RUFDWCxpQkFBYTtFQUNiLG1CQUFnQjtFQUNoQix5QkFBZ0I7RUFDaEIsY0FBTztFQUNQLG1CQUFlO0FDdkJyQjtBRHlCTTtFQUNFLGNBQVM7RUFDVCxvQkFBZTtFQUNmLGtCQUFVO0FDdkJsQjtBRHlCSTtFQUNFLGtCQUFjO0VBQ2QsY0FBTztBQ3ZCYjtBRHdCTTtFQUNJLG1CQUFlO0FDdEJ6QjtBRHdCUTtFQUNFLGtCQUFVO0VBQ1YsVUFBTztFQUNQLFdBQVE7RUFDUixnQkFBVTtFQUNWLG1CQUFrQjtBQ3RCNUI7QUR3QlE7RUFDRSxnQkFBVTtFQUNWLHNCQUFrQjtFQUNsQixXQUFPO0VBQ1AsWUFBUTtFQUNSLHlCQUFRO0VBQ1Isa0JBQVU7RUFDVixTQUFNO0VBQ04sa0JBQWU7RUFDZixrQkFBZTtFQUNmLHNCQUFZO0FDdEJ0QjtBRHdCUTtFQUNFLG1CQUFlO0FDdEJ6QjtBRDBCTTtFQUNFLFdBQVM7RUFDVCxjQUFTO0VBQ1QsV0FBTztFQUNQLFlBQVE7RUFDUixrQkFBZTtFQUNmLHlCQUFrQjtFQUNsQixrQkFBVTtFQUNWLHdDQUE4QjtVQUE5QixnQ0FBOEI7RUFDOUIsUUFBSztFQUNMLFNBQU07QUN4QmQ7QUQ0QkU7RUFDRSxzQkFBTztFQUNQLG1CQUFlO0FDMUJuQjtBRCtCTTtFQUNFLFlBQU87RUFDUCxrQkFBVTtFQUNWLG1CQUFlO0FDN0J2QjtBRDhCTTtFQUNFLGVBQVc7RUFDWCxzQkFBWTtFQUNaLFdBQU87RUFDUCxrQkFBUztFQUNULFlBQVE7RUFDUix5QkFBa0I7RUFDbEIsY0FBTztFQUNQLFlBQVE7RUFDUixnQkFBYTtFQUNiLHVCQUFhO0VBQ2IsYUFBUztBQzVCakI7QUQ2QlE7RUFDRSx5QkFBa0I7QUMzQjVCO0FENEJRO0VBQ0UsY0FBTztFQUNQLGdDQUFZO0VBQ1osa0JBQVU7RUFDVixlQUFXO0VBQ1gsZ0JBQWE7RUFDYix1QkFBYTtFQUNiLFNBQUs7RUFDTCxVQUFNO0VBQ04sb0JBQWdCO0FDMUIxQjtBRDhCSTs7O0VBQ0ksVUFBSztFQUNMLE9BQU07RUFDTixlQUFXO0VBQ1gsY0FBTztBQzFCZjtBQUNBLDRFQUE0RSIsImZpbGUiOiJzcmMvYXBwL2FjY3JlZGl0YXRpb24vYWNjcmVkaXRhdGlvbi5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uYWNjcmVkaXRhdGlvbntcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIHdpZHRoIDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA5MjhweDtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwIDg0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgcGFkZGluZy10b3A6IDMycHg7XHJcbiAgJl9fYnV0dG9ue1xyXG4gICAgJi1saW5re1xyXG4gICAgICB3aWR0aDogMjYwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgJi1jb250YWluZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgICYtbGF0ZXJ7XHJcbiAgICAgIHdpZHRoOiAxMzJweDtcclxuICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQjBCNEJFO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIH1cclxuICAgICYtc2F2ZXtcclxuICAgICAgbWF4LXdpZHRoOiAyNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAuYnRuLWFycm93X19pY29uLWJpZ2dlcntcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgJl9fd3JhcHBlcntcclxuICAgIC8vIG1heC13aWR0aDogMTQ0MnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTRFNEU0O1xyXG4gICAgcGFkZGluZzogNDBweCAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAmX19oZWFkbGluZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMTUxNTE1O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgJl9fdGV4dHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1QTYzNzk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIC8vICZfX2J1dHRvbntcclxuICAvLyAgICYtY29udGFpbmVye1xyXG4gIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLy8gICAgIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwOTBweCl7XHJcbiAgLy8gICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuICAvLyAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gICAgIC8vIH1cclxuICAvLyAgIH1cclxuICAvLyAgICYtbGF0ZXJ7XHJcbiAgLy8gICAgIHdpZHRoOiAxMzJweDtcclxuICAvLyAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gIC8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjQjBCNEJFO1xyXG4gIC8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICYtc2F2ZXtcclxuICAvLyAgICAgd2lkdGg6IDI1OXB4O1xyXG4gIC8vICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgLy8gICAgIGJhY2tncm91bmQ6ICMwRUMyMkI7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAuaW52ZXN0b3J7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICZfX3VwbG9hZHtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNFMEU0RUI7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAzNnB4IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICAgIC51cGxvYWR7XHJcbiAgICAgICAgJl9faWNvbntcclxuICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICZfX3RleHR7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICYtZ3JlZW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMERDMjJCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2hlYWRsaW5le1xyXG4gICAgICBmb250LXdlaWdodDogNTAwOyAvL2NoZWNrXHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiAjMTUxNTE1O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5vcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5yYWRpbyB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgY29sb3I6ICM1QTYzNzk7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19pbnB1dHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICZfX2JveHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk3OTc5NztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgJl9fY29udGFpbmVye1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yYWRpb19faW5wdXQ6Y2hlY2tlZCArIC5yYWRpb19fYm94IHtcclxuICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTViZDBkO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgLmZvcm0tY29udHJvbC1hY2NyZWRpdGF0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5mb3Jte1xyXG4gICAgICAmLWNvbnRyb2x7XHJcbiAgICAgICAgd2lkdGg6IDM2NHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O31cclxuICAgICAgJl9fZmllbGR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgICAgIGNvbG9yOiAjNTU1NTU2O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0XHJcbiAgICAgICAgb3V0bGluZTogbm9uZVxyXG4gICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRkVGfVxyXG4gICAgICAgICYtcGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICBjb2xvcjogIzU1NTU1NjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0XHJcbiAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICBsZWZ0OiAxOXB4O1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7fVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm1fX2ZpZWxkOmZvY3VzIH4gLmZvcm1fX2ZpZWxkLXBsYWNlaG9sZGVyLCAuZm9ybV9fZmllbGQtLWFjdGl2ZSB+IC5mb3JtX19maWVsZC1wbGFjZWhvbGRlciwgLmZvcm1fX2ZpZWxkOm5vdCg6Zm9jdXMpOnZhbGlkIH4gLmZvcm1fX2ZpZWxkLXBsYWNlaG9sZGVye1xyXG4gICAgICAgIHRvcDogLTI0cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM3Njc1NzU7XHJcbiAgICB9XHJcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmFjY3JlZGl0YXRpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5MjhweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgODRweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuLmFjY3JlZGl0YXRpb25fX2J1dHRvbi1saW5rIHtcbiAgd2lkdGg6IDI2MHB4ICFpbXBvcnRhbnQ7XG59XG4uYWNjcmVkaXRhdGlvbl9fYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5hY2NyZWRpdGF0aW9uX19idXR0b24tbGF0ZXIge1xuICB3aWR0aDogMTMycHg7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IwYjRiZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmFjY3JlZGl0YXRpb25fX2J1dHRvbi1zYXZlIHtcbiAgbWF4LXdpZHRoOiAyNjBweCAhaW1wb3J0YW50O1xufVxuLmFjY3JlZGl0YXRpb25fX2J1dHRvbi1zYXZlIC5idG4tYXJyb3dfX2ljb24tYmlnZ2VyIHtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuLmFjY3JlZGl0YXRpb25fX3dyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2U0ZTRlNDtcbiAgcGFkZGluZzogNDBweCAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmFjY3JlZGl0YXRpb25fX2hlYWRsaW5lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxNTE1MTU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5hY2NyZWRpdGF0aW9uX190ZXh0IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1YTYzNzk7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFjY3JlZGl0YXRpb25fX3RleHQge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5hY2NyZWRpdGF0aW9uIC5pbnZlc3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYWNjcmVkaXRhdGlvbiAuaW52ZXN0b3JfX3VwbG9hZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZTBlNGViO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMzZweCAwO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLmFjY3JlZGl0YXRpb24gLmludmVzdG9yX191cGxvYWQgLnVwbG9hZF9faWNvbiB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5hY2NyZWRpdGF0aW9uIC5pbnZlc3Rvcl9fdXBsb2FkIC51cGxvYWRfX3RleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLmFjY3JlZGl0YXRpb24gLmludmVzdG9yX191cGxvYWQgLnVwbG9hZF9fdGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMGRjMjJiO1xufVxuLmFjY3JlZGl0YXRpb24gLmludmVzdG9yX19oZWFkbGluZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMTUxNTE1O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmFjY3JlZGl0YXRpb24gLmludmVzdG9yIC5vcHRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hY2NyZWRpdGF0aW9uIC5pbnZlc3RvciAucmFkaW8ge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGNvbG9yOiAjNWE2Mzc5O1xufVxuLmFjY3JlZGl0YXRpb24gLmludmVzdG9yIC5yYWRpbzpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uYWNjcmVkaXRhdGlvbiAuaW52ZXN0b3IgLnJhZGlvX19pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG59XG4uYWNjcmVkaXRhdGlvbiAuaW52ZXN0b3IgLnJhZGlvX19ib3gge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTc5Nzk3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYWNjcmVkaXRhdGlvbiAuaW52ZXN0b3IgLnJhZGlvX19jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmFjY3JlZGl0YXRpb24gLmludmVzdG9yIC5yYWRpb19faW5wdXQ6Y2hlY2tlZCArIC5yYWRpb19fYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTViZDBkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuLmFjY3JlZGl0YXRpb24gLmZvcm0tY29udHJvbC1hY2NyZWRpdGF0aW9uIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5hY2NyZWRpdGF0aW9uIC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMzY0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cbi5hY2NyZWRpdGF0aW9uIC5mb3JtX19maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmY2O1xuICBjb2xvcjogIzU1NTU1NjtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hY2NyZWRpdGF0aW9uIC5mb3JtX19maWVsZDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVmZWY7XG59XG4uYWNjcmVkaXRhdGlvbiAuZm9ybV9fZmllbGQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzU1NTU1NjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxOXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5hY2NyZWRpdGF0aW9uIC5mb3JtX19maWVsZDpmb2N1cyB+IC5mb3JtX19maWVsZC1wbGFjZWhvbGRlcixcbi5hY2NyZWRpdGF0aW9uIC5mb3JtX19maWVsZC0tYWN0aXZlIH4gLmZvcm1fX2ZpZWxkLXBsYWNlaG9sZGVyLFxuLmFjY3JlZGl0YXRpb24gLmZvcm1fX2ZpZWxkOm5vdCg6Zm9jdXMpOnZhbGlkIH4gLmZvcm1fX2ZpZWxkLXBsYWNlaG9sZGVyIHtcbiAgdG9wOiAtMjRweDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzc2NzU3NTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvYWNjcmVkaXRhdGlvbi9hY2NyZWRpdGF0aW9uLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"

/***/ }),

/***/ "./src/app/accreditation/accreditation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/accreditation/accreditation.component.ts ***!
  \**********************************************************/
/*! exports provided: AccreditationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccreditationComponent", function() { return AccreditationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccreditationComponent = /** @class */ (function () {
    function AccreditationComponent() {
    }
    AccreditationComponent.prototype.ngOnInit = function () {
    };
    AccreditationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accreditation',
            template: __webpack_require__(/*! ./accreditation.component.html */ "./src/app/accreditation/accreditation.component.html"),
            styles: [__webpack_require__(/*! ./accreditation.component.styl */ "./src/app/accreditation/accreditation.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccreditationComponent);
    return AccreditationComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accreditation_accreditation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accreditation/accreditation.component */ "./src/app/accreditation/accreditation.component.ts");
/* harmony import */ var _build_account_build_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build-account/build-account.component */ "./src/app/build-account/build-account.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _risk_assesment_risk_assesment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./risk-assesment/risk-assesment.component */ "./src/app/risk-assesment/risk-assesment.component.ts");
/* harmony import */ var _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terms-of-use/terms-of-use.component */ "./src/app/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");









var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'accreditation', component: _accreditation_accreditation_component__WEBPACK_IMPORTED_MODULE_3__["AccreditationComponent"] },
    {
        path: 'build-account',
        component: _build_account_build_account_component__WEBPACK_IMPORTED_MODULE_4__["BuildAccountComponent"],
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'risk-asessment', component: _risk_assesment_risk_assesment_component__WEBPACK_IMPORTED_MODULE_6__["RiskAssesmentComponent"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"] },
    {
        path: 'terms-of-use',
        component: _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_7__["TermsOfUseComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"app\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sol';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _accreditation_accreditation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accreditation/accreditation.component */ "./src/app/accreditation/accreditation.component.ts");
/* harmony import */ var _build_account_build_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./build-account/build-account.component */ "./src/app/build-account/build-account.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input/input.component */ "./src/app/input/input.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./select/select.component */ "./src/app/select/select.component.ts");
/* harmony import */ var _risk_assesment_risk_assesment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./risk-assesment/risk-assesment.component */ "./src/app/risk-assesment/risk-assesment.component.ts");
/* harmony import */ var _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./terms-of-use/terms-of-use.component */ "./src/app/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _accreditation_accreditation_component__WEBPACK_IMPORTED_MODULE_5__["AccreditationComponent"],
                _build_account_build_account_component__WEBPACK_IMPORTED_MODULE_6__["BuildAccountComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_11__["SelectComponent"],
                _risk_assesment_risk_assesment_component__WEBPACK_IMPORTED_MODULE_12__["RiskAssesmentComponent"],
                _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_13__["TermsOfUseComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/build-account/build-account.component.html":
/*!************************************************************!*\
  !*** ./src/app/build-account/build-account.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"build-account\">\r\n  <app-header></app-header>\r\n  <div class=\"build-account-wrapper\">\r\n    <div class=\"build-account-head\">\r\n      <p class=\"build-account-head-p\">20% complete</p>\r\n      <img src=\"./assets/images/line20.svg\" alt=\"\">\r\n      </div>\r\n      <h1 class=\"build-account-title\">Lets Build Your Account</h1>\r\n      <h2 class=\"build-account-subtitle\">Please enter fill out to gain access to our Service</h2>\r\n        <form action=\"\" class=\"build-account__form\">\r\n          <div class=\"build-account__form__col\">\r\n            <app-input [label]=\"name\"></app-input>\r\n            <app-input [label]=\"address\"></app-input>\r\n            <div class=\"build-account__form__col__row\">\r\n              <div class=\"build-account__form-width form-control \">\r\n                <input type=\"text\" class=\"build-account__form__col__row-input form__field \" required>\r\n                <span class=\"form__field-placeholder\">{{state}}</span>\r\n              </div>\r\n              <select name=\"city\" id=\"city\" class=\"build-account__form__col__row-select\"></select>\r\n            </div>\r\n            <app-input [label]=\"phone\"></app-input>\r\n            <div class=\"build-account__form__row\">\r\n                    <input class=\"build-account__form__row-radio\" name=\"radio-group\" type=\"radio\">\r\n                    <label for=\"radio-group\" class=\"build-account__form__row-label\">I'm an autorized representative of this entity</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"build-account__form__col\">\r\n              <app-input [label]=\"title\"></app-input>\r\n              <app-select></app-select>\r\n              <app-input [label]=\"code\"></app-input>\r\n              <app-input [label]=\"alt\"></app-input>\r\n            </div>\r\n        </form>\r\n        <a routerLink='/accreditation'>\r\n          <div class=\"build-account__button\">\r\n              <button class=\"btn\">\r\n                  <span class=\"btn-text\">Save & Continue</span>\r\n                  <span class=\"btn-arrow\">\r\n                    <i class=\"btn-arrow__icon\"></i>\r\n                  </span>\r\n              </button>\r\n            \r\n        </div>\r\n      </a>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/build-account/build-account.component.styl":
/*!************************************************************!*\
  !*** ./src/app/build-account/build-account.component.styl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".build-account {\n  background: #e4e4e4;\n}\n.build-account-wrapper {\n  display: flex;\n  margin: 20px auto;\n  padding: 44px 84px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #fff;\n  width: 928px;\n}\n.build-account-head-p {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #5a6379;\n}\n.build-account-title {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 48px;\n  text-align: center;\n  color: #151515;\n}\n.build-account-subtitle {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #5a6379;\n}\n.build-account__form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  padding: 30px 0;\n}\n.build-account__form-width {\n  width: 310px;\n}\n.build-account__form__row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.build-account__form__row-radio {\n  width: 20px;\n  height: 20px;\n  border: 1px solid #979797;\n  border-radius: 100% !important;\n}\n.build-account__form__row-label {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #5a6379;\n  padding-left: 5px;\n}\n.build-account__form__col {\n  display: flex;\n  flex-direction: column;\n}\n.build-account__form__col__row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n.build-account__form__col__row-select {\n  width: 40px;\n  height: 48px;\n  background: #f5f6fa;\n  border-radius: 2px;\n  border: none;\n  outline: none;\n}\n.build-account__form__col__row-input {\n  width: 310px;\n}\n.build-account__button {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n/*# sourceMappingURL=src/app/build-account/build-account.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVpbGQtYWNjb3VudC9zcmMvYXBwL2J1aWxkLWFjY291bnQvYnVpbGQtYWNjb3VudC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvYnVpbGQtYWNjb3VudC9idWlsZC1hY2NvdW50LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQVk7QUNDZDtBREFFO0VBQ0UsYUFBUTtFQUNSLGlCQUFPO0VBQ1Asa0JBQVM7RUFDVCx1QkFBaUI7RUFDakIsbUJBQWE7RUFDYixzQkFBZ0I7RUFDaEIsc0JBQWtCO0VBQ2xCLFlBQU07QUNFVjtBRENJO0VBQ0UsdUJBQWE7RUFDYixrQkFBWTtFQUNaLG1CQUFhO0VBQ2IsZUFBVztFQUNYLGlCQUFhO0VBQ2Isa0JBQVk7RUFDWixjQUFPO0FDQ2I7QURFRTtFQUNFLHVCQUFhO0VBQ2Isa0JBQVk7RUFDWixpQkFBYTtFQUNiLGVBQVc7RUFDWCxpQkFBYTtFQUNiLGtCQUFZO0VBQ1osY0FBTztBQ0FYO0FERUU7RUFDRSx1QkFBYTtFQUNiLGtCQUFZO0VBQ1osbUJBQWE7RUFDYixlQUFXO0VBQ1gsaUJBQWE7RUFDYixrQkFBWTtFQUNaLGNBQU87QUNBWDtBREVFO0VBQ0UsYUFBUztFQUNULG1CQUFnQjtFQUNoQiw2QkFBaUI7RUFDakIsV0FBTTtFQUNOLGVBQVM7QUNBYjtBRENJO0VBQ0UsWUFBTztBQ0NiO0FEQ0k7RUFDRSxhQUFTO0VBQ1QsbUJBQWdCO0VBQ2hCLG1CQUFhO0FDQ25CO0FEQU07RUFDRSxXQUFPO0VBQ1AsWUFBUTtFQUNSLHlCQUFRO0VBQ1IsOEJBQWU7QUNFdkI7QURBTTtFQUNFLHVCQUFhO0VBQ2Isa0JBQVk7RUFDWixtQkFBYTtFQUNiLGVBQVc7RUFDWCxpQkFBYTtFQUNiLGNBQU87RUFDUCxpQkFBYztBQ0V0QjtBRENJO0VBQ0UsYUFBUztFQUNULHNCQUFnQjtBQ0N0QjtBREFNO0VBQ0UsYUFBUztFQUNULG1CQUFnQjtFQUNoQiw4QkFBaUI7RUFDakIsbUJBQWU7QUNFdkI7QUREUTtFQUNFLFdBQU87RUFDUCxZQUFPO0VBQ1AsbUJBQVk7RUFDWixrQkFBZTtFQUNmLFlBQVE7RUFDUixhQUFTO0FDR25CO0FERFE7RUFDRSxZQUFNO0FDR2hCO0FERUU7RUFDRSxhQUFTO0VBQ1QseUJBQWlCO0VBQ2pCLFdBQU07QUNBVjtBQUNBLDRFQUE0RSIsImZpbGUiOiJzcmMvYXBwL2J1aWxkLWFjY291bnQvYnVpbGQtYWNjb3VudC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5idWlsZC1hY2NvdW50IHtcclxuICBiYWNrZ3JvdW5kOiAjRTRFNEU0O1xyXG4gICYtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW46MjBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogNDRweCA4NHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6OTI4cHg7XHJcbiAgfVxyXG4gICYtaGVhZCB7XHJcbiAgICAmLXAge1xyXG4gICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjNUE2Mzc5O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMTUxNTE1O1xyXG4gIH1cclxuICAmLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1QTYzNzk7XHJcbiAgfVxyXG4gICZfX2Zvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAmLXdpZHRoIHtcclxuICAgICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG4gICAgJl9fcm93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgJi1yYWRpbyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Nzk3OTc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgICYtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBjb2xvcjogIzVBNjM3OTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY29sIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgJl9fcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgJi1zZWxlY3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6NDhweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGNUY2RkE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOjMxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmX19idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxufSIsIi5idWlsZC1hY2NvdW50IHtcbiAgYmFja2dyb3VuZDogI2U0ZTRlNDtcbn1cbi5idWlsZC1hY2NvdW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgcGFkZGluZzogNDRweCA4NHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDkyOHB4O1xufVxuLmJ1aWxkLWFjY291bnQtaGVhZC1wIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzVhNjM3OTtcbn1cbi5idWlsZC1hY2NvdW50LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxNTE1MTU7XG59XG4uYnVpbGQtYWNjb3VudC1zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1YTYzNzk7XG59XG4uYnVpbGQtYWNjb3VudF9fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuLmJ1aWxkLWFjY291bnRfX2Zvcm0td2lkdGgge1xuICB3aWR0aDogMzEwcHg7XG59XG4uYnVpbGQtYWNjb3VudF9fZm9ybV9fcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idWlsZC1hY2NvdW50X19mb3JtX19yb3ctcmFkaW8ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTc5Nzk3O1xuICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uYnVpbGQtYWNjb3VudF9fZm9ybV9fcm93LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICM1YTYzNzk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmJ1aWxkLWFjY291bnRfX2Zvcm1fX2NvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYnVpbGQtYWNjb3VudF9fZm9ybV9fY29sX19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uYnVpbGQtYWNjb3VudF9fZm9ybV9fY29sX19yb3ctc2VsZWN0IHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjZmYTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYnVpbGQtYWNjb3VudF9fZm9ybV9fY29sX19yb3ctaW5wdXQge1xuICB3aWR0aDogMzEwcHg7XG59XG4uYnVpbGQtYWNjb3VudF9fYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2J1aWxkLWFjY291bnQvYnVpbGQtYWNjb3VudC5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/build-account/build-account.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/build-account/build-account.component.ts ***!
  \**********************************************************/
/*! exports provided: BuildAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildAccountComponent", function() { return BuildAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BuildAccountComponent = /** @class */ (function () {
    function BuildAccountComponent() {
        this.name = 'Company Name';
        this.address = 'Address Line';
        this.state = 'City, State';
        this.phone = 'Phone Number';
        this.title = 'Your title';
        this.code = 'Zip Code';
        this.alt = 'Alt Phone Number';
        this.country = 'Country';
    }
    BuildAccountComponent.prototype.ngOnInit = function () {
    };
    BuildAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-build-account',
            template: __webpack_require__(/*! ./build-account.component.html */ "./src/app/build-account/build-account.component.html"),
            styles: [__webpack_require__(/*! ./build-account.component.styl */ "./src/app/build-account/build-account.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BuildAccountComponent);
    return BuildAccountComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-wrapper\">\r\n  <div class=\"footer\">\r\n    <img src=\"../../assets/img/Footer.png\" alt=\"\">\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.styl":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.styl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  width: 1440px;\n  padding: 30px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 1440px) {\n  .footer {\n    width: 100%;\n  }\n}\n.footer-wrapper {\n  display: flex;\n  width: 100%;\n  background: #2c2e39;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=src/app/footer/footer.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQU87RUFDUCxlQUFTO0VBQ1QsYUFBUztFQUNULHVCQUFpQjtFQUNqQixtQkFBYTtBQ0NmO0FEQXNDO0VBQUE7SUFDbEMsV0FBTztFQ0dUO0FBQ0Y7QURIRTtFQUNFLGFBQVE7RUFDUixXQUFNO0VBQ04sbUJBQVk7RUFDWix1QkFBaUI7RUFDakIsbUJBQWE7QUNLakI7QUFDQSw4REFBOEQiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlclxyXG4gIHdpZHRoOiAxNDQwcHhcclxuICBwYWRkaW5nOiAzMHB4IDA7IFxyXG4gIGRpc3BsYXk6IGZsZXhcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICYtd3JhcHBlclxyXG4gICAgZGlzcGxheSBmbGV4XHJcbiAgICB3aWR0aCAxMDAlXHJcbiAgICBiYWNrZ3JvdW5kOiAjMkMyRTM5XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIiwiLmZvb3RlciB7XG4gIHdpZHRoOiAxNDQwcHg7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mb290ZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMmMyZTM5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.styl */ "./src/app/footer/footer.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-wrapper\">\r\n  <div class=\"header\">\r\n    <div class=\"header-logo\">\r\n      <img src=\"../../assets/img/Logo.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"header-user\">\r\n      <img src=\"../../assets/img/Ellipse.png\" alt=\"\">\r\n      <span class=\"header-user__name\">My Account</span>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.styl":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.styl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  width: 1440px;\n  padding: 18px 168px 18px 154px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media screen and (max-width: 1440px) {\n  .header {\n    width: 100%;\n  }\n}\n.header-wrapper {\n  display: flex;\n  width: 100%;\n  background: #2c2e39;\n  justify-content: center;\n  align-items: center;\n}\n.header-logo,\n.header-user {\n  display: flex;\n  align-items: center;\n}\n.header-logo img,\n.header-user img {\n  margin-right: 12px;\n}\n.header-logo__name,\n.header-user__name {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 32px;\n  color: #fff;\n}\n/*# sourceMappingURL=src/app/header/header.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQU87RUFDUCw4QkFBUztFQUNULGFBQVM7RUFDVCw4QkFBaUI7RUFDakIsbUJBQWE7QUNDZjtBREFzQztFQUFBO0lBQ2xDLFdBQU87RUNHVDtBQUNGO0FESEU7RUFDRSxhQUFRO0VBQ1IsV0FBTTtFQUNOLG1CQUFZO0VBQ1osdUJBQWlCO0VBQ2pCLG1CQUFhO0FDS2pCO0FESkU7O0VBRUUsYUFBUTtFQUNSLG1CQUFhO0FDTWpCO0FETEk7O0VBQ0Usa0JBQWM7QUNRcEI7QURQSTs7RUFDRSx1QkFBYTtFQUNiLGtCQUFZO0VBQ1osZ0JBQWE7RUFDYixlQUFXO0VBQ1gsaUJBQWE7RUFDYixXQUFPO0FDVWI7QUFDQSw4REFBOEQiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclxyXG4gIHdpZHRoOiAxNDQwcHhcclxuICBwYWRkaW5nOiAxOHB4IDE2OHB4IDE4cHggMTU0cHhcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweClcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgJi13cmFwcGVyXHJcbiAgICBkaXNwbGF5IGZsZXhcclxuICAgIHdpZHRoIDEwMCVcclxuICAgIGJhY2tncm91bmQ6ICMyQzJFMzlcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAmLWxvZ29cclxuICAmLXVzZXJcclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgaW1nIFxyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHhcclxuICAgICZfX25hbWVcclxuICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXRcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsXHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxuICAgICAgZm9udC1zaXplOiAxMnB4XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIFxyXG4gICIsIi5oZWFkZXIge1xuICB3aWR0aDogMTQ0MHB4O1xuICBwYWRkaW5nOiAxOHB4IDE2OHB4IDE4cHggMTU0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmhlYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMyYzJlMzk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlci1sb2dvLFxuLmhlYWRlci11c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXItbG9nbyBpbWcsXG4uaGVhZGVyLXVzZXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmhlYWRlci1sb2dvX19uYW1lLFxuLmhlYWRlci11c2VyX19uYW1lIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6ICNmZmY7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.styl */ "./src/app/header/header.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/input/input.component.html":
/*!********************************************!*\
  !*** ./src/app/input/input.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-control\">\r\n  <input type=\"text\" class=\"form__field\" required>\r\n  <span class=\"form__field-placeholder\">{{label}}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/input/input.component.styl":
/*!********************************************!*\
  !*** ./src/app/input/input.component.styl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  min-width: 274px;\n  position: relative;\n  margin-bottom: 36px;\n}\n.form__field {\n  font-size: 14px;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 14px 20px;\n  height: 48px;\n  background-color: #f4f6f6;\n  color: #555556;\n  border: none;\n  font-weight: 500;\n  font-family: Montserrat;\n  outline: none;\n}\n.form__field:focus {\n  background-color: #eeefef;\n}\n.form__field-placeholder {\n  color: #555556;\n  transition: all 0.2s ease-in-out;\n  position: absolute;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: Montserrat;\n  top: 15px;\n  left: 19px;\n  pointer-events: none;\n}\n.form__field:focus ~ .form__field-placeholder,\n.form__field--active ~ .form__field-placeholder,\n.form__field:not(:focus):valid ~ .form__field-placeholder {\n  top: -24px;\n  left: 0;\n  font-size: 13px;\n  color: #767575;\n}\n/*# sourceMappingURL=src/app/input/input.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvc3JjL2FwcC9pbnB1dC9pbnB1dC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvaW5wdXQvaW5wdXQuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBVztFQUNYLGtCQUFVO0VBQ1YsbUJBQWU7QUNBbkI7QURDRTtFQUNFLGVBQVc7RUFDWCxzQkFBWTtFQUNaLFdBQU87RUFDUCxrQkFBUztFQUNULFlBQVE7RUFDUix5QkFBa0I7RUFDbEIsY0FBTztFQUNQLFlBQVE7RUFDUixnQkFBYTtFQUNiLHVCQUFhO0VBQ2IsYUFBUztBQ0NiO0FEQUk7RUFDRSx5QkFBa0I7QUNFeEI7QURESTtFQUNFLGNBQU87RUFDUCxnQ0FBWTtFQUNaLGtCQUFVO0VBQ1YsZUFBVztFQUNYLGdCQUFhO0VBQ2IsdUJBQWE7RUFDYixTQUFLO0VBQ0wsVUFBTTtFQUNOLG9CQUFnQjtBQ0d0QjtBRERBOzs7RUFDSSxVQUFLO0VBQ0wsT0FBTTtFQUNOLGVBQVc7RUFDWCxjQUFPO0FDS1g7QUFDQSw0REFBNEQiLCJmaWxlIjoic3JjL2FwcC9pbnB1dC9pbnB1dC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtXHJcbiAgJi1jb250cm9sXHJcbiAgICBtaW4td2lkdGg6IDI3NHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxuICAmX19maWVsZFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcclxuICAgIGNvbG9yOiAjNTU1NTU2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0XHJcbiAgICBvdXRsaW5lOiBub25lXHJcbiAgICAmOmZvY3VzXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVGRUZcclxuICAgICYtcGxhY2Vob2xkZXIgIFxyXG4gICAgICBjb2xvcjogIzU1NTU1NjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdFxyXG4gICAgICB0b3A6IDE1cHg7XHJcbiAgICAgIGxlZnQ6IDE5cHg7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuLmZvcm1fX2ZpZWxkOmZvY3VzIH4gLmZvcm1fX2ZpZWxkLXBsYWNlaG9sZGVyLCAuZm9ybV9fZmllbGQtLWFjdGl2ZSB+IC5mb3JtX19maWVsZC1wbGFjZWhvbGRlciwgLmZvcm1fX2ZpZWxkOm5vdCg6Zm9jdXMpOnZhbGlkIH4gLmZvcm1fX2ZpZWxkLXBsYWNlaG9sZGVye1xyXG4gICAgdG9wOiAtMjRweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzc2NzU3NTtcclxufSIsIi5mb3JtLWNvbnRyb2wge1xuICBtaW4td2lkdGg6IDI3NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4uZm9ybV9fZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmNjtcbiAgY29sb3I6ICM1NTU1NTY7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybV9fZmllbGQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZmVmO1xufVxuLmZvcm1fX2ZpZWxkLXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM1NTU1NTY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTlweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uZm9ybV9fZmllbGQ6Zm9jdXMgfiAuZm9ybV9fZmllbGQtcGxhY2Vob2xkZXIsXG4uZm9ybV9fZmllbGQtLWFjdGl2ZSB+IC5mb3JtX19maWVsZC1wbGFjZWhvbGRlcixcbi5mb3JtX19maWVsZDpub3QoOmZvY3VzKTp2YWxpZCB+IC5mb3JtX19maWVsZC1wbGFjZWhvbGRlciB7XG4gIHRvcDogLTI0cHg7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM3Njc1NzU7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5jc3MubWFwICovIl19 */"

/***/ }),

/***/ "./src/app/input/input.component.ts":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "label", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.styl */ "./src/app/input/input.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"login\">\r\n  <aside class=\"login-aside\">\r\n    <div class=\"login-aside__logo\">\r\n      <img src=\"../../assets/img/Logo.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"login-aside__text\">\r\n      Sing up to access this investment opportunity\r\n    </div>\r\n  </aside>\r\n  <section class=\"login-main\">\r\n    <div class=\"login-main__header\">\r\n      <div class=\"login-main__header-logo\">\r\n          <img src=\"../../assets/img/MobileLogo.png\" alt=\"\">\r\n      </div>\r\n      <span>Already hava an account?</span>\r\n      <button>Sign in</button>\r\n    </div>\r\n    <div class=\"login-form\">\r\n      <form action=\"\">\r\n        <h1>Sign Up</h1>\r\n        <div class=\"login-form__input form-control\">\r\n          <input type=\"text\" class=\"form__field\" required>\r\n          <span class=\"form__field-placeholder\">Full Name</span>\r\n        </div>\r\n        <div class=\"login-form__input form-control\">\r\n          <input type=\"text\" class=\"form__field\" required>\r\n          <span class=\"form__field-placeholder\">Email</span>\r\n        </div>\r\n        <div class=\"login-form__input form-control\">\r\n          <input type=\"text\" class=\"form__field\" required>\r\n          <span class=\"form__field-placeholder\">Password</span>\r\n        </div>\r\n        <div class=\"login-form__radio\">\r\n          <label class=\"radio option\">\r\n            <input class=\"radio__input\" name=\"radio-group\" type=\"radio\">\r\n            <span class=\"radio__box\"></span>\r\n            I accept Terms of Use and Privacy Policy\r\n          </label>\r\n        </div>\r\n        <a routerLink='/build-account'>\r\n          <button class=\"login-form__btn btn\">\r\n            <span class=\"btn-text\">Sign Up</span>\r\n            <span class=\"btn-arrow\">\r\n              <i class=\"btn-arrow__icon\"></i>\r\n            </span>\r\n          </button>\r\n        </a>\r\n      </form>\r\n    </div>\r\n  </section>\r\n</main>"

/***/ }),

/***/ "./src/app/login/login.component.styl":
/*!********************************************!*\
  !*** ./src/app/login/login.component.styl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  display: flex;\n}\n.login-aside {\n  padding: 0 10px;\n  width: 27%;\n  background: url('Aside.png') no-repeat;\n  background-size: cover;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.login-aside__text {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 32px;\n  text-align: center;\n  color: #fff;\n}\n.login-main {\n  width: 73%;\n}\n.login-main__header {\n  margin-top: 32px;\n  margin-right: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.login-main__header-logo {\n  display: none;\n}\n.login-main__header span {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #5a6379;\n  margin-right: 20px;\n}\n.login-main__header button {\n  border: 1px solid #b0b4be;\n  border-radius: 2px;\n  background: none;\n  cursor: pointer;\n  outline: none;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  padding: 16px 52.5px;\n  color: #2c2e39;\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  height: 89vh;\n}\n.login-form h1 {\n  margin: 0;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 40px;\n  color: #151515;\n  margin-bottom: 73px;\n}\n.login-form__input {\n  margin-bottom: 36px;\n}\n.login-form__input:nth-child(4) {\n  margin-bottom: 26px;\n}\n.login-form__radio {\n  position: relative;\n  margin-bottom: 40px;\n}\n@media screen and (max-width: 768px) {\n  .login-aside {\n    display: none;\n  }\n  .login-main {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 480px) {\n  .login-main {\n    padding: 20px;\n  }\n  .login-main__header {\n    margin: 0;\n    justify-content: space-between;\n  }\n  .login-main__header-logo {\n    display: block;\n  }\n  .login-main__header span {\n    display: none;\n  }\n  .login-form {\n    width: 100%;\n    height: 88vh;\n  }\n  .login-form form {\n    width: 100%;\n  }\n  .login-form h1 {\n    margin-bottom: 32px;\n  }\n  .login-form__input {\n    width: 100%;\n  }\n  .login-form__btn {\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=src/app/login/login.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFRO0FDQ1Y7QURBRTtFQUNFLGVBQVM7RUFDVCxVQUFPO0VBQ1Asc0NBQTRDO0VBQzVDLHNCQUFpQjtFQUNqQixhQUFPO0VBQ1AsYUFBUztFQUNULHVCQUFpQjtFQUNqQixtQkFBYTtFQUNiLHNCQUFnQjtBQ0VwQjtBRERJO0VBQ0UsdUJBQWE7RUFDYixrQkFBWTtFQUNaLGdCQUFhO0VBQ2IsZUFBVztFQUNYLGlCQUFhO0VBQ2Isa0JBQVk7RUFDWixXQUFPO0FDR2I7QURGRTtFQUNFLFVBQU87QUNJWDtBREhJO0VBQ0UsZ0JBQVk7RUFDWixrQkFBYztFQUNkLGFBQVM7RUFDVCxtQkFBYTtFQUNiLHlCQUFpQjtBQ0t2QjtBREpNO0VBQ0UsYUFBUztBQ01qQjtBRExNO0VBQ0UsdUJBQWE7RUFDYixrQkFBWTtFQUNaLG1CQUFhO0VBQ2IsZUFBVztFQUNYLGlCQUFhO0VBQ2Isa0JBQVk7RUFDWixjQUFPO0VBQ1Asa0JBQWM7QUNPdEI7QUROTTtFQUNFLHlCQUFRO0VBQ1Isa0JBQWU7RUFDZixnQkFBWTtFQUNaLGVBQU87RUFDUCxhQUFRO0VBQ1IsdUJBQWE7RUFDYixrQkFBWTtFQUNaLGdCQUFhO0VBQ2IsZUFBVztFQUNYLG9CQUFTO0VBQ1QsY0FBTztBQ1FmO0FEUEU7RUFDRSxhQUFTO0VBQ1Qsc0JBQWdCO0VBQ2hCLHVCQUFpQjtFQUNqQixtQkFBYTtFQUNiLFlBQVE7RUFDUixZQUFRO0FDU1o7QURSSTtFQUNFLFNBQVE7RUFDUix1QkFBYTtFQUNiLGtCQUFZO0VBQ1osaUJBQWE7RUFDYixlQUFXO0VBQ1gsaUJBQWE7RUFDYixjQUFPO0VBQ1AsbUJBQWU7QUNVckI7QURUSTtFQUNFLG1CQUFlO0FDV3JCO0FEVk07RUFDRSxtQkFBZTtBQ1l2QjtBRFhJO0VBQ0Usa0JBQVM7RUFDVCxtQkFBZTtBQ2FyQjtBRFZtQztFQUUvQjtJQUNFLGFBQVM7RUNXYjtFRFZFO0lBQ0UsV0FBTztFQ1lYO0FBQ0Y7QURYbUM7RUFFL0I7SUFDRSxhQUFTO0VDWWI7RURYSTtJQUNFLFNBQVE7SUFDUiw4QkFBZ0I7RUNhdEI7RURaTTtJQUNFLGNBQVM7RUNjakI7RURiTTtJQUNFLGFBQVM7RUNlakI7RURkRTtJQUNFLFdBQU87SUFDUCxZQUFPO0VDZ0JYO0VEZkk7SUFDRSxXQUFPO0VDaUJiO0VEaEJJO0lBQ0UsbUJBQWU7RUNrQnJCO0VEakJJO0lBQ0UsV0FBTztFQ21CYjtFRGxCSTtJQUNFLGNBQVE7RUNvQmQ7QUFDRjtBQUNBLDREQUE0RCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luXHJcbiAgZGlzcGxheSBmbGV4XHJcbiAgJi1hc2lkZVxyXG4gICAgcGFkZGluZzogMCAxMHB4XHJcbiAgICB3aWR0aDogMjclXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvQXNpZGUucG5nJykgbm8tcmVwZWF0XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0IDEwMHZoXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgJl9fdGV4dFxyXG4gICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICYtbWFpblxyXG4gICAgd2lkdGg6IDczJSBcclxuICAgICZfX2hlYWRlclxyXG4gICAgICBtYXJnaW4tdG9wOiAzMnB4XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzJweFxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAmLWxvZ29cclxuICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgIHNwYW4gXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzVBNjM3OTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcclxuICAgICAgYnV0dG9uICAgXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0IwQjRCRTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZVxyXG4gICAgICAgIGN1cnNvciBwb2ludGVyXHJcbiAgICAgICAgb3V0bGluZSBub25lXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggNTIuNXB4XHJcbiAgICAgICAgY29sb3I6ICMyQzJFMzk7XHJcbiAgJi1mb3JtXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogODl2aDtcclxuICAgIGgxIFxyXG4gICAgICBtYXJnaW46IDBcclxuICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGNvbG9yOiAjMTUxNTE1O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA3M3B4XHJcbiAgICAmX19pbnB1dFxyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzNnB4XHJcbiAgICAgICY6bnRoLWNoaWxkKDQpXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjZweFxyXG4gICAgJl9fcmFkaW9cclxuICAgICAgcG9zaXRpb24gcmVsYXRpdmVcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweFxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KVxyXG4gIC5sb2dpblxyXG4gICAgJi1hc2lkZVxyXG4gICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAmLW1haW5cclxuICAgICAgd2lkdGg6IDEwMCUgIFxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpXHJcbiAgLmxvZ2luXHJcbiAgICAmLW1haW5cclxuICAgICAgcGFkZGluZzogMjBweFxyXG4gICAgICAmX19oZWFkZXJcclxuICAgICAgICBtYXJnaW46IDBcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgc3BhY2UtYmV0d2VlblxyXG4gICAgICAgICYtbG9nb1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgICBzcGFuIFxyXG4gICAgICAgICAgZGlzcGxheTogbm9uZSBcclxuICAgICYtZm9ybVxyXG4gICAgICB3aWR0aDogMTAwJVxyXG4gICAgICBoZWlnaHQgODh2aFxyXG4gICAgICBmb3JtXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgaDEgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweFxyXG4gICAgICAmX19pbnB1dFxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICZfX2J0blxyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvICBcclxuXHJcbiIsIi5sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubG9naW4tYXNpZGUge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdpZHRoOiAyNyU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvQXNpZGUucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubG9naW4tYXNpZGVfX3RleHQge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmxvZ2luLW1haW4ge1xuICB3aWR0aDogNzMlO1xufVxuLmxvZ2luLW1haW5fX2hlYWRlciB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5sb2dpbi1tYWluX19oZWFkZXItbG9nbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9naW4tbWFpbl9faGVhZGVyIHNwYW4ge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNWE2Mzc5O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubG9naW4tbWFpbl9faGVhZGVyIGJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiMGI0YmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHggNTIuNXB4O1xuICBjb2xvcjogIzJjMmUzOTtcbn1cbi5sb2dpbi1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA4OXZoO1xufVxuLmxvZ2luLWZvcm0gaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzE1MTUxNTtcbiAgbWFyZ2luLWJvdHRvbTogNzNweDtcbn1cbi5sb2dpbi1mb3JtX19pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4ubG9naW4tZm9ybV9faW5wdXQ6bnRoLWNoaWxkKDQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcbn1cbi5sb2dpbi1mb3JtX19yYWRpbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dpbi1hc2lkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubG9naW4tbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5sb2dpbi1tYWluIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5sb2dpbi1tYWluX19oZWFkZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmxvZ2luLW1haW5fX2hlYWRlci1sb2dvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubG9naW4tbWFpbl9faGVhZGVyIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmxvZ2luLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODh2aDtcbiAgfVxuICAubG9naW4tZm9ybSBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubG9naW4tZm9ybSBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgfVxuICAubG9naW4tZm9ybV9faW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5sb2dpbi1mb3JtX19idG4ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.name = 'Full Name';
        this.email = 'Email';
        this.password = 'Password';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.styl */ "./src/app/login/login.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"payment__wrapper\">\n  <form class=\"payment\">\n    <h1 class=\"payment__headline\">Payment Details</h1>\n    <!-- <div class=\"method\">\n      <div class=\"method__wrapper\">\n        <label for='qq' class=\"radio radio-border option method__item\">\n          <input id='qq' class=\"radio__input\" name=\"radio-group\" type=\"radio\">\n          <span class=\"radio__box\"></span>\n          PayPal\n        </label>\n      </div>\n      <div class=\"method__wrapper\">\n        <label class=\"radio option method__item\">\n          <input class=\"radio__input\" name=\"radio-group\" type=\"radio\" checked>\n          <span class=\"radio__box\"></span>\n          Credit Card\n        </label>\n      </div>\n      <div class=\"method__wrapper\">\n        <label class=\"radio option method__item\">\n          <input class=\"radio__input\" name=\"radio-group\" type=\"radio\" checked>\n          <span class=\"radio__box\"></span>\n          ACH\n        </label>\n      </div>\n    </div> -->\n    <div class=\"switch-field\">\n        <input class='radio option' type=\"radio\" id=\"radio-one\" name=\"switch-two\" value=\"yes\" checked/>\n        <label for=\"radio-one\">PayPal</label>\n        <input type=\"radio\" id=\"radio-two\" name=\"switch-two\" value=\"maybe\" />\n        <label for=\"radio-two\">Credit Card</label>\n        <input type=\"radio\" id=\"radio-three\" name=\"switch-two\" value=\"no\" />\n        <label for=\"radio-three\">ACH</label>\n    </div>\n    <div class=\"form-control form-control-payment form-control-width\">\n        <input type=\"text\" class=\"form__field\" required>\n        <span class=\"form__field-placeholder\">Card Number</span>\n    </div>\n    <div class=\"payment__card\">\n      <div class=\"form-control form-control-holder form-control-payment\">\n          <input type=\"text\" class=\"form__field\" required>\n          <span class=\"form__field-placeholder\">Card Holder Name</span>\n      </div>\n      <div class=\"form-control form-control-date form-control-payment\">\n          <input type=\"text\" class=\"form__field\" required>\n          <span class=\"form__field-placeholder\">Exp. Date</span>\n      </div>\n      <div class=\"form-control form-control-cvv form-control-payment\">\n          <input type=\"text\" class=\"form__field\" required>\n          <span class=\"form__field-placeholder\">CVV</span>\n      </div>\n  </div>\n  <div class=\"item\">\n      <p class=\"item__headline\">BILLING ADRESS</p>\n      <label class=\"radio option\">\n          <input class=\"radio__input\" name=\"radio-group\" type=\"radio\">\n          <span class=\"radio__box\"></span>\n          Same as shipping address\n      </label>\n      <label class=\"radio option\">\n          <input class=\"radio__input\" name=\"radio-group\" type=\"radio\">\n          <span class=\"radio__box\"></span>\n          Use a different billing address\n      </label>\n    </div>\n    <div class=\"payment__button-container\">\n        <button class=\"payment__button button-do-it-later\"> Do It Later</button>\n        <button class=\"btn payment__button-save\">\n            <span class=\"btn-text\">Save & Continue</span>\n            <span class=\"btn-arrow\">\n              <i class=\"btn-arrow__icon\"></i>\n            </span>\n        </button>\n      </div>\n  </form>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/payment/payment.component.styl":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.styl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n.payment {\n  background: #fff;\n  width: 100%;\n  max-width: 928px;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  margin: 0 auto;\n  padding: 0 84px;\n  padding-bottom: 80px;\n  padding-top: 32px;\n}\n.payment__card {\n  display: flex;\n  justify-content: space-between;\n}\n.payment__wrapper {\n  width: 100%;\n  background: #e4e4e4;\n  padding: 40px 0px;\n  margin: 0 auto;\n}\n.payment__headline {\n  width: 90%;\n  margin: 0 auto;\n  padding: 0;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 48px;\n  text-align: center;\n  color: #151515;\n  margin-bottom: 40px;\n}\n.payment .method {\n  display: flex;\n}\n.payment .item {\n  flex: 1;\n}\n.payment .item-label {\n  margin-right: 60px;\n}\n.payment .item__headline {\n  padding: 0;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: #151515;\n  margin-bottom: 24px;\n}\n.payment .item__wrapper {\n  display: flex;\n  width: 100%;\n}\n.payment__button-container {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n.payment__button-later {\n  width: 132px;\n  height: 56px;\n  border: 1px solid #b0b4be;\n  box-sizing: border-box;\n  border-radius: 2px;\n}\n.payment__button-save {\n  max-width: 260px !important;\n}\n.form-control-payment {\n  margin-bottom: 36px;\n}\n.form-control-width {\n  width: 100% !important;\n}\n.form-control-holder {\n  width: 60% !important;\n}\n.form-control-date {\n  width: 15% !important;\n}\n.form-control-cvv {\n  width: 15% !important;\n}\n.switch-field {\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=src/app/payment/payment.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9zcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQVk7QUNDZDtBRENBO0VBQ0UsZ0JBQVk7RUFDWixXQUFNO0VBQ04sZ0JBQVc7RUFDWCx1QkFBYTtFQUNiLGtCQUFZO0VBQ1osbUJBQWE7RUFDYixjQUFRO0VBQ1IsZUFBUztFQUNULG9CQUFnQjtFQUNoQixpQkFBYTtBQ0NmO0FEQUU7RUFDRSxhQUFTO0VBQ1QsOEJBQWlCO0FDRXJCO0FEQUU7RUFDRSxXQUFPO0VBQ1AsbUJBQVk7RUFDWixpQkFBUztFQUNULGNBQVE7QUNFWjtBREFFO0VBQ0UsVUFBTztFQUNQLGNBQVE7RUFDUixVQUFTO0VBQ1QsaUJBQWE7RUFDYixlQUFXO0VBQ1gsaUJBQWE7RUFDYixrQkFBWTtFQUNaLGNBQU87RUFDUCxtQkFBZTtBQ0VuQjtBREFFO0VBQ0UsYUFBUztBQ0ViO0FEU0U7RUFFRSxPQUFNO0FDUlY7QURTSTtFQUNFLGtCQUFjO0FDUHBCO0FEU0k7RUFDRSxVQUFRO0VBQ1IsZ0JBQWE7RUFDYixlQUFXO0VBQ1gsaUJBQWE7RUFDYixtQkFBZ0I7RUFDaEIseUJBQWdCO0VBQ2hCLGNBQU87RUFDUCxtQkFBZTtBQ1ByQjtBRFNJO0VBQ0UsYUFBUztFQUNULFdBQU87QUNQYjtBRFdJO0VBQ0UsYUFBUztFQUNULDhCQUFpQjtFQUNqQixnQkFBWTtBQ1RsQjtBRFdJO0VBQ0UsWUFBTztFQUNQLFlBQVE7RUFDUix5QkFBUTtFQUNSLHNCQUFZO0VBQ1osa0JBQWU7QUNUckI7QURXSTtFQUNFLDJCQUFXO0FDVGpCO0FEYUE7RUFDRSxtQkFBZTtBQ1hqQjtBRGFBO0VBQ0Usc0JBQU87QUNYVDtBRGFBO0VBQ0UscUJBQU87QUNYVDtBRGFBO0VBQ0UscUJBQU87QUNYVDtBRGFBO0VBQ0UscUJBQU87QUNYVDtBRGFBO0VBQ0UsbUJBQWU7QUNYakI7QUFDQSxnRUFBZ0UiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnBheW1lbnR7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICB3aWR0aCAxMDAlO1xyXG4gIG1heC13aWR0aDogOTI4cHg7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCA4NHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAzMnB4O1xyXG4gICZfX2NhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICZfX3dyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNFNEU0RTQ7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICZfX2hlYWRsaW5le1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzE1MTUxNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG4gIC5tZXRob2R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgJl9faXRlbXtcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICZfX3dyYXBwZXJ7XHJcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNFMEU0RUI7XHJcbiAgICAgIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgLy8gd2lkdGg6IDMwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIC5pdGVte1xyXG4gICAgLy8gd2lkdGg6IDUwJTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICAmLWxhYmVse1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgICZfX2hlYWRsaW5le1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiAjMTUxNTE1O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgJl9fd3JhcHBlcntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgJl9fYnV0dG9ue1xyXG4gICAgJi1jb250YWluZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgICYtbGF0ZXJ7XHJcbiAgICAgIHdpZHRoOiAxMzJweDtcclxuICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQjBCNEJFO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIH1cclxuICAgICYtc2F2ZXtcclxuICAgICAgbWF4LXdpZHRoOiAyNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmZvcm0tY29udHJvbC1wYXltZW50e1xyXG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgfVxyXG4uZm9ybS1jb250cm9sLXdpZHRoe1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4uZm9ybS1jb250cm9sLWhvbGRlcntcclxuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4uZm9ybS1jb250cm9sLWRhdGV7XHJcbiAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuLmZvcm0tY29udHJvbC1jdnZ7XHJcbiAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuLnN3aXRjaC1maWVsZHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ucGF5bWVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDkyOHB4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA4NHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG4ucGF5bWVudF9fY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wYXltZW50X193cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gIHBhZGRpbmc6IDQwcHggMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5wYXltZW50X19oZWFkbGluZSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzE1MTUxNTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5wYXltZW50IC5tZXRob2Qge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBheW1lbnQgLml0ZW0ge1xuICBmbGV4OiAxO1xufVxuLnBheW1lbnQgLml0ZW0tbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG4ucGF5bWVudCAuaXRlbV9faGVhZGxpbmUge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzE1MTUxNTtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5wYXltZW50IC5pdGVtX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGF5bWVudF9fYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wYXltZW50X19idXR0b24tbGF0ZXIge1xuICB3aWR0aDogMTMycHg7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IwYjRiZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLnBheW1lbnRfX2J1dHRvbi1zYXZlIHtcbiAgbWF4LXdpZHRoOiAyNjBweCAhaW1wb3J0YW50O1xufVxuLmZvcm0tY29udHJvbC1wYXltZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cbi5mb3JtLWNvbnRyb2wtd2lkdGgge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmZvcm0tY29udHJvbC1ob2xkZXIge1xuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1jb250cm9sLWRhdGUge1xuICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1jb250cm9sLWN2diB7XG4gIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcbn1cbi5zd2l0Y2gtZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.styl */ "./src/app/payment/payment.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/risk-assesment/risk-assesment.component.html":
/*!**************************************************************!*\
  !*** ./src/app/risk-assesment/risk-assesment.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"risk__wrapper\">\n  <form class=\"risk\">\n    <h1 class=\"risk__headline\">Risk Assesment & Investment Preferences</h1>\n    <div class=\"item__wrapper\">\n      <div class=\"item\">\n        <p class=\"item__headline\">INVESTMENT STRUCTURE</p>\n        <label class=\"check option\">\n          <input class=\"check__input\" type=\"checkbox\">\n          <span class=\"check__box\"></span>\n            Primary Offering\n        </label>\n        <label class=\"check option\">\n          <input class=\"check__input\" type=\"checkbox\">\n          <span class=\"check__box\"></span>\n           Secondary Trading\n        </label>\n      </div>\n      <div class=\"item\">\n          <p class=\"item__headline\">REGIONS</p>\n          <label class=\"check option\">\n            <input class=\"check__input\" type=\"checkbox\">\n            <span class=\"check__box\"></span>\n              Domestic\n          </label>\n          <label class=\"check option\">\n            <input class=\"check__input\" type=\"checkbox\">\n            <span class=\"check__box\"></span>\n             International\n          </label>\n        </div>\n    </div>\n    <div class=\"item__wrapper\">\n        <div class=\"item\">\n          <p class=\"item__headline\">INVESTMENT SIZE</p>\n          <label class=\"radio option\">\n              <input class=\"radio__input\" name=\"radio-group\" type=\"radio\">\n              <span class=\"radio__box\"></span>\n              Under $500k\n          </label>\n          <label class=\"radio option\">\n              <input class=\"radio__input\" name=\"radio-group\" type=\"radio\">\n              <span class=\"radio__box\"></span>\n              $500k - $1m\n          </label>\n          <label class=\"radio option\">\n              <input class=\"radio__input\" name=\"radio-group\" type=\"radio\">\n              <span class=\"radio__box\"></span>\n              $1m - $5m\n          </label>\n          <label class=\"radio option\">\n              <input class=\"radio__input\" name=\"radio-group\" type=\"radio\">\n              <span class=\"radio__box\"></span>\n              $5m - $10m\n          </label>\n          <label class=\"radio option\">\n              <input class=\"radio__input\" name=\"radio-group\" type=\"radio\">\n              <span class=\"radio__box\"></span>\n              $10m and more\n          </label>\n        </div>\n        <div class=\"item\">\n            <p class=\"item__headline\">ASSET TYPE</p>\n            <label class=\"check option\">\n              <input class=\"check__input\" type=\"checkbox\">\n              <span class=\"check__box\"></span>\n                Equity\n            </label>\n            <label class=\"check option\">\n              <input class=\"check__input\" type=\"checkbox\">\n              <span class=\"check__box\"></span>\n               Debt\n            </label>\n            <label class=\"check option\">\n                <input class=\"check__input\" type=\"checkbox\">\n                <span class=\"check__box\"></span>\n                 Funds\n            </label>\n            <label class=\"check option\">\n                <input class=\"check__input\" type=\"checkbox\">\n                <span class=\"check__box\"></span>\n                 Credit\n            </label>\n          </div>\n      </div>\n      <p class=\"item__headline\">SELECT SECTORS THAT INTEREST YOU</p>\n      <div class=\"item__wrapper\">\n          <div class=\"item\">\n            <label class=\"check option\">\n              <input class=\"check__input\" type=\"checkbox\">\n              <span class=\"check__box\"></span>\n                Real Estate\n            </label>\n            <label class=\"check option\">\n              <input class=\"check__input\" type=\"checkbox\">\n              <span class=\"check__box\"></span>\n               Healthcare\n            </label>\n            <label class=\"check option\">\n                <input class=\"check__input\" type=\"checkbox\">\n                <span class=\"check__box\"></span>\n                 Infrastructure\n            </label>\n            <label class=\"check option\">\n                <input class=\"check__input\" type=\"checkbox\">\n                <span class=\"check__box\"></span>\n                 Alternitives\n            </label>\n          </div>\n          <div class=\"item\">\n              <label class=\"check option\">\n                <input class=\"check__input\" type=\"checkbox\">\n                <span class=\"check__box\"></span>\n                  Technology\n              </label>\n              <label class=\"check option\">\n                <input class=\"check__input\" type=\"checkbox\">\n                <span class=\"check__box\"></span>\n                 Consumer Goods\n              </label>\n              <label class=\"check option\">\n                  <input class=\"check__input\" type=\"checkbox\">\n                  <span class=\"check__box\"></span>\n                    Industrial\n                </label>\n                <label class=\"check option\">\n                  <input class=\"check__input\" type=\"checkbox\">\n                  <span class=\"check__box\"></span>\n                  Financial\n                </label>\n            </div>\n            <div class=\"item\">\n                <label class=\"check option\">\n                  <input class=\"check__input\" type=\"checkbox\">\n                  <span class=\"check__box\"></span>\n                    Energy\n                </label>\n                <label class=\"check option\">\n                  <input class=\"check__input\" type=\"checkbox\">\n                  <span class=\"check__box\"></span>\n                  Agrixulture\n                </label>\n                <label class=\"check option\">\n                    <input class=\"check__input\" type=\"checkbox\">\n                    <span class=\"check__box\"></span>\n                    Impact\n                  </label>\n                  <label class=\"check option\">\n                    <input class=\"check__input\" type=\"checkbox\">\n                    <span class=\"check__box\"></span>\n                    Entertaiment\n                  </label>\n              </div>\n        </div>\n        <div class=\"item__wrapper\">\n            <div class=\"item\">\n              <p class=\"item__headline\">RISK TOLERANCE</p>\n              <label class=\"radio option\">\n                  <input class=\"radio__input\" name=\"radio-group-2\" type=\"radio\">\n                  <span class=\"radio__box\"></span>\n                  Conservative\n              </label>\n              <label class=\"radio option\">\n                  <input class=\"radio__input\" name=\"radio-group-2\" type=\"radio\">\n                  <span class=\"radio__box\"></span>\n                  Moderately Conservative\n              </label>\n              <label class=\"radio option\">\n                  <input class=\"radio__input\" name=\"radio-group-2\" type=\"radio\">\n                  <span class=\"radio__box\"></span>\n                  Moderate\n              </label>\n              <label class=\"radio option\">\n                  <input class=\"radio__input\" name=\"radio-group-2\" type=\"radio\">\n                  <span class=\"radio__box\"></span>\n                  Moderately Aggresive\n              </label>\n              <label class=\"radio option\">\n                  <input class=\"radio__input\" name=\"radio-group-2\" type=\"radio\">\n                  <span class=\"radio__box\"></span>\n                  Aggresive\n              </label>\n            </div>\n            <div class=\"item\">\n                <p class=\"item__headline\">INVESTMENT OBJECTIVES</p>\n                <label class=\"check option\">\n                  <input class=\"check__input\" type=\"checkbox\">\n                  <span class=\"check__box\"></span>\n                  Preservation of Capital\n                </label>\n                <label class=\"check option\">\n                  <input class=\"check__input\" type=\"checkbox\">\n                  <span class=\"check__box\"></span>\n                   Income\n                </label>\n                <label class=\"check option\">\n                    <input class=\"check__input\" type=\"checkbox\">\n                    <span class=\"check__box\"></span>\n                    Capital Apprecattion\n                </label>\n                <label class=\"check option\">\n                    <input class=\"check__input\" type=\"checkbox\">\n                    <span class=\"check__box\"></span>\n                    Speculation\n                </label>\n              </div>\n          </div>\n            <p class=\"item__headline\">INVESTING EXPERIENCE</p>\n            <div class=\"item\">\n              <div class=\"item__wrapper\">\n                  <label class=\"radio option item-label\">\n                      <input class=\"radio__input\" name=\"radio-group-3\" type=\"radio\">\n                      <span class=\"radio__box\"></span>\n                      1\n                  </label>\n                  <label class=\"radio option item-label\">\n                      <input class=\"radio__input\" name=\"radio-group-3\" type=\"radio\">\n                      <span class=\"radio__box\"></span>\n                      2\n                  </label>\n                  <label class=\"radio option item-label\">\n                      <input class=\"radio__input\" name=\"radio-group-3\" type=\"radio\">\n                      <span class=\"radio__box\"></span>\n                      3\n                  </label>\n                  <label class=\"radio option item-label\">\n                      <input class=\"radio__input\" name=\"radio-group-3\" type=\"radio\">\n                      <span class=\"radio__box\"></span>\n                      4\n                  </label>\n                  <label class=\"radio option item-label\">\n                      <input class=\"radio__input\" name=\"radio-group-3\" type=\"radio\">\n                      <span class=\"radio__box\"></span>\n                      5\n                  </label>\n              </div>\n            </div>\n    <div class=\"risk__button-container\">\n      <button class=\"risk__button button-do-it-later\"> Do It Later</button>\n      <!-- <div class=\"risk__button risk__button-save\"></div> -->\n      <a class=\"risk__button-link\" routerLink='/terms-of-use'>\n        <button class=\"btn risk__button-save\">\n            <span class=\"btn-text\">Save & Continue</span>\n            <span class=\"btn-arrow\">\n              <i class=\"btn-arrow__icon\"></i>\n            </span>\n        </button>\n    </a>\n    </div>\n  </form>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/risk-assesment/risk-assesment.component.styl":
/*!**************************************************************!*\
  !*** ./src/app/risk-assesment/risk-assesment.component.styl ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n.risk {\n  background: #fff;\n  width: 100%;\n  max-width: 928px;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  margin: 0 auto;\n  padding: 0 84px;\n  padding-bottom: 80px;\n  padding-top: 32px;\n}\n.risk__wrapper {\n  width: 100%;\n  background: #e4e4e4;\n  padding: 40px 0px;\n  margin: 0 auto;\n}\n.risk__headline {\n  width: 90%;\n  margin: 0 auto;\n  padding: 0;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 48px;\n  text-align: center;\n  color: #151515;\n  margin-bottom: 60px;\n}\n.risk__button-link {\n  width: 260px !important;\n}\n.risk__button-container {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n.risk__button-later {\n  width: 132px;\n  height: 56px;\n  border: 1px solid #b0b4be;\n  box-sizing: border-box;\n  border-radius: 2px;\n}\n.risk__button-save {\n  max-width: 260px !important;\n}\n.risk .item {\n  flex: 1;\n}\n.risk .item-label {\n  margin-right: 60px;\n}\n.risk .item__headline {\n  padding: 0;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: #151515;\n  margin-bottom: 24px;\n}\n.risk .item__wrapper {\n  display: flex;\n  width: 100%;\n}\n/*# sourceMappingURL=src/app/risk-assesment/risk-assesment.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlzay1hc3Nlc21lbnQvc3JjL2FwcC9yaXNrLWFzc2VzbWVudC9yaXNrLWFzc2VzbWVudC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcmlzay1hc3Nlc21lbnQvcmlzay1hc3Nlc21lbnQuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxzQkFBWTtBQ0RkO0FER0E7RUFDRSxnQkFBWTtFQUNaLFdBQU07RUFDTixnQkFBVztFQUNYLHVCQUFhO0VBQ2Isa0JBQVk7RUFDWixtQkFBYTtFQUNiLGNBQVE7RUFDUixlQUFTO0VBQ1Qsb0JBQWdCO0VBQ2hCLGlCQUFhO0FDRGY7QURFRTtFQUNFLFdBQU87RUFDUCxtQkFBWTtFQUNaLGlCQUFTO0VBQ1QsY0FBUTtBQ0FaO0FERUU7RUFDRSxVQUFPO0VBQ1AsY0FBUTtFQUNSLFVBQVM7RUFDVCxpQkFBYTtFQUNiLGVBQVc7RUFDWCxpQkFBYTtFQUNiLGtCQUFZO0VBQ1osY0FBTztFQUNQLG1CQUFlO0FDQW5CO0FER007RUFDQSx1QkFBTztBQ0RiO0FER0k7RUFDRSxhQUFTO0VBQ1QsOEJBQWlCO0VBQ2pCLGdCQUFZO0FDRGxCO0FER0k7RUFDRSxZQUFPO0VBQ1AsWUFBUTtFQUNSLHlCQUFRO0VBQ1Isc0JBQVk7RUFDWixrQkFBZTtBQ0RyQjtBREdJO0VBQ0UsMkJBQVc7QUNEakI7QURJRTtFQUVFLE9BQU07QUNIVjtBRElJO0VBQ0Usa0JBQWM7QUNGcEI7QURJSTtFQUNFLFVBQVE7RUFDUixnQkFBYTtFQUNiLGVBQVc7RUFDWCxpQkFBYTtFQUNiLG1CQUFnQjtFQUNoQix5QkFBZ0I7RUFDaEIsY0FBTztFQUNQLG1CQUFlO0FDRnJCO0FESUk7RUFDRSxhQUFTO0VBQ1QsV0FBTztBQ0ZiO0FBQ0EsOEVBQThFIiwiZmlsZSI6InNyYy9hcHAvcmlzay1hc3Nlc21lbnQvcmlzay1hc3Nlc21lbnQuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIC8vIG1hcmdpbjogMDtcclxuICAvLyBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnJpc2t7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICB3aWR0aCAxMDAlO1xyXG4gIG1heC13aWR0aDogOTI4cHg7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCA4NHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAzMnB4O1xyXG4gICZfX3dyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNFNEU0RTQ7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICZfX2hlYWRsaW5le1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzE1MTUxNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgfVxyXG4gICAgJl9fYnV0dG9ue1xyXG4gICAgICAmLWxpbmt7XHJcbiAgICAgIHdpZHRoOiAyNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAmLWNvbnRhaW5lcntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgJi1sYXRlcntcclxuICAgICAgd2lkdGg6IDEzMnB4O1xyXG4gICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNCMEI0QkU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgfVxyXG4gICAgJi1zYXZle1xyXG4gICAgICBtYXgtd2lkdGg6IDI2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAuaXRlbXtcclxuICAgIC8vIHdpZHRoOiA1MCU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgJi1sYWJlbHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgICB9XHJcbiAgICAmX19oZWFkbGluZXtcclxuICAgICAgcGFkZGluZzowO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBjb2xvcjogIzE1MTUxNTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICAgICZfX3dyYXBwZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG59IiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ucmlzayB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDkyOHB4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA4NHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG4ucmlza19fd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICBwYWRkaW5nOiA0MHB4IDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucmlza19faGVhZGxpbmUge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxNTE1MTU7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4ucmlza19fYnV0dG9uLWxpbmsge1xuICB3aWR0aDogMjYwcHggIWltcG9ydGFudDtcbn1cbi5yaXNrX19idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnJpc2tfX2J1dHRvbi1sYXRlciB7XG4gIHdpZHRoOiAxMzJweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjBiNGJlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4ucmlza19fYnV0dG9uLXNhdmUge1xuICBtYXgtd2lkdGg6IDI2MHB4ICFpbXBvcnRhbnQ7XG59XG4ucmlzayAuaXRlbSB7XG4gIGZsZXg6IDE7XG59XG4ucmlzayAuaXRlbS1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbn1cbi5yaXNrIC5pdGVtX19oZWFkbGluZSB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMTUxNTE1O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnJpc2sgLml0ZW1fX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvcmlzay1hc3Nlc21lbnQvcmlzay1hc3Nlc21lbnQuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/risk-assesment/risk-assesment.component.ts":
/*!************************************************************!*\
  !*** ./src/app/risk-assesment/risk-assesment.component.ts ***!
  \************************************************************/
/*! exports provided: RiskAssesmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskAssesmentComponent", function() { return RiskAssesmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RiskAssesmentComponent = /** @class */ (function () {
    function RiskAssesmentComponent() {
    }
    RiskAssesmentComponent.prototype.ngOnInit = function () {
    };
    RiskAssesmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-risk-assesment',
            template: __webpack_require__(/*! ./risk-assesment.component.html */ "./src/app/risk-assesment/risk-assesment.component.html"),
            styles: [__webpack_require__(/*! ./risk-assesment.component.styl */ "./src/app/risk-assesment/risk-assesment.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RiskAssesmentComponent);
    return RiskAssesmentComponent;
}());



/***/ }),

/***/ "./src/app/select/select.component.html":
/*!**********************************************!*\
  !*** ./src/app/select/select.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-control\">\r\n    <select class=\"form__field\" required>\r\n    </select> \r\n    <span class=\"form__field-placeholder\">Country</span>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/select/select.component.styl":
/*!**********************************************!*\
  !*** ./src/app/select/select.component.styl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  width: 364px;\n  position: relative;\n  margin-bottom: 36px;\n}\n.form__field {\n  font-size: 14px;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 14px 20px;\n  height: 48px;\n  background-color: #f4f6f6;\n  color: #555556;\n  border: none;\n  font-weight: 500;\n  font-family: Montserrat;\n  outline: none;\n}\n.form__field:focus {\n  background-color: #eeefef;\n}\n.form__field-placeholder {\n  color: #555556;\n  transition: all 0.2s ease-in-out;\n  position: absolute;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: Montserrat;\n  top: 15px;\n  left: 19px;\n  pointer-events: none;\n}\n.form__field:focus ~ .form__field-placeholder,\n.form__field--active ~ .form__field-placeholder,\n.form__field:not(:focus):valid ~ .form__field-placeholder {\n  top: -24px;\n  left: 0;\n  font-size: 13px;\n  color: #767575;\n}\n/*# sourceMappingURL=src/app/select/select.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0L3NyYy9hcHAvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQU87RUFDUCxrQkFBVTtFQUNWLG1CQUFlO0FDQW5CO0FEQ0U7RUFDRSxlQUFXO0VBQ1gsc0JBQVk7RUFDWixXQUFPO0VBQ1Asa0JBQVM7RUFDVCxZQUFRO0VBQ1IseUJBQWtCO0VBQ2xCLGNBQU87RUFDUCxZQUFRO0VBQ1IsZ0JBQWE7RUFDYix1QkFBYTtFQUNiLGFBQVM7QUNDYjtBREFJO0VBQ0UseUJBQWtCO0FDRXhCO0FEREk7RUFDRSxjQUFPO0VBQ1AsZ0NBQVk7RUFDWixrQkFBVTtFQUNWLGVBQVc7RUFDWCxnQkFBYTtFQUNiLHVCQUFhO0VBQ2IsU0FBSztFQUNMLFVBQU07RUFDTixvQkFBZ0I7QUNHdEI7QUREQTs7O0VBQ0ksVUFBSztFQUNMLE9BQU07RUFDTixlQUFXO0VBQ1gsY0FBTztBQ0tYO0FBQ0EsOERBQThEIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtXHJcbiAgJi1jb250cm9sXHJcbiAgICB3aWR0aDogMzY0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG4gICZfX2ZpZWxkXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgY29sb3I6ICM1NTU1NTY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXRcclxuICAgIG91dGxpbmU6IG5vbmVcclxuICAgICY6Zm9jdXNcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUZFRlxyXG4gICAgJi1wbGFjZWhvbGRlciAgXHJcbiAgICAgIGNvbG9yOiAjNTU1NTU2O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0XHJcbiAgICAgIHRvcDogMTVweDtcclxuICAgICAgbGVmdDogMTlweDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4uZm9ybV9fZmllbGQ6Zm9jdXMgfiAuZm9ybV9fZmllbGQtcGxhY2Vob2xkZXIsIC5mb3JtX19maWVsZC0tYWN0aXZlIH4gLmZvcm1fX2ZpZWxkLXBsYWNlaG9sZGVyLCAuZm9ybV9fZmllbGQ6bm90KDpmb2N1cyk6dmFsaWQgfiAuZm9ybV9fZmllbGQtcGxhY2Vob2xkZXJ7XHJcbiAgICB0b3A6IC0yNHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjNzY3NTc1O1xyXG59IiwiLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAzNjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xufVxuLmZvcm1fX2ZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY2ZjY7XG4gIGNvbG9yOiAjNTU1NTU2O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm1fX2ZpZWxkOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWZlZjtcbn1cbi5mb3JtX19maWVsZC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNTU1NTU2O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE5cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmZvcm1fX2ZpZWxkOmZvY3VzIH4gLmZvcm1fX2ZpZWxkLXBsYWNlaG9sZGVyLFxuLmZvcm1fX2ZpZWxkLS1hY3RpdmUgfiAuZm9ybV9fZmllbGQtcGxhY2Vob2xkZXIsXG4uZm9ybV9fZmllbGQ6bm90KDpmb2N1cyk6dmFsaWQgfiAuZm9ybV9fZmllbGQtcGxhY2Vob2xkZXIge1xuICB0b3A6IC0yNHB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNzY3NTc1O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5jc3MubWFwICovIl19 */"

/***/ }),

/***/ "./src/app/select/select.component.ts":
/*!********************************************!*\
  !*** ./src/app/select/select.component.ts ***!
  \********************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.styl */ "./src/app/select/select.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/terms-of-use/terms-of-use.component.html":
/*!**********************************************************!*\
  !*** ./src/app/terms-of-use/terms-of-use.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"terms-of-use\">\r\n  <app-header></app-header>\r\n  <div class=\"terms-of-use-wrapper\">\r\n    <div class=\"terms-of-use-head\">\r\n      <p class=\"terms-of-use-head-p\">80% complete</p>\r\n      <img src=\"./assets/images/line80.svg\" alt=\"\">\r\n    </div>\r\n    <h1 class=\"terms-of-use-title\">{{title}}</h1>\r\n    <div class=\"terms-of-use__content\">\r\n      <h2 class=\"terms-of-use__content-title\">{{subtitle}}</h2>\r\n      <ul class=\"terms-of-use__content-list\">\r\n        <li *ngFor=\"let text of content\" class=\"terms-of-use__content-text\">{{text.text}}</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"terms-of-use__radio\">\r\n      <div class=\"terms-of-use__radio__item\">\r\n        <input name=\"radio-group\" id=\"accept\" type=\"radio\" class=\"terms-of-use__radio__item-input\">\r\n        <label for=\"accept\" class=\"terms-of-use__radio__item-label\">Accept</label>\r\n      </div>\r\n      <div class=\"terms-of-use__radio__item\">\r\n        <input name=\"radio-group\" id=\"decline\" type=\"radio\" class=\"terms-of-use__radio__item-input\">\r\n        <label for=\"decline\" class=\"terms-of-use__radio__item-label\">Decline</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"terms-of-use__content\">\r\n      <p class=\"terms-of-use-subtitle\">{{subtitle2}}</p>\r\n      <p class=\"terms-of-use-p\">The Platform collects certain information you elect to share when creating an account on the Platform, which may include your name</p>\r\n    </div>\r\n    <div class=\"terms-of-use__button\">\r\n        <div class=\"terms-of-use__button-container\">\r\n            <button class=\"terms-of-use__button button-do-it-later\"> Do It Later</button>\r\n        </div>\r\n        <a class=\"terms-of-use__button-link\" routerLink='/payment'>\r\n        <button class=\"btn\">\r\n            <span class=\"btn-text\">Save & Continue</span>\r\n            <span class=\"btn-arrow\">\r\n              <i class=\"btn-arrow__icon\"></i>\r\n            </span>\r\n          </button>\r\n        </a>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/terms-of-use/terms-of-use.component.styl":
/*!**********************************************************!*\
  !*** ./src/app/terms-of-use/terms-of-use.component.styl ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".terms-of-use {\n  background: #e4e4e4;\n}\n.terms-of-use__button-link {\n  width: 216px;\n}\n.terms-of-use-wrapper {\n  display: flex;\n  margin: 20px auto;\n  padding: 44px 84px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #fff;\n  width: 928px;\n}\n.terms-of-use-head-p {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #5a6379;\n}\n.terms-of-use-title {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 48px;\n  text-align: center;\n  color: #151515;\n}\n.terms-of-use-subtitle {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 24px;\n  letter-spacing: -0.375px;\n  margin-bottom: 10px;\n  color: #2c2e39;\n  text-align: left;\n}\n.terms-of-use-p {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #2c2e39;\n  margin: 0;\n}\n.terms-of-use__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.terms-of-use__content-list {\n  padding: 0;\n  margin: 0;\n}\n.terms-of-use__content-title {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 24px;\n  letter-spacing: -0.375px;\n  color: #2c2e39;\n}\n.terms-of-use__content-text {\n  list-style: none;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  padding: 0;\n  margin: 0;\n  line-height: 24px;\n  color: #2c2e39;\n  text-align: left;\n}\n.terms-of-use__radio {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding-top: 15px;\n  width: 100%;\n}\n.terms-of-use__radio__item {\n  display: flex;\n  align-items: center;\n  margin-right: 50px;\n}\n.terms-of-use__radio__item-input {\n  width: 20px;\n  height: 20px;\n  border: 1px solid #939496;\n  box-sizing: border-box;\n  border-radius: 50px;\n}\n.terms-of-use__radio__item-label {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #5a6379;\n  margin-left: 10px;\n}\n.terms-of-use__button {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 50px 0;\n  width: 100%;\n}\n.terms-of-use__button-container {\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (max-width: 1090px) {\n  .terms-of-use__button-container {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n.terms-of-use__button-later {\n  width: 132px;\n  height: 56px;\n  border: 1px solid #b0b4be;\n  box-sizing: border-box;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=src/app/terms-of-use/terms-of-use.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMtb2YtdXNlL3NyYy9hcHAvdGVybXMtb2YtdXNlL3Rlcm1zLW9mLXVzZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdGVybXMtb2YtdXNlL3Rlcm1zLW9mLXVzZS5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFZO0FDQ2Q7QURBRTtFQUNFLFlBQU87QUNFWDtBREFFO0VBQ0UsYUFBUTtFQUNSLGlCQUFPO0VBQ1Asa0JBQVM7RUFDVCx1QkFBaUI7RUFDakIsbUJBQWE7RUFDYixzQkFBZ0I7RUFDaEIsc0JBQWtCO0VBQ2xCLFlBQU07QUNFVjtBRENJO0VBQ0UsdUJBQWE7RUFDYixrQkFBWTtFQUNaLG1CQUFhO0VBQ2IsZUFBVztFQUNYLGlCQUFhO0VBQ2Isa0JBQVk7RUFDWixjQUFPO0FDQ2I7QURFRTtFQUNFLHVCQUFhO0VBQ2Isa0JBQVk7RUFDWixpQkFBYTtFQUNiLGVBQVc7RUFDWCxpQkFBYTtFQUNiLGtCQUFZO0VBQ1osY0FBTztBQ0FYO0FERUU7RUFDRSx1QkFBYTtFQUNiLGtCQUFZO0VBQ1osZ0JBQWE7RUFDYixlQUFXO0VBQ1gsaUJBQWE7RUFDYix3QkFBZ0I7RUFDaEIsbUJBQWM7RUFDZCxjQUFPO0VBQ1AsZ0JBQVc7QUNBZjtBREVFO0VBQ0UsdUJBQWE7RUFDYixrQkFBWTtFQUNaLG1CQUFhO0VBQ2IsZUFBVztFQUNYLGlCQUFhO0VBQ2IsY0FBTztFQUNQLFNBQU87QUNBWDtBREVFO0VBQ0UsYUFBUztFQUNULHNCQUFnQjtFQUNoQiwyQkFBaUI7QUNBckI7QURDSTtFQUNFLFVBQVM7RUFDVCxTQUFPO0FDQ2I7QURDSTtFQUNFLHVCQUFhO0VBQ2Isa0JBQVk7RUFDWixnQkFBYTtFQUNiLGVBQVc7RUFDWCxpQkFBYTtFQUNiLHdCQUFnQjtFQUNoQixjQUFPO0FDQ2I7QURDSTtFQUNFLGdCQUFZO0VBQ1osdUJBQWE7RUFDYixrQkFBWTtFQUNaLG1CQUFhO0VBQ2IsZUFBVztFQUNYLFVBQVM7RUFDVCxTQUFRO0VBQ1IsaUJBQWE7RUFDYixjQUFPO0VBQ1AsZ0JBQVk7QUNDbEI7QURFRTtFQUNFLGFBQVM7RUFDVCxtQkFBZ0I7RUFDaEIsMkJBQWlCO0VBQ2pCLGlCQUFZO0VBQ1osV0FBTTtBQ0FWO0FEQ0k7RUFDRSxhQUFRO0VBQ1IsbUJBQVk7RUFDWixrQkFBYTtBQ0NuQjtBREFRO0VBQ0UsV0FBTztFQUNQLFlBQVE7RUFDUix5QkFBUTtFQUNSLHNCQUFZO0VBQ1osbUJBQWU7QUNFekI7QURBUTtFQUNFLHVCQUFhO0VBQ2Isa0JBQVk7RUFDWixtQkFBYTtFQUNiLGVBQVc7RUFDWCxpQkFBYTtFQUNiLGNBQU87RUFDUCxpQkFBYTtBQ0V2QjtBREVFO0VBQ0UsYUFBUztFQUNULG1CQUFnQjtFQUNoQiw4QkFBaUI7RUFDakIsZUFBUztFQUNULFdBQU07QUNBVjtBRENJO0VBQ0UsYUFBUztFQUNULDhCQUFpQjtBQ0N2QjtBREEwQztFQUFBO0lBQ3BDLGVBQVc7SUFDWCx1QkFBaUI7RUNHckI7QUFDRjtBRERJO0VBQ0UsWUFBTztFQUNQLFlBQVE7RUFDUix5QkFBUTtFQUNSLHNCQUFZO0VBQ1osa0JBQWU7QUNHckI7QUFDQSwwRUFBMEUiLCJmaWxlIjoic3JjL2FwcC90ZXJtcy1vZi11c2UvdGVybXMtb2YtdXNlLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLnRlcm1zLW9mLXVzZSB7XHJcbiAgYmFja2dyb3VuZDogI0U0RTRFNDtcclxuICAmX19idXR0b24tbGlua3tcclxuICAgIHdpZHRoOiAyMTZweDtcclxuICB9XHJcbiAgJi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIG1hcmdpbjoyMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiA0NHB4IDg0cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDo5MjhweDtcclxuICB9XHJcbiAgJi1oZWFkIHtcclxuICAgICYtcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM1QTYzNzk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgfVxyXG4gICYtc3VidGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzc1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBjb2xvcjogIzJDMkUzOTtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICB9XHJcbiAgJi1wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6ICMyQzJFMzk7XHJcbiAgICBtYXJnaW46MDtcclxuICB9XHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICYtbGlzdCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgfVxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNzVweDtcclxuICAgICAgY29sb3I6ICMyQzJFMzk7XHJcbiAgICB9XHJcbiAgICAmLXRleHQge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjMkMyRTM5O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19yYWRpbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6NTBweDtcclxuICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzkzOTQ5NjtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICM1QTYzNzk7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2J1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAmLWNvbnRhaW5lcntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDkwcHgpe1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWxhdGVye1xyXG4gICAgICB3aWR0aDogMTMycHg7XHJcbiAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0IwQjRCRTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi50ZXJtcy1vZi11c2Uge1xuICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xufVxuLnRlcm1zLW9mLXVzZV9fYnV0dG9uLWxpbmsge1xuICB3aWR0aDogMjE2cHg7XG59XG4udGVybXMtb2YtdXNlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgcGFkZGluZzogNDRweCA4NHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDkyOHB4O1xufVxuLnRlcm1zLW9mLXVzZS1oZWFkLXAge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNWE2Mzc5O1xufVxuLnRlcm1zLW9mLXVzZS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTUxNTE1O1xufVxuLnRlcm1zLW9mLXVzZS1zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMyYzJlMzk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGVybXMtb2YtdXNlLXAge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzJjMmUzOTtcbiAgbWFyZ2luOiAwO1xufVxuLnRlcm1zLW9mLXVzZV9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi50ZXJtcy1vZi11c2VfX2NvbnRlbnQtbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi50ZXJtcy1vZi11c2VfX2NvbnRlbnQtdGl0bGUge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzc1cHg7XG4gIGNvbG9yOiAjMmMyZTM5O1xufVxuLnRlcm1zLW9mLXVzZV9fY29udGVudC10ZXh0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzJjMmUzOTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50ZXJtcy1vZi11c2VfX3JhZGlvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGVybXMtb2YtdXNlX19yYWRpb19faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cbi50ZXJtcy1vZi11c2VfX3JhZGlvX19pdGVtLWlucHV0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkzOTQ5NjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi50ZXJtcy1vZi11c2VfX3JhZGlvX19pdGVtLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICM1YTYzNzk7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnRlcm1zLW9mLXVzZV9fYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRlcm1zLW9mLXVzZV9fYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwOTBweCkge1xuICAudGVybXMtb2YtdXNlX19idXR0b24tY29udGFpbmVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi50ZXJtcy1vZi11c2VfX2J1dHRvbi1sYXRlciB7XG4gIHdpZHRoOiAxMzJweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjBiNGJlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3Rlcm1zLW9mLXVzZS90ZXJtcy1vZi11c2UuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/terms-of-use/terms-of-use.component.ts":
/*!********************************************************!*\
  !*** ./src/app/terms-of-use/terms-of-use.component.ts ***!
  \********************************************************/
/*! exports provided: TermsOfUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUseComponent", function() { return TermsOfUseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsOfUseComponent = /** @class */ (function () {
    function TermsOfUseComponent() {
        this.title = 'Terms of Use';
        this.subtitle = 'Personal Information';
        this.subtitle2 = 'Usage Rules';
        this.content = [
            { text: 'The Platform collects certain information you elect to share when creating an account on the Platform, which may include your name, address, email address, telephone number, as well as certain information that may be included within government issued IDs, W2s, and tax returns.Collection of Personal Information by Third Parties: ' },
            { text: 'Some portion of our Services may redirect you to third party websites and services that we do not operate. The privacy practices of these websites and services will be governed by their own policies. We make no representation or warranty as to the privacy policies of any third parties, including the providers of third party applications. If you are submitting information to any such third party through our Services, you should review and understand that party’s applicable policies, including their privacy policy, before providing your information to the third party.Aggregate Information:' },
            { text: 'Aggregate Information may be collected when you interact with our Services, independent of any information you voluntarily enter. Additionally, we may use one or more processes to de-identify information that contains Personal Information, such that only Aggregate Information remains. We may collect, use, store, and transfer Aggregate Information without restriction.When you use our Services some information is automatically collected. Such information could include your operating system, IP address, general statistics about your activities on the Platform’s website, the site from which you linked to us (“referring page”), the name of the website you choose to visit immediately after ours (called the “exit page”), information about other websites you have recently visited, browser (software used to browse the internet) type and language, device identifier numbers, your site activity, and the time and date of your visit. Although we do our best to honor the privacy preferences of our visitors, we are not able to respond to Do Not Track signals from your browser at this time.Cookies are alphanumeric identifiers that we transfer to your computer’s hard drive through your web browser to help us identify you when you come to our Services. You have choices with respect to cookies. By modifying your browser preferences, you have the choice to accept all cookies, to be notified when a cookie is set, or to reject all cookies. If you choose to reject all cookies you may be unable to use those aspects of our Services that require registration in order to participate. You can learn more about cookies and how they work at www.allaboutcookies.org. You can always disable cookies through your browser settings. Doing so, however, may disable certain features on our Services. You can opt-out from third party cookies that are used for advertising purposes on the NAI website at' }
        ];
    }
    TermsOfUseComponent.prototype.ngOnInit = function () {
    };
    TermsOfUseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms-of-use',
            template: __webpack_require__(/*! ./terms-of-use.component.html */ "./src/app/terms-of-use/terms-of-use.component.html"),
            styles: [__webpack_require__(/*! ./terms-of-use.component.styl */ "./src/app/terms-of-use/terms-of-use.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsOfUseComponent);
    return TermsOfUseComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\proj\newAng\sol\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map