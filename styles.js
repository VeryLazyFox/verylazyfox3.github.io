(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js?!./src/styles.styl":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/stylus-loader??ref--16-3!./src/styles.styl ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* input */\n.form-control {\n  width: 364px;\n  position: relative;\n}\n.form__field {\n  font-size: 14px;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 14px 20px;\n  height: 48px;\n  background-color: #f4f6f6;\n  color: #555556;\n  border: none;\n  font-weight: 500;\n  font-family: Montserrat;\n  outline: none;\n}\n.form__field:focus {\n  background-color: #eeefef;\n}\n.form__field-placeholder {\n  color: #555556;\n  transition: all 0.2s ease-in-out;\n  position: absolute;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: Montserrat;\n  top: 15px;\n  left: 19px;\n  pointer-events: none;\n}\n.form__field:focus ~ .form__field-placeholder,\n.form__field--active ~ .form__field-placeholder,\n.form__field:not(:focus):valid ~ .form__field-placeholder {\n  top: -24px;\n  left: 0;\n  font-size: 13px;\n  color: #767575;\n}\n/* Radio */\n.radio {\n  padding-left: 30px;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #5a6379;\n  position: relative;\n}\n.radio:first-child {\n  margin-bottom: 24px;\n}\n.radio__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n.radio__box {\n  overflow: hidden;\n  background-color: #fff;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #979797;\n  position: absolute;\n  left: 2px;\n  border-radius: 50%;\n  border-radius: 50%;\n  box-sizing: border-box;\n}\n.radio__container {\n  margin-bottom: 24px;\n}\n.radio__input:checked + .radio__box:before {\n  content: '';\n  display: block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #15bd0d;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n/* btn */\n.btn {\n  cursor: pointer;\n  max-width: 216px;\n  width: 100%;\n  height: 56px;\n  font-size: 16px;\n  background-color: #0ec22b;\n  border: none;\n  color: #fff;\n  letter-spacing: 0.13px;\n  padding: 1px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-family: \"Montserrat\", sans-serif;\n  text-align: center;\n}\n.btn:hover {\n  background-color: #1fa236;\n}\n.btn:hover .btn-arrow__icon {\n  -webkit-animation: arrow 1s ease infinite;\n          animation: arrow 1s ease infinite;\n  margin-left: 10px;\n}\n.btn-text {\n  width: 100%;\n  position: relative;\n  font-weight: 600;\n}\n.btn-arrow {\n  max-width: 56px;\n  width: 100%;\n  height: 56px;\n  background-color: rgba(10,55,16,0.1);\n  position: relative;\n}\n.btn-arrow__icon {\n  background: url('Arrow.png') no-repeat;\n  width: 19px;\n  height: 2px;\n  z-index: 1;\n  position: absolute;\n  padding: 7px 1px;\n  top: 40%;\n  right: 17px;\n}\n/* You can add global styles to this file, and also import other style files */\n.button-do-it-later {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  color: #5a6379;\n  border: 1px solid #b0b4be;\n  box-sizing: border-box;\n  border-radius: 2px;\n  padding: 18px 31px !important;\n  cursor: pointer;\n  background: #fff;\n}\n/* checkbox */\n.option {\n  display: block;\n  margin-bottom: 22px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #5a6379;\n}\n/* Check */\n.check {\n  padding-left: 32px;\n}\n.check__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n.check__box {\n  position: absolute;\n  margin-left: -32px;\n  width: 20px;\n  height: 20px;\n  overflow: hidden;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  border: 1px solid #939496;\n}\n/* Checked */\n.check__input:checked + .check__box {\n  background-color: #3bbf38;\n  background-image: url(\"https://cdn.glitch.com/d6162378-5823-4160-a555-3d9789bd2b92%2Fcheck.svg?1550563475518\");\n  background-size: 10px;\n}\n@media screen and (max-width: 480px) {\n  .form__field-placeholder {\n    font-size: 12px;\n  }\n}\n.switch-field {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 36px;\n  overflow: hidden;\n  margin: 0;\n  border-collapse: collapse;\n}\n.switch-field input {\n  position: absolute !important;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  width: 1px;\n  border: 0;\n  overflow: hidden;\n}\n.switch-field label {\n  background-color: #fff;\n  color: #484846;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1;\n  text-align: center;\n  padding: 19px 0px;\n  border-collapse: collapse;\n  width: 30%;\n  border-radius: 2px;\n  border: 1px solid #e0e4eb;\n}\n.switch-field label span {\n  font-size: 11px;\n}\n.switch-field label:hover {\n  cursor: pointer;\n}\n.switch-field input:checked + label {\n  box-shadow: none;\n  border: 1px solid #0dc22b;\n}\n.switch-field label:last-of-type {\n  margin-right: 0px;\n}\na {\n  text-decoration: none;\n  display: block;\n  width: 100%;\n}\n@-webkit-keyframes arrow {\n  0%, 100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  50% {\n    -webkit-transform: translate(10px, 0);\n            transform: translate(10px, 0);\n  }\n}\n@keyframes arrow {\n  0%, 100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  50% {\n    -webkit-transform: translate(10px, 0);\n            transform: translate(10px, 0);\n  }\n}\n/*# sourceMappingURL=src/styles.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcmMvc3R5bGVzLnN0eWwiLCJzcmMvc3R5bGVzLnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBQTtBQUVFO0VBQ0UsWUFBTztFQUNQLGtCQUFVO0FDQWQ7QURHRTtFQUNFLGVBQVc7RUFDWCxzQkFBWTtFQUNaLFdBQU87RUFDUCxrQkFBUztFQUNULFlBQVE7RUFDUix5QkFBa0I7RUFDbEIsY0FBTztFQUNQLFlBQVE7RUFDUixnQkFBYTtFQUNiLHVCQUFhO0VBQ2IsYUFBUztBQ0RiO0FER0k7RUFDRSx5QkFBa0I7QUNEeEI7QURJSTtFQUNFLGNBQU87RUFDUCxnQ0FBWTtFQUNaLGtCQUFVO0VBQ1YsZUFBVztFQUNYLGdCQUFhO0VBQ2IsdUJBQWE7RUFDYixTQUFLO0VBQ0wsVUFBTTtFQUNOLG9CQUFnQjtBQ0Z0QjtBRE9BOzs7RUFDRSxVQUFLO0VBQ0wsT0FBTTtFQUNOLGVBQVc7RUFDWCxjQUFPO0FDSFQ7QURNQSxVQUFBO0FBQ0E7RUFDRSxrQkFBYztFQUNkLHVCQUFhO0VBQ2Isa0JBQVk7RUFDWixtQkFBYTtFQUNiLGVBQVc7RUFDWCxpQkFBYTtFQUNiLGNBQU87RUFDUCxrQkFBVTtBQ0paO0FEY0U7RUFDRSxtQkFBZTtBQ1puQjtBRGVFO0VBQ0Usa0JBQVU7RUFDVixVQUFPO0VBQ1AsV0FBUTtFQUNSLGdCQUFVO0VBQ1YsbUJBQWtCO0FDYnRCO0FEZ0JFO0VBQ0UsZ0JBQVU7RUFDVixzQkFBa0I7RUFDbEIsV0FBTztFQUNQLFlBQVE7RUFDUix5QkFBUTtFQUNSLGtCQUFVO0VBQ1YsU0FBTTtFQUNOLGtCQUFlO0VBQ2Ysa0JBQWU7RUFDZixzQkFBWTtBQ2RoQjtBRGlCRTtFQUNFLG1CQUFlO0FDZm5CO0FEb0JFO0VBQ0UsV0FBUztFQUNULGNBQVM7RUFDVCxXQUFPO0VBQ1AsWUFBUTtFQUNSLGtCQUFlO0VBQ2YseUJBQWtCO0VBQ2xCLGtCQUFVO0VBQ1Ysd0NBQStCO1VBQS9CLGdDQUErQjtFQUMvQixRQUFLO0VBQ0wsU0FBTTtBQ2xCVjtBRHVCQSxRQUFBO0FBRUE7RUFDRSxlQUFRO0VBQ1IsZ0JBQVc7RUFDWCxXQUFPO0VBQ1AsWUFBUTtFQUNSLGVBQVc7RUFDWCx5QkFBa0I7RUFDbEIsWUFBUTtFQUNSLFdBQU87RUFDUCxzQkFBZ0I7RUFDaEIsWUFBUztFQUNULFNBQVE7RUFDUixhQUFTO0VBQ1QsbUJBQWE7RUFDYixnQkFBYTtFQUNiLHFDQUF5QjtFQUN6QixrQkFBWTtBQ3RCZDtBRHVCRTtFQUNFLHlCQUFrQjtBQ3JCdEI7QUR1QkU7RUFDRSx5Q0FBVztVQUFYLGlDQUFXO0VBQ1gsaUJBQWE7QUNyQmpCO0FEdUJFO0VBQ0UsV0FBTztFQUNQLGtCQUFVO0VBQ1YsZ0JBQWE7QUNyQmpCO0FEdUJFO0VBQ0UsZUFBVztFQUNYLFdBQU87RUFDUCxZQUFRO0VBQ1Isb0NBQXNDO0VBQ3RDLGtCQUFVO0FDckJkO0FEc0JJO0VBQ0Usc0NBQXdDO0VBQ3hDLFdBQU87RUFDUCxXQUFRO0VBQ1IsVUFBUztFQUNULGtCQUFVO0VBQ1YsZ0JBQVM7RUFDVCxRQUFLO0VBQ0wsV0FBTztBQ3BCYjtBRCtCQSw4RUFBQTtBQUNBO0VBQ0UsZ0JBQWE7RUFDYixlQUFXO0VBQ1gsaUJBQWE7RUFDYixrQkFBWTtFQUNaLGNBQU87RUFDUCx5QkFBUTtFQUNSLHNCQUFZO0VBQ1osa0JBQWU7RUFDZiw2QkFBUztFQUNULGVBQVE7RUFDUixnQkFBWTtBQzdCZDtBRGdDQSxhQUFBO0FBQ0E7RUFDSSxjQUFTO0VBQ1QsbUJBQWU7RUFDZixlQUFXO0VBQ1gsaUJBQWE7RUFDYixjQUFPO0FDOUJYO0FEaUNBLFVBQUE7QUFFQTtFQUNFLGtCQUFjO0FDaENoQjtBRG1DQTtFQUNJLGtCQUFVO0VBQ1YsVUFBTztFQUNQLFdBQVE7RUFDUixnQkFBVTtFQUNWLG1CQUFrQjtBQ2pDdEI7QURvQ0E7RUFDSSxrQkFBVTtFQUVWLGtCQUFhO0VBQ2IsV0FBTztFQUNQLFlBQVE7RUFDUixnQkFBVTtFQUNWLHNCQUFrQjtFQUNsQiw0QkFBbUI7RUFDbkIsNEJBQXFCO0VBQ3JCLHlCQUFRO0FDbkNaO0FEc0NBLFlBQUE7QUFFQTtFQUNJLHlCQUFrQjtFQUNsQiw4R0FBMkc7RUFDM0cscUJBQWlCO0FDckNyQjtBRHdDbUM7RUFHN0I7SUFDRSxlQUFXO0VDeENqQjtBQUNGO0FEeUNBO0VBQ0MsYUFBUztFQUNSLDhCQUFpQjtFQUNsQixtQkFBZTtFQUNmLGdCQUFVO0VBQ1QsU0FBUTtFQUNSLHlCQUFpQjtBQ3ZDbkI7QUR3Q0U7RUFDRCw2QkFBVTtFQUNWLHNCQUFxQjtFQUNyQixXQUFRO0VBQ1IsVUFBTztFQUNQLFNBQVE7RUFDUixnQkFBVTtBQ3RDWDtBRHdDRTtFQUNELHNCQUFrQjtFQUNsQixjQUFPO0VBQ1AsZUFBVztFQUNWLGdCQUFhO0VBQ2QsY0FBYTtFQUNiLGtCQUFZO0VBQ1osaUJBQVM7RUFHUix5QkFBaUI7RUFFakIsVUFBTztFQUNQLGtCQUFlO0VBQ2YseUJBQVE7QUN6Q1Y7QUQwQ0U7RUFDRSxlQUFXO0FDeENmO0FEMENFO0VBQ0MsZUFBUTtBQ3hDWDtBRDJDRTtFQUVELGdCQUFZO0VBQ1gseUJBQVE7QUMxQ1Y7QUQrQ0U7RUFFRSxpQkFBYztBQzlDbEI7QURpREE7RUFDRSxxQkFBaUI7RUFDakIsY0FBUztFQUNULFdBQU87QUMvQ1Q7QUQ3RWdCO0VBQ2Q7SUFFRSxrQ0FBeUI7WUFBekIsMEJBQXlCO0VDc0YzQjtFRHJGQTtJQUNFLHFDQUE0QjtZQUE1Qiw2QkFBNEI7RUN1RjlCO0FBQ0Y7QUQ3RmdCO0VBQ2Q7SUFFRSxrQ0FBeUI7WUFBekIsMEJBQXlCO0VDc0czQjtFRHJHQTtJQUNFLHFDQUE0QjtZQUE1Qiw2QkFBNEI7RUN1RzlCO0FBQ0Y7QUFDQSx5Q0FBeUMiLCJmaWxlIjoic3JjL3N0eWxlcy5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW5wdXQgKi9cclxuLmZvcm0ge1xyXG4gICYtY29udHJvbCB7XHJcbiAgICB3aWR0aDogMzY0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAmX19maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgY29sb3I6ICM1NTU1NTY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRkVGO1xyXG4gICAgfVxyXG5cclxuICAgICYtcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzU1NTU1NjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICBsZWZ0OiAxOXB4O1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtX19maWVsZDpmb2N1cyB+IC5mb3JtX19maWVsZC1wbGFjZWhvbGRlciwgLmZvcm1fX2ZpZWxkLS1hY3RpdmUgfiAuZm9ybV9fZmllbGQtcGxhY2Vob2xkZXIsIC5mb3JtX19maWVsZDpub3QoOmZvY3VzKTp2YWxpZCB+IC5mb3JtX19maWVsZC1wbGFjZWhvbGRlciB7XHJcbiAgdG9wOiAtMjRweDtcclxuICBsZWZ0OiAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzc2NzU3NTtcclxufVxyXG5cclxuLyogUmFkaW8gKi9cclxuLnJhZGlvIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGNvbG9yOiAjNUE2Mzc5O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyYtYm9yZGVye1xyXG4gIC8vICAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNEVCO1xyXG4gIC8vICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC8vICAgJjpjaGVja2Vke1xyXG4gIC8vICAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcclxuICAvLyAgICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgJl9faW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcbiAgfVxyXG5cclxuICAmX19ib3gge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTc5Nzk3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gICZfX2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJhZGlvX19pbnB1dDpjaGVja2VkICsgLnJhZGlvX19ib3gge1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNWJkMGQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIGJ0biAqL1xyXG5cclxuLmJ0bntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAyMTZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWMyMmI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjEzcHg7XHJcbiAgcGFkZGluZzogMXB4IDtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmYTIzNiAgXHJcbiAgfVxyXG4gICY6aG92ZXIgLmJ0bi1hcnJvd19faWNvbntcclxuICAgIGFuaW1hdGlvbjogYXJyb3cgMXMgZWFzZSBpbmZpbml0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAmLXRleHR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gICYtYXJyb3d7XHJcbiAgICBtYXgtd2lkdGg6IDU2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDU1LCAxNiwgMC4xKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICZfX2ljb257XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvaW1nL0Fycm93LnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHBhZGRpbmc6IDdweCAxcHg7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgICByaWdodDogMTdweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYXJyb3cge1xyXG4gIDAlLFxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7IH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMCk7fX1cclxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG4uYnV0dG9uLWRvLWl0LWxhdGVye1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzVBNjM3OTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQjBCNEJFO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDE4cHggMzFweCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcblxyXG4vKiBjaGVja2JveCAqL1xyXG4ub3B0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgY29sb3I6ICM1QTYzNzk7XHJcbn1cclxuXHJcbi8qIENoZWNrICovXHJcblxyXG4uY2hlY2sge1xyXG4gIHBhZGRpbmctbGVmdDogMzJweDtcclxufVxyXG5cclxuLmNoZWNrX19pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4OyBcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcbn1cclxuXHJcbi5jaGVja19fYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMnB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Mzk0OTY7XHJcbn1cclxuXHJcbi8qIENoZWNrZWQgKi9cclxuXHJcbi5jaGVja19faW5wdXQ6Y2hlY2tlZCArIC5jaGVja19fYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQkJGMzg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9jZG4uZ2xpdGNoLmNvbS9kNjE2MjM3OC01ODIzLTQxNjAtYTU1NS0zZDk3ODliZDJiOTIlMkZjaGVjay5zdmc/MTU1MDU2MzQ3NTUxOCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSBcclxuICAuZm9ybVxyXG4gICAgJl9fZmllbGRcclxuICAgICAgJi1wbGFjZWhvbGRlclxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweFxyXG5cclxuLnN3aXRjaC1maWVsZCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0bWFyZ2luLWJvdHRvbTogMzZweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGlucHV0IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuXHRjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdHdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIGxhYmVsIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdGNvbG9yOiAjNDg0ODQ2O1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAxOXB4IDBweDtcclxuXHQvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDcyLCA3MiwgNzAsIDAuMik7XHJcblx0Ly8gYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAvLyBmbGV4OiAxO1xyXG4gIHdpZHRoOiAzMCU7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNEVCO1xyXG4gIHNwYW57XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gICY6aG92ZXJ7XHJcblx0ICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XHJcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogI2E1ZGM4NjtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwREMyMkI7XHJcbiAgfVxyXG4gIGxhYmVsOmZpcnN0LW9mLXR5cGUge1xyXG4gIFx0Ly8gYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XHJcbiAgfVxyXG4gIGxhYmVsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxufVxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIiwiLyogaW5wdXQgKi9cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMzY0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtX19maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmY2O1xuICBjb2xvcjogIzU1NTU1NjtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtX19maWVsZDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVmZWY7XG59XG4uZm9ybV9fZmllbGQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzU1NTU1NjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxOXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5mb3JtX19maWVsZDpmb2N1cyB+IC5mb3JtX19maWVsZC1wbGFjZWhvbGRlcixcbi5mb3JtX19maWVsZC0tYWN0aXZlIH4gLmZvcm1fX2ZpZWxkLXBsYWNlaG9sZGVyLFxuLmZvcm1fX2ZpZWxkOm5vdCg6Zm9jdXMpOnZhbGlkIH4gLmZvcm1fX2ZpZWxkLXBsYWNlaG9sZGVyIHtcbiAgdG9wOiAtMjRweDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzc2NzU3NTtcbn1cbi8qIFJhZGlvICovXG4ucmFkaW8ge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjNWE2Mzc5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFkaW86Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnJhZGlvX19pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG59XG4ucmFkaW9fX2JveCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5Nzk3OTc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5yYWRpb19fY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5yYWRpb19faW5wdXQ6Y2hlY2tlZCArIC5yYWRpb19fYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTViZDBkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuLyogYnRuICovXG4uYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDIxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWMyMmI7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEzcHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhMjM2O1xufVxuLmJ0bjpob3ZlciAuYnRuLWFycm93X19pY29uIHtcbiAgYW5pbWF0aW9uOiBhcnJvdyAxcyBlYXNlIGluZmluaXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5idG4tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYnRuLWFycm93IHtcbiAgbWF4LXdpZHRoOiA1NnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLDU1LDE2LDAuMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5idG4tYXJyb3dfX2ljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvQXJyb3cucG5nXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogMnB4O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDdweCAxcHg7XG4gIHRvcDogNDAlO1xuICByaWdodDogMTdweDtcbn1cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5idXR0b24tZG8taXQtbGF0ZXIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNWE2Mzc5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjBiNGJlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDE4cHggMzFweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4vKiBjaGVja2JveCAqL1xuLm9wdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzVhNjM3OTtcbn1cbi8qIENoZWNrICovXG4uY2hlY2sge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG4uY2hlY2tfX2lucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbn1cbi5jaGVja19fYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTMycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5Mzk0OTY7XG59XG4vKiBDaGVja2VkICovXG4uY2hlY2tfX2lucHV0OmNoZWNrZWQgKyAuY2hlY2tfX2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYmJmMzg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vY2RuLmdsaXRjaC5jb20vZDYxNjIzNzgtNTgyMy00MTYwLWE1NTUtM2Q5Nzg5YmQyYjkyJTJGY2hlY2suc3ZnPzE1NTA1NjM0NzU1MThcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5mb3JtX19maWVsZC1wbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG4uc3dpdGNoLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4uc3dpdGNoLWZpZWxkIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMXB4O1xuICBib3JkZXI6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc3dpdGNoLWZpZWxkIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM0ODQ4NDY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTlweCAwcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTRlYjtcbn1cbi5zd2l0Y2gtZmllbGQgbGFiZWwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5zd2l0Y2gtZmllbGQgbGFiZWw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3dpdGNoLWZpZWxkIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZGMyMmI7XG59XG4uc3dpdGNoLWZpZWxkIGxhYmVsOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuQC1tb3ota2V5ZnJhbWVzIGFycm93IHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMCk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBhcnJvdyB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDApO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGFycm93IHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYXJyb3cge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAwKTtcbiAgfVxufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL3N0eWxlcy5jc3MubWFwICovIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.styl":
/*!*************************!*\
  !*** ./src/styles.styl ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/stylus-loader??ref--16-3!./styles.styl */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js?!./src/styles.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.styl ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\proj\newAng\sol\src\styles.styl */"./src/styles.styl");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map