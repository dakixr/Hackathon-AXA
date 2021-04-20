(self["webpackChunkaxa"] = self["webpackChunkaxa"] || []).push([["account"],{

/***/ "./src/main/webapp/app/modules/account/index.tsx":
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/modules/account/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/error/error-boundary-route */ "./src/main/webapp/app/shared/error/error-boundary-route.tsx");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings */ "./src/main/webapp/app/modules/account/settings/settings.tsx");
/* harmony import */ var _password_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password/password */ "./src/main/webapp/app/modules/account/password/password.tsx");
/* harmony import */ var _sessions_sessions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sessions/sessions */ "./src/main/webapp/app/modules/account/sessions/sessions.tsx");





const Routes = ({ match }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { path: `${match.url}/settings`, component: _settings_settings__WEBPACK_IMPORTED_MODULE_2__.default }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { path: `${match.url}/password`, component: _password_password__WEBPACK_IMPORTED_MODULE_3__.default }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { path: `${match.url}/sessions`, component: _sessions_sessions__WEBPACK_IMPORTED_MODULE_4__.default })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/account/index.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/account/index.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/password/password.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/password/password.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPage": () => (/* binding */ PasswordPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/layout/password/password-strength-bar */ "./src/main/webapp/app/shared/layout/password/password-strength-bar.tsx");
/* harmony import */ var _password_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password.reducer */ "./src/main/webapp/app/modules/account/password/password.reducer.ts");







const PasswordPage = (props) => {
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        props.reset();
        props.getSession();
        return () => {
            props.reset();
        };
    }, []);
    const handleValidSubmit = (event, values) => {
        props.savePassword(values.currentPassword, values.newPassword);
    };
    const updatePassword = event => setPassword(event.target.value);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { md: "8" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { id: "password-title" },
                    "Password for ",
                    props.account.login),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvForm, { id: "password-form", onValidSubmit: handleValidSubmit },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "currentPassword", label: "Current password", placeholder: 'Current password', type: "password", validate: {
                            required: { value: true, errorMessage: 'Your password is required.' },
                        }, "data-cy": "currentPassword" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "newPassword", label: "New password", placeholder: 'New password', type: "password", validate: {
                            required: { value: true, errorMessage: 'Your password is required.' },
                            minLength: { value: 4, errorMessage: 'Your password is required to be at least 4 characters.' },
                            maxLength: { value: 50, errorMessage: 'Your password cannot be longer than 50 characters.' },
                        }, onChange: updatePassword, "data-cy": "newPassword" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_4__.default, { password: password }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "confirmPassword", label: "New password confirmation", placeholder: "Confirm the new password", type: "password", validate: {
                            required: {
                                value: true,
                                errorMessage: 'Your confirmation password is required.',
                            },
                            minLength: {
                                value: 4,
                                errorMessage: 'Your confirmation password is required to be at least 4 characters.',
                            },
                            maxLength: {
                                value: 50,
                                errorMessage: 'Your confirmation password cannot be longer than 50 characters.',
                            },
                            match: {
                                value: 'newPassword',
                                errorMessage: 'The password and its confirmation do not match!',
                            },
                        }, "data-cy": "confirmPassword" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { color: "success", type: "submit", "data-cy": "submit" }, "Save"))))));
};
const mapStateToProps = ({ authentication }) => ({
    account: authentication.account,
    isAuthenticated: authentication.isAuthenticated,
});
const mapDispatchToProps = { getSession: app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_3__.getSession, savePassword: _password_reducer__WEBPACK_IMPORTED_MODULE_5__.savePassword, reset: _password_reducer__WEBPACK_IMPORTED_MODULE_5__.reset };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(PasswordPage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/account/password/password.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/account/password/password.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/sessions/sessions.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/sessions/sessions.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionsPage": () => (/* binding */ SessionsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Alert.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Table.js");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var _sessions_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessions.reducer */ "./src/main/webapp/app/modules/account/sessions/sessions.reducer.ts");





class SessionsPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super(...arguments);
        this.doSessionInvalidation = series => () => {
            this.props.invalidateSession(series);
            this.props.findAll();
        };
        this.refreshList = () => {
            this.props.findAll();
        };
    }
    componentDidMount() {
        this.props.getSession();
        this.props.findAll();
    }
    render() {
        const { account, sessions, updateSuccess, updateFailure } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null,
                "Active sessions for [",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, account.login),
                "]"),
            updateSuccess ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { color: "success" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Session invalidated!"))) : null,
            updateFailure ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { color: "danger" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "An error has occurred!"),
                    " The session could not be invalidated."))) : null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { color: "primary", onClick: this.refreshList }, "Refresh"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "table-responsive" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { className: "table-striped" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "IP Address"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "User agent"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Date"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, sessions.map((s, index) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: index },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, s.ipAddress),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, s.userAgent),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, s.tokenDate),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { color: "primary", onClick: this.doSessionInvalidation(s.series) }, "Invalidate"))))))))));
    }
}
const mapStateToProps = ({ authentication, sessions }) => ({
    account: authentication.account,
    sessions: sessions.sessions,
    updateSuccess: sessions.updateSuccess,
    updateFailure: sessions.updateFailure,
});
const mapDispatchToProps = { getSession: app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_2__.getSession, findAll: _sessions_reducer__WEBPACK_IMPORTED_MODULE_3__.findAll, invalidateSession: _sessions_reducer__WEBPACK_IMPORTED_MODULE_3__.invalidateSession };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(SessionsPage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/account/sessions/sessions.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/account/sessions/sessions.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/settings/settings.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/settings/settings.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.reducer */ "./src/main/webapp/app/modules/account/settings/settings.reducer.ts");






const SettingsPage = (props) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        props.getSession();
        return () => {
            props.reset();
        };
    }, []);
    const handleValidSubmit = (event, values) => {
        const account = Object.assign(Object.assign({}, props.account), values);
        props.saveAccountSettings(account);
        event.persist();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { md: "8" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { id: "settings-title" },
                    "User settings for ",
                    props.account.login),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvForm, { id: "settings-form", onValidSubmit: handleValidSubmit },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { className: "form-control", name: "firstName", label: "First Name", id: "firstName", placeholder: "Your first name", validate: {
                            required: { value: true, errorMessage: 'Your first name is required.' },
                            minLength: { value: 1, errorMessage: 'Your first name is required to be at least 1 character' },
                            maxLength: { value: 50, errorMessage: 'Your first name cannot be longer than 50 characters' },
                        }, value: props.account.firstName, "data-cy": "firstname" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { className: "form-control", name: "lastName", label: "Last Name", id: "lastName", placeholder: "Your last name", validate: {
                            required: { value: true, errorMessage: 'Your last name is required.' },
                            minLength: { value: 1, errorMessage: 'Your last name is required to be at least 1 character' },
                            maxLength: { value: 50, errorMessage: 'Your last name cannot be longer than 50 characters' },
                        }, value: props.account.lastName, "data-cy": "lastname" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "email", label: "Email", placeholder: 'Your email', type: "email", validate: {
                            required: { value: true, errorMessage: 'Your email is required.' },
                            minLength: { value: 5, errorMessage: 'Your email is required to be at least 5 characters.' },
                            maxLength: { value: 254, errorMessage: 'Your email cannot be longer than 50 characters.' },
                        }, value: props.account.email, "data-cy": "email" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { color: "primary", type: "submit", "data-cy": "submit" }, "Save"))))));
};
const mapStateToProps = ({ authentication }) => ({
    account: authentication.account,
    isAuthenticated: authentication.isAuthenticated,
});
const mapDispatchToProps = { getSession: app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_3__.getSession, saveAccountSettings: _settings_reducer__WEBPACK_IMPORTED_MODULE_4__.saveAccountSettings, reset: _settings_reducer__WEBPACK_IMPORTED_MODULE_4__.reset };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(SettingsPage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/account/settings/settings.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/account/settings/settings.tsx"); } }(); 

/***/ })

}]);
//# sourceMappingURL=account.chunk.js.map