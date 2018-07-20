(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['campaignion_vue', 'mfb-plugin-commons'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('campaignion_vue'), require('mfb-plugin-commons'));
  } else {
    function registerPlugins(plugins) {
  window.moFormBuilder = window.moFormBuilder || {};
  window.moFormBuilder.plugins = window.moFormBuilder.plugins || {
    types: {},
    templates: []
  };

  if (!plugins) {
    return;
  }

  if (!Array.isArray(plugins)) {
    plugins = [plugins];
  }

  plugins.forEach(function (plugin) {
    if (plugin.type) {
      if (typeof window.moFormBuilder.plugins.types[plugin.type] !== 'undefined') {
        throw new Error('Trying to register form builder plugin twice: ' + plugin.type);
      } else {
        window.moFormBuilder.plugins.types[plugin.type] = plugin;
      }
    } else {
      window.moFormBuilder.plugins.templates.push(plugin);
    }
  });
}
registerPlugins(factory());
  }
}(typeof self !== 'undefined' ? self : this, function (campaignion_vue, mfbPluginCommons) {
var plugins =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.moFormBuilder.pluginCommons;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(2);

var _root2 = _interopRequireDefault(_root);

var _radios = __webpack_require__(3);

var _radios2 = _interopRequireDefault(_radios);

var _page = __webpack_require__(4);

var _page2 = _interopRequireDefault(_page);

var _missing = __webpack_require__(5);

var _missing2 = _interopRequireDefault(_missing);

var _radios3 = __webpack_require__(6);

var _radios4 = _interopRequireDefault(_radios3);

var _page3 = __webpack_require__(8);

var _page4 = _interopRequireDefault(_page3);

var _radios5 = __webpack_require__(10);

var _radios6 = _interopRequireDefault(_radios5);

var _missing3 = __webpack_require__(11);

var _missing4 = _interopRequireDefault(_missing3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = {};

function _buildTree(v, p, a) {
  var o = v;
  p.map(function (_, i) {
    o[_] = i == p.length - 1 ? a : o[_] || {};
    o = o[_];
  });
}

_buildTree(types, ['element-types', 'missing'], _missing2.default);

_buildTree(types, ['element-types', 'page'], _page2.default);

_buildTree(types, ['element-types', 'radios'], _radios2.default);

_buildTree(types, ['element-types', 'root'], _root2.default); // babel-plugin-bulk-import magic


var templates = {};

function _buildTree2(v, p, a) {
  var o = v;
  p.map(function (_, i) {
    o[_] = i == p.length - 1 ? a : o[_] || {};
    o = o[_];
  });
}

_buildTree2(templates, ['element-templates', 'page'], _page4.default);

_buildTree2(templates, ['element-templates', 'radios'], _radios4.default); // babel-plugin-bulk-import magic

// eslint-disable-next-line no-unused-vars


var styles = {};

function _buildTree3(v, p, a) {
  var o = v;
  p.map(function (_, i) {
    o[_] = i == p.length - 1 ? a : o[_] || {};
    o = o[_];
  });
}

_buildTree3(styles, ['scss', 'missing'], _missing4.default);

_buildTree3(styles, ['scss', 'radios'], _radios6.default); // even more babel-plugin-bulk-import magic

var plugins = [];

function gatherPlugins(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      plugins.push(obj[key]);
    }
  }
}

gatherPlugins(types['element-types']);
gatherPlugins(templates['element-templates']);

exports.default = plugins;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This is the plugin for the `root` element type.
 */

exports.default = {
  type: 'root',
  preview: {
    props: {
      element: Object
    },
    render: function render(h) {
      return h(
        'div',
        { 'class': 'mfb-element-root' },
        [h(
          'div',
          { 'class': 'mfb-element-children' },
          [this.$slots.default]
        )]
      );
    }
  },
  config: null,
  acceptsChild: function acceptsChild(tree, parent, child, index) {
    return child.type === 'page';
  },
  acceptsParent: function acceptsParent(tree, parent, child, index) {
    return false;
  },
  acceptsDeletion: function acceptsDeletion(tree, element) {
    return false;
  }
};
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mfbPluginCommons = __webpack_require__(0);

exports.default = {
  type: 'radios',
  name: Drupal.t('radio buttons'),

  preview: {
    mixins: [_mfbPluginCommons.persistPreviewData],
    props: {
      element: Object, // The Node instance holding the preview.
      dragged: Boolean // Is the component or a parent being dragged?
    },
    data: function data() {
      return {
        val: null,
        customVal: ''
      };
    },

    template: '\n      <div :class="\'mfb-element-radios mfb-element-\' + element.id + \' \' + element.wrapperCls">\n        <label>{{element.label}}</label>\n        <el-radio-group v-model="val">\n          <el-radio v-for="(option, index) in element.options" :key="index" :label="option.value">{{option.label}}</el-radio>\n          <el-radio v-if="element.customOption" label="[custom]">{{element.customOptionLabel}}</el-radio>\n        </el-radio-group>\n        <el-input v-if="element.customOption && val === \'[custom]\'" v-model="customVal" @input="customVal = $event" />\n      </div>\n      '
  },

  config: {
    components: {
      ConfigSection: _mfbPluginCommons.ConfigSection,
      CommonConfig: _mfbPluginCommons.CommonConfig,
      CommonConfigAdvanced: _mfbPluginCommons.CommonConfigAdvanced,
      OptionsEditor: _mfbPluginCommons.OptionsEditor,
      CustomOption: _mfbPluginCommons.CustomOption,
      LabeledSwitch: _mfbPluginCommons.LabeledSwitch
    },
    props: {
      element: Object // This belongs to the ConfigDialog component, not to the store.
    },
    methods: {
      text: function text(_text) {
        switch (_text) {
          case 'options section':
            return Drupal.t('Options');
          case 'validation section':
            return Drupal.t('Validation');
          case 'field is required':
            return Drupal.t('This field is required');
        }
      }
    },
    template: '<el-form ref="form" :model="element" @submit.native.prevent label-position="top">\n        <common-config v-model="element" />\n\n        <config-section :collapsable="true" :title="text(\'options section\')">\n          <options-editor :options.sync="element.options" />\n          <custom-option :enabled.sync="element.customOption" :label.sync="element.customOptionLabel" />\n        </config-section>\n\n        <config-section :collapsable="true" :title="text(\'validation section\')">\n          <labeled-switch v-model="element.required" :label="text(\'field is required\')" />\n        </config-section>\n\n        <common-config-advanced v-model="element" />\n      </el-form>'
  },

  acceptsChild: function acceptsChild(tree, parent, child, index) {
    return false;
  },
  acceptsParent: function acceptsParent(tree, parent, child, index) {
    return true;
  },
  acceptsDeletion: function acceptsDeletion(tree, element) {
    return true;
  }
};
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mfbPluginCommons = __webpack_require__(0);

exports.default = {
  type: 'page',
  name: Drupal.t('page'),
  preview: {
    props: {
      element: Object
    },
    render: function render(h) {
      return h(
        'section',
        { 'class': 'mfb-element-page' },
        [h('h1', [this.element.label]), h(
          'div',
          { 'class': 'mfb-element-children ' + this.element.wrapperCls },
          [this.$slots.default]
        )]
      );
    }
  },
  config: {
    components: {
      ConfigSection: _mfbPluginCommons.ConfigSection,
      CommonConfig: _mfbPluginCommons.CommonConfig,
      CommonConfigAdvanced: _mfbPluginCommons.CommonConfigAdvanced
    },
    props: {
      element: Object
    },
    template: '\n      <el-form ref="form" :model="element" @submit.native.prevent label-position="top">\n        <common-config v-model="element" />\n        <common-config-advanced v-model="element" />\n      </el-form>\n      '
  },
  acceptsChild: function acceptsChild(tree, parent, child, index) {
    return true;
  },
  acceptsParent: function acceptsParent(tree, parent, child, index) {
    return parent.type === 'root';
  },
  acceptsDeletion: function acceptsDeletion(tree, element) {
    return tree.children.length > 1;
  }
}; /**
    * This is the plugin for the `page` element type.
    *
    * Supported config attributes:
    * label {string} - The title of the Page.
    */

module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mfbPluginCommons = __webpack_require__(0);

exports.default = {
  type: 'missing',
  name: Drupal.t('missing component'),
  preview: {
    props: {
      element: Object
    },
    methods: {
      text: function text(_text) {
        switch (_text) {
          case 'no component found':
            return Drupal.t('Oops. Unfortunately I didn’t find a preview component for the plugin "@type".', { '@type': this.element.type });
        }
      }
    },
    render: function render(h) {
      // If there are no children from the beginning, don’t show the slot.
      var slot = this.element.children.length ? h(
        'div',
        { 'class': 'mfb-element-children' },
        [this.$slots.default]
      ) : null;
      return h(
        'div',
        { 'class': 'mfb-element-missing' },
        [h('label', [this.element.label]), h('p', [this.text('no component found')]), slot]
      );
    }
  },
  config: {
    components: {
      CommonConfig: _mfbPluginCommons.CommonConfig,
      CommonConfigAdvanced: _mfbPluginCommons.CommonConfigAdvanced
    },
    props: {
      element: Object
    },
    methods: {
      text: function text(_text2) {
        switch (_text2) {
          case 'no component found':
            return Drupal.t('Oops. Unfortunately I didn’t find a config component for a "@type".', { '@type': this.element.type });
        }
      }
    },
    template: '\n      <el-form ref="form" :model="element" @submit.native.prevent label-position="top">\n        <common-config v-model="element" />\n\n        <section class=\'mfb-config-section mfb-element-missing\'>\n          <p>{{this.text(\'no component found\')}}</p>\n        </section>\n\n        <common-config-advanced v-model="element" />\n      </el-form>\n      '
  },
  acceptsChild: function acceptsChild(tree, parent, child, index) {
    return false; // if there is no plugin for the parent type, assume it doesn’t like children
  },
  acceptsParent: function acceptsParent(tree, parent, child, index) {
    return true; // if there is no plugin for the dragged type, assume you can drop it anywhere
  },
  acceptsDeletion: function acceptsDeletion(tree, element) {
    return true;
  }
}; /**
    * This plugin is applied if a plugin for an element type cannot be found.
    */

module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _faDotCircle = __webpack_require__(7);

var _faDotCircle2 = _interopRequireDefault(_faDotCircle);

var _mfbPluginCommons = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is the plugin for the `radios` element template.
 */

exports.default = {
  /** Appearance in the palette. */
  label: Drupal.t('Radios'),
  icon: _faDotCircle2.default,
  group: 'generic',
  weight: 4,

  /**
   * Decides whether the element can currently be added to the tree.
   *
   * @param {Node} tree - The current state of the tree.
   * @return {boolean}
   */
  isAddable: function isAddable(tree) {
    return true;
  },


  /**
   * Generates the config for the new element.
   * Can use the factory functions of other element template plugins.
   *
   * @param {Node} tree - The current state of the tree.
   * @return {Object} The config for the new element.
   * Must include `type` {string} matching an element type identifier.
   */
  factory: function factory(tree) {
    return {
      type: 'radios',
      label: Drupal.t('New radios'),
      formKey: (0, _mfbPluginCommons.newFormKey)(tree, 'radios'),
      description: {
        text: '',
        enabled: false
      },
      labelDisplay: {
        options: [
        // TODO: get the options from Drupal settings
        { value: 'before', label: Drupal.t('Above') }, { value: 'inline', label: Drupal.t('Inline') }, { value: 'none', label: Drupal.t('None') }],
        value: 'before'
      },
      required: false,
      private: false,
      wrapperCls: '',
      options: [{ value: '1', label: Drupal.t('One') }, { value: '2', label: Drupal.t('Two') }, { value: '3', label: Drupal.t('Three') }],
      customOption: false,
      customOptionLabel: Drupal.t('Other...')
    };
  }
};
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = { prefix: 'far', iconName: 'dot-circle', icon: [512, 512, [], "f192", "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"] };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _faColumns = __webpack_require__(9);

var _faColumns2 = _interopRequireDefault(_faColumns);

var _mfbPluginCommons = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is the plugin for the `page` element template.
 */

exports.default = {
  /** Appearance in the palette. */
  label: Drupal.t('Page'),
  icon: _faColumns2.default,
  group: 'generic',
  weight: 0,

  /**
   * Decides whether the element can currently be added to the tree.
   *
   * @param {Node} tree - The current state of the tree.
   * @return {boolean}
   */
  isAddable: function isAddable(tree) {
    return true;
  },


  /**
   * Generates the config for the new element.
   * Can use the factory functions of other element template plugins.
   *
   * @param {Node} tree - The current state of the tree.
   * @return {Object} The config for the new element.
   * Must include `type` {string} matching an element type identifier.
   */
  factory: function factory(tree) {
    return {
      type: 'page',
      label: Drupal.t('New page'),
      formKey: (0, _mfbPluginCommons.newFormKey)(tree, 'page'),
      wrapperCls: ''
    };
  }
};
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'columns', icon: [512, 512, [], "f0db", "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"] };

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
return plugins; 
}));
//# sourceMappingURL=mfb-plugins.js.map