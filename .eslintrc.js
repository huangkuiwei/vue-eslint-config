module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // html 一行最多的属性数量以及换行方式
    'vue/max-attributes-per-line': ['error', {
      'singleline': 4, // 超过4个属性就进行换行
      'multiline': {
        'max': 1, // 一行最多的属性数量
        'allowFirstLine': false // 首行是否允许有属性
      }
    }],
    // 在多行元素的内容之前和之后强制换行
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true, // 忽略空内容元素
      'allowEmptyLines': false // 是否允许有空行
    }],
    // 在标签的右括号之前要求或禁止换行
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never', // 一行元素不换行
      'multiline': 'always' // 多行元素换行
    }],
    // 自闭合标签
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never', // HTML void elements
        'normal': 'never', // HTML elements except void elements
        'component': 'always' // 自定义组件
      },
      'svg': 'always', // svg
      'math': 'always' // math
    }],
    // html元素在<template>下缩进
    'vue/html-indent': ['error', 2, {
      'attribute': 1, // 属性缩进
      'baseIndent': 1, // 基础缩进
      'closeBracket': 0, // 右括号缩进
      'alignAttributesVertically': true, // 在多行情况下属性是否应与第一个属性垂直对齐
      'ignores': [] // 忽略的元素节点
    }],
    //强制驼峰法命名
    'camelcase': ['error', {
      'properties': 'always' // 检测属性/变量
    }],
    // vue模板语法空格 eg: {{ user }}
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    // vue name属性大驼峰或者短横线命名
    'vue/name-property-casing': ['error', 'kebab-case'],
    // 使用 === 替代 ==
    'eqeqeq': ['error', 'allow-null'],
    // 元素/组件的属性使用大驼峰或者短横线命名
    'vue/attribute-hyphenation': ['error', 'always', {
      'ignore': [] // 忽略的元素/组件
    }],
    // 禁止多余的空格
    'vue/no-multi-spaces': ['error', {
      'ignoreProperties': false // 是否忽略元素属性
    }],
    // 不允许属性中等号周围有空格
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    // vue prop属性：使用驼峰式命名 eg: maxLength: String
    'vue/prop-name-casing': ['error', 'camelCase'],
    // 单行元素的内容之前和之后强制换行
    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': true, // 是否忽略空属性元素
      'ignoreWhenEmpty': true, // 是否忽略空内容元素
      'ignores': [] //忽略元素
    }],
    // 元素属性排序规则
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION', // DEFINITION e.g. 'is''
        'LIST_RENDERING', // LIST_RENDERING e.g. 'v-for item in items''
        'CONDITIONALS', // CONDITIONALS e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak''
        'RENDER_MODIFIERS', // RENDER_MODIFIERS e.g. 'v-once', 'v-pre''
        'GLOBAL', // GLOBAL e.g. 'id''
        'UNIQUE', // UNIQUE e.g. 'ref', 'key', 'v-slot', 'slot''
        'TWO_WAY_BINDING', // TWO_WAY_BINDING e.g. 'v-model''
        'OTHER_DIRECTIVES', // OTHER_DIRECTIVES e.g. 'v-custom-directive''
        'OTHER_ATTR', // OTHER_ATTR e.g. 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"''
        'EVENTS', // EVENTS e.g. '@click="functionCall"', 'v-on="event"''
        'CONTENT' // CONTENT e.g. 'v-text', 'v-html'
      ],
      'alphabetical': false
    }],
    // 排序
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'fetch',
        'asyncData',
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'head',
        ['template', 'render'],
        'renderError'
      ]
    }],
    // 模板中是否允许使用this
    'vue/this-in-template': ['error', 'never'],
    // template script style 标签之前是否允许有空格
    'vue/padding-line-between-blocks': ['error', 'always']
  }
}
