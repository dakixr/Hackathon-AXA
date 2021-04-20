(self["webpackChunkaxa"] = self["webpackChunkaxa"] || []).push([["administration"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/modules/administration/docs/docs.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/modules/administration/docs/docs.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "iframe {\n  background: white;\n}", "",{"version":3,"sources":["webpack://./src/main/webapp/app/modules/administration/docs/docs.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;AACF","sourcesContent":["iframe {\n  background: white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/configuration/configuration.tsx":
/*!************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/configuration/configuration.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPage": () => (/* binding */ ConfigurationPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Input.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Table.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Badge.js");
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");




const ConfigurationPage = (props) => {
    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [reversePrefix, setReversePrefix] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [reverseProperties, setReverseProperties] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        props.getConfigurations();
        props.getEnv();
    }, []);
    const changeFilter = evt => setFilter(evt.target.value);
    const envFilterFn = configProp => configProp.toUpperCase().includes(filter.toUpperCase());
    const propsFilterFn = configProp => configProp.prefix.toUpperCase().includes(filter.toUpperCase());
    const changeReversePrefix = () => setReversePrefix(!reversePrefix);
    const changeReverseProperties = () => setReverseProperties(!reverseProperties);
    const getContextList = contexts => Object.values(contexts)
        .map((v) => v.beans)
        .reduce((acc, e) => (Object.assign(Object.assign({}, acc), e)));
    const { configuration } = props;
    const configProps = configuration && configuration.configProps ? configuration.configProps : {};
    const env = configuration && configuration.env ? configuration.env : {};
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { id: "configuration-page-heading", "data-cy": "configurationPageHeading" }, "Configuration"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Filter"),
        " ",
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, { type: "search", value: filter, onChange: changeFilter, name: "search", id: "search" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Spring configuration"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { className: "table table-striped table-bordered table-responsive d-table" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { onClick: changeReversePrefix }, "Prefix"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { onClick: changeReverseProperties }, "Properties"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, configProps.contexts
                ? Object.values(getContextList(configProps.contexts))
                    .filter(propsFilterFn)
                    .map((property, propIndex) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: propIndex },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, property['prefix']),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, Object.keys(property['properties']).map((propKey, index) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { key: index },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { md: "4" }, propKey),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { md: "8" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { className: "float-right badge-secondary break" }, JSON.stringify(property['properties'][propKey]))))))))))
                : null)),
        env.propertySources
            ? env.propertySources.map((envKey, envIndex) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: envIndex },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, envKey.name)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { className: "table table-sm table-striped table-bordered table-responsive d-table" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: envIndex },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "w-40" }, "Property"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "w-60" }, "Value"))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, Object.keys(envKey.properties)
                        .filter(envFilterFn)
                        .map((propKey, propIndex) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: propIndex },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "break" }, propKey),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "break" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "float-right badge badge-secondary break" }, envKey.properties[propKey].value))))))))))
            : null));
};
const mapStateToProps = ({ administration }) => ({
    configuration: administration.configuration,
    isFetching: administration.loading,
});
const mapDispatchToProps = { getConfigurations: _administration_reducer__WEBPACK_IMPORTED_MODULE_2__.getConfigurations, getEnv: _administration_reducer__WEBPACK_IMPORTED_MODULE_2__.getEnv };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(ConfigurationPage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/configuration/configuration.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/configuration/configuration.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/docs/docs.tsx":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/docs/docs.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _docs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs.scss */ "./src/main/webapp/app/modules/administration/docs/docs.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const DocsPage = () => (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_1__.createElement("iframe", { src: "../swagger-ui/index.html", width: "100%", height: "800", title: "Swagger UI", seamless: true, style: { border: 'none' }, "data-cy": "swagger-frame" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocsPage);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/docs/docs.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/docs/docs.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/health/health-modal.tsx":
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/health/health-modal.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Table.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalFooter.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");


const formatDiskSpaceOutput = rawValue => {
    // Should display storage space in an human readable unit
    const val = rawValue / 1073741824;
    if (val > 1) {
        // Value
        return val.toFixed(2) + ' GB';
    }
    else {
        return (rawValue / 1048576).toFixed(2) + ' MB';
    }
};
const HealthModal = ({ handleClose, healthObject, showModal }) => {
    const data = healthObject.details || {};
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.default, { isOpen: showModal, modalTransition: { timeout: 20 }, backdropTransition: { timeout: 10 }, toggle: handleClose },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, { toggle: handleClose }, healthObject.name),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { bordered: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Name"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Value"))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, Object.keys(data).map((key, index) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: index },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, key),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, healthObject.name === 'diskSpace' ? formatDiskSpaceOutput(data[key]) : JSON.stringify(data[key])))))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { color: "primary", onClick: handleClose }, "Close"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HealthModal);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/health/health-modal.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/health/health-modal.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/health/health.tsx":
/*!**********************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/health/health.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthPage": () => (/* binding */ HealthPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Table.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Badge.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");
/* harmony import */ var _health_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health-modal */ "./src/main/webapp/app/modules/administration/health/health-modal.tsx");






const HealthPage = (props) => {
    const [healthObject, setHealthObject] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        props.systemHealth();
    }, []);
    const getSystemHealth = () => {
        if (!props.isFetching) {
            props.systemHealth();
        }
    };
    const getSystemHealthInfo = (name, healthObj) => () => {
        setShowModal(true);
        setHealthObject(Object.assign(Object.assign({}, healthObj), { name }));
    };
    const handleClose = () => setShowModal(false);
    const renderModal = () => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_health_modal__WEBPACK_IMPORTED_MODULE_4__.default, { healthObject: healthObject, handleClose: handleClose, showModal: showModal });
    const { health, isFetching } = props;
    const data = (health || {}).components || {};
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { id: "health-page-heading", "data-cy": "healthPageHeading" }, "Health Checks"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { onClick: getSystemHealth, color: isFetching ? 'btn btn-danger' : 'btn btn-primary', disabled: isFetching },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "sync" }),
                "\u00A0 Refresh")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { md: "12" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { bordered: true, "aria-describedby": "health-page-heading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Service Name"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Details"))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, Object.keys(data).map((configPropKey, configPropIndex) => configPropKey !== 'status' ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: configPropIndex },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, configPropKey),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, { color: data[configPropKey].status !== 'UP' ? 'danger' : 'success' }, data[configPropKey].status)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, data[configPropKey].details ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { onClick: getSystemHealthInfo(configPropKey, data[configPropKey]) },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "eye" }))) : null))) : null))))),
        renderModal()));
};
const mapStateToProps = (storeState) => ({
    health: storeState.administration.health,
    isFetching: storeState.administration.loading,
});
const mapDispatchToProps = { systemHealth: _administration_reducer__WEBPACK_IMPORTED_MODULE_3__.systemHealth };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(HealthPage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/health/health.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/health/health.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/index.tsx":
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/index.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/error/error-boundary-route */ "./src/main/webapp/app/shared/error/error-boundary-route.tsx");
/* harmony import */ var _user_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management */ "./src/main/webapp/app/modules/administration/user-management/index.tsx");
/* harmony import */ var _logs_logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logs/logs */ "./src/main/webapp/app/modules/administration/logs/logs.tsx");
/* harmony import */ var _health_health__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health/health */ "./src/main/webapp/app/modules/administration/health/health.tsx");
/* harmony import */ var _metrics_metrics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metrics/metrics */ "./src/main/webapp/app/modules/administration/metrics/metrics.tsx");
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration/configuration */ "./src/main/webapp/app/modules/administration/configuration/configuration.tsx");
/* harmony import */ var _docs_docs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./docs/docs */ "./src/main/webapp/app/modules/administration/docs/docs.tsx");








const Routes = ({ match }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { path: `${match.url}/user-management`, component: _user_management__WEBPACK_IMPORTED_MODULE_2__.default }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { exact: true, path: `${match.url}/health`, component: _health_health__WEBPACK_IMPORTED_MODULE_4__.default }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { exact: true, path: `${match.url}/metrics`, component: _metrics_metrics__WEBPACK_IMPORTED_MODULE_5__.default }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { exact: true, path: `${match.url}/configuration`, component: _configuration_configuration__WEBPACK_IMPORTED_MODULE_6__.default }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { exact: true, path: `${match.url}/logs`, component: _logs_logs__WEBPACK_IMPORTED_MODULE_3__.default }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { exact: true, path: `${match.url}/docs`, component: _docs_docs__WEBPACK_IMPORTED_MODULE_7__.default })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/index.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/index.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/logs/logs.tsx":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/logs/logs.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsPage": () => (/* binding */ LogsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");



const LogsPage = (props) => {
    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        props.getLoggers();
    }, []);
    const changeLevel = (loggerName, level) => () => props.changeLogLevel(loggerName, level);
    const changeFilter = evt => setFilter(evt.target.value);
    const getClassName = (level, check, className) => (level === check ? `btn btn-sm btn-${className}` : 'btn btn-sm btn-light');
    const filterFn = l => l.name.toUpperCase().includes(filter.toUpperCase());
    const { logs, isFetching } = props;
    const loggers = logs ? Object.entries(logs.loggers).map(e => ({ name: e[0], level: e[1].effectiveLevel })) : [];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { id: "logs-page-heading", "data-cy": "logsPageHeading" }, "Logs"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
            "There are ",
            loggers.length.toString(),
            " loggers."),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Filter"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", value: filter, onChange: changeFilter, className: "form-control", disabled: isFetching }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: "table table-sm table-striped table-bordered", "aria-describedby": "logs-page-heading" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { title: "click to order" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Name")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Level")))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, loggers.filter(filterFn).map((logger, i) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: `log-row-${i}` },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, logger.name)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'TRACE'), className: getClassName(logger.level, 'TRACE', 'primary') }, "TRACE"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'DEBUG'), className: getClassName(logger.level, 'DEBUG', 'success') }, "DEBUG"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'INFO'), className: getClassName(logger.level, 'INFO', 'info') }, "INFO"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'WARN'), className: getClassName(logger.level, 'WARN', 'warning') }, "WARN"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'ERROR'), className: getClassName(logger.level, 'ERROR', 'danger') }, "ERROR"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'OFF'), className: getClassName(logger.level, 'OFF', 'secondary') }, "OFF")))))))));
};
const mapStateToProps = ({ administration }) => ({
    logs: administration.logs,
    isFetching: administration.loading,
});
const mapDispatchToProps = { getLoggers: _administration_reducer__WEBPACK_IMPORTED_MODULE_2__.getLoggers, changeLogLevel: _administration_reducer__WEBPACK_IMPORTED_MODULE_2__.changeLogLevel };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(LogsPage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/logs/logs.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/logs/logs.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/metrics/metrics.tsx":
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/metrics/metrics.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsPage": () => (/* binding */ MetricsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");







const MetricsPage = (props) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        props.systemMetrics();
        props.systemThreadDump();
    }, []);
    const getMetrics = () => {
        if (!props.isFetching) {
            props.systemMetrics();
            props.systemThreadDump();
        }
    };
    const { metrics, threadDump, isFetching } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { id: "metrics-page-heading", "data-cy": "metricsPageHeading" }, "Application Metrics"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { onClick: getMetrics, color: isFetching ? 'btn btn-danger' : 'btn btn-primary', disabled: isFetching },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "sync" }),
                "\u00A0 Refresh")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { sm: "12" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "JVM Metrics"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { md: "4" }, metrics && metrics.jvm ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.JvmMemory, { jvmMetrics: metrics.jvm, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_WHOLE_NUMBER_FORMAT }) : ''),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { md: "4" }, threadDump ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.JvmThreads, { jvmThreads: threadDump, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_WHOLE_NUMBER_FORMAT }) : ''),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { md: "4" }, metrics && metrics.processMetrics ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.SystemMetrics, { systemMetrics: metrics.processMetrics, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_WHOLE_NUMBER_FORMAT, timestampFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_TIMESTAMP_FORMAT })) : (''))))),
        metrics && metrics.garbageCollector ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.GarbageCollectorMetrics, { garbageCollectorMetrics: metrics.garbageCollector, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_WHOLE_NUMBER_FORMAT })) : (''),
        metrics && metrics['http.server.requests'] ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.HttpRequestMetrics, { requestMetrics: metrics['http.server.requests'], twoDigitAfterPointFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_WHOLE_NUMBER_FORMAT })) : (''),
        metrics && metrics.services ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.EndpointsRequestsMetrics, { endpointsRequestsMetrics: metrics.services, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_WHOLE_NUMBER_FORMAT })) : (''),
        metrics.cache ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { sm: "12" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.CacheMetrics, { cacheMetrics: metrics.cache, twoDigitAfterPointFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT })))) : (''),
        metrics.databases && JSON.stringify(metrics.databases) !== '{}' ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { sm: "12" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.DatasourceMetrics, { datasourceMetrics: metrics.databases, twoDigitAfterPointFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT })))) : ('')));
};
const mapStateToProps = (storeState) => ({
    metrics: storeState.administration.metrics,
    isFetching: storeState.administration.loading,
    threadDump: storeState.administration.threadDump,
});
const mapDispatchToProps = { systemMetrics: _administration_reducer__WEBPACK_IMPORTED_MODULE_5__.systemMetrics, systemThreadDump: _administration_reducer__WEBPACK_IMPORTED_MODULE_5__.systemThreadDump };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(MetricsPage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/metrics/metrics.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/metrics/metrics.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/index.tsx":
/*!******************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/index.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/error/error-boundary-route */ "./src/main/webapp/app/shared/error/error-boundary-route.tsx");
/* harmony import */ var _user_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management */ "./src/main/webapp/app/modules/administration/user-management/user-management.tsx");
/* harmony import */ var _user_management_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management-detail */ "./src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx");
/* harmony import */ var _user_management_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-management-update */ "./src/main/webapp/app/modules/administration/user-management/user-management-update.tsx");
/* harmony import */ var _user_management_delete_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management-delete-dialog */ "./src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx");







const Routes = ({ match }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { exact: true, path: `${match.url}/new`, component: _user_management_update__WEBPACK_IMPORTED_MODULE_4__.default }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { exact: true, path: `${match.url}/:login/edit`, component: _user_management_update__WEBPACK_IMPORTED_MODULE_4__.default }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { exact: true, path: `${match.url}/:login`, component: _user_management_detail__WEBPACK_IMPORTED_MODULE_3__.default }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { path: match.url, component: _user_management__WEBPACK_IMPORTED_MODULE_2__.default })),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { path: `${match.url}/:login/delete`, component: _user_management_delete_dialog__WEBPACK_IMPORTED_MODULE_5__.default })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/user-management/index.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/user-management/index.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx":
/*!******************************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementDeleteDialog": () => (/* binding */ UserManagementDeleteDialog),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalFooter.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");





const UserManagementDeleteDialog = (props) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        props.getUser(props.match.params.login);
    }, []);
    const handleClose = event => {
        event.stopPropagation();
        props.history.push('/admin/user-management');
    };
    const confirmDelete = event => {
        props.deleteUser(props.user.login);
        handleClose(event);
    };
    const { user } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { isOpen: true, toggle: handleClose },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { toggle: handleClose }, "Confirm delete operation"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, "Are you sure you want to delete this User?"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { color: "secondary", onClick: handleClose },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "ban" }),
                "\u00A0 Cancel"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { color: "danger", onClick: confirmDelete },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "trash" }),
                "\u00A0 Delete"))));
};
const mapStateToProps = (storeState) => ({
    user: storeState.userManagement.user,
});
const mapDispatchToProps = { getUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_3__.getUser, deleteUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_3__.deleteUser };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(UserManagementDeleteDialog));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementDetail": () => (/* binding */ UserManagementDetail),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Badge.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");








const UserManagementDetail = (props) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        props.getUser(props.match.params.login);
    }, []);
    const { user } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null,
            "User [",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, user.login),
            "]"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { size: "md" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("dl", { className: "jh-entity-details" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, "Login"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, user.login),
                    "\u00A0",
                    user.activated ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { color: "success" }, "Activated") : react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { color: "danger" }, "Deactivated")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, "First Name"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", null, user.firstName),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, "Last Name"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", null, user.lastName),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, "Email"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", null, user.email),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, "Created By"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", null, user.createdBy),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, "Created Date"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", null, user.createdDate ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.TextFormat, { value: user.createdDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_DATE_FORMAT, blankOnInvalid: true }) : null),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, "Last Modified By"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", null, user.lastModifiedBy),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, "Last Modified Date"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", null, user.lastModifiedDate ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.TextFormat, { value: user.lastModifiedDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_DATE_FORMAT, blankOnInvalid: true })) : null),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, "Profiles"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "list-unstyled" }, user.authorities
                        ? user.authorities.map((authority, i) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: `user-auth-${i}` },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { color: "info" }, authority))))
                        : null)))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, to: "/admin/user-management", replace: true, color: "info" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "arrow-left" }),
            " ",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-none d-md-inline" }, "Back"))));
};
const mapStateToProps = (storeState) => ({
    user: storeState.userManagement.user,
});
const mapDispatchToProps = { getUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_5__.getUser };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(UserManagementDetail));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management-update.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management-update.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementUpdate": () => (/* binding */ UserManagementUpdate),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");







const UserManagementUpdate = (props) => {
    const [isNew] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!props.match.params || !props.match.params.login);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isNew) {
            props.reset();
        }
        else {
            props.getUser(props.match.params.login);
        }
        props.getRoles();
        return () => {
            props.reset();
        };
    }, []);
    const handleClose = () => {
        props.history.push('/admin/user-management');
    };
    const saveUser = (event, values) => {
        if (isNew) {
            props.createUser(values);
        }
        else {
            props.updateUser(values);
        }
        handleClose();
    };
    const isInvalid = false;
    const { user, loading, updating, roles } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { md: "8" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Create or edit a User"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { md: "8" }, loading ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...")) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvForm, { onValidSubmit: saveUser },
                user.id ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvGroup, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { for: "id" }, "ID"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { type: "text", className: "form-control", name: "id", required: true, readOnly: true, value: user.id }))) : null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvGroup, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { for: "login" }, "Login"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { type: "text", className: "form-control", name: "login", validate: {
                            required: {
                                value: true,
                                errorMessage: 'Your username is required.',
                            },
                            pattern: {
                                value: '^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$',
                                errorMessage: 'Your username is invalid.',
                            },
                            minLength: {
                                value: 1,
                                errorMessage: 'Your username is required to be at least 1 character.',
                            },
                            maxLength: {
                                value: 50,
                                errorMessage: 'Your username cannot be longer than 50 characters.',
                            },
                        }, value: user.login })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvGroup, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { for: "firstName" }, "First Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { type: "text", className: "form-control", name: "firstName", validate: {
                            maxLength: {
                                value: 50,
                                errorMessage: 'This field cannot be longer than 50 characters.',
                            },
                        }, value: user.firstName })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvGroup, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { for: "lastName" }, "Last Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { type: "text", className: "form-control", name: "lastName", validate: {
                            maxLength: {
                                value: 50,
                                errorMessage: 'This field cannot be longer than 50 characters.',
                            },
                        }, value: user.lastName }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvFeedback, null, "This field cannot be longer than 50 characters.")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvGroup, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "email", label: "Email", placeholder: 'Your email', type: "email", validate: {
                            required: {
                                value: true,
                                errorMessage: 'Your email is required.',
                            },
                            email: {
                                errorMessage: 'Your email is invalid.',
                            },
                            minLength: {
                                value: 5,
                                errorMessage: 'Your email is required to be at least 5 characters.',
                            },
                            maxLength: {
                                value: 254,
                                errorMessage: 'Your email cannot be longer than 50 characters.',
                            },
                        }, value: user.email })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvGroup, { check: true },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvInput, { type: "checkbox", name: "activated", value: user.activated, checked: user.activated, disabled: !user.id }),
                        " Activated")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvGroup, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { for: "authorities" }, "Profiles"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvInput, { type: "select", className: "form-control", name: "authorities", value: user.authorities, multiple: true }, roles.map(role => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: role, key: role }, role))))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, to: "/admin/user-management", replace: true, color: "info" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "arrow-left" }),
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-none d-md-inline" }, "Back")),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { color: "primary", type: "submit", disabled: isInvalid || updating },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "save" }),
                    "\u00A0 Save")))))));
};
const mapStateToProps = (storeState) => ({
    user: storeState.userManagement.user,
    roles: storeState.userManagement.authorities,
    loading: storeState.userManagement.loading,
    updating: storeState.userManagement.updating,
});
const mapDispatchToProps = { getUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.getUser, getRoles: _user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.getRoles, updateUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.updateUser, createUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.createUser, reset: _user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.reset };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(UserManagementUpdate));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/user-management/user-management-update.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/user-management/user-management-update.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management.tsx":
/*!****************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagement": () => (/* binding */ UserManagement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Table.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Badge.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");
/* harmony import */ var app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/util/pagination.constants */ "./src/main/webapp/app/shared/util/pagination.constants.ts");
/* harmony import */ var app_shared_util_entity_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/util/entity-utils */ "./src/main/webapp/app/shared/util/entity-utils.ts");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");










const UserManagement = (props) => {
    const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,app_shared_util_entity_utils__WEBPACK_IMPORTED_MODULE_6__.overridePaginationStateWithQueryParams)((0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.getSortState)(props.location, app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_5__.ITEMS_PER_PAGE, 'id'), props.location.search));
    const getUsersFromProps = () => {
        props.getUsersAsAdmin(pagination.activePage - 1, pagination.itemsPerPage, `${pagination.sort},${pagination.order}`);
        const endURL = `?page=${pagination.activePage}&sort=${pagination.sort},${pagination.order}`;
        if (props.location.search !== endURL) {
            props.history.push(`${props.location.pathname}${endURL}`);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getUsersFromProps();
    }, [pagination.activePage, pagination.order, pagination.sort]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const params = new URLSearchParams(props.location.search);
        const page = params.get('page');
        const sortParam = params.get('sort');
        if (page && sortParam) {
            const sortSplit = sortParam.split(',');
            setPagination(Object.assign(Object.assign({}, pagination), { activePage: +page, sort: sortSplit[0], order: sortSplit[1] }));
        }
    }, [props.location.search]);
    const sort = p => () => setPagination(Object.assign(Object.assign({}, pagination), { order: pagination.order === 'asc' ? 'desc' : 'asc', sort: p }));
    const handlePagination = currentPage => setPagination(Object.assign(Object.assign({}, pagination), { activePage: currentPage }));
    const handleSyncList = () => {
        getUsersFromProps();
    };
    const toggleActive = user => () => props.updateUser(Object.assign(Object.assign({}, user), { activated: !user.activated }));
    const { users, account, match, totalItems, loading } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { id: "user-management-page-heading", "data-cy": "userManagementPageHeading" },
            "Users",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "d-flex justify-content-end" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { className: "mr-2", color: "info", onClick: handleSyncList, disabled: loading },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "sync", spin: loading }),
                    " Refresh List"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, { to: `${match.url}/new`, className: "btn btn-primary jh-create-entity" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "plus" }),
                    " Create a new user"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__.default, { responsive: true, striped: true },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "hand", onClick: sort('id') },
                        "ID",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "hand", onClick: sort('login') },
                        "Login",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "hand", onClick: sort('email') },
                        "Email",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Profiles"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "hand", onClick: sort('createdDate') },
                        "Created Date",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "hand", onClick: sort('lastModifiedBy') },
                        "Last Modified By",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { id: "modified-date-sort", className: "hand", onClick: sort('lastModifiedDate') },
                        "Last Modified Date",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, users.map((user, i) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { id: user.login, key: `user-${i}` },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, to: `${match.url}/${user.login}`, color: "link", size: "sm" }, user.id)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, user.login),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, user.email),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, user.activated ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { color: "success", onClick: toggleActive(user) }, "Activated")) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { color: "danger", onClick: toggleActive(user) }, "Deactivated"))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, user.authorities
                    ? user.authorities.map((authority, j) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: `user-auth-${i}-${j}` },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__.default, { color: "info" }, authority))))
                    : null),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, user.createdDate ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.TextFormat, { value: user.createdDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_DATE_FORMAT, blankOnInvalid: true }) : null),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, user.lastModifiedBy),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, user.lastModifiedDate ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.TextFormat, { value: user.lastModifiedDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_4__.APP_DATE_FORMAT, blankOnInvalid: true })) : null),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "text-right" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "btn-group flex-btn-group-container" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, to: `${match.url}/${user.login}`, color: "info", size: "sm" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "eye" }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-none d-md-inline" }, "View")),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, to: `${match.url}/${user.login}/edit`, color: "primary", size: "sm" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "pencil-alt" }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-none d-md-inline" }, "Edit")),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, to: `${match.url}/${user.login}/delete`, color: "danger", size: "sm", disabled: account.login === user.login },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: "trash" }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-none d-md-inline" }, "Delete"))))))))),
        props.totalItems ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: users && users.length > 0 ? '' : 'd-none' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__.default, { className: "justify-content-center" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.JhiItemCount, { page: pagination.activePage, total: totalItems, itemsPerPage: pagination.itemsPerPage, i18nEnabled: true })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__.default, { className: "justify-content-center" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.JhiPagination, { activePage: pagination.activePage, onSelect: handlePagination, maxButtons: 5, itemsPerPage: pagination.itemsPerPage, totalItems: props.totalItems })))) : ('')));
};
const mapStateToProps = (storeState) => ({
    loading: storeState.userManagement.loading,
    users: storeState.userManagement.users,
    totalItems: storeState.userManagement.totalItems,
    account: storeState.authentication.account,
});
const mapDispatchToProps = { getUsersAsAdmin: _user_management_reducer__WEBPACK_IMPORTED_MODULE_7__.getUsersAsAdmin, updateUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_7__.updateUser };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(UserManagement));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/user-management/user-management.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/Hackathon-AXA/src/main/webapp/app/modules/administration/user-management/user-management.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/docs/docs.scss":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/docs/docs.scss ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./docs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/modules/administration/docs/docs.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./docs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/modules/administration/docs/docs.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./docs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/modules/administration/docs/docs.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=administration.chunk.js.map