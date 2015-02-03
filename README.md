# Angular Multiple Drag Module
Simplest way to make your angular items movable

This module uses [Angular Multiple Selection Module](https://github.com/maxazan/angular-multiple-selection)

[Demo](http://maxazan.github.io/angular-multiple-drag/)

##Installation

###Using npm
```
npm install angular-multiple-drag
```

###Using bower
```
bower install angular-multiple-drag
```

###From source

Download [source](https://github.com/maxazan/angular-multiple-drag/archive/master.zip) from github.com

##Usage
* Add `multiple-selection.min.js` and `multiple-drag.min.js` files to your application
```html
<script type="text/javascript" src="multiple-selection.min.js"></script>
<script type="text/javascript" src="multiple-drag.min.js"></script>
```
* Add module to your app `angular.module('app', ['multipleDrag'])`
* Add `multiple-selection-zone` attribute to element where selectable items will be located
* Add `multiple-selection-item` attribute to each selectable item
* Add `multiple-drag-item` attribute to each selectable item that can move
* Customize css


##How it works
Each draggable item has it`s own angular scope with variables

| Name  | Description |
| ------------- | ------------- |
| isDraggable  | `true` if element can be movable |
| isDragging  | `true` if element now moving |


###How to customize

* Add `ng-class` to your item
```html
<div multiple-drag-item ng-class="{'dragging': isDragging}"></div>
```
* Customizing `.dragging` in your css
```css
.selected {
    background-color: red !important;
}
```

